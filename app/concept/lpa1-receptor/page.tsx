import Link from "next/link";

export default function Lpa1ReceptorConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            LPA1 receptor
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            LPA1 (lysophosphatidic acid receptor 1) is a G protein-coupled
            receptor that mediates many of the profibrotic effects of LPA
            signaling. It is the molecular target of BMS-986278 and the
            specific receptor implicated in fibroblast activation in
            pulmonary fibrosis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/case/fibrosis-signaling-idiopathic-pulmonary-fibrosis" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700">View the IPF lineage</Link>
            <Link href="/concepts" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">All concepts</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">What is LPA1?</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              LPA1 was the first LPA receptor to be cloned, identified in
              1996. It belongs to the endothelial differentiation gene (EDG)
              family of G protein-coupled receptors and is widely expressed
              in the body, including in lung fibroblasts, smooth muscle cells,
              and brain tissue.
            </p>
            <p>
              When LPA binds LPA1, the receptor activates intracellular
              signaling pathways (including Rho, MAPK, and PI3K cascades) that
              promote cell survival, proliferation, migration, and
              cytoskeletal contraction. In the context of lung fibrosis, LPA1
              activation drives fibroblast recruitment to injury sites,
              resistance to apoptosis, and collagen secretion.
            </p>
            <p>
              Studies in LPA1 knockout mice showed significantly reduced
              fibrosis following experimental lung injury, confirming the
              receptor&apos;s role as a profibrotic mediator in the lung.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to the IPF lineage</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            LPA1 is the direct molecular target of BMS-986278. The entire
            therapeutic hypothesis depends on the evidence that LPA1 is a
            key driver of fibroblast activation in IPF lungs. Selective
            blockade of LPA1 — rather than all LPA receptors — is intended
            to reduce profibrotic signaling while minimizing off-target
            effects.
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
