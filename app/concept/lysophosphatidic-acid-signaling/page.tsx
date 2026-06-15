import Link from "next/link";

export default function LysophosphatidicAcidSignalingConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Lysophosphatidic acid signaling
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Lysophosphatidic acid (LPA) is a bioactive lipid that acts as a
            signaling molecule through specific cell-surface receptors. In
            fibrotic disease, LPA signaling promotes fibroblast activation,
            migration, and survival — making it a target for antifibrotic
            drug development.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/case/fibrosis-signaling-idiopathic-pulmonary-fibrosis" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700">View the IPF lineage</Link>
            <Link href="/concepts" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">All concepts</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">What is LPA signaling?</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              LPA is one of the simplest phospholipids in biological
              membranes. For decades it was considered merely a metabolic
              intermediate in lipid synthesis. Research in the 1990s and 2000s
              revealed that LPA is a potent extracellular signaling molecule,
              released from activated platelets, injured cells, and other
              sources.
            </p>
            <p>
              LPA signals through a family of at least six G protein-coupled
              receptors (LPA1 through LPA6). Through these receptors, LPA
              regulates cell proliferation, migration, survival, and
              cytoskeletal organization. LPA levels are elevated in injured
              and fibrotic tissues, including the lungs of patients with IPF.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to the IPF lineage</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            The discovery that LPA is elevated in fibrotic lungs and drives
            fibroblast behavior through specific receptors is what made LPA
            receptor antagonism a rational antifibrotic strategy. Without the
            identification of LPA as a profibrotic mediator, the BMS-986278
            trial would not exist.
          </p>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-wrap gap-6 text-xs text-stone-500">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <Link href="/cases" className="hover:text-stone-900">Lineages</Link>
            <Link href="/concepts" className="hover:text-stone-900">Concepts</Link>
            <Link href="/about" className="hover:text-stone-900">About</Link>
          </div>
          <p className="mt-4 text-xs text-stone-400">TrialLineage is a public science platform. Not medical advice.</p>
        </div>
      </footer>
    </main>
  );
}
