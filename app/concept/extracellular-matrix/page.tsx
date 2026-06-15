import Link from "next/link";

export default function ExtracellularMatrixConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Extracellular matrix
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            The extracellular matrix (ECM) is the network of proteins,
            glycoproteins, and other molecules that surrounds and supports
            cells in tissues. In fibrotic diseases, excessive ECM deposition
            by activated fibroblasts replaces functional tissue with dense
            scar tissue.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/case/fibrosis-signaling-idiopathic-pulmonary-fibrosis" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700">View the IPF lineage</Link>
            <Link href="/concepts" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">All concepts</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">What is the extracellular matrix?</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              The ECM is not simply inert scaffolding. It is a dynamic,
              constantly remodeled structure that provides mechanical support,
              regulates cell behavior, stores growth factors, and transmits
              signals. Its major structural components include collagens
              (providing tensile strength), elastin (providing elasticity),
              fibronectin (mediating cell adhesion), and proteoglycans
              (retaining water and regulating signaling).
            </p>
            <p>
              In healthy tissues, ECM production and degradation are balanced.
              Matrix metalloproteinases (MMPs) break down old matrix while
              fibroblasts produce new matrix as needed. In fibrotic disease,
              this balance shifts toward excessive production — fibroblasts
              deposit matrix faster than it can be remodeled, leading to
              progressive stiffening and loss of organ function.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to the IPF lineage</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            In IPF, excessive ECM deposition in the lung interstitium is what
            physically destroys lung architecture and gas exchange capacity.
            The fibrotic scar tissue is primarily composed of ECM. Therapies
            targeting fibrosis — including LPA1 antagonism — aim to reduce
            the upstream signaling that drives fibroblasts to overproduce
            this matrix.
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
