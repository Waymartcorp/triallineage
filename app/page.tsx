import Link from "next/link";

export default function HomePage() {
  const lineages = {
    "Cancer biology and targeted therapy": [
      {
        title: "Daraxonrasib in pancreatic cancer",
        subtitle: "KRAS-directed therapy traced through oncogene discovery, structural biology, and medicinal chemistry",
        phase: "Phase 2",
        status: "Live" as const,
        href: "/case/daraxonrasib-pancreatic-cancer",
      },
      {
        title: "Cancer immunotherapy / checkpoint inhibitors",
        subtitle: "Immune checkpoint blockade traced through T-cell biology, immune tolerance, and tumor evasion",
        phase: null,
        status: "Planned" as const,
        href: null,
      },
    ],
    "Gene therapy and delivery": [
      {
        title: "Gene therapy for inherited retinal disease",
        subtitle: "Gene therapy for inherited blindness traced through retinal biology, AAV vectors, and surgical delivery",
        phase: "Approved (Luxturna)",
        status: "Draft" as const,
        href: "/case/gene-therapy-inherited-retinal-disease",
      },
    ],
    "RNA medicine and gene regulation": [
      {
        title: "RNA-targeted therapy for Angelman syndrome",
        subtitle: "Antisense oligonucleotide therapy traced through UBE3A biology, genomic imprinting, and CNS delivery",
        phase: "Phase 3",
        status: "Draft" as const,
        href: "/case/rna-targeted-therapy-angelman-syndrome",
      },
    ],
    "Metabolic disease": [
      {
        title: "GLP-1 therapies and metabolic disease",
        subtitle: "GLP-1 medicines traced through gut hormone biology, incretin signaling, and peptide pharmacology",
        phase: null,
        status: "Planned" as const,
        href: null,
      },
    ],
  };

  const statusStyle = {
    Live: "bg-emerald-50 text-emerald-700",
    Draft: "bg-amber-50 text-amber-700",
    Planned: "bg-stone-100 text-stone-500",
  };

  const conceptSamples = [
    { label: "Oncogene discovery", href: "/concept/oncogene-discovery" },
    { label: "Gene therapy", href: "/concept/gene-therapy" },
    { label: "Antisense oligonucleotides", href: "/concept/antisense-oligonucleotides" },
    { label: "Clinical trial design", href: "/concept/clinical-trial-design" },
    { label: "RNA biology", href: "/concept/rna-biology" },
    { label: "Translational medicine", href: "/concept/translational-medicine" },
    { label: "Retinal biology", href: "/concept/retinal-biology" },
    { label: "Structural biology", href: "/concept/structural-biology" },
  ];

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
              <Link href="/cases" className="transition hover:text-stone-900">Lineages</Link>
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
            The scientific histories behind human disease breakthroughs.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-700">
            TrialLineage traces clinical trials and emerging therapies back
            through the discoveries, tools, concepts, and decisions that made
            them possible.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cases"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Explore lineages
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-900 hover:text-stone-900"
            >
              About TrialLineage
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Explore lineages — grouped by domain */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Lineage library
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Scientific lineages by domain
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-700">
            Each lineage starts with a clinical trial or emerging therapy and
            traces backward through the full chain of science that made it
            possible.
          </p>

          <div className="mt-12 space-y-10">
            {Object.entries(lineages).map(([domain, items]) => (
              <div key={domain}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                  {domain}
                </h3>
                <div className="mt-4 space-y-3">
                  {items.map((item) => {
                    const inner = (
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2.5">
                            <p className="text-base font-semibold text-stone-900">{item.title}</p>
                            {item.phase && (
                              <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                                {item.phase}
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm leading-7 text-stone-600">{item.subtitle}</p>
                        </div>
                        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle[item.status]}`}>
                          {item.status}
                        </span>
                      </div>
                    );
                    if (item.href) {
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block rounded-2xl border border-stone-200 bg-white px-6 py-5 transition hover:border-stone-400 hover:shadow-sm"
                        >
                          {inner}
                        </Link>
                      );
                    }
                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-dashed border-stone-300 bg-white/60 px-6 py-5"
                      >
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How a lineage works */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              How a lineage works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              From a trial back through the science
            </h2>
            <p className="mt-6 text-base leading-8 text-stone-700">
              Each TrialLineage history starts with a specific clinical trial or
              medical advance, then traces backward through the discoveries,
              model systems, methods, failed paths, and research communities
              that made it possible.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Trial anchor", "Disease problem", "Scientific concepts", "Discovery chain", "Knowns and unknowns"].map((step, i) => (
                <span key={step} className="flex items-center gap-2 text-sm text-stone-600">
                  {i > 0 && <span className="text-stone-300">→</span>}
                  <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 font-medium text-stone-700">
                    {step}
                  </span>
                </span>
              ))}
            </div>

            <p className="mt-8 text-base leading-8 text-stone-700">
              The goal is to show how medical progress actually develops over
              time — not as a single breakthrough moment, but as a chain of
              scientific work spanning decades and disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Concepts behind the lineages */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Concept explainers
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            The scientific ideas behind the lineages
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-700">
            Each lineage draws on multiple scientific fields. Concept pages
            provide plain-language explainers of the ideas that appear along the
            discovery chain.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {conceptSamples.map((concept) => (
              <Link
                key={concept.label}
                href={concept.href}
                className="rounded-[1.25rem] border border-stone-200 bg-white px-5 py-4 text-sm font-medium text-stone-800 transition hover:border-stone-400 hover:shadow-sm hover:text-stone-900"
              >
                {concept.label}
                <span className="mt-1.5 block text-xs font-normal text-stone-500">
                  Read explainer →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/concepts" className="text-sm font-medium text-stone-700 transition hover:text-stone-900">
              Browse all concept pages →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Support the work */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Support TrialLineage
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Help build a public library of scientific lineages behind human
              disease breakthroughs.
            </p>
            <p className="mt-6 text-base leading-8 text-stone-700">
              TrialLineage is an independent public science project. Your
              support funds new lineage investigations, source review, concept
              explainers, educational materials, and site maintenance.
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

      {/* Footer */}
      <footer className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <p className="text-center text-sm leading-7 text-stone-600">
            TrialLineage exists to help the public see where medical
            breakthroughs really come from — and why basic science matters.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-stone-500">
            <Link href="/about" className="hover:text-stone-900">About</Link>
            <Link href="/mission" className="hover:text-stone-900">Mission</Link>
            <Link href="/editorial-standards" className="hover:text-stone-900">Editorial Standards</Link>
            <Link href="/support" className="hover:text-stone-900">Support</Link>
            <Link href="/disclaimer" className="hover:text-stone-900">Disclaimer</Link>
            <Link href="/cases" className="hover:text-stone-900">Lineages</Link>
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
