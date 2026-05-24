import Link from "next/link";

export default function RareDiseaseTrialsConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Rare disease trials</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Clinical trials for rare diseases face distinct challenges: small
            patient populations, variable disease progression, limited natural
            history data, and the need for novel endpoints. Designing credible
            trials under these constraints required new approaches to evidence
            generation that now inform gene therapy development broadly.
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What makes rare disease trials different?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Most clinical trial methodology was developed for common diseases
            with large patient pools. Rare diseases — by definition affecting
            fewer than 200,000 people in the United States — cannot rely on
            large randomized trials with thousands of patients. Trial designers
            must work with smaller numbers, longer enrollment periods,
            geographically dispersed patients, and disease endpoints that may
            not have standardized measurements.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            For inherited retinal diseases, this meant developing entirely new
            ways to measure visual improvement — including multi-luminance
            mobility testing, full-field stimulus testing, and retinal imaging
            biomarkers — that could capture meaningful change in small cohorts.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why rare disease trial design matters</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              The infrastructure built for rare retinal disease trials — novel
              endpoints, natural history registries, international patient
              networks, and regulatory pathways for small-population approvals
              — now serves as a model for gene therapy trials across other rare
              conditions. The principles developed here are being applied to
              neuromuscular, metabolic, and other genetic diseases.
            </p>
            <p>
              Regulatory frameworks including accelerated approval, breakthrough
              therapy designation, and orphan drug status all play roles in
              making rare disease development economically feasible despite
              small markets.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to retinal gene therapy</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            The pivotal trial for voretigene neparvovec enrolled 31 patients —
            a number that would be considered inadequate for a common disease
            but represented a substantial proportion of eligible patients with
            confirmed biallelic RPE65 mutations. The trial&rsquo;s success
            depended on careful patient selection, a sensitive primary endpoint
            (multi-luminance mobility testing), and a study design that
            maximized information from limited numbers.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Clinical trial design", "Inherited retinal disease", "Molecular diagnosis", "Translational medicine"].map((c) => (
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
