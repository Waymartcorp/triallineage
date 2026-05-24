import Link from "next/link";

const publishedCases = [
  {
    slug: "daraxonrasib-pancreatic-cancer",
    title: "Daraxonrasib in pancreatic cancer",
    subtitle: "KRAS-directed therapy traced through oncogene discovery, structural biology, medicinal chemistry, and translational oncology",
    status: "published" as const,
    note: null,
  },
  {
    slug: "gene-therapy-inherited-retinal-disease",
    title: "Gene therapy for inherited retinal disease",
    subtitle: "Gene therapy for inherited blindness traced through retinal biology, disease genetics, AAV vector engineering, and surgical delivery",
    status: "draft" as const,
    note: null,
  },
  {
    slug: "rna-targeted-therapy-angelman-syndrome",
    title: "RNA-targeted therapy for Angelman syndrome",
    subtitle: "How UBE3A biology and antisense oligonucleotides led to a Phase 3 rare-disease trial (REVEAL / NCT06914609)",
    status: "draft" as const,
    note: "Part of the broader RNA medicine for rare genetic disease platform lineage.",
  },
];

const upcomingCases = [
  {
    title: "GLP-1 therapies and metabolic disease",
    advance: "GLP-1 medicines for diabetes and obesity",
    lineage: "Gut hormone biology, incretin signaling, peptide pharmacology, metabolic physiology",
    lesson: "How basic hormone biology became large-scale metabolic medicine",
  },
  {
    title: "Cancer immunotherapy / checkpoint inhibitors",
    advance: "Immune checkpoint blockade for cancer",
    lineage: "T-cell biology, immune tolerance, tumor immune evasion, monoclonal antibody engineering",
    lesson: "How basic immunology changed cancer treatment",
  },
];

const platformLineages = [
  {
    title: "RNA medicine for rare genetic disease",
    description:
      "RNA-targeted therapies — including antisense oligonucleotides, siRNA, exon skipping, and splicing modulators — represent a platform with multiple trial-anchored lineages. The Angelman syndrome lineage above is the first published from this platform. Additional RNA medicine lineages may follow.",
  },
];

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm uppercase tracking-[0.18em] text-stone-500 transition hover:text-stone-900">
              TrialLineage
            </Link>
            <nav className="hidden gap-6 text-sm text-stone-600 md:flex">
              <Link href="/cases" className="font-medium text-stone-900">Lineages</Link>
              <Link href="/concepts" className="transition hover:text-stone-900">Concepts</Link>
              <Link href="/about" className="transition hover:text-stone-900">About</Link>
              <Link href="/support" className="transition hover:text-stone-900">Support</Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Lineage library
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Scientific lineages behind disease breakthroughs
          </h1>
          <p className="mt-6 text-base leading-8 text-stone-700">
            Each history starts with a current clinical development and traces backward through the full scientific lineage that made it possible — the discoveries, tools, models, failures, and decisions across decades of research.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-xl font-semibold tracking-tight">
            Published lineages
          </h2>
          <div className="mt-6 space-y-4">
            {publishedCases.map((c) => (
              <Link
                key={c.slug}
                href={`/case/${c.slug}`}
                className="block rounded-2xl border border-stone-200 bg-white px-6 py-5 transition hover:border-stone-400 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold text-stone-900">{c.title}</p>
                    <p className="mt-1.5 text-sm leading-7 text-stone-600">{c.subtitle}</p>
                    {c.note && (
                      <p className="mt-1.5 text-xs leading-6 text-stone-500 italic">{c.note}</p>
                    )}
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    c.status === "published"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}>
                    {c.status === "published" ? "Live" : "Draft"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-xl font-semibold tracking-tight">
            Lineages in development
          </h2>
          <p className="mt-3 text-sm leading-7 text-stone-600">
            These lineages are under active research and will be published as investigations are completed.
          </p>
          <div className="mt-6 space-y-4">
            {upcomingCases.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-6 py-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-medium text-stone-700">{c.title}</p>
                    <p className="mt-1.5 text-sm leading-6 text-stone-600">
                      <span className="font-medium text-stone-700">Medical advance:</span> {c.advance}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-stone-500">
                      <span className="font-medium text-stone-600">Lineage:</span> {c.lineage}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-stone-500 italic">
                      {c.lesson}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-stone-300 px-2.5 py-0.5 text-xs font-medium text-stone-500">
                    In development
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-xl font-semibold tracking-tight">
            Platform lineages
          </h2>
          <p className="mt-3 text-sm leading-7 text-stone-600">
            Some scientific platforms span multiple trial-anchored lineages. These are tracked as broader platform lineages, with individual histories published separately.
          </p>
          <div className="mt-6 space-y-4">
            {platformLineages.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-stone-200 bg-white px-6 py-5"
              >
                <p className="text-base font-medium text-stone-700">{p.title}</p>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {p.description}
                </p>
                <span className="mt-3 inline-block rounded-full border border-stone-300 px-2.5 py-0.5 text-xs font-medium text-stone-500">
                  Platform lineage in development
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-10">
          <div className="rounded-2xl border border-stone-200 bg-white px-6 py-6 text-center">
            <p className="text-sm text-stone-700">
              Want to suggest a disease area or scientific history for investigation?
            </p>
            <p className="mt-2 text-sm text-stone-500">
              TrialLineage welcomes suggestions from patients, researchers, and the public.
            </p>
            <p className="mt-3 text-sm font-medium text-stone-900">
              cases@triallineage.org
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-wrap gap-6 text-xs text-stone-500">
            <Link href="/about" className="hover:text-stone-900">About</Link>
            <Link href="/mission" className="hover:text-stone-900">Mission</Link>
            <Link href="/editorial-standards" className="hover:text-stone-900">Editorial Standards</Link>
            <Link href="/support" className="hover:text-stone-900">Support</Link>
            <Link href="/disclaimer" className="hover:text-stone-900">Disclaimer</Link>
            <Link href="/cases" className="hover:text-stone-900">Lineages</Link>
            <Link href="/concepts" className="hover:text-stone-900">Concepts</Link>
          </div>
          <p className="mt-4 text-xs text-stone-400">
            TrialLineage is a public science platform. Not medical advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
