/**
 * TrialLineage — News Trigger Pull
 *
 * Reconciles a public-interest news article to likely clinical trial anchors.
 * Expands article-derived keywords using synonym mapping, searches existing
 * production_signals and ClinicalTrials.gov, and optionally imports matched
 * records into production_signals labeled as news-triggered.
 *
 * Usage:
 *   npx tsx scripts/news-trigger-pull.ts --keywords "PCSK9,gene therapy,LDL cholesterol" --disease "heart disease" --drug "VERVE-102"
 *   npx tsx scripts/news-trigger-pull.ts --url "https://example.com/article" --keywords "PCSK9,base editing,cholesterol"
 *
 *   Or via npm script:
 *   npm run news-trigger -- --keywords "PCSK9,LDL,gene therapy" --drug "VERVE-102"
 *
 * Flags:
 *   --url          Article URL (stored in editorial_note, not scraped)
 *   --title        Article title
 *   --keywords     Comma-separated trigger keywords
 *   --drug         Suspected drug/intervention name
 *   --disease      Suspected disease area
 *   --mechanism    Suspected mechanism/modality
 *   --import       If present, imports matched ClinicalTrials.gov results
 *   --score        If present, outputs lineage candidate scoring
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
const RATE_LIMIT_MS = 1200;

// ── Synonym / Query Expansion Map ─────────────────────────────

const SYNONYM_MAP: Record<string, string[]> = {
  // Diseases
  "heart disease": ["coronary artery disease", "ASCVD", "atherosclerotic cardiovascular disease", "CAD"],
  "high cholesterol": ["hypercholesterolemia", "HeFH", "familial hypercholesterolemia", "elevated LDL-C"],
  "ldl cholesterol": ["LDL-C", "low-density lipoprotein cholesterol", "elevated LDL"],
  "ldl": ["LDL-C", "low-density lipoprotein"],
  "alzheimer's": ["Alzheimer disease", "AD", "dementia"],
  "als": ["amyotrophic lateral sclerosis", "motor neuron disease"],
  "ms": ["multiple sclerosis"],
  "lung scarring": ["pulmonary fibrosis", "IPF", "idiopathic pulmonary fibrosis"],
  "blindness": ["retinal degeneration", "inherited retinal disease", "retinitis pigmentosa"],

  // Mechanisms / modalities
  "gene therapy": ["gene editing", "base editing", "gene transfer", "AAV", "in vivo gene therapy"],
  "base editing": ["adenine base editor", "ABE", "cytosine base editor", "CBE", "CRISPR base editing"],
  "gene editing": ["CRISPR", "base editing", "gene correction", "genome editing"],
  "crispr": ["CRISPR-Cas9", "gene editing", "genome editing"],
  "one-time treatment": ["single infusion", "single-course", "one-time infusion", "durable treatment"],
  "antibody": ["monoclonal antibody", "mAb", "biologic"],
  "rna therapy": ["antisense oligonucleotide", "ASO", "siRNA", "RNA interference", "mRNA"],

  // Targets
  "pcsk9": ["PCSK9 inhibitor", "PCSK9 gene editing", "PCSK9 silencing", "proprotein convertase subtilisin/kexin type 9"],
  "pcsk9 inhibitor": ["PCSK9 gene editing", "PCSK9 antibody", "inclisiran", "evolocumab", "alirocumab"],
  "kras": ["KRAS G12C", "KRAS G12D", "RAS", "KRAS inhibitor"],
  "pd-1": ["PD-1 inhibitor", "checkpoint inhibitor", "anti-PD-1", "pembrolizumab", "nivolumab"],
  "lpa1": ["LPA1 receptor", "lysophosphatidic acid receptor 1", "LPA1 antagonist"],

  // Companies → programs
  "verve": ["Verve Therapeutics", "VERVE-101", "VERVE-102"],
  "verve therapeutics": ["VERVE-101", "VERVE-102", "base editing PCSK9"],
  "ionis": ["Ionis Pharmaceuticals", "antisense oligonucleotide"],
  "moderna": ["mRNA therapy", "mRNA vaccine"],
  "bms": ["Bristol-Myers Squibb", "BMS"],
  "bristol-myers squibb": ["BMS"],

  // Generic expansions
  "cholesterol": ["LDL-C", "hypercholesterolemia", "lipid-lowering", "PCSK9"],
  "cancer": ["oncology", "tumor", "neoplasm", "carcinoma"],
  "rare disease": ["orphan disease", "rare genetic disease", "ultra-rare"],
};

// ── CLI Argument Parsing ──────────────────────────────────────

interface CliArgs {
  url?: string;
  title?: string;
  keywords: string[];
  drug?: string;
  disease?: string;
  mechanism?: string;
  doImport: boolean;
  doScore: boolean;
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const result: CliArgs = { keywords: [], doImport: false, doScore: false };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--url":
        result.url = args[++i];
        break;
      case "--title":
        result.title = args[++i];
        break;
      case "--keywords":
        result.keywords = args[++i].split(",").map((k) => k.trim()).filter(Boolean);
        break;
      case "--drug":
        result.drug = args[++i];
        break;
      case "--disease":
        result.disease = args[++i];
        break;
      case "--mechanism":
        result.mechanism = args[++i];
        break;
      case "--import":
        result.doImport = true;
        break;
      case "--score":
        result.doScore = true;
        break;
    }
  }

  return result;
}

// ── Query Expansion ───────────────────────────────────────────

function expandKeywords(keywords: string[]): string[] {
  const expanded = new Set<string>();

  for (const kw of keywords) {
    expanded.add(kw);
    const lower = kw.toLowerCase();

    if (SYNONYM_MAP[lower]) {
      for (const syn of SYNONYM_MAP[lower]) {
        expanded.add(syn);
      }
    }

    // Also check if the keyword is a substring match for any map key
    for (const [key, synonyms] of Object.entries(SYNONYM_MAP)) {
      if (lower.includes(key) || key.includes(lower)) {
        for (const syn of synonyms) {
          expanded.add(syn);
        }
      }
    }
  }

  return Array.from(expanded);
}

// ── Search Existing Production Signals ────────────────────────

interface ExistingSignal {
  id: string;
  title: string;
  disease_area: string;
  trial_identifier: string | null;
  sponsor_name: string | null;
  intervention_names: string[] | null;
  source_type: string;
  candidate_type: string;
  editorial_note: string;
  external_link: string | null;
}

async function searchExistingSignals(keywords: string[]): Promise<ExistingSignal[]> {
  const results: ExistingSignal[] = [];
  const seen = new Set<string>();

  // Search in batches by keyword to avoid overly complex queries
  for (const kw of keywords.slice(0, 15)) {
    const pattern = `%${kw}%`;

    const { data, error } = await supabase
      .from("production_signals")
      .select("id, title, disease_area, trial_identifier, sponsor_name, intervention_names, source_type, candidate_type, editorial_note, external_link")
      .or(
        `title.ilike.${pattern},` +
        `disease_area.ilike.${pattern},` +
        `trial_identifier.ilike.${pattern},` +
        `editorial_note.ilike.${pattern},` +
        `brief_summary.ilike.${pattern},` +
        `sponsor_name.ilike.${pattern}`
      )
      .limit(20);

    if (error) {
      console.error(`  Search error for "${kw}": ${error.message}`);
      continue;
    }

    if (data) {
      for (const row of data) {
        if (!seen.has(row.id)) {
          seen.add(row.id);
          results.push(row as ExistingSignal);
        }
      }
    }
  }

  return results;
}

// ── ClinicalTrials.gov Search ─────────────────────────────────

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

async function searchClinicalTrials(query: string): Promise<StudyRecord[]> {
  const url = new URL(CT_API_BASE);
  url.searchParams.set("pageSize", "20");
  url.searchParams.set("query.term", query);

  const response = await fetch(url.toString());
  if (!response.ok) {
    console.error(`  CT.gov API error: ${response.status} ${response.statusText}`);
    return [];
  }

  const data = await response.json();
  return (data.studies ?? []) as StudyRecord[];
}

// ── Lineage Candidate Scoring ─────────────────────────────────

interface LineageScore {
  lineage_depth: "High" | "Medium" | "Low";
  public_interest: "High" | "Medium" | "Low";
  citation_availability: "High" | "Medium" | "Low";
  hype_risk: "High" | "Medium" | "Low";
  suggested_page_type: string;
  suggested_public_title: string;
  why_it_matters: string;
  accuracy_risks: string[];
}

function scoreLineageCandidate(
  study: StudyRecord,
  args: CliArgs
): LineageScore {
  const proto = study.protocolSection;
  const phases = proto?.designModule?.phases ?? [];
  const conditions = proto?.conditionsModule?.conditions ?? [];
  const interventions = proto?.armsInterventionsModule?.interventions ?? [];
  const title = proto?.identificationModule?.briefTitle ?? "";
  const sponsor = proto?.sponsorCollaboratorsModule?.leadSponsor?.name ?? "";

  const isPhase3 = phases.some((p) => p.includes("3"));
  const isPhase2 = phases.some((p) => p.includes("2"));
  const isGeneTherapy = interventions.some((i) =>
    /gene|editing|base edit|AAV|viral vector/i.test(i.name ?? "")
  );

  const lineage_depth: "High" | "Medium" | "Low" =
    isGeneTherapy || conditions.length > 0 ? "High" : isPhase3 ? "Medium" : "Low";

  const public_interest: "High" | "Medium" | "Low" =
    args.url ? "High" : "Medium";

  const citation_availability: "High" | "Medium" | "Low" =
    isPhase3 || isPhase2 ? "High" : "Medium";

  const hype_risk: "High" | "Medium" | "Low" =
    isGeneTherapy || /cure|breakthrough|revolutionary/i.test(title) ? "High" : "Medium";

  const suggested_page_type =
    isPhase3 || isPhase2 ? "trial_anchored_lineage" : "concept_page";

  const disease = conditions[0] ?? args.disease ?? "unknown disease";
  const intervention = interventions[0]?.name ?? args.drug ?? "investigational therapy";
  const suggested_public_title = `${intervention} for ${disease}`;

  const why_it_matters =
    `This trial tests whether ${intervention} can address ${disease}. ` +
    `The underlying science spans ${args.mechanism ?? "the relevant biological mechanism"}, ` +
    `drug development, and clinical translation.`;

  const accuracy_risks: string[] = [];
  if (isGeneTherapy) accuracy_risks.push("Gene therapy hype cycle — avoid implying 'cure'");
  if (!isPhase3) accuracy_risks.push("Not yet Phase 3 — limited efficacy evidence");
  if (args.url) accuracy_risks.push("News-triggered — verify article claims against trial record");
  accuracy_risks.push("Sponsor-reported data may not yet be peer-reviewed");

  return {
    lineage_depth,
    public_interest,
    citation_availability,
    hype_risk,
    suggested_page_type,
    suggested_public_title,
    why_it_matters,
    accuracy_risks,
  };
}

// ── Lineage Treatment Output ──────────────────────────────────

interface LineageTreatment {
  trial_anchor: string;
  human_problem: string;
  biological_clue: string;
  enabling_science: string;
  lineage_map: string;
  treatment_hypothesis: string;
  known_vs_unknown: string;
  source_map: string;
  suggested_concepts: string[];
  hype_cautions: string[];
}

function generateLineageTreatment(
  study: StudyRecord,
  args: CliArgs
): LineageTreatment {
  const proto = study.protocolSection;
  const nctId = proto?.identificationModule?.nctId ?? "Unknown";
  const title = proto?.identificationModule?.briefTitle ?? "Unknown";
  const phases = proto?.designModule?.phases ?? [];
  const conditions = proto?.conditionsModule?.conditions ?? [];
  const interventions = proto?.armsInterventionsModule?.interventions ?? [];
  const sponsor = proto?.sponsorCollaboratorsModule?.leadSponsor?.name ?? "Unknown";
  const status = proto?.statusModule?.overallStatus ?? "Unknown";

  const disease = conditions[0] ?? args.disease ?? "the target disease";
  const drug = interventions[0]?.name ?? args.drug ?? "the investigational therapy";
  const mechanism = args.mechanism ?? "the underlying biological mechanism";

  return {
    trial_anchor: [
      `Trial: ${title}`,
      `NCT ID: ${nctId}`,
      `Phase: ${phases.join(", ") || "Unknown"}`,
      `Disease: ${conditions.join("; ") || disease}`,
      `Intervention: ${drug}`,
      `Sponsor: ${sponsor}`,
      `Status: ${status}`,
      `Source: ClinicalTrials.gov`,
    ].join("\n  "),

    human_problem: `[DRAFT] ${disease} — describe the disease burden, who is affected, why existing treatments are insufficient, and what drives urgency for new approaches.`,

    biological_clue: `[DRAFT] The scientific insight that made ${drug} conceivable — identify the specific discovery or mechanism (e.g., ${mechanism}) that created the therapeutic hypothesis.`,

    enabling_science: `[DRAFT] Technologies that bridged biology to trial — drug chemistry/design, delivery system, model organisms, biomarkers, endpoint validation, and clinical trial design for this disease.`,

    lineage_map: `Disease observation → ${mechanism} → enabling technology → therapeutic hypothesis (${drug}) → clinical trial (${nctId})`,

    treatment_hypothesis: `[DRAFT] If ${drug} successfully targets ${mechanism}, then ${disease} progression may be slowed/modified/addressed. The trial measures [primary endpoint] to test this.`,

    known_vs_unknown: [
      "KNOWN (trial record): " + `Phase ${phases.join("/")} trial of ${drug} in ${disease} (${status})`,
      "KNOWN (biology): [Describe established mechanism]",
      "INTERPRETATION: [TrialLineage editorial view]",
      "UNKNOWN: Whether the approach produces clinically meaningful benefit",
      "CANNOT CONCLUDE: Efficacy, safety profile, or superiority to existing treatments",
    ].join("\n  "),

    source_map: [
      `ClinicalTrials.gov: ${nctId}`,
      "Peer-reviewed: [Identify key papers on mechanism]",
      "Disease background: [NIH/disease foundation sources]",
      `Sponsor: ${sponsor} (program-specific facts only)`,
      "TrialLineage interpretation: [Clearly labeled editorial]",
    ].join("\n  "),

    suggested_concepts: [
      disease,
      mechanism,
      ...(interventions.map((i) => i.type ?? "").filter(Boolean)),
      "Clinical trial design",
      "Translational medicine",
    ],

    hype_cautions: [
      "Do not imply guaranteed benefit or inevitable approval",
      "Separate trial-record facts from media narrative",
      "Label all TrialLineage interpretation explicitly",
      "Avoid 'breakthrough' or 'cure' language",
      "Note that trial outcomes are not yet available (if applicable)",
    ],
  };
}

// ── Import to Production Signals ──────────────────────────────

async function importSignal(
  study: StudyRecord,
  args: CliArgs
): Promise<boolean> {
  const proto = study.protocolSection;
  if (!proto) return false;

  const nctId = proto.identificationModule?.nctId;
  const title = proto.identificationModule?.briefTitle;
  if (!nctId || !title) return false;

  // Check for existing
  const { data: existing } = await supabase
    .from("production_signals")
    .select("id")
    .eq("trial_identifier", nctId)
    .limit(1);

  if (existing && existing.length > 0) {
    console.log(`  Already exists in production_signals: ${nctId}`);
    return false;
  }

  const conditions = proto.conditionsModule?.conditions ?? [];
  const keywords = proto.conditionsModule?.keywords ?? [];
  const interventions = proto.armsInterventionsModule?.interventions ?? [];
  const sponsor = proto.sponsorCollaboratorsModule?.leadSponsor?.name ?? "";
  const collaborators = (proto.sponsorCollaboratorsModule?.collaborators ?? [])
    .map((c) => c.name).filter(Boolean) as string[];
  const interventionNames = interventions.map((i) => i.name).filter(Boolean) as string[];
  const phases = proto.designModule?.phases ?? [];
  const status = proto.statusModule?.overallStatus ?? "";

  const officialTitle = proto.identificationModule?.officialTitle ?? "";
  const briefSummary = proto.descriptionModule?.briefSummary ?? null;
  const summaryParts: string[] = [];
  if (officialTitle && officialTitle !== title) summaryParts.push(officialTitle);
  if (briefSummary) summaryParts.push(briefSummary);
  const combined = summaryParts.join("\n\n") || null;
  const truncated = combined && combined.length > 1200
    ? combined.slice(0, 1197) + "..."
    : combined;

  const noteparts: string[] = [
    "NEWS TRIGGER PULL.",
  ];
  if (args.url) noteparts.push(`Article: ${args.url}`);
  if (args.title) noteparts.push(`Article title: ${args.title}`);
  noteparts.push(`Trigger keywords: ${args.keywords.join(", ")}`);
  if (args.drug) noteparts.push(`Suspected drug: ${args.drug}`);
  if (args.disease) noteparts.push(`Suspected disease: ${args.disease}`);
  if (args.mechanism) noteparts.push(`Suspected mechanism: ${args.mechanism}`);
  if (phases.length) noteparts.push(`Phase: ${phases.join(", ")}.`);
  if (sponsor) noteparts.push(`Sponsor: ${sponsor}.`);
  if (status) noteparts.push(`Status: ${status}.`);

  const diseaseArea = conditions.slice(0, 5).join("; ") ||
    keywords.slice(0, 3).join("; ") || args.disease || "Unknown";

  const lastUpdate = proto.statusModule?.lastUpdatePostDateStruct?.date;
  const firstPosted = proto.statusModule?.studyFirstPostDateStruct?.date;
  const dateDetected = lastUpdate || firstPosted || new Date().toISOString().split("T")[0];

  const row = {
    title,
    disease_area: diseaseArea,
    source: "ClinicalTrials.gov",
    source_type: "News trigger",
    date_detected: dateDetected,
    priority: "High",
    candidate_type: "Lineage candidate",
    status: "New",
    editorial_note: noteparts.join(" "),
    external_link: `https://clinicaltrials.gov/study/${nctId}`,
    brief_summary: truncated,
    trial_identifier: nctId,
    sponsor_name: sponsor || null,
    intervention_names: interventionNames.length > 0 ? interventionNames : null,
    collaborator_names: collaborators.length > 0 ? collaborators : null,
  };

  const { error } = await supabase.from("production_signals").insert(row);
  if (error) {
    console.error(`  Import error: ${error.message}`);
    return false;
  }

  return true;
}

// ── Main ───────────────────────────────────────────────────────

async function main() {
  const args = parseArgs();

  if (args.keywords.length === 0 && !args.drug && !args.disease) {
    console.error("Usage: npx tsx scripts/news-trigger-pull.ts --keywords \"term1,term2\" [--drug NAME] [--disease NAME] [--mechanism NAME] [--url URL] [--title TITLE] [--import] [--score]");
    console.error("");
    console.error("Example (LDL/PCSK9 gene therapy article):");
    console.error('  npx tsx scripts/news-trigger-pull.ts --keywords "PCSK9,gene therapy,LDL cholesterol,one-time treatment" --drug "VERVE-102" --disease "heart disease" --mechanism "base editing" --url "https://nytimes.com/..." --import --score');
    process.exit(1);
  }

  console.log("TrialLineage — News Trigger Pull");
  console.log("═".repeat(60));
  if (args.url) console.log(`  Article URL:  ${args.url}`);
  if (args.title) console.log(`  Article:      ${args.title}`);
  console.log(`  Keywords:     ${args.keywords.join(", ")}`);
  if (args.drug) console.log(`  Drug:         ${args.drug}`);
  if (args.disease) console.log(`  Disease:      ${args.disease}`);
  if (args.mechanism) console.log(`  Mechanism:    ${args.mechanism}`);
  console.log("");

  // ── Step 1: Expand keywords ───────────────────────────────
  const allTerms = [
    ...args.keywords,
    ...(args.drug ? [args.drug] : []),
    ...(args.disease ? [args.disease] : []),
    ...(args.mechanism ? [args.mechanism] : []),
  ];

  const expanded = expandKeywords(allTerms);
  console.log(`  Expanded to ${expanded.length} search terms:`);
  for (const term of expanded.slice(0, 25)) {
    console.log(`    • ${term}`);
  }
  if (expanded.length > 25) {
    console.log(`    ... and ${expanded.length - 25} more`);
  }
  console.log("");

  // ── Step 2: Search existing production_signals ─────────────
  console.log("Searching existing production_signals...");
  const existingMatches = await searchExistingSignals(expanded);

  if (existingMatches.length > 0) {
    console.log(`  Found ${existingMatches.length} existing signal(s):`);
    for (const match of existingMatches.slice(0, 10)) {
      console.log(`    [${match.trial_identifier ?? "no NCT"}] ${match.title}`);
      console.log(`      Source: ${match.source_type} | Type: ${match.candidate_type}`);
      if (match.sponsor_name) console.log(`      Sponsor: ${match.sponsor_name}`);
    }
    if (existingMatches.length > 10) {
      console.log(`    ... and ${existingMatches.length - 10} more`);
    }
  } else {
    console.log("  No existing matches found.");
  }
  console.log("");

  // ── Step 3: Search ClinicalTrials.gov ──────────────────────
  console.log("Searching ClinicalTrials.gov...");

  // Build focused queries — prioritize drug name, then disease+mechanism
  const ctQueries: string[] = [];
  if (args.drug) ctQueries.push(args.drug);
  if (args.drug && args.disease) ctQueries.push(`${args.drug} ${args.disease}`);
  if (args.mechanism && args.disease) ctQueries.push(`${args.mechanism} ${args.disease}`);
  if (ctQueries.length === 0) {
    ctQueries.push(args.keywords.slice(0, 3).join(" "));
  }

  const ctResults: StudyRecord[] = [];
  const seenNcts = new Set<string>();

  for (const query of ctQueries) {
    console.log(`  Query: "${query}"`);
    const studies = await searchClinicalTrials(query);
    for (const study of studies) {
      const nct = study.protocolSection?.identificationModule?.nctId;
      if (nct && !seenNcts.has(nct)) {
        seenNcts.add(nct);
        ctResults.push(study);
      }
    }
    await new Promise((resolve) => setTimeout(resolve, RATE_LIMIT_MS));
  }

  console.log(`  Found ${ctResults.length} unique trial(s) from ClinicalTrials.gov`);
  console.log("");

  if (ctResults.length > 0) {
    console.log("Top ClinicalTrials.gov matches:");
    console.log("─".repeat(60));
    for (const study of ctResults.slice(0, 10)) {
      const proto = study.protocolSection;
      const nct = proto?.identificationModule?.nctId ?? "?";
      const studyTitle = proto?.identificationModule?.briefTitle ?? "?";
      const phases = proto?.designModule?.phases ?? [];
      const sponsor = proto?.sponsorCollaboratorsModule?.leadSponsor?.name ?? "?";
      const status = proto?.statusModule?.overallStatus ?? "?";
      const conditions = proto?.conditionsModule?.conditions ?? [];
      const interventions = proto?.armsInterventionsModule?.interventions ?? [];

      console.log(`  ${nct} — ${studyTitle}`);
      console.log(`    Phase: ${phases.join(", ") || "N/A"} | Status: ${status}`);
      console.log(`    Sponsor: ${sponsor}`);
      if (conditions.length) console.log(`    Conditions: ${conditions.slice(0, 3).join("; ")}`);
      if (interventions.length) console.log(`    Interventions: ${interventions.slice(0, 3).map((i) => i.name).join("; ")}`);
      console.log("");
    }
  }

  // ── Step 4: Lineage Candidate Scoring ──────────────────────
  if (args.doScore && ctResults.length > 0) {
    const topMatch = ctResults[0];
    const score = scoreLineageCandidate(topMatch, args);

    console.log("═".repeat(60));
    console.log("LINEAGE CANDIDATE SCORING (top match):");
    console.log("─".repeat(60));
    console.log(`  Lineage depth:         ${score.lineage_depth}`);
    console.log(`  Public interest:       ${score.public_interest}`);
    console.log(`  Citation availability: ${score.citation_availability}`);
    console.log(`  Hype risk:             ${score.hype_risk}`);
    console.log(`  Suggested page type:   ${score.suggested_page_type}`);
    console.log(`  Suggested title:       ${score.suggested_public_title}`);
    console.log(`  Why it matters:        ${score.why_it_matters}`);
    console.log(`  Accuracy risks:`);
    for (const risk of score.accuracy_risks) {
      console.log(`    ⚠ ${risk}`);
    }
    console.log("");

    // Generate lineage treatment
    const treatment = generateLineageTreatment(topMatch, args);
    console.log("LINEAGE TREATMENT (structured draft):");
    console.log("─".repeat(60));
    console.log(`  Trial anchor:\n  ${treatment.trial_anchor}`);
    console.log("");
    console.log(`  Human problem: ${treatment.human_problem}`);
    console.log("");
    console.log(`  Biological clue: ${treatment.biological_clue}`);
    console.log("");
    console.log(`  Enabling science: ${treatment.enabling_science}`);
    console.log("");
    console.log(`  Lineage map: ${treatment.lineage_map}`);
    console.log("");
    console.log(`  Treatment hypothesis: ${treatment.treatment_hypothesis}`);
    console.log("");
    console.log(`  Known vs unknown:\n  ${treatment.known_vs_unknown}`);
    console.log("");
    console.log(`  Source map:\n  ${treatment.source_map}`);
    console.log("");
    console.log(`  Suggested concepts: ${treatment.suggested_concepts.join(", ")}`);
    console.log("");
    console.log("  Hype cautions:");
    for (const c of treatment.hype_cautions) {
      console.log(`    ⚠ ${c}`);
    }
    console.log("");
  }

  // ── Step 5: Import ─────────────────────────────────────────
  if (args.doImport && ctResults.length > 0) {
    console.log("═".repeat(60));
    console.log("IMPORTING top matches to production_signals...");
    let imported = 0;
    for (const study of ctResults.slice(0, 5)) {
      const nct = study.protocolSection?.identificationModule?.nctId ?? "?";
      const success = await importSignal(study, args);
      if (success) {
        console.log(`  ✓ Imported: ${nct}`);
        imported++;
      }
    }
    console.log(`  Total imported: ${imported}`);
    console.log("");
  }

  // ── Summary ────────────────────────────────────────────────
  console.log("═".repeat(60));
  console.log("Summary:");
  console.log(`  Keywords provided:        ${args.keywords.length}`);
  console.log(`  Terms after expansion:    ${expanded.length}`);
  console.log(`  Existing signal matches:  ${existingMatches.length}`);
  console.log(`  ClinicalTrials.gov hits:  ${ctResults.length}`);
  console.log(`  Import requested:         ${args.doImport ? "Yes" : "No"}`);
  console.log(`  Scoring requested:        ${args.doScore ? "Yes" : "No"}`);
  console.log("═".repeat(60));
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
