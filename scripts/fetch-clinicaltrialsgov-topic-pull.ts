/**
 * TrialLineage — ClinicalTrials.gov Topic Pull
 *
 * Manual investigation pathway that queries ClinicalTrials.gov broadly
 * (without fresh-signal date constraints) and imports matching records
 * into the production_signals table.
 *
 * Topic Pull records are labeled distinctly:
 *   - source_type = "Topic pull"
 *   - candidate_type = "Topic pull"
 *   - status = "New"
 *   - editorial_note includes the query term
 *
 * Usage:
 *   npx tsx scripts/fetch-clinicaltrialsgov-topic-pull.ts "OCU400"
 *   npx tsx scripts/fetch-clinicaltrialsgov-topic-pull.ts "Wilmer Eye Institute"
 *   npx tsx scripts/fetch-clinicaltrialsgov-topic-pull.ts "retinitis pigmentosa gene therapy"
 *
 *   Or via npm script:
 *   npm run topic-pull -- "OCU400"
 *
 * Requires env vars (loaded from .env.local):
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
const MAX_PAGES = 10;
const BATCH_INSERT_SIZE = 200;
const RATE_LIMIT_MS = 1200;

// ── Types ──────────────────────────────────────────────────────

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
  intervention_names: string[] | null;
  collaborator_names: string[] | null;
}

// ── Helpers ────────────────────────────────────────────────────

function formatDate(d: Date): string {
  return d.toISOString().split("T")[0];
}

function parseDate(dateStr: string | undefined): string | null {
  if (!dateStr) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  if (/^\d{4}-\d{2}$/.test(dateStr)) return `${dateStr}-01`;
  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) return parsed.toISOString().split("T")[0];
  return null;
}

function mapStudyToSignal(study: StudyRecord, topicQuery: string): SignalRow | null {
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
  const interventionNamesList = interventions
    .map((i) => i.name)
    .filter(Boolean) as string[];

  const officialTitle = proto.identificationModule?.officialTitle ?? "";
  const briefSummaryRaw = proto.descriptionModule?.briefSummary ?? null;

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

  const noteparts: string[] = [`Topic pull query: ${topicQuery}.`];
  if (phaseStr) noteparts.push(`Phase: ${phaseStr}.`);
  if (sponsor) noteparts.push(`Sponsor: ${sponsor}.`);
  if (collaborators.length > 0)
    noteparts.push(`Collaborators: ${collaborators.slice(0, 3).join("; ")}.`);
  if (interventionNamesList.length > 0)
    noteparts.push(`Interventions: ${interventionNamesList.slice(0, 5).join("; ")}.`);

  const overallStatus = proto.statusModule?.overallStatus ?? "";
  const statusNote = overallStatus ? ` Status: ${overallStatus}.` : "";
  noteparts.push(statusNote.trim());

  return {
    title,
    disease_area: diseaseArea,
    source: "ClinicalTrials.gov",
    source_type: "Topic pull",
    date_detected: dateDetected,
    priority: "Medium",
    candidate_type: "Topic pull",
    status: "New",
    editorial_note: noteparts.filter(Boolean).join(" "),
    external_link: `https://clinicaltrials.gov/study/${nctId}`,
    brief_summary: truncatedSummary,
    trial_identifier: nctId,
    sponsor_name: sponsor || null,
    intervention_names: interventionNamesList.length > 0 ? interventionNamesList : null,
    collaborator_names: collaborators.length > 0 ? collaborators : null,
  };
}

// ── API fetch ──────────────────────────────────────────────────

async function fetchPage(
  query: string,
  pageToken?: string
): Promise<{ studies: StudyRecord[]; nextPageToken?: string }> {
  const url = new URL(CT_API_BASE);
  url.searchParams.set("pageSize", String(PAGE_SIZE));
  url.searchParams.set("query.term", query);
  url.searchParams.set(
    "filter.overallStatus",
    "RECRUITING,NOT_YET_RECRUITING,ACTIVE_NOT_RECRUITING,ENROLLING_BY_INVITATION,COMPLETED,SUSPENDED,TERMINATED,WITHDRAWN"
  );

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

// ── Deduplication ──────────────────────────────────────────────

async function loadExistingIdentifiers(): Promise<Set<string>> {
  const identifiers = new Set<string>();
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
      identifiers.add(row.trial_identifier);
    }
    if (data.length < batchSize) break;
    from += batchSize;
  }

  return identifiers;
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

// ── Main ───────────────────────────────────────────────────────

async function main() {
  const topicQuery = process.argv[2];

  if (!topicQuery || topicQuery.trim() === "") {
    console.error("Usage: npx tsx scripts/fetch-clinicaltrialsgov-topic-pull.ts \"<query>\"");
    console.error("Example: npx tsx scripts/fetch-clinicaltrialsgov-topic-pull.ts \"OCU400\"");
    process.exit(1);
  }

  console.log("TrialLineage — ClinicalTrials.gov Topic Pull");
  console.log("═".repeat(60));
  console.log(`Query: "${topicQuery}"`);
  console.log("Scope: All statuses, no date restriction");
  console.log("");

  const existingIds = await loadExistingIdentifiers();
  console.log(`Existing signals in database: ${existingIds.size} by identifier`);
  console.log("");

  let pageToken: string | undefined;
  let pageCount = 0;
  let totalFetched = 0;
  let totalSkipped = 0;
  const newSignals: SignalRow[] = [];

  while (pageCount < MAX_PAGES) {
    const result = await fetchPage(topicQuery, pageToken);
    pageCount++;

    if (result.studies.length === 0) break;

    for (const study of result.studies) {
      const signal = mapStudyToSignal(study, topicQuery);
      if (!signal) continue;

      totalFetched++;

      if (existingIds.has(signal.trial_identifier)) {
        totalSkipped++;
        continue;
      }

      newSignals.push(signal);
      existingIds.add(signal.trial_identifier);
    }

    console.log(
      `  Page ${pageCount}: ${result.studies.length} records (${newSignals.length} new so far)`
    );

    if (!result.nextPageToken) break;
    pageToken = result.nextPageToken;

    await new Promise((resolve) => setTimeout(resolve, RATE_LIMIT_MS));
  }

  console.log("");

  if (newSignals.length > 0) {
    const inserted = await insertBatch(newSignals);
    console.log(`Inserted ${inserted} new topic-pull signals`);
  } else {
    console.log("No new signals to insert (all duplicates or no results)");
  }

  console.log("");
  console.log("═".repeat(60));
  console.log("Summary:");
  console.log(`  Query:                "${topicQuery}"`);
  console.log(`  Records processed:    ${totalFetched}`);
  console.log(`  New signals inserted: ${newSignals.length}`);
  console.log(`  Duplicates skipped:   ${totalSkipped}`);
  console.log("═".repeat(60));
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
