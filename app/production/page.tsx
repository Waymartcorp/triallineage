"use client";

import { useState } from "react";

type Status = "New" | "Reviewed" | "In progress" | "Published" | "Ignored";
type Priority = "High" | "Medium" | "Low";
type CandidateType =
  | "New case candidate"
  | "Update existing case"
  | "Background / supporting"
  | "Ignore";
type FilterCategory =
  | "All"
  | "New trial signal"
  | "Potential new case"
  | "Update"
  | "Needs review";

interface IntakeItem {
  id: string;
  title: string;
  diseaseArea: string;
  source: string;
  sourceType: string;
  dateDetected: string;
  priority: Priority;
  candidateType: CandidateType;
  status: Status;
  editorialNote: string;
  filterCategory: FilterCategory;
  summary: string;
  whyLogged: string;
  handlingNote: string;
  relatedCase: string;
  relatedConcepts: string[];
}

const items: IntakeItem[] = [
  {
    id: "int-001",
    title: "Phase 1 trial registered: KRAS G12D inhibitor in pancreatic cancer",
    diseaseArea: "Pancreatic cancer",
    source: "ClinicalTrials.gov",
    sourceType: "Trial registration",
    dateDetected: "2026-05-14",
    priority: "High",
    candidateType: "New case candidate",
    status: "New",
    editorialNote: "Second G12D compound to enter trials. Non-covalent strategy — distinct lineage from daraxonrasib.",
    filterCategory: "New trial signal",
    summary:
      "A KRAS G12D-directed small molecule has been registered for a phase 1 dose-escalation trial in advanced pancreatic ductal adenocarcinoma. The compound uses a non-covalent binding mechanism.",
    whyLogged:
      "Trial registration in a watched disease area (pancreatic cancer) targeting a watched molecular target (KRAS G12D). Matches active TrialLineage focus.",
    handlingNote: "Classify as new case candidate or as update to the existing daraxonrasib case. Review registry entry to assess whether the scientific lineage is distinct enough for a separate case page.",
    relatedCase: "Daraxonrasib in pancreatic cancer",
    relatedConcepts: ["Medicinal chemistry", "Clinical trial design", "Translational oncology"],
  },
  {
    id: "int-002",
    title: "Daraxonrasib phase 1 dose-escalation cohort completes enrollment",
    diseaseArea: "Pancreatic cancer",
    source: "ClinicalTrials.gov",
    sourceType: "Trial status update",
    dateDetected: "2026-05-13",
    priority: "High",
    candidateType: "Update existing case",
    status: "Reviewed",
    editorialNote: "Milestone for the primary TrialLineage case. Enrollment complete — results expected.",
    filterCategory: "Update",
    summary:
      "The daraxonrasib phase 1 dose-escalation cohort in advanced pancreatic cancer has completed enrollment. No results posted yet. Trial status updated from recruiting to active, not recruiting.",
    whyLogged:
      "Status change for the trial directly tracked by the daraxonrasib case page. Automatic log on any status update for watched trials.",
    handlingNote: "Update the daraxonrasib case page timeline or status note. No content change needed until results are available, but the milestone itself is worth recording.",
    relatedCase: "Daraxonrasib in pancreatic cancer",
    relatedConcepts: ["Clinical trial design", "Translational oncology"],
  },
  {
    id: "int-003",
    title: "Publication: cryo-EM structures of KRAS G12D in multiple conformational states",
    diseaseArea: "Pancreatic cancer / Lung cancer",
    source: "PubMed",
    sourceType: "Journal publication",
    dateDetected: "2026-05-12",
    priority: "Medium",
    candidateType: "Update existing case",
    status: "New",
    editorialNote: "New structural data on the G12D variant. May affect accuracy of structural biology and medicinal chemistry concept pages.",
    filterCategory: "Update",
    summary:
      "A structural biology paper reports cryo-EM structures of KRAS G12D in GDP-bound and GTP-bound states, resolving conformational differences in the switch-II region. The authors identify a transient pocket not previously characterized for G12D.",
    whyLogged:
      "Publication matches watched keywords (KRAS, G12D, switch-II) and is directly relevant to existing concept pages on structural biology and medicinal chemistry.",
    handlingNote: "Review the paper. If the pocket characterization affects descriptions on the structural biology or medicinal chemistry concept pages, draft an update.",
    relatedCase: "Daraxonrasib in pancreatic cancer",
    relatedConcepts: ["Structural biology", "Medicinal chemistry", "Chemical biology"],
  },
  {
    id: "int-004",
    title: "FDA grants fast track designation to KRAS G12C inhibitor for pancreatic cancer",
    diseaseArea: "Pancreatic cancer",
    source: "FDA press release",
    sourceType: "Regulatory milestone",
    dateDetected: "2026-05-11",
    priority: "Medium",
    candidateType: "Background / supporting",
    status: "Reviewed",
    editorialNote: "G12C, not G12D — different mutation from daraxonrasib. Relevant as context but not a direct update to the existing case.",
    filterCategory: "New trial signal",
    summary:
      "The FDA has granted fast track designation to a covalent KRAS G12C inhibitor for the treatment of advanced pancreatic cancer. The designation applies to a company's ongoing phase 2 trial.",
    whyLogged:
      "Regulatory event in a watched disease area (pancreatic cancer) for a watched molecular target (KRAS). Logged automatically.",
    handlingNote: "Log as background. The G12C mutation is less prevalent in pancreatic cancer than G12D, but this regulatory event is part of the broader KRAS landscape. May be referenced in future case or concept page updates.",
    relatedCase: "Daraxonrasib in pancreatic cancer",
    relatedConcepts: ["Clinical trial design", "Translational oncology", "Medicinal chemistry"],
  },
  {
    id: "int-005",
    title: "Phase 2 results presented: bispecific T-cell engager in HER2-low gastric cancer",
    diseaseArea: "Gastric cancer",
    source: "ASCO abstract",
    sourceType: "Conference presentation",
    dateDetected: "2026-05-10",
    priority: "Medium",
    candidateType: "New case candidate",
    status: "In progress",
    editorialNote: "Novel modality outside current focus. Being evaluated as a potential second TrialLineage case.",
    filterCategory: "Potential new case",
    summary:
      "A bispecific antibody engaging T cells and HER2 showed early activity signals in HER2-low gastric adenocarcinoma in a phase 2 expansion cohort. Response rate and duration data were presented.",
    whyLogged:
      "Conference abstract with clinical data for a trial in a candidate expansion disease area (gastric cancer). Logged for case candidacy evaluation.",
    handlingNote: "Evaluate whether this trial has a sufficiently traceable and editorially interesting scientific lineage for a new TrialLineage case page. Draft a preliminary lineage outline if proceeding.",
    relatedCase: "None yet",
    relatedConcepts: ["Clinical trial design", "Translational oncology"],
  },
  {
    id: "int-006",
    title: "Publication: acquired resistance mechanisms to covalent KRAS G12C inhibitors",
    diseaseArea: "Lung cancer / Pancreatic cancer",
    source: "PubMed",
    sourceType: "Journal publication",
    dateDetected: "2026-05-09",
    priority: "Medium",
    candidateType: "Update existing case",
    status: "New",
    editorialNote: "Resistance data relevant to the medicinal chemistry branch-point discussion on mutation-specific vs. pan-RAS strategies.",
    filterCategory: "Update",
    summary:
      "A study characterizes acquired resistance to covalent KRAS G12C inhibitors, identifying secondary KRAS mutations that alter switch-II pocket geometry and reduce drug binding. The authors discuss implications for next-generation compound design.",
    whyLogged:
      "Publication matches watched keywords (KRAS, resistance, covalent inhibitor). Relevant to accuracy of medicinal chemistry and chemical biology concept pages.",
    handlingNote: "Review the paper. Check whether the medicinal chemistry concept page discussion of resistance and the branch-point section on mutation-specific strategies needs updating.",
    relatedCase: "Daraxonrasib in pancreatic cancer",
    relatedConcepts: ["Medicinal chemistry", "Chemical biology", "Structural biology"],
  },
  {
    id: "int-007",
    title: "Phase 1 trial registered: in vivo CRISPR therapy for sickle cell disease variant",
    diseaseArea: "Sickle cell disease",
    source: "ClinicalTrials.gov",
    sourceType: "Trial registration",
    dateDetected: "2026-05-08",
    priority: "Low",
    candidateType: "Background / supporting",
    status: "Reviewed",
    editorialNote: "Outside current focus areas. Logged as a future case candidate if platform expands to rare disease and gene-editing modalities.",
    filterCategory: "New trial signal",
    summary:
      "An in vivo CRISPR-based therapy for a sickle cell disease variant has been registered for a phase 1 trial. The approach delivers editing machinery directly rather than requiring ex vivo cell modification.",
    whyLogged:
      "Trial registration for a novel therapeutic modality (in vivo gene editing). Logged because it represents a potentially strong future case with a traceable scientific lineage.",
    handlingNote: "No action needed now. Retain in the log as a future candidate. Revisit when TrialLineage considers expansion to rare disease or gene-editing modalities.",
    relatedCase: "None",
    relatedConcepts: [],
  },
  {
    id: "int-008",
    title: "CDK4/6 inhibitor meets phase 3 primary endpoint in HR+ breast cancer",
    diseaseArea: "Breast cancer",
    source: "Company press release",
    sourceType: "Results announcement",
    dateDetected: "2026-05-07",
    priority: "Low",
    candidateType: "Ignore",
    status: "Ignored",
    editorialNote: "Well-covered therapeutic area. Discovery lineage not sufficiently distinctive for early platform use.",
    filterCategory: "Potential new case",
    summary:
      "A next-generation CDK4/6 inhibitor met its primary endpoint in a phase 3 trial in HR-positive, HER2-negative metastatic breast cancer.",
    whyLogged:
      "Phase 3 result for a targeted therapy in solid tumors. Logged because it crossed the signal threshold for trial milestone events.",
    handlingNote: "Classified as ignore. The CDK4/6 inhibitor space is extensively covered elsewhere, and the scientific lineage does not offer the editorial distinctiveness TrialLineage prioritizes. Retain in the log but no action.",
    relatedCase: "None",
    relatedConcepts: [],
  },
];

const statusStyle: Record<Status, string> = {
  New: "bg-blue-50 text-blue-700 border-blue-200",
  Reviewed: "bg-stone-100 text-stone-600 border-stone-300",
  "In progress": "bg-amber-50 text-amber-700 border-amber-200",
  Published: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Ignored: "bg-stone-50 text-stone-400 border-stone-200",
};

const priorityStyle: Record<Priority, string> = {
  High: "text-red-700 bg-red-50",
  Medium: "text-amber-700 bg-amber-50",
  Low: "text-stone-500 bg-stone-50",
};

const candidateTypeStyle: Record<CandidateType, string> = {
  "New case candidate": "text-blue-700",
  "Update existing case": "text-amber-700",
  "Background / supporting": "text-stone-500",
  Ignore: "text-stone-400",
};

const filterTabs: { label: string; value: FilterCategory | "All" }[] = [
  { label: "All", value: "All" },
  { label: "New trial signals", value: "New trial signal" },
  { label: "Potential new cases", value: "Potential new case" },
  { label: "Updates", value: "Update" },
  { label: "Needs review", value: "Needs review" },
];

export default function ProductionRoomPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory | "All">("All");

  const filtered =
    activeFilter === "All"
      ? items
      : items.filter((item) => item.filterCategory === activeFilter);

  const selected = items.find((item) => item.id === selectedId) ?? null;

  const counts = {
    logged: items.length,
    candidates: items.filter((i) => i.candidateType === "New case candidate").length,
    awaiting: items.filter((i) => i.status === "New" || i.status === "In progress").length,
    published: 1,
  };

  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-[88rem] px-6 py-5 lg:px-10">
          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                TrialLineage Production Room
              </h1>
              <p className="mt-0.5 text-sm text-stone-500">
                Trial signals are logged by default. This room classifies and
                routes them.
              </p>
            </div>
            <div className="hidden items-center gap-4 text-sm md:flex">
              <a
                href="/"
                className="text-stone-500 transition hover:text-stone-900"
              >
                Public site
              </a>
              <a
                href="/concepts"
                className="text-stone-500 transition hover:text-stone-900"
              >
                Concepts
              </a>
              <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-medium text-stone-200">
                Internal
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[88rem] px-6 py-6 lg:px-10">
        {/* Summary row */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Logged signals", count: counts.logged },
            { label: "New case candidates", count: counts.candidates },
            { label: "Awaiting handling", count: counts.awaiting },
            { label: "Published cases", count: counts.published },
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-xl border border-stone-200 bg-white px-5 py-4"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-stone-500">
                {c.label}
              </p>
              <p className="mt-1.5 text-2xl font-semibold tracking-tight">
                {c.count}
              </p>
            </div>
          ))}
        </div>

        {/* Framing */}
        <div className="mt-5 rounded-xl border border-stone-200 bg-white px-5 py-3.5">
          <p className="text-xs leading-5 text-stone-500">
            Trial announcements, status updates, publications, and regulatory
            events are logged automatically from watched sources. The
            Production Room does not decide whether a signal is scientifically
            worthwhile — it classifies how each signal should be handled:
            <span className="font-medium text-stone-700"> new case</span>,
            <span className="font-medium text-stone-700"> update to existing case</span>,
            <span className="font-medium text-stone-700"> background / supporting</span>, or
            <span className="font-medium text-stone-700"> ignore</span>.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                activeFilter === tab.value
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-200 bg-white text-stone-600 hover:border-stone-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main layout */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.48fr]">
          {/* Intake list */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.14em] text-stone-400">
              Signal log &middot; {filtered.length} item
              {filtered.length !== 1 ? "s" : ""}
            </p>

            <div className="space-y-2">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full rounded-xl border bg-white px-5 py-4 text-left transition ${
                    selectedId === item.id
                      ? "border-stone-400 ring-1 ring-stone-300"
                      : "border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium leading-snug text-stone-900">
                        {item.title}
                      </p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500">
                        <span>{item.diseaseArea}</span>
                        <span className="text-stone-300">|</span>
                        <span>{item.source}</span>
                        <span className="text-stone-300">|</span>
                        <span>{item.sourceType}</span>
                        <span className="text-stone-300">|</span>
                        <span>{item.dateDetected}</span>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityStyle[item.priority]}`}
                      >
                        {item.priority}
                      </span>
                      <span
                        className={`rounded-full border px-2 py-0.5 text-xs font-medium ${statusStyle[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                    <span className={`font-medium ${candidateTypeStyle[item.candidateType]}`}>
                      {item.candidateType}
                    </span>
                    <span className="text-stone-500">
                      {item.editorialNote}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            {selected ? (
              <div className="rounded-xl border border-stone-200 bg-white p-5">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Detail
                  </p>
                  <div className="flex gap-1.5">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityStyle[selected.priority]}`}
                    >
                      {selected.priority}
                    </span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs font-medium ${statusStyle[selected.status]}`}
                    >
                      {selected.status}
                    </span>
                  </div>
                </div>
                <h2 className="mt-2 text-sm font-semibold leading-snug">
                  {selected.title}
                </h2>
                <p className="mt-1 text-xs text-stone-500">
                  {selected.source} &middot; {selected.sourceType} &middot;{" "}
                  {selected.dateDetected}
                </p>

                <div className="mt-4 space-y-3.5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                      Summary
                    </p>
                    <p className="mt-1 text-sm leading-6 text-stone-700">
                      {selected.summary}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                      Why logged
                    </p>
                    <p className="mt-1 text-sm leading-6 text-stone-700">
                      {selected.whyLogged}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                        Related case
                      </p>
                      <p className="mt-1 text-sm text-stone-700">
                        {selected.relatedCase || "—"}
                      </p>
                    </div>
                    <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                      Handling
                    </p>
                    <p className={`mt-1 text-sm font-medium ${candidateTypeStyle[selected.candidateType]}`}>
                        {selected.candidateType}
                      </p>
                    </div>
                  </div>

                  {selected.relatedConcepts.length > 0 && (
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                        Related concepts
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {selected.relatedConcepts.map((c) => (
                          <span
                            key={c}
                            className="rounded-full border border-stone-200 px-2 py-0.5 text-xs text-stone-600"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                      How to handle
                    </p>
                    <p className="mt-1 text-sm leading-6 text-stone-700">
                      {selected.handlingNote}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                      Editorial note
                    </p>
                    <p className="mt-1 text-sm leading-6 text-stone-600 italic">
                      {selected.editorialNote}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 border-t border-stone-100 pt-4">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                    Actions
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button className="rounded-full bg-stone-900 px-3.5 py-1.5 text-xs font-medium text-white transition hover:bg-stone-700">
                      Open public case
                    </button>
                    <button className="rounded-full border border-stone-300 px-3.5 py-1.5 text-xs font-medium text-stone-700 transition hover:border-stone-900">
                      Classify: new case
                    </button>
                    <button className="rounded-full border border-stone-300 px-3.5 py-1.5 text-xs font-medium text-stone-700 transition hover:border-stone-900">
                      Classify: update existing
                    </button>
                    <button className="rounded-full border border-stone-300 px-3.5 py-1.5 text-xs font-medium text-stone-700 transition hover:border-stone-900">
                      Classify: background
                    </button>
                    <button className="rounded-full border border-stone-300 px-3.5 py-1.5 text-xs font-medium text-stone-700 transition hover:border-stone-900">
                      Classify: ignore
                    </button>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button className="rounded-full border border-stone-200 px-3.5 py-1.5 text-xs text-stone-500 transition hover:border-stone-400 hover:text-stone-700">
                      Add note
                    </button>
                    <button className="rounded-full border border-stone-200 px-3.5 py-1.5 text-xs text-stone-500 transition hover:border-stone-400 hover:text-stone-700">
                      Change priority
                    </button>
                    <button className="rounded-full border border-stone-200 px-3.5 py-1.5 text-xs text-stone-500 transition hover:border-stone-400 hover:text-stone-700">
                      Change status
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-stone-300 bg-white/50 px-6 py-10 text-center">
                <p className="text-sm text-stone-400">
                  Select a logged signal to view details and classify it.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Reference footer */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-stone-200 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
              Status values
            </p>
            <div className="mt-3 space-y-2">
              {(
                [
                  ["New", "Detected, not yet reviewed"],
                  ["Reviewed", "Seen by editorial, awaiting decision"],
                  ["In progress", "Active editorial work underway"],
                  ["Published", "Live on the public site"],
                  ["Ignored", "Not relevant at this time"],
                ] as const
              ).map(([s, desc]) => (
                <div key={s} className="flex items-center gap-2.5">
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${statusStyle[s]}`}
                  >
                    {s}
                  </span>
                  <p className="text-xs text-stone-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
              Handling categories
            </p>
            <div className="mt-3 space-y-2">
              {(
                [
                  ["New case candidate", "Signal may justify a new TrialLineage case page"],
                  ["Update existing case", "Relevant to a case or concept page already published"],
                  ["Background / supporting", "Worth retaining in the log, no editorial action now"],
                  ["Ignore", "Not relevant to TrialLineage at this time"],
                ] as [CandidateType, string][]
              ).map(([ct, desc]) => (
                <div key={ct} className="flex items-center gap-2.5">
                  <span
                    className={`shrink-0 text-xs font-medium ${candidateTypeStyle[ct]}`}
                  >
                    {ct}
                  </span>
                  <p className="text-xs text-stone-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
