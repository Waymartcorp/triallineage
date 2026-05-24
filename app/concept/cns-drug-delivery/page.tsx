import Link from "next/link";

export default function CnsDrugDeliveryConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            CNS drug delivery
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            The central nervous system (CNS) — brain and spinal cord — is
            protected by the blood-brain barrier, which prevents most
            circulating molecules from reaching neural tissue. Delivering
            drugs to the CNS requires specialized strategies: intrathecal
            injection, blood-brain barrier penetration, or direct CNS
            administration.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/case/rna-targeted-therapy-angelman-syndrome" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700">View the Angelman syndrome case</Link>
            <Link href="/concepts" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">All concepts</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">In plain language</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Why the brain is hard to treat</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            The blood-brain barrier (BBB) is a layer of tightly connected cells
            lining the brain&rsquo;s blood vessels. It protects the brain from
            toxins and pathogens but also blocks most therapeutic molecules.
            Large molecules like antibodies, oligonucleotides, and gene therapy
            vectors generally cannot cross the BBB when administered
            intravenously.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Intrathecal delivery — injection into the cerebrospinal fluid
            surrounding the spinal cord — bypasses the BBB entirely. The drug
            distributes through the fluid that bathes the brain and spinal cord,
            reaching neural tissue directly. This route is invasive (requiring
            a lumbar puncture) but effective for molecules like ASOs.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why CNS delivery matters for RNA therapies</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              ASOs do not readily cross the blood-brain barrier. For
              neurological diseases like Angelman syndrome and spinal muscular
              atrophy, intrathecal delivery is the established route. Nusinersen
              (Spinraza), the first approved ASO for a CNS disease, validated
              that intrathecal administration could achieve therapeutic ASO
              concentrations in the spinal cord and brain.
            </p>
            <p>
              ION582 uses the same intrathecal delivery approach. The drug is
              injected into the cerebrospinal fluid, where it distributes to
              neurons throughout the CNS. Repeat dosing is required because ASOs
              are gradually cleared, and the silencing of paternal UBE3A
              presumably re-establishes as ASO levels decline.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Position in the scientific lineage</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            CNS delivery is one of the enabling steps that made intrathecal ASO
            therapy feasible. Without a validated route to get oligonucleotides
            into neural tissue, the biological rationale for targeting UBE3A-ATS
            would have remained laboratory science. The clinical success of
            nusinersen de-risked the delivery question and made ION582
            development possible.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Antisense oligonucleotides", "RNA biology", "Angelman syndrome", "Rare disease trials", "Translational medicine"].map((c) => (
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
