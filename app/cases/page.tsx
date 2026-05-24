import Link from "next/link";

const publishedCases = [
  {
    slug: "daraxonrasib-pancreatic-cancer",
    title: "Daraxonrasib in pancreatic cancer",
    subtitle: "KRAS-directed therapy traced through oncogene discovery, structural biology, medicinal chemistry, and translational oncology",
    status: "published" as const,
  },
];

const upcomingCases = [
  {
    title: "OCU400 in inherited retinal disease",
    subtitle: "Gene therapy for retinitis pigmentosa traced through retinal biology, AAV vector development, and regulatory pathways",
    status: "in development" as const,
  },
  {
    title: "A rare disease or gene therapy case",
    subtitle: "Gene replacement or editing approach traced through disease genetics, delivery systems, and clinical translation",
    status: "in development" as const,
  },
  {
    title: "A cancer immunology or targeted oncology case",
    subtitle: "Immune checkpoint, CAR-T, or precision oncology program traced through tumor immunology and clinical development",
    status: "in development" as const,
  },
  {
    title: "A neuroscience, metabolic, or cardiovascular case",
    subtitle: "A non-oncology breakthrough traced through disease biology, target validation, and human trials",
    status: "in development" as const,
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
              <Link href="/cases" className="font-medium text-stone-900">Cases</Link>
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
            Case library
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Scientific lineages behind disease breakthroughs
          </h1>
          <p className="mt-6 text-base leading-8 text-stone-700">
            Each case page starts with a current clinical development and traces backward through the full scientific history that made it possible — the discoveries, tools, models, failures, and decisions across decades of research.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-xl font-semibold tracking-tight">
            Published cases
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
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                    Live
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
            Cases in development
          </h2>
          <p className="mt-3 text-sm leading-7 text-stone-600">
            These cases are under active research and will be published as lineage investigations are completed.
          </p>
          <div className="mt-6 space-y-4">
            {upcomingCases.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-6 py-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-medium text-stone-700">{c.title}</p>
                    <p className="mt-1.5 text-sm leading-7 text-stone-500">{c.subtitle}</p>
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
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-10">
          <div className="rounded-2xl border border-stone-200 bg-white px-6 py-6 text-center">
            <p className="text-sm text-stone-700">
              Want to suggest a case or disease area for investigation?
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
            <Link href="/cases" className="hover:text-stone-900">Cases</Link>
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
