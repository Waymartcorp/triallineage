import Link from "next/link";

export default function RetinalBiologyConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Retinal biology</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            The retina is a thin layer of tissue at the back of the eye that
            converts light into electrical signals sent to the brain.
            Understanding its cellular architecture — photoreceptors, retinal
            pigment epithelium, and supporting layers — is foundational to
            explaining why inherited retinal diseases cause vision loss and how
            gene therapy can intervene.
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">How the retina works</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            The retina contains two main types of light-sensing cells: rods
            (which detect dim light and enable night vision) and cones (which
            detect color and enable sharp central vision). These photoreceptors
            depend on the retinal pigment epithelium (RPE), a supporting layer
            that recycles visual pigment, removes waste, and maintains
            photoreceptor health.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            When genes essential to photoreceptor or RPE function are mutated,
            cells degenerate progressively. Because the retina does not
            regenerate in humans, lost cells are not replaced — making timing
            of intervention critical.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why retinal biology matters for gene therapy</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              The retina&rsquo;s properties made it an early candidate for gene
              therapy: it is small (requiring low vector doses), surgically
              accessible, relatively immune-privileged (reducing rejection
              risk), and directly measurable (through vision tests and
              imaging). These features reduced the technical barriers that
              slowed gene therapy in other organs.
            </p>
            <p>
              Understanding which cell types express which genes also determines
              where vectors must deliver their cargo. RPE65, for example, is
              expressed in RPE cells — so the vector must reach that specific
              layer.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Position in the scientific lineage</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Retinal biology is the foundational layer that explains why specific
            mutations cause specific patterns of vision loss, why certain
            cells are targetable, and why the timing window for intervention
            matters. Without detailed knowledge of retinal architecture, gene
            therapy design would have no target map.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Inherited retinal disease", "Gene therapy", "Viral vectors / AAV", "Molecular diagnosis"].map((c) => (
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
