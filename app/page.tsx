import Link from "next/link";

export default function HomePage() {
  /**
   * TrialLineage public lineage cards must be endpoint-first. Do not create
   * cards for broad therapy areas, modalities, domains, disease areas, or
   * clusters. Each card should start from a verified Phase 1–3 trial, FDA
   * approval, regulatory milestone, or similar concrete clinical/FDA-type
   * endpoint. Scientific similarities may appear as secondary tags, related
   * concepts, filters, or later interactive exploration, but clusters/domains
   * are not the main library organizing structure.
   *
   * Schema: docs/editorial/lineage-card-schema.md
   * Principles: docs/editorial/lineage-library-principles.md
   */
  const lineages = [
    {
      title: "Daraxonrasib for KRAS G12D-mutant pancreatic cancer",
      endpoint_type: "Clinical trial",
      endpoint_stage_or_status: "Phase 2",
      disease_or_condition: "Pancreatic ductal adenocarcinoma",
      intervention_or_asset: "Daraxonrasib (KRAS G12D inhibitor)",
      lineage_summary: "KRAS oncogene discovery → structural biology → covalent inhibitor chemistry → translational oncology",
      href: "/case/daraxonrasib-pancreatic-cancer",
      tags: ["KRAS", "pancreatic cancer", "targeted therapy"],
    },
    {
      title: "Luxturna for RPE65-mediated inherited retinal disease",
      endpoint_type: "FDA approval",
      endpoint_stage_or_status: "FDA Approved (2017)",
      disease_or_condition: "Leber congenital amaurosis (RPE65)",
      intervention_or_asset: "Voretigene neparvovec (AAV2-RPE65)",
      lineage_summary: "RPE65 biology → AAV vector development → animal models → subretinal delivery → rare-disease trials",
      href: "/case/gene-therapy-inherited-retinal-disease",
      tags: ["RPE65", "AAV", "gene therapy", "retinal biology"],
    },
    {
      title: "ION582 for Angelman syndrome",
      endpoint_type: "Clinical trial",
      endpoint_stage_or_status: "Phase 3",
      disease_or_condition: "Angelman syndrome",
      intervention_or_asset: "ION582 (obudanersen), antisense oligonucleotide",
      lineage_summary: "UBE3A imprinting → antisense transcript biology → ASO chemistry → CNS delivery",
      href: "/case/rna-targeted-therapy-angelman-syndrome",
      tags: ["UBE3A", "antisense oligonucleotide", "genomic imprinting"],
    },
    {
      title: "BMS-986278 for idiopathic pulmonary fibrosis",
      endpoint_type: "Clinical trial",
      endpoint_stage_or_status: "Phase 3",
      disease_or_condition: "Idiopathic pulmonary fibrosis",
      intervention_or_asset: "BMS-986278, oral LPA1 receptor antagonist",
      lineage_summary: "Fibrosis pathology → lipid signaling → LPA1 pharmacology → antifibrotic drug development",
      href: "/case/fibrosis-signaling-idiopathic-pulmonary-fibrosis",
      tags: ["LPA1", "pulmonary fibrosis", "antifibrotic"],
    },
    {
      title: "Semaglutide for cardiovascular risk reduction in obesity (Wegovy / SELECT)",
      endpoint_type: "FDA approval",
      endpoint_stage_or_status: "FDA Approved (2024)",
      disease_or_condition: "Cardiovascular disease in adults with obesity",
      intervention_or_asset: "Semaglutide 2.4 mg (Wegovy), GLP-1 receptor agonist",
      lineage_summary: "GLP-1 discovery → incretin biology → peptide pharmacology → cardiovascular outcomes trial",
      href: "/case/semaglutide-cardiovascular-risk-obesity",
      tags: ["GLP-1", "semaglutide", "cardiovascular", "SELECT trial"],
    },
    {
      title: "Pembrolizumab for MSI-H/dMMR solid tumors",
      endpoint_type: "FDA approval",
      endpoint_stage_or_status: "FDA tissue-agnostic approval",
      disease_or_condition: "MSI-H/dMMR solid tumors (tissue-agnostic)",
      intervention_or_asset: "Pembrolizumab (anti-PD-1 monoclonal antibody)",
      lineage_summary: "PD-1 biology → T-cell regulation → mismatch repair deficiency → microsatellite instability → basket trials → tissue-agnostic regulatory logic",
      href: "/case/pembrolizumab-msi-h-dmmr-solid-tumors",
      tags: ["pembrolizumab", "PD-1", "MSI-H", "dMMR", "tissue-agnostic approval", "immunotherapy"],
    },
  ];


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
            TrialLineage shows the science that made clinical trials and
            emerging therapies possible — the discoveries, tools, concepts,
            and decisions behind them.
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

      {/* 2. Lineage library */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Lineage library
          </p>

          <div className="mt-8 space-y-4">
            {lineages.map((item) => {
              const inner = (
                <>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                      {item.endpoint_stage_or_status}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                      Live
                    </span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-stone-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-stone-600">
                    {item.intervention_or_asset} · {item.disease_or_condition}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-500 italic">
                    {item.lineage_summary}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-stone-200 px-2 py-0.5 text-xs text-stone-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
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

          <div className="mt-6">
            <Link href="/cases" className="text-sm font-medium text-stone-700 transition hover:text-stone-900">
              View full lineage library →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. How a lineage works */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Structure
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              How a lineage works
            </h2>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Trial anchor", "Disease problem", "Biological obstacle", "Discovery chain", "Enabling tools", "Knowns and unknowns"].map((step, i) => (
                <span key={step} className="flex items-center gap-2 text-sm text-stone-600">
                  {i > 0 && <span className="text-stone-300">→</span>}
                  <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 font-medium text-stone-700">
                    {step}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Concepts behind the lineages */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Concept explainers
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
            <p className="mt-6 text-base leading-8 text-stone-700">
              TrialLineage is an independent public science project. Support
              funds research, writing, source review, and site maintenance.
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
