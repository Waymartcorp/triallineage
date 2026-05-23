"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Priority = "High" | "Medium" | "Low";
type CandidateType =
  | "New case candidate"
  | "Update existing case"
  | "Background / supporting"
  | "Ignore";
type Status = "New" | "Reviewed" | "In progress" | "Published" | "Ignored";
type FilterTab = "All" | "New trial signals" | "Potential new cases" | "Updates" | "Needs review";

interface Signal {
  id: string;
  title: string;
  disease_area: string;
  source: string;
  source_type: string;
  date_detected: string;
  priority: Priority;
  candidate_type: CandidateType;
  status: Status;
  editorial_note: string;
  created_at: string;
  related_case: string | null;
  related_concepts: string[] | null;
  external_link: string | null;
  brief_summary: string | null;
  trial_identifier: string | null;
  confidence_flag: string | null;
}

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

const filterTabs: { label: string; value: FilterTab }[] = [
  { label: "All", value: "All" },
  { label: "New trial signals", value: "New trial signals" },
  { label: "Potential new cases", value: "Potential new cases" },
  { label: "Updates", value: "Updates" },
  { label: "Needs review", value: "Needs review" },
];

function matchesFilter(signal: Signal, filter: FilterTab): boolean {
  if (filter === "All") return true;
  if (filter === "New trial signals") return signal.status === "New";
  if (filter === "Potential new cases") return signal.candidate_type === "New case candidate";
  if (filter === "Updates") return signal.candidate_type === "Update existing case";
  if (filter === "Needs review") return signal.status === "Reviewed" || signal.status === "In progress";
  return true;
}

export default function ProductionRoomPage() {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const [totalCount, setTotalCount] = useState<number>(0);

  const PAGE_SIZE = 500;

  useEffect(() => {
    async function load() {
      const { data, error, count } = await supabase
        .from("production_signals")
        .select("*", { count: "exact" })
        .order("date_detected", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(PAGE_SIZE);

      if (!error && data) {
        setSignals(data as Signal[]);
        setTotalCount(count ?? data.length);
      }
      setLoading(false);
    }
    load();
  }, []);

  async function loadMore() {
    setLoadingMore(true);
    const { data, error } = await supabase
      .from("production_signals")
      .select("*")
      .order("date_detected", { ascending: false })
      .order("created_at", { ascending: false })
      .range(signals.length, signals.length + PAGE_SIZE - 1);

    if (!error && data) {
      setSignals((prev) => [...prev, ...(data as Signal[])]);
    }
    setLoadingMore(false);
  }

  async function classifySignal(id: string, candidateType: CandidateType) {
    const { error } = await supabase
      .from("production_signals")
      .update({ candidate_type: candidateType, status: "Reviewed" as Status })
      .eq("id", id);

    if (!error) {
      setSignals((prev) =>
        prev.map((s) =>
          s.id === id ? { ...s, candidate_type: candidateType, status: "Reviewed" as Status } : s
        )
      );
    }
  }

  async function updateStatus(id: string, status: Status) {
    const { error } = await supabase
      .from("production_signals")
      .update({ status })
      .eq("id", id);

    if (!error) {
      setSignals((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status } : s))
      );
    }
  }

  const filtered = signals.filter((s) => matchesFilter(s, activeFilter));
  const selected = signals.find((s) => s.id === selectedId) ?? null;

  const counts = {
    newSignals: signals.filter((s) => s.status === "New").length,
    candidates: signals.filter((s) => s.candidate_type === "New case candidate").length,
    pending: signals.filter(
      (s) => s.candidate_type === "Update existing case" && s.status !== "Published"
    ).length,
    published: signals.filter((s) => s.status === "Published").length,
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-stone-100 text-stone-500">
        <p className="text-sm">Loading signals…</p>
      </main>
    );
  }

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
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { label: "Total in database", count: totalCount },
            { label: "New signals", count: counts.newSignals },
            { label: "New case candidates", count: counts.candidates },
            { label: "Updates pending", count: counts.pending },
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
            events are logged from watched sources. The Production Room
            classifies how each signal should be handled:
            <span className="font-medium text-stone-700"> new case</span>,
            <span className="font-medium text-stone-700"> update to existing case</span>,
            <span className="font-medium text-stone-700"> background / supporting</span>, or
            <span className="font-medium text-stone-700"> ignore</span>.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-5 flex flex-wrap gap-2">
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

        {/* Empty state */}
        {signals.length === 0 ? (
          <div className="mt-8 rounded-xl border border-dashed border-stone-300 bg-white/50 px-8 py-14 text-center">
            <p className="text-sm font-medium text-stone-600">
              No signals logged yet
            </p>
            <p className="mt-2 max-w-md mx-auto text-xs leading-5 text-stone-400">
              The Production Room is ready. Manually seed trial-related signals
              into the <span className="font-medium text-stone-500">production_signals</span> table
              to begin intake, triage, and classification.
            </p>
          </div>
        ) : (
          /* Main layout */
          <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.48fr]">
            {/* Signal log */}
            <div>
              <div className="mb-3 flex items-baseline justify-between">
                <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                  Signal log &middot; {filtered.length} item
                  {filtered.length !== 1 ? "s" : ""}
                </p>
                {totalCount > signals.length && (
                  <p className="text-xs text-stone-400">
                    Showing latest {signals.length.toLocaleString()} of{" "}
                    {totalCount.toLocaleString()} total
                  </p>
                )}
              </div>

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
                          <span>{item.disease_area}</span>
                          <span className="text-stone-300">|</span>
                          <span>{item.source}</span>
                          <span className="text-stone-300">|</span>
                          <span>{item.source_type}</span>
                          <span className="text-stone-300">|</span>
                          <span>{item.date_detected}</span>
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
                      <span className={`font-medium ${candidateTypeStyle[item.candidate_type]}`}>
                        {item.candidate_type}
                      </span>
                      <span className="text-stone-500">
                        {item.editorial_note}
                      </span>
                    </div>
                  </button>
                ))}

                {filtered.length === 0 && signals.length > 0 && (
                  <div className="rounded-xl border border-dashed border-stone-200 bg-white/50 px-6 py-8 text-center">
                    <p className="text-xs text-stone-400">
                      No signals match this filter.
                    </p>
                  </div>
                )}

                {totalCount > signals.length && (
                  <button
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="mt-3 w-full rounded-xl border border-stone-200 bg-white px-5 py-3.5 text-xs font-medium text-stone-600 transition hover:border-stone-400 hover:text-stone-900 disabled:opacity-50"
                  >
                    {loadingMore
                      ? "Loading…"
                      : `Load more (${(totalCount - signals.length).toLocaleString()} remaining)`}
                  </button>
                )}
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
                    {selected.source} &middot; {selected.source_type} &middot;{" "}
                    {selected.date_detected}
                  </p>

                  <div className="mt-4 space-y-3.5">
                    {selected.brief_summary && (
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                          Summary
                        </p>
                        <p className="mt-1 text-sm leading-6 text-stone-700">
                          {selected.brief_summary}
                        </p>
                      </div>
                    )}

                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                        Editorial note
                      </p>
                      <p className="mt-1 text-sm leading-6 text-stone-600 italic">
                        {selected.editorial_note}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                          Related case
                        </p>
                        <p className="mt-1 text-sm text-stone-700">
                          {selected.related_case || "—"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                          Handling
                        </p>
                        <p className={`mt-1 text-sm font-medium ${candidateTypeStyle[selected.candidate_type]}`}>
                          {selected.candidate_type}
                        </p>
                      </div>
                    </div>

                    {selected.related_concepts && selected.related_concepts.length > 0 && (
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                          Related concepts
                        </p>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {selected.related_concepts.map((c) => (
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

                    {selected.trial_identifier && (
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                          Trial identifier
                        </p>
                        <p className="mt-1 text-sm text-stone-700 font-mono">
                          {selected.trial_identifier}
                        </p>
                      </div>
                    )}

                    {selected.external_link && (
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                          Source link
                        </p>
                        <a
                          href={selected.external_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 block text-sm text-blue-700 underline decoration-blue-200 hover:decoration-blue-500"
                        >
                          {selected.external_link}
                        </a>
                      </div>
                    )}

                    {selected.confidence_flag && (
                      <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
                        <p className="text-xs font-medium text-amber-700">
                          Caution
                        </p>
                        <p className="mt-0.5 text-xs leading-5 text-amber-600">
                          {selected.confidence_flag}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 border-t border-stone-100 pt-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-400">
                      Actions
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button className="rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-stone-700">
                        Open public case
                      </button>
                      <button
                        onClick={() => classifySignal(selected.id, "New case candidate")}
                        className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                          selected.candidate_type === "New case candidate"
                            ? "border-blue-600 bg-blue-50 text-blue-700"
                            : "border-stone-300 text-stone-700 hover:border-stone-900"
                        }`}
                      >
                        Classify: new case
                      </button>
                      <button
                        onClick={() => classifySignal(selected.id, "Update existing case")}
                        className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                          selected.candidate_type === "Update existing case"
                            ? "border-amber-600 bg-amber-50 text-amber-700"
                            : "border-stone-300 text-stone-700 hover:border-stone-900"
                        }`}
                      >
                        Classify: update existing
                      </button>
                      <button
                        onClick={() => classifySignal(selected.id, "Background / supporting")}
                        className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                          selected.candidate_type === "Background / supporting"
                            ? "border-stone-500 bg-stone-100 text-stone-600"
                            : "border-stone-300 text-stone-700 hover:border-stone-900"
                        }`}
                      >
                        Classify: background
                      </button>
                      <button
                        onClick={() => classifySignal(selected.id, "Ignore")}
                        className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                          selected.candidate_type === "Ignore"
                            ? "border-stone-400 bg-stone-50 text-stone-400"
                            : "border-stone-300 text-stone-700 hover:border-stone-900"
                        }`}
                      >
                        Classify: ignore
                      </button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button className="rounded-full border border-stone-200 px-4 py-2 text-xs text-stone-500 transition hover:border-stone-400 hover:text-stone-700">
                        Add note
                      </button>
                      <button className="rounded-full border border-stone-200 px-4 py-2 text-xs text-stone-500 transition hover:border-stone-400 hover:text-stone-700">
                        Change priority
                      </button>
                      <button className="rounded-full border border-stone-200 px-4 py-2 text-xs text-stone-500 transition hover:border-stone-400 hover:text-stone-700">
                        Change status
                      </button>
                      <button className="rounded-full border border-blue-200 px-4 py-2 text-xs font-medium text-blue-700 transition hover:border-blue-500 hover:bg-blue-50">
                        Summary
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
        )}

        {/* Reference footer */}
        {signals.length > 0 && (
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
        )}
      </div>
    </main>
  );
}
