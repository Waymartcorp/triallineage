/**
 * TrialLineage — ClinicalTrials.gov broad intake script
 *
 * Fetches all recently posted and upcoming interventional studies
 * (Phase 1–3) from ClinicalTrials.gov v2 API, maps them into
 * the production_signals table in Supabase, and skips duplicates.
 *
 * Two intake strategies run sequentially:
 *   1. Recently posted studies (last 30 days)
 *   2. Studies with start dates within the next 6 months
 *
 * ── Deduplication strategy ──────────────────────────────────────
 * Primary key: trial_identifier (NCT ID).
 *   - Every ClinicalTrials.gov record has an NCT ID, so this field
 *     is always populated for rows produced by this script.
 *   - Before inserting, the script loads all existing trial_identifier
 *     values from the database into an in-memory Set.
 *   - Records whose NCT ID already exists are skipped.
 *
 * Fallback (for rows without trial_identifier, e.g. manual entries):
 *   - The script also loads composite keys (title + source + date_detected)
 *     for any existing rows where trial_identifier IS NULL.
 *   - A new record is skipped if its composite key matches an existing row.
 *   - This protects against duplicating manually-entered signals that
 *     lack an NCT ID.
 *
 * In-run protection:
 *   - Both sets are updated in-memory during a single run, so a study
 *     appearing in both queries (recently posted AND upcoming start)
 *     is only inserted once.
 *
 * Database-level safety:
 *   - A partial unique index on trial_identifier (WHERE NOT NULL)
 *     provides a last-resort constraint. See migration 003.
 * ────────────────────────────────────────────────────────────────
 *
 * Usage:
 *   npx tsx scripts/fetch-clinicaltrialsgov-signals.ts
 *
 * Requires env vars (loaded automatically from .env.local):
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */

import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";

config({ path: ".env.local" });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error(
    "Missing env vars.\n" +
    `  NEXT_PUBLIC_SUPABASE_URL: ${SUPABASE_URL ? "present" : "MISSING"}\n` +
    `  SUPABASE_SERVICE_ROLE_KEY: ${SUPABASE_SERVICE_KEY ? "present" : "MISSING"}\n` +
    "Ensure .env.local contains both values."
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

const CT_API_BASE = "https://clinicaltrials.gov/api/v2/studies";
const PAGE_SIZE = 1000;
const MAX_PAGES_PER_QUERY = 10;
const BATCH_INSERT_SIZE = 200;
const RATE_LIMIT_MS = 1200;

function formatDate(d: Date): string {
  return d.toISOString().split("T")[0];
}

function getDates() {
  const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const sixMonthsFromNow = new Date(now);
  sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
  return {
    today: formatDate(now),
    thirtyDaysAgo: formatDate(thirtyDaysAgo),
    sixMonthsFromNow: formatDate(sixMonthsFromNow),
  };
}

interface IntakeQuery {
  label: string;
  params: Record<string, string>;
}

function buildQueries(): IntakeQuery[] {
  const { today, thirtyDaysAgo, sixMonthsFromNow } = getDates();

  return [
    {
      label: "Recently posted Phase 1–3 interventional studies (last 30 days)",
      params: {
        "filter.advanced": `AREA[StudyFirstPostDate]RANGE[${thirtyDaysAgo}, MAX]`,
        "filter.overallStatus": "RECRUITING,NOT_YET_RECRUITING,ACTIVE_NOT_RECRUITING,ENROLLING_BY_INVITATION",
        "query.term": "AREA[StudyType]INTERVENTIONAL AND AREA[Phase](PHASE1 OR PHASE2 OR PHASE3 OR EARLY_PHASE1)",
      },
    },
    {
      label: "Upcoming Phase 1–3 interventional studies (starting within 6 months)",
      params: {
        "filter.advanced": `AREA[StartDate]RANGE[${today}, ${sixMonthsFromNow}]`,
        "filter.overallStatus": "NOT_YET_RECRUITING,RECRUITING",
        "query.term": "AREA[StudyType]INTERVENTIONAL AND AREA[Phase](PHASE1 OR PHASE2 OR PHASE3 OR EARLY_PHASE1)",
      },
    },
  ];
}

interface StudyRecord {
  protocolSection?: {
    identificationModule?: {
      nctId?: string;
      briefTitle?: string;
      officialTitle?: string;
    };
    statusModule?: {
      overallStatus?: string;
      startDateStruct?: { date?: string };
      lastUpdatePostDateStruct?: { date?: string };
      studyFirstPostDateStruct?: { date?: string };
    };
    conditionsModule?: {
      conditions?: string[];
      keywords?: string[];
    };
    designModule?: {
      studyType?: string;
      phases?: string[];
    };
    descriptionModule?: {
      briefSummary?: string;
    };
    sponsorCollaboratorsModule?: {
      leadSponsor?: { name?: string; class?: string };
      collaborators?: Array<{ name?: string; class?: string }>;
    };
    armsInterventionsModule?: {
      interventions?: Array<{ name?: string; type?: string }>;
    };
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
  sponsor_name: string | null;
  intervention_names: string | null;
  collaborator_names: string | null;
}

function parseDate(dateStr: string | undefined): string | null {
  if (!dateStr) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  if (/^\d{4}-\d{2}$/.test(dateStr)) return `${dateStr}-01`;
  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) return parsed.toISOString().split("T")[0];
  return null;
}

function mapStudyToSignal(study: StudyRecord): SignalRow | null {
  const proto = study.protocolSection;
  if (!proto) return null;

  const nctId = proto.identificationModule?.nctId;
  const title = proto.identificationModule?.briefTitle;
  if (!nctId || !title) return null;

  const conditions = proto.conditionsModule?.conditions ?? [];
  const keywords = proto.conditionsModule?.keywords ?? [];
  const diseaseArea =
    conditions.slice(0, 5).join("; ") ||
    keywords.slice(0, 3).join("; ") ||
    "Unknown";

  const lastUpdate = parseDate(proto.statusModule?.lastUpdatePostDateStruct?.date);
  const firstPosted = parseDate(proto.statusModule?.studyFirstPostDateStruct?.date);
  const dateDetected = lastUpdate || firstPosted || formatDate(new Date());

  const phases = proto.designModule?.phases ?? [];
  const phaseStr = phases.join(", ");

  const sponsor = proto.sponsorCollaboratorsModule?.leadSponsor?.name ?? "";
  const collaborators = (proto.sponsorCollaboratorsModule?.collaborators ?? [])
    .map((c) => c.name)
    .filter(Boolean) as string[];

  const interventions = proto.armsInterventionsModule?.interventions ?? [];
  const interventionNames = interventions
    .map((i) => i.name)
    .filter(Boolean)
    .slice(0, 5)
    .join("; ");

  const officialTitle = proto.identificationModule?.officialTitle ?? "";
  const briefSummaryRaw = proto.descriptionModule?.briefSummary ?? null;

  // Build brief_summary: include official title if distinct from briefTitle, then description
  const summaryParts: string[] = [];
  if (officialTitle && officialTitle !== title) {
    summaryParts.push(officialTitle);
  }
  if (briefSummaryRaw) {
    summaryParts.push(briefSummaryRaw);
  }
  const combinedSummary = summaryParts.join("\n\n") || null;
  const truncatedSummary = combinedSummary
    ? combinedSummary.length > 1200
      ? combinedSummary.slice(0, 1197) + "..."
      : combinedSummary
    : null;

  const noteparts: string[] = ["Auto-imported from ClinicalTrials.gov."];
  if (phaseStr) noteparts.push(`Phase: ${phaseStr}.`);
  if (sponsor) noteparts.push(`Sponsor: ${sponsor}.`);
  if (collaborators.length > 0)
    noteparts.push(`Collaborators: ${collaborators.slice(0, 3).join("; ")}.`);
  if (interventionNames) noteparts.push(`Interventions: ${interventionNames}.`);

  return {
    title,
    disease_area: diseaseArea,
    source: "ClinicalTrials.gov",
    source_type: "Trial registration",
    date_detected: dateDetected,
    priority: "Medium",
    candidate_type: "Background / supporting",
    status: "New",
    editorial_note: noteparts.join(" "),
    external_link: `https://clinicaltrials.gov/study/${nctId}`,
    brief_summary: truncatedSummary,
    trial_identifier: nctId,
    sponsor_name: sponsor || null,
    intervention_names: interventionNames || null,
    collaborator_names: collaborators.length > 0 ? collaborators.join("; ") : null,
  };
}

async function fetchPage(
  params: Record<string, string>,
  pageToken?: string
): Promise<{ studies: StudyRecord[]; nextPageToken?: string }> {
  const url = new URL(CT_API_BASE);
  url.searchParams.set("pageSize", String(PAGE_SIZE));

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  if (pageToken) {
    url.searchParams.set("pageToken", pageToken);
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    console.error(`  API error: ${response.status} ${response.statusText}`);
    return { studies: [] };
  }

  const data = await response.json();
  return {
    studies: (data.studies ?? []) as StudyRecord[],
    nextPageToken: data.nextPageToken as string | undefined,
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
  // Primary: check trial_identifier (always present for ClinicalTrials.gov rows)
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
  console.log("TrialLineage — ClinicalTrials.gov broad intake");
  console.log("═".repeat(60));
  console.log("");

  const { thirtyDaysAgo, sixMonthsFromNow } = getDates();
  console.log(`Window: studies posted since ${thirtyDaysAgo}`);
  console.log(`        or starting before ${sixMonthsFromNow}`);
  console.log(`Scope:  Phase 1–3 interventional, all disease areas`);
  console.log("");

  const dedupeState = await loadExistingDedupeState();
  console.log(`Existing signals in database: ${dedupeState.byIdentifier.size} by identifier, ${dedupeState.byComposite.size} by composite fallback`);
  console.log("");

  const queries = buildQueries();
  let totalFetched = 0;
  let totalInserted = 0;
  let totalSkipped = 0;

  for (const query of queries) {
    console.log(`─ ${query.label}`);
    let pageToken: string | undefined;
    let pageCount = 0;
    const querySignals: SignalRow[] = [];

    while (pageCount < MAX_PAGES_PER_QUERY) {
      const result = await fetchPage(query.params, pageToken);
      pageCount++;

      if (result.studies.length === 0) break;

      for (const study of result.studies) {
        const signal = mapStudyToSignal(study);
        if (!signal) continue;

        totalFetched++;

        if (isDuplicate(signal, dedupeState)) {
          totalSkipped++;
          continue;
        }

        querySignals.push(signal);
        markInserted(signal, dedupeState);
      }

      console.log(
        `  Page ${pageCount}: ${result.studies.length} records (${querySignals.length} new so far)`
      );

      if (!result.nextPageToken) break;
      pageToken = result.nextPageToken;

      await new Promise((resolve) => setTimeout(resolve, RATE_LIMIT_MS));
    }

    if (querySignals.length > 0) {
      const inserted = await insertBatch(querySignals);
      totalInserted += inserted;
      console.log(`  → Inserted ${inserted} new signals`);
    } else {
      console.log(`  → No new signals to insert`);
    }

    console.log("");
  }

  console.log("═".repeat(60));
  console.log("Summary:");
  console.log(`  Records processed:     ${totalFetched}`);
  console.log(`  New signals inserted:  ${totalInserted}`);
  console.log(`  Duplicates skipped:    ${totalSkipped}`);
  console.log("═".repeat(60));
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
