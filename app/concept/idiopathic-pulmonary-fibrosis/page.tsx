import Link from "next/link";

export default function IdiopathicPulmonaryFibrosisConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Idiopathic pulmonary fibrosis
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Idiopathic pulmonary fibrosis (IPF) is a chronic, progressive
            lung disease characterized by irreversible scarring of lung tissue.
            It is the most common and severe form of idiopathic interstitial
            pneumonia, with a median survival of 3–5 years from diagnosis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/case/fibrosis-signaling-idiopathic-pulmonary-fibrosis" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700">View the IPF lineage</Link>
            <Link href="/concepts" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">All concepts</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">What is IPF?</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              IPF causes progressive replacement of normal lung tissue with
              dense scar tissue (fibrosis). The fibrosis occurs in the
              interstitium — the tissue surrounding the air sacs (alveoli) —
              reducing the lungs&apos; ability to expand and exchange oxygen.
              Patients experience worsening breathlessness, chronic dry cough,
              and declining exercise capacity.
            </p>
            <p>
              &ldquo;Idiopathic&rdquo; means no definitive external cause is
              identified. Risk factors include aging, cigarette smoking history,
              environmental exposures to dusts or fumes, and genetic
              predisposition. The disease primarily affects adults over 50.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Current understanding</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              IPF is now understood as a disease of aberrant wound healing
              rather than chronic inflammation. Repetitive microscopic injuries
              to the lung epithelium trigger fibroblast activation and
              excessive extracellular matrix deposition. The repair process
              fails to resolve, leading to progressive tissue remodeling.
            </p>
            <p>
              Two approved antifibrotic therapies — pirfenidone and
              nintedanib — can slow the rate of decline in lung function but
              do not stop progression or reverse existing fibrosis. This has
              driven ongoing research into additional profibrotic signaling
              pathways, including lysophosphatidic acid (LPA) receptor
              signaling.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to the IPF lineage</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            IPF is the disease target for the BMS-986278 trial. Understanding
            IPF as a disease of disordered fibroblast signaling — not
            inflammation — is what made targeting a specific profibrotic
            receptor (LPA1) a rational therapeutic strategy.
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
