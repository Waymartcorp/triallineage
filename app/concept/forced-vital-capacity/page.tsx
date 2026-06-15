import Link from "next/link";

export default function ForcedVitalCapacityConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Forced vital capacity
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Forced vital capacity (FVC) is a lung function measurement — the
            total volume of air a person can forcibly exhale after a full
            breath. In IPF clinical trials, the rate of FVC decline over time
            is the standard primary endpoint used to measure whether
            antifibrotic treatments are slowing disease progression.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/case/fibrosis-signaling-idiopathic-pulmonary-fibrosis" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700">View the IPF lineage</Link>
            <Link href="/concepts" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">All concepts</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">What is FVC?</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              FVC is measured by spirometry — a standard pulmonary function
              test. The patient takes the deepest breath possible, then
              exhales as hard and completely as they can into a device that
              measures air volume. FVC reflects overall lung capacity and is
              sensitive to the restrictive physiology of fibrotic lung disease,
              where scarring reduces the lungs&apos; ability to expand.
            </p>
            <p>
              In IPF, FVC typically declines over time as fibrosis progresses.
              The annual rate of FVC decline (often measured in milliliters per
              year) has been validated by regulatory agencies as a surrogate
              endpoint that correlates with disease progression, quality of
              life, and mortality.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to the IPF lineage</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            FVC decline rate is the primary endpoint of the BMS-986278 Phase 3
            trial. The trial is designed to determine whether blocking LPA1
            slows the rate at which patients lose lung function. The
            establishment of FVC decline as an accepted regulatory endpoint —
            validated through the pirfenidone and nintedanib trials — is what
            made it possible to design this study with a clear, measurable
            outcome.
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
