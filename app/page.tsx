import Link from "next/link";

export default function HomePage() {
  const conceptLinks: { label: string; href?: string }[] = [
    { label: "Oncogene discovery", href: "/concept/oncogene-discovery" },
    { label: "Protein signaling biology", href: "/concept/protein-signaling-biology" },
    { label: "Pancreatic precursor lesion biology" },
    { label: "Chemical biology" },
    { label: "Medicinal chemistry" },
    { label: "Structural biology" },
    { label: "Translational oncology" },
    { label: "Clinical trial design", href: "/concept/clinical-trial-design" },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                TrialLineage
              </p>
            </div>
            <nav className="hidden gap-6 text-sm text-stone-600 md:flex">
              <a href="#featured-case" className="transition hover:text-stone-900">
                Featured Case
              </a>
              <a href="#how-it-works" className="transition hover:text-stone-900">
                How It Works
              </a>
              <a href="#concepts" className="transition hover:text-stone-900">
                Concepts
              </a>
            </nav>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-stone-500">
              Public-facing science lineage platform
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              The scientific lineage behind human disease breakthroughs
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              TrialLineage traces drugs, clinical trials, and medical advances
              back through the basic science, enabling methods, translational
              work, and research communities that made them possible.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#featured-case"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
              >
                Explore the first case
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-900 hover:text-stone-900"
              >
                How TrialLineage works
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
              Why this exists
            </p>
            <p className="mt-4 text-base leading-7 text-stone-700">
              Most medical breakthroughs are presented as isolated events. In
              reality, they emerge from decades of interrelated inquiry:
              molecular biology, disease modeling, chemistry, clinical
              translation, failed paths, and enabling tools.
            </p>
            <p className="mt-4 text-base leading-7 text-stone-700">
              TrialLineage is designed to make that hidden structure visible in
              plain language, while preserving scientific seriousness and room
              for deeper exploration.
            </p>
          </div>
        </div>
      </section>

      <section id="featured-case" className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Featured lineage
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              Daraxonrasib in pancreatic cancer
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              A new KRAS-directed therapy becomes much more understandable when
              traced backward through oncogene discovery, protein signaling
              biology, pancreatic cancer development, structural biology,
              medicinal chemistry, translational oncology, and human trials.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                What the page will do
              </p>

              <ul className="mt-6 space-y-4 text-stone-700">
                <li>
                  <span className="font-medium text-stone-900">Summary view:</span>{" "}
                  fast explanation of why the case matters now.
                </li>
                <li>
                  <span className="font-medium text-stone-900">Deep-dive view:</span>{" "}
                  fuller scientific history and linked background fields.
                </li>
                <li>
                  <span className="font-medium text-stone-900">Lineage timeline:</span>{" "}
                  key discoveries and turning points across decades.
                </li>
                <li>
                  <span className="font-medium text-stone-900">Offshoot explainers:</span>{" "}
                  side pages for the fields that made the case possible.
                </li>
                <li>
                  <span className="font-medium text-stone-900">Uncertainty layer:</span>{" "}
                  what remains unresolved or still developing.
                </li>
              </ul>

              <div className="mt-8">
                <a
                  href="#concepts"
                  className="inline-flex items-center rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900 hover:text-stone-900"
                >
                  View core concept areas
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-stone-900 p-8 text-stone-100 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-400">
                Reading modes
              </p>

              <div className="mt-6 space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.16em] text-stone-400">
                    Summary
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-200">
                    For readers who want the breakthrough, its significance, and
                    the key scientific roots in a compact public-facing format.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.16em] text-stone-400">
                    Deep dive
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-200">
                    For readers who want the fuller historical chain, related
                    disciplines, failed or indirect paths, and the translational
                    arc into human relevance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              A layered explanation system, not just a news summary
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6">
              <p className="text-sm font-medium text-stone-900">1. Breakthrough</p>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Start with a drug, trial, or clinical development that matters
                now in human disease.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6">
              <p className="text-sm font-medium text-stone-900">2. Reverse lineage</p>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Trace backward through disease biology, enabling methods,
                chemistry, and prior discoveries.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6">
              <p className="text-sm font-medium text-stone-900">3. Offshoots</p>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Open linked explainers for related fields so the main page stays
                readable while deeper understanding remains available.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6">
              <p className="text-sm font-medium text-stone-900">4. Ongoing updates</p>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Evolving pages can later support monitored updates, new trial
                milestones, and expanding concept connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="concepts" className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Core concept areas
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              The interrelated fields behind one breakthrough
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              One case can connect multiple scientific domains. These linked
              concept areas will become reusable explainer pages across the
              platform.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {conceptLinks.map((concept) =>
              concept.href ? (
                <Link
                  key={concept.label}
                  href={concept.href}
                  className="rounded-[1.25rem] border border-stone-200 bg-white px-5 py-4 text-sm font-medium text-stone-800 shadow-sm transition hover:border-stone-400 hover:bg-stone-50 hover:text-stone-900"
                >
                  {concept.label}
                  <span className="mt-1.5 block text-xs font-normal text-stone-500">
                    Read explainer →
                  </span>
                </Link>
              ) : (
                <div
                  key={concept.label}
                  className="rounded-[1.25rem] border border-stone-200 bg-white px-5 py-4 text-sm font-medium text-stone-800 shadow-sm"
                >
                  {concept.label}
                  <span className="mt-1.5 block text-xs font-normal text-stone-400">
                    Coming soon
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Early build
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
              The first version of TrialLineage is being built as a public-facing
              lineage system for human disease breakthroughs, with room for
              deeper case pages, reusable concept explainers, and a future
              production layer that supports careful updates over time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}