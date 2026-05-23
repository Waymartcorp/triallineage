/**
 * TrialLineage — FDA pending approvals intake script
 *
 * Fetches recent NDA and BLA submissions from the openFDA
 * Drugs@FDA API and logs them as production signals. These
 * represent drugs currently under FDA review (pending approval).
 *
 * Strategy:
 *   - Query Drugs@FDA for original NDA/BLA submissions filed
 *     within the last 12 months (most likely still under review).
 *   - Exclude applications already marked as approved.
 *   - Map each pending application into a production_signals row.
 *   - Deduplicate on trial_identifier (application_number).
 *
 * ── Deduplication strategy ──────────────────────────────────────
 * Primary key: trial_identifier (FDA application number, e.g. NDA214122).
 *   - Every FDA record has an application_number, so this field is
 *     always populated for rows produced by this script.
 *   - Before inserting, the script loads all existing trial_identifier
 *     values from the database into an in-memory Set.
 *   - Records whose application number already exists are skipped.
 *
 * Fallback (for rows without trial_identifier, e.g. manual entries):
 *   - The script also loads composite keys (title + source + date_detected)
 *     for any existing rows where trial_identifier IS NULL.
 *   - A new record is skipped if its composite key matches an existing row.
 *
 * In-run protection:
 *   - Both sets are updated in-memory during the run, preventing
 *     duplicates within a single execution.
 *
 * Database-level safety:
 *   - A partial unique index on trial_identifier (WHERE NOT NULL)
 *     provides a last-resort constraint. See migration 003.
 * ────────────────────────────────────────────────────────────────
 *
 * Usage:
 *   npx tsx scripts/fetch-fda-pending-approvals.ts
 *
 * Requires env vars:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY
 */

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error(
    "Missing env vars: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required."
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const OPENFDA_BASE = "https://api.fda.gov/drug/drugsfda.json";
const PAGE_SIZE = 100;
const MAX_RECORDS = 1000;
const BATCH_INSERT_SIZE = 100;

function formatDateCompact(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function formatDateISO(d: Date): string {
  return d.toISOString().split("T")[0];
}

function parseOpenFDADate(dateStr: string): string | null {
  if (!dateStr || dateStr.length < 8) return null;
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(4, 6);
  const day = dateStr.slice(6, 8);
  return `${year}-${month}-${day}`;
}

interface Submission {
  submission_type?: string;
  submission_number?: string;
  submission_status?: string;
  submission_status_date?: string;
  submission_class_code?: string;
  submission_class_code_description?: string;
}

interface Product {
  product_number?: string;
  brand_name?: string;
  active_ingredients?: Array<{ name?: string; strength?: string }>;
  dosage_form?: string;
  route?: string;
  marketing_status?: string;
}

interface DrugApplication {
  application_number?: string;
  sponsor_name?: string;
  submissions?: Submission[];
  products?: Product[];
  openfda?: {
    brand_name?: string[];
    generic_name?: string[];
    manufacturer_name?: string[];
    substance_name?: string[];
    pharm_class_epc?: string[];
  };
}

interface SignalRow {
  title: string;
  disease_area: string;
  source: string;
  source_type: string;
  date_detected: string;
  priority: string;
  candidate_type: string;
  status: string;
  editorial_note: string;
  external_link: string;
  brief_summary: string | null;
  trial_identifier: string;
}

function getDateRange() {
  const now = new Date();
  const twelveMonthsAgo = new Date(now);
  twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);
  return {
    from: formatDateCompact(twelveMonthsAgo),
    to: formatDateCompact(now),
    fromISO: formatDateISO(twelveMonthsAgo),
    toISO: formatDateISO(now),
  };
}

function getMostRecentSubmission(submissions: Submission[]): Submission | null {
  if (!submissions || submissions.length === 0) return null;

  const sorted = [...submissions].sort((a, b) => {
    const dateA = a.submission_status_date ?? "0";
    const dateB = b.submission_status_date ?? "0";
    return dateB.localeCompare(dateA);
  });

  return sorted[0];
}

function isLikelyPending(app: DrugApplication): boolean {
  if (!app.submissions || app.submissions.length === 0) return false;

  const recent = getMostRecentSubmission(app.submissions);
  if (!recent) return false;

  const status = recent.submission_status?.toUpperCase() ?? "";
  if (status === "AP") return false;

  const hasOriginal = app.submissions.some(
    (s) => s.submission_type === "ORIG"
  );

  return hasOriginal;
}

function mapApplicationToSignal(app: DrugApplication): SignalRow | null {
  if (!app.application_number) return null;

  const recentSub = getMostRecentSubmission(app.submissions ?? []);
  if (!recentSub) return null;

  const products = app.products ?? [];
  const brandNames = products
    .map((p) => p.brand_name)
    .filter(Boolean)
    .slice(0, 2);

  const activeIngredients = products
    .flatMap((p) => (p.active_ingredients ?? []).map((ai) => ai.name))
    .filter(Boolean);
  const uniqueIngredients = [...new Set(activeIngredients)].slice(0, 3);

  const title = brandNames.length > 0
    ? `${brandNames[0]} (${uniqueIngredients.join(", ") || app.application_number}) — FDA application`
    : `${uniqueIngredients.join(", ") || app.application_number} — FDA application under review`;

  const pharmClasses = app.openfda?.pharm_class_epc ?? [];
  const diseaseArea = pharmClasses.length > 0
    ? pharmClasses[0]
    : (products[0]?.route ?? "Drug application");

  const dateDetected = recentSub.submission_status_date
    ? parseOpenFDADate(recentSub.submission_status_date) ?? formatDateISO(new Date())
    : formatDateISO(new Date());

  const appType = app.application_number?.startsWith("BLA") ? "BLA" : "NDA";
  const sponsor = app.sponsor_name ?? "Unknown sponsor";
  const dosageForms = [...new Set(products.map((p) => p.dosage_form).filter(Boolean))];

  const noteparts: string[] = [
    `Auto-imported from openFDA Drugs@FDA.`,
    `Application: ${app.application_number} (${appType}).`,
    `Sponsor: ${sponsor}.`,
  ];
  if (dosageForms.length > 0) {
    noteparts.push(`Form: ${dosageForms.slice(0, 2).join(", ")}.`);
  }
  if (recentSub.submission_class_code_description) {
    noteparts.push(`Class: ${recentSub.submission_class_code_description}.`);
  }

  const summaryParts: string[] = [];
  if (uniqueIngredients.length > 0) {
    summaryParts.push(`Active ingredients: ${uniqueIngredients.join(", ")}`);
  }
  if (brandNames.length > 0) {
    summaryParts.push(`Brand: ${brandNames.join(", ")}`);
  }
  summaryParts.push(`Sponsor: ${sponsor}`);
  summaryParts.push(`Type: ${appType} (${recentSub.submission_type ?? "Unknown"} submission)`);
  if (recentSub.submission_status) {
    summaryParts.push(`Latest status: ${recentSub.submission_status}`);
  }

  return {
    title,
    disease_area: diseaseArea,
    source: "FDA (Drugs@FDA)",
    source_type: "Regulatory notice",
    date_detected: dateDetected,
    priority: "High",
    candidate_type: "Background / supporting",
    status: "New",
    editorial_note: noteparts.join(" "),
    external_link: `https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=${app.application_number?.replace(/\D/g, "")}`,
    brief_summary: summaryParts.join(". ") + ".",
    trial_identifier: app.application_number,
  };
}

async function fetchFDAPage(
  searchQuery: string,
  skip: number
): Promise<{ results: DrugApplication[]; total: number }> {
  const url = new URL(OPENFDA_BASE);
  url.searchParams.set("search", searchQuery);
  url.searchParams.set("limit", String(PAGE_SIZE));
  url.searchParams.set("skip", String(skip));

  const response = await fetch(url.toString());

  if (!response.ok) {
    if (response.status === 404) {
      return { results: [], total: 0 };
    }
    console.error(`  openFDA API error: ${response.status} ${response.statusText}`);
    return { results: [], total: 0 };
  }

  const data = await response.json();
  return {
    results: (data.results ?? []) as DrugApplication[],
    total: data.meta?.results?.total ?? 0,
  };
}

// ── Deduplication helpers ──────────────────────────────────────

function compositeKey(title: string, source: string, dateDetected: string): string {
  return `${title}|${source}|${dateDetected}`;
}

interface DedupeState {
  byIdentifier: Set<string>;
  byComposite: Set<string>;
}

async function loadExistingDedupeState(): Promise<DedupeState> {
  const byIdentifier = new Set<string>();
  const byComposite = new Set<string>();

  // Load all non-null trial_identifiers (primary dedupe key)
  let from = 0;
  const batchSize = 1000;

  while (true) {
    const { data, error } = await supabase
      .from("production_signals")
      .select("trial_identifier")
      .not("trial_identifier", "is", null)
      .range(from, from + batchSize - 1);

    if (error) {
      console.error("Error fetching existing identifiers:", error.message);
      break;
    }
    if (!data || data.length === 0) break;
    for (const row of data) {
      byIdentifier.add(row.trial_identifier);
    }
    if (data.length < batchSize) break;
    from += batchSize;
  }

  // Load composite keys for rows where trial_identifier IS NULL (fallback)
  from = 0;
  while (true) {
    const { data, error } = await supabase
      .from("production_signals")
      .select("title, source, date_detected")
      .is("trial_identifier", null)
      .range(from, from + batchSize - 1);

    if (error) {
      console.error("Error fetching fallback composites:", error.message);
      break;
    }
    if (!data || data.length === 0) break;
    for (const row of data) {
      byComposite.add(compositeKey(row.title, row.source, row.date_detected));
    }
    if (data.length < batchSize) break;
    from += batchSize;
  }

  return { byIdentifier, byComposite };
}

function isDuplicate(signal: SignalRow, state: DedupeState): boolean {
  // Primary: check trial_identifier (always present for FDA rows)
  if (signal.trial_identifier) {
    return state.byIdentifier.has(signal.trial_identifier);
  }
  // Fallback: composite of title + source + date_detected
  return state.byComposite.has(
    compositeKey(signal.title, signal.source, signal.date_detected)
  );
}

function markInserted(signal: SignalRow, state: DedupeState): void {
  if (signal.trial_identifier) {
    state.byIdentifier.add(signal.trial_identifier);
  }
  state.byComposite.add(
    compositeKey(signal.title, signal.source, signal.date_detected)
  );
}

async function insertBatch(signals: SignalRow[]): Promise<number> {
  let inserted = 0;

  for (let i = 0; i < signals.length; i += BATCH_INSERT_SIZE) {
    const batch = signals.slice(i, i + BATCH_INSERT_SIZE);
    const { error } = await supabase.from("production_signals").insert(batch);

    if (error) {
      console.error(`  Insert error (batch ${i}–${i + batch.length}): ${error.message}`);
    } else {
      inserted += batch.length;
    }
  }

  return inserted;
}

async function main() {
  console.log("TrialLineage — FDA pending approvals intake");
  console.log("═".repeat(60));
  console.log("");

  const { from, to, fromISO, toISO } = getDateRange();
  console.log(`Window: submissions dated ${fromISO} to ${toISO}`);
  console.log(`Scope:  NDA and BLA original applications`);
  console.log("");

  const dedupeState = await loadExistingDedupeState();
  console.log(`Existing signals in database: ${dedupeState.byIdentifier.size} by identifier, ${dedupeState.byComposite.size} by composite fallback`);
  console.log("");

  const searchQuery = `submissions.submission_status_date:[${from}+TO+${to}]+AND+submissions.submission_type:"ORIG"`;

  console.log(`─ Fetching recent NDA/BLA original submissions...`);

  let totalFetched = 0;
  let totalInserted = 0;
  let totalSkipped = 0;
  let totalFiltered = 0;
  const signals: SignalRow[] = [];
  let skip = 0;

  while (skip < MAX_RECORDS) {
    const { results, total } = await fetchFDAPage(searchQuery, skip);

    if (results.length === 0) break;

    if (skip === 0) {
      console.log(`  Total matching applications in FDA database: ${total}`);
    }

    for (const app of results) {
      totalFetched++;

      if (!isLikelyPending(app)) {
        totalFiltered++;
        continue;
      }

      const signal = mapApplicationToSignal(app);
      if (!signal) continue;

      if (isDuplicate(signal, dedupeState)) {
        totalSkipped++;
        continue;
      }

      signals.push(signal);
      markInserted(signal, dedupeState);
    }

    console.log(
      `  Processed ${skip + results.length} of ${Math.min(total, MAX_RECORDS)} (${signals.length} pending signals found)`
    );

    skip += PAGE_SIZE;

    if (skip >= total || skip >= MAX_RECORDS) break;

    await new Promise((resolve) => setTimeout(resolve, 600));
  }

  console.log("");

  if (signals.length > 0) {
    const inserted = await insertBatch(signals);
    totalInserted = inserted;
    console.log(`  → Inserted ${inserted} new signals`);
  } else {
    console.log(`  → No new signals to insert`);
  }

  console.log("");
  console.log("═".repeat(60));
  console.log("Summary:");
  console.log(`  Applications processed: ${totalFetched}`);
  console.log(`  Already approved:       ${totalFiltered}`);
  console.log(`  New signals inserted:   ${totalInserted}`);
  console.log(`  Duplicates skipped:     ${totalSkipped}`);
  console.log("═".repeat(60));
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
