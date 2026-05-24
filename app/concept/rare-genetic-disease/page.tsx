import Link from "next/link";

export default function RareGeneticDiseaseConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Rare genetic disease
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Rare genetic diseases are conditions caused by heritable DNA changes
            that individually affect small numbers of people. Collectively,
            there are more than 7,000 recognized rare diseases, affecting an
            estimated 300 million people worldwide. Most have no approved
            treatment. Their genetic clarity, however, increasingly makes them
            targets for precision therapies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/case/rna-targeted-therapy-angelman-syndrome" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700">View the Angelman syndrome case</Link>
            <Link href="/concepts" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">All concepts</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">In plain language</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What counts as a rare genetic disease?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            In the United States, a rare disease is defined as one affecting
            fewer than 200,000 people. In Europe, the threshold is 1 in 2,000.
            Many genetic diseases fall well below these thresholds — some
            affecting only a few hundred known patients worldwide.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Rare genetic diseases are often diagnosed in childhood, frequently
            affect the nervous system, and typically lack effective treatments.
            Their single-gene causation, however, makes the disease mechanism
            unusually clear — which paradoxically makes them attractive targets
            for genetically precise therapies like gene therapy and antisense
            oligonucleotides.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why rare diseases matter for drug development</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              Rare diseases often serve as proving grounds for new therapeutic
              modalities. Gene therapy was first approved for a rare retinal
              disease. The first approved ASO for the CNS targeted a rare
              neuromuscular disease (SMA). The precision of rare-disease
              genetics — where cause and effect are clearly linked — reduces
              the biological uncertainty that makes drug development risky.
            </p>
            <p>
              Regulatory frameworks including orphan drug designation,
              breakthrough therapy status, and accelerated approval pathways
              exist specifically to support development for small patient
              populations where traditional large-scale trials are impossible.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to the Angelman case</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Angelman syndrome exemplifies the rare genetic disease treatment
            paradigm: a single gene (UBE3A), a well-understood silencing
            mechanism, a defined patient population, and a rationally designed
            intervention (ION582). The trial exists because the molecular cause
            is clear enough to suggest a specific therapeutic strategy.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Angelman syndrome", "Rare disease trials", "Gene therapy", "Translational medicine", "Molecular diagnosis"].map((c) => (
              <span key={c} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-600">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-wrap gap-6 text-xs text-stone-500">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <Link href="/cases" className="hover:text-stone-900">Lineages</Link>
            <Link href="/concepts" className="hover:text-stone-900">Concepts</Link>
            <Link href="/about" className="hover:text-stone-900">About</Link>
            <Link href="/support" className="hover:text-stone-900">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
