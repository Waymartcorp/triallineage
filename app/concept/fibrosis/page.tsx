import Link from "next/link";

export default function FibrosisConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Fibrosis
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Fibrosis is the formation of excess fibrous connective tissue in
            an organ, usually as a result of injury or chronic disease. It
            represents a failure of normal tissue repair — where the
            wound-healing process does not stop, leading to progressive
            scarring that impairs organ function.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/case/fibrosis-signaling-idiopathic-pulmonary-fibrosis" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700">View the IPF lineage</Link>
            <Link href="/concepts" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">All concepts</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">What is fibrosis?</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              When tissue is injured, the body initiates a repair process.
              Fibroblasts migrate to the injury site and produce collagen and
              other extracellular matrix proteins to patch the damage. Normally,
              this process resolves once the wound is healed. In fibrotic
              diseases, the repair process becomes self-perpetuating — fibroblasts
              continue producing matrix proteins even after the original injury
              has resolved, gradually replacing functional tissue with dense
              scar tissue.
            </p>
            <p>
              Fibrosis can affect virtually any organ: lungs (pulmonary
              fibrosis), liver (cirrhosis), kidneys (renal fibrosis), heart
              (cardiac fibrosis), and skin (scleroderma). Despite affecting
              different organs, fibrotic diseases share common cellular and
              molecular mechanisms centered on fibroblast activation and
              extracellular matrix accumulation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to the IPF lineage</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Fibrosis is the central pathological process in idiopathic
            pulmonary fibrosis. The BMS-986278 trial tests whether blocking
            a specific profibrotic signaling pathway (LPA1) can slow the
            fibrotic process in the lung. Understanding fibrosis as a
            targetable biological mechanism — not just end-stage scarring —
            is what makes antifibrotic drug development possible.
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
