import Link from "next/link";

export default function Ube3aConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            UBE3A
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            UBE3A encodes an E3 ubiquitin ligase that plays a critical role in
            neuronal function and development. In most of the body, both
            parental copies of UBE3A are expressed. In neurons, only the
            maternal copy is active due to genomic imprinting — making loss of
            the maternal allele the direct cause of Angelman syndrome.
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What does UBE3A do?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            UBE3A (ubiquitin protein ligase E3A) tags specific proteins with
            ubiquitin, marking them for degradation by the cell&rsquo;s waste
            disposal system (the proteasome). In neurons, this protein quality
            control is essential for synaptic function, plasticity, and normal
            brain development.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            The gene is located on chromosome 15q11.2-q13, within a region
            subject to complex genomic imprinting. In neurons — and apparently
            only in neurons — a long antisense RNA transcript (UBE3A-ATS)
            originating from the SNURF-SNRPN locus traverses the UBE3A gene
            and silences the paternal allele. This means neurons depend
            entirely on the maternal UBE3A copy.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why UBE3A matters for therapy</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              The imprinting pattern of UBE3A creates both the disease and the
              therapeutic opportunity. Because the paternal allele is silenced
              rather than absent, it represents a dormant source of functional
              protein. If the silencing mechanism (UBE3A-ATS) can be reduced,
              the paternal allele might resume expression — effectively
              compensating for the lost maternal copy.
            </p>
            <p>
              This &ldquo;unsilencing&rdquo; strategy is the basis for ION582
              and other investigational Angelman therapies. It depends on three
              facts: the paternal gene is intact, the silencing mechanism is
              RNA-mediated, and ASOs can target that RNA.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Position in the scientific lineage</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            UBE3A sits at the intersection of ubiquitin biology, genomic
            imprinting, neurodevelopment, and RNA regulation. Its identification
            as the Angelman gene (1997) was a pivotal step, but the therapeutic
            path required additional discoveries: characterization of the
            antisense transcript, demonstration of ASO-mediated unsilencing in
            models, and proof that intrathecal delivery could reach affected
            neurons.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Angelman syndrome", "Gene expression", "RNA biology", "Antisense oligonucleotides"].map((c) => (
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
