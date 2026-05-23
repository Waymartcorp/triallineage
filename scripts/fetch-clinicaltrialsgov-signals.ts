/**
 * TrialLineage — ClinicalTrials.gov broad intake script
 *
 * Fetches all recently posted and upcoming interventional studies
 * (Phase 1–3) from ClinicalTrials.gov v2 API, maps them into
 * the production_signals table in Supabase, and skips duplicates
 * based on trial_identifier (NCT number).
 *
 * Two intake strategies run sequentially:
 *   1. Recently posted studies (last 30 days)
 *   2. Studies with start dates within the next 6 months
 *
 * Usage:
 *   npx tsx scripts/fetch-clinicaltrialsgov-signals.ts
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
  const diseaseArea = conditions.slice(0, 3).join("; ") || "Unknown";

  const lastUpdate = parseDate(proto.statusModule?.lastUpdatePostDateStruct?.date);
  const firstPosted = parseDate(proto.statusModule?.studyFirstPostDateStruct?.date);
  const dateDetected = lastUpdate || firstPosted || formatDate(new Date());

  const phases = proto.designModule?.phases ?? [];
  const phaseStr = phases.join(", ");

  const sponsor = proto.sponsorCollaboratorsModule?.leadSponsor?.name ?? "";
  const interventions = proto.armsInterventionsModule?.interventions ?? [];
  const interventionNames = interventions
    .map((i) => i.name)
    .filter(Boolean)
    .slice(0, 3)
    .join("; ");

  const briefSummary = proto.descriptionModule?.briefSummary ?? null;
  const truncatedSummary = briefSummary
    ? briefSummary.length > 800
      ? briefSummary.slice(0, 797) + "..."
      : briefSummary
    : null;

  const noteparts: string[] = ["Auto-imported from ClinicalTrials.gov."];
  if (phaseStr) noteparts.push(`Phase: ${phaseStr}.`);
  if (sponsor) noteparts.push(`Sponsor: ${sponsor}.`);
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

async function getExistingIdentifiers(): Promise<Set<string>> {
  const allIds: string[] = [];
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
    allIds.push(
      ...data.map((row: { trial_identifier: string }) => row.trial_identifier)
    );
    if (data.length < batchSize) break;
    from += batchSize;
  }

  return new Set(allIds);
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

  const existingIds = await getExistingIdentifiers();
  console.log(`Existing signals in database: ${existingIds.size}`);
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

        if (existingIds.has(signal.trial_identifier)) {
          totalSkipped++;
          continue;
        }

        querySignals.push(signal);
        existingIds.add(signal.trial_identifier);
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
