import Link from "next/link";

export default function AntifibroticTherapyConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Antifibrotic therapy
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Antifibrotic therapies are drugs designed to slow, halt, or
            reverse pathological fibrosis — the excessive scarring that
            impairs organ function. In pulmonary fibrosis, antifibrotic
            treatment aims to slow the decline in lung function by
            targeting the molecular mechanisms that drive fibroblast
            activation and matrix deposition.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/case/fibrosis-signaling-idiopathic-pulmonary-fibrosis" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700">View the IPF lineage</Link>
            <Link href="/concepts" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">All concepts</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">What is antifibrotic therapy?</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              Until the 2010s, there were no approved therapies that directly
              targeted fibrosis. Patients with IPF were treated with
              corticosteroids and immunosuppressants, which were largely
              ineffective and sometimes harmful. The approval of pirfenidone
              (2014) and nintedanib (2014) marked the first generation of
              antifibrotic drugs — both demonstrated the ability to slow FVC
              decline in clinical trials.
            </p>
            <p>
              These first-generation antifibrotics have broad mechanisms of
              action (pirfenidone modulates TGF-beta and inflammatory
              pathways; nintedanib inhibits multiple receptor tyrosine
              kinases). Neither stops progression entirely. The next
              generation of antifibrotic candidates — including LPA1
              antagonists — targets more specific profibrotic pathways with
              the aim of additional or complementary efficacy.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to the IPF lineage</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            BMS-986278 represents a next-generation antifibrotic approach —
            targeting a specific profibrotic signaling receptor (LPA1) rather
            than broad anti-inflammatory or multi-kinase mechanisms. The
            success of first-generation antifibrotics established both the
            clinical framework and the regulatory endpoint (FVC decline rate)
            that the BMS-986278 trial uses.
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
