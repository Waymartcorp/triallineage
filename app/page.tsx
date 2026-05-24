import Link from "next/link";

export default function HomePage() {
  const conceptLinks = [
    { label: "Clinical trial design", href: "/concept/clinical-trial-design" },
    { label: "Oncogene discovery", href: "/concept/oncogene-discovery" },
    { label: "Protein signaling biology", href: "/concept/protein-signaling-biology" },
    { label: "Pancreatic precursor lesion biology", href: "/concept/pancreatic-precursor-lesion-biology" },
    { label: "Medicinal chemistry", href: "/concept/medicinal-chemistry" },
    { label: "Structural biology", href: "/concept/structural-biology" },
    { label: "Chemical biology", href: "/concept/chemical-biology" },
    { label: "Translational oncology", href: "/concept/translational-oncology" },
  ];

  const caseRoadmap = [
    {
      title: "Daraxonrasib / KRAS / pancreatic cancer",
      disease: "Pancreatic cancer",
      theme: "Oncogene-targeted therapy",
      status: "Featured case" as const,
      href: "/case/daraxonrasib-pancreatic-cancer",
    },
    {
      title: "Gene therapy for inherited retinal disease",
      disease: "Inherited retinal disease",
      theme: "Gene therapy and viral vector delivery",
      status: "In development" as const,
      href: null,
    },
    {
      title: "GLP-1 therapies and metabolic disease",
      disease: "Metabolic disease / obesity / diabetes",
      theme: "Peptide biology and receptor pharmacology",
      status: "Planned" as const,
      href: null,
    },
    {
      title: "Cancer immunotherapy",
      disease: "Oncology (multiple indications)",
      theme: "Immune checkpoint biology and T-cell engineering",
      status: "Planned" as const,
      href: null,
    },
    {
      title: "RNA medicine or rare-disease therapy",
      disease: "Rare genetic disease",
      theme: "Antisense, siRNA, or mRNA therapeutic platforms",
      status: "Planned" as const,
      href: null,
    },
  ];

  const statusStyle = {
    "Featured case": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "In development": "bg-amber-50 text-amber-700 border-amber-200",
    Planned: "bg-stone-100 text-stone-500 border-stone-200",
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm uppercase tracking-[0.18em] text-stone-500 transition hover:text-stone-900">
              TrialLineage
            </Link>
            <nav className="hidden gap-6 text-sm text-stone-600 md:flex">
              <Link href="/cases" className="transition hover:text-stone-900">Cases</Link>
              <Link href="/concepts" className="transition hover:text-stone-900">Concepts</Link>
              <Link href="/about" className="transition hover:text-stone-900">About</Link>
              <Link href="/support" className="transition hover:text-stone-900">Support</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            TrialLineage
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The science behind medical breakthroughs.
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-lg leading-8 text-stone-700">
            <p>
              Every medical breakthrough has a history. Before a treatment reaches a patient, it passes through years — often decades — of basic discovery, model systems, failed paths, enabling technologies, clinical trials, and human persistence.
            </p>
            <p>
              TrialLineage traces that hidden path.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/case/daraxonrasib-pancreatic-cancer"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Explore the first case
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-900 hover:text-stone-900"
            >
              Support the project
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Why this matters */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Breakthroughs do not appear out of nowhere.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-stone-700">
              <p>
                Medical progress is often announced at the moment of success: a promising trial, a new drug, a regulatory milestone, a breakthrough headline. But those moments are built on long chains of basic science, translational work, failed hypotheses, model systems, enabling methods, and research communities.
              </p>
              <p>
                TrialLineage makes those chains visible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured case */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Featured case
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Daraxonrasib and pancreatic cancer
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-700">
            Our first case traces a promising pancreatic cancer therapy back through KRAS biology, oncogene discovery, structural biology, medicinal chemistry, translational oncology, and clinical testing.
          </p>
          <div className="mt-8">
            <Link
              href="/case/daraxonrasib-pancreatic-cancer"
              className="inline-flex items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Read the case
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Case roadmap */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Case library in development
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A growing public library of scientific lineages
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-700">
            TrialLineage is building a public library of case histories showing where medical breakthroughs come from.
          </p>

          <div className="mt-10 space-y-4">
            {caseRoadmap.map((c) => {
              const inner = (
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold text-stone-900">{c.title}</p>
                    <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-600">
                      <span>{c.disease}</span>
                      <span className="text-stone-300">|</span>
                      <span>{c.theme}</span>
                    </div>
                  </div>
                  <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyle[c.status]}`}>
                    {c.status}
                  </span>
                </div>
              );

              if (c.href) {
                return (
                  <Link
                    key={c.title}
                    href={c.href}
                    className="block rounded-2xl border border-stone-200 bg-white px-6 py-5 transition hover:border-stone-400 hover:shadow-sm"
                  >
                    {inner}
                  </Link>
                );
              }
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-dashed border-stone-300 bg-white/60 px-6 py-5"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Concept library */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Concept explainers
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            The scientific ideas behind medical progress
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-700">
            TrialLineage cases are supported by short explainers that help readers understand the scientific ideas behind medical progress.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {conceptLinks.map((concept) => (
              <Link
                key={concept.label}
                href={concept.href}
                className="rounded-[1.25rem] border border-stone-200 bg-stone-50 px-5 py-4 text-sm font-medium text-stone-800 transition hover:border-stone-400 hover:bg-white hover:text-stone-900"
              >
                {concept.label}
                <span className="mt-1.5 block text-xs font-normal text-stone-500">
                  Read explainer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How each case works */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              How each case works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              From a trial back through the science
            </h2>
            <p className="mt-6 text-base leading-8 text-stone-700">
              Each TrialLineage case starts with a drug trial, treatment, or medical advance, then traces backward through the discoveries, model systems, methods, failed paths, and research communities that made it possible.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              The goal is to show how medical progress actually develops over time — not as a single breakthrough moment, but as a chain of scientific work.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Support section */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Support TrialLineage
            </h2>
            <p className="mt-2 text-lg text-stone-600">
              Help make the hidden history of medical progress visible.
            </p>
            <p className="mt-6 text-base leading-8 text-stone-700">
              TrialLineage is building a public science library that traces medical breakthroughs back to the discoveries, tools, model systems, failed paths, and research communities behind them. Your support helps fund new case histories, source review, public explainers, educational materials, and site maintenance.
            </p>
            <div className="mt-8">
              <Link
                href="/support"
                className="inline-flex items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
              >
                Support the project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <p className="text-center text-sm leading-7 text-stone-600">
            TrialLineage exists to help the public see where medical breakthroughs really come from — and why basic science matters.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-stone-500">
            <Link href="/about" className="hover:text-stone-900">About</Link>
            <Link href="/mission" className="hover:text-stone-900">Mission</Link>
            <Link href="/editorial-standards" className="hover:text-stone-900">Editorial Standards</Link>
            <Link href="/support" className="hover:text-stone-900">Support</Link>
            <Link href="/disclaimer" className="hover:text-stone-900">Disclaimer</Link>
            <Link href="/cases" className="hover:text-stone-900">Cases</Link>
            <Link href="/concepts" className="hover:text-stone-900">Concepts</Link>
          </div>
          <p className="mt-6 text-center text-xs text-stone-400">
            TrialLineage is a public science platform. Not medical advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
