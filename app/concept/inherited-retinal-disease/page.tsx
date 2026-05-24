import Link from "next/link";

export default function InheritedRetinalDiseaseConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Inherited retinal disease</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Inherited retinal diseases are a group of genetic conditions that
            damage the cells responsible for vision. They range from conditions
            causing night blindness and peripheral vision loss to those causing
            near-total blindness in childhood. Understanding them as genetic
            disorders — rather than untreatable degenerations — opened the door
            to molecular therapies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/case/gene-therapy-inherited-retinal-disease" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700">View the retinal gene therapy case</Link>
            <Link href="/concepts" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">All concepts</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">In plain language</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What are inherited retinal diseases?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            The retina contains millions of specialized cells — rods, cones, and
            supporting cells — that convert light into the neural signals we
            perceive as vision. Inherited retinal diseases occur when a mutation
            in one of the genes needed by these cells causes them to malfunction
            or die. Because many retinal genes are highly specialized, even a
            single mutation can cause progressive vision loss.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            More than 270 genes are now known to cause inherited retinal
            disease. Conditions include retinitis pigmentosa, Leber congenital
            amaurosis, Stargardt disease, achromatopsia, and many others. Each
            has a distinct genetic cause, progression pattern, and potential
            therapeutic approach.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why this matters</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              Inherited retinal diseases collectively affect hundreds of
              thousands of people worldwide. Individually rare, they share a
              common feature: progressive loss of vision with historically no
              effective treatment. Recognizing them as genetically defined
              conditions transformed them from untreatable degenerations into
              potential targets for gene-based therapies.
            </p>
            <p>
              The ability to identify the precise genetic mutation in each
              patient also enables accurate prognosis, family counseling, and
              — increasingly — selection for clinical trials of gene-specific
              treatments.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to gene therapy</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Inherited retinal diseases provided the clinical context for the
            first successful gene therapies. RPE65-associated Leber congenital
            amaurosis became the first condition treated with an approved gene
            therapy product (voretigene neparvovec). The genetic clarity of
            these diseases — single gene, known protein, defined cell type —
            made them tractable targets for gene replacement strategies.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Gene therapy", "Retinal biology", "Molecular diagnosis", "Viral vectors / AAV", "Rare disease trials"].map((c) => (
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
