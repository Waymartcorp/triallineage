/**
 * TrialLineage — ClinicalTrials.gov intake script
 *
 * Fetches recent studies from ClinicalTrials.gov v2 API,
 * maps them into the production_signals table in Supabase,
 * and skips duplicates based on trial_identifier (NCT number).
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
const PAGE_SIZE = 20;

// Focus areas for version 1
const SEARCH_QUERIES = [
  "KRAS pancreatic cancer",
  "KRAS lung cancer",
  "pancreatic ductal adenocarcinoma",
];

interface StudyRecord {
  protocolSection?: {
    identificationModule?: {
      nctId?: string;
      briefTitle?: string;
    };
    statusModule?: {
      overallStatus?: string;
      lastUpdatePostDate?: { date?: string };
      studyFirstPostDate?: { date?: string };
    };
    conditionsModule?: {
      conditions?: string[];
    };
    designModule?: {
      phases?: string[];
    };
    descriptionModule?: {
      briefSummary?: string;
    };
    sponsorCollaboratorsModule?: {
      leadSponsor?: { name?: string };
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

function parseDate(dateObj: { date?: string } | undefined): string | null {
  if (!dateObj?.date) return null;
  // ClinicalTrials.gov dates can be "YYYY-MM-DD" or "YYYY-MM" or "Month YYYY"
  const d = dateObj.date;
  if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  if (/^\d{4}-\d{2}$/.test(d)) return `${d}-01`;
  // Try to parse other formats
  const parsed = new Date(d);
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
  const diseaseArea = conditions[0] || "Unknown";

  const lastUpdate = parseDate(proto.statusModule?.lastUpdatePostDate);
  const firstPosted = parseDate(proto.statusModule?.studyFirstPostDate);
  const dateDetected = lastUpdate || firstPosted || new Date().toISOString().split("T")[0];

  const briefSummary = proto.descriptionModule?.briefSummary ?? null;
  const truncatedSummary = briefSummary
    ? briefSummary.length > 800
      ? briefSummary.slice(0, 797) + "..."
      : briefSummary
    : null;

  return {
    title,
    disease_area: diseaseArea,
    source: "ClinicalTrials.gov",
    source_type: "Trial registration",
    date_detected: dateDetected,
    priority: "Medium",
    candidate_type: "Background / supporting",
    status: "New",
    editorial_note: "Imported automatically from ClinicalTrials.gov",
    external_link: `https://clinicaltrials.gov/study/${nctId}`,
    brief_summary: truncatedSummary,
    trial_identifier: nctId,
  };
}

async function fetchStudies(query: string): Promise<StudyRecord[]> {
  const url = new URL(CT_API_BASE);
  url.searchParams.set("query.term", query);
  url.searchParams.set("pageSize", String(PAGE_SIZE));
  url.searchParams.set("sort", "LastUpdatePostDate");

  const response = await fetch(url.toString());
  if (!response.ok) {
    console.error(`  API error for query "${query}": ${response.status} ${response.statusText}`);
    return [];
  }

  const data = await response.json();
  return (data.studies ?? []) as StudyRecord[];
}

async function getExistingIdentifiers(): Promise<Set<string>> {
  const { data, error } = await supabase
    .from("production_signals")
    .select("trial_identifier")
    .not("trial_identifier", "is", null);

  if (error) {
    console.error("Error fetching existing identifiers:", error.message);
    return new Set();
  }

  return new Set(
    (data ?? []).map((row: { trial_identifier: string }) => row.trial_identifier)
  );
}

async function main() {
  console.log("TrialLineage — ClinicalTrials.gov intake");
  console.log("─".repeat(50));

  const existingIds = await getExistingIdentifiers();
  console.log(`Existing signals in database: ${existingIds.size}`);
  console.log("");

  let totalFetched = 0;
  let totalInserted = 0;
  let totalSkipped = 0;

  for (const query of SEARCH_QUERIES) {
    console.log(`Fetching: "${query}"...`);
    const studies = await fetchStudies(query);
    console.log(`  Retrieved ${studies.length} records`);

    const signals: SignalRow[] = [];

    for (const study of studies) {
      const signal = mapStudyToSignal(study);
      if (!signal) continue;

      totalFetched++;

      if (existingIds.has(signal.trial_identifier)) {
        totalSkipped++;
        continue;
      }

      signals.push(signal);
      existingIds.add(signal.trial_identifier);
    }

    if (signals.length > 0) {
      const { error } = await supabase
        .from("production_signals")
        .insert(signals);

      if (error) {
        console.error(`  Insert error: ${error.message}`);
      } else {
        totalInserted += signals.length;
        console.log(`  Inserted ${signals.length} new signals`);
      }
    } else {
      console.log(`  No new signals to insert`);
    }

    // Rate limiting: wait 1 second between queries
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  console.log("");
  console.log("─".repeat(50));
  console.log("Summary:");
  console.log(`  Records fetched:      ${totalFetched}`);
  console.log(`  New signals inserted:  ${totalInserted}`);
  console.log(`  Duplicates skipped:    ${totalSkipped}`);
  console.log("─".repeat(50));
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
