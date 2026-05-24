import Link from "next/link";

export default function AntisenseOligonucleotidesConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Antisense oligonucleotides
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Antisense oligonucleotides (ASOs) are short, synthetic strands of
            modified nucleic acid designed to bind specific RNA sequences in
            cells. By binding their target RNA, ASOs can degrade it, block its
            translation, or alter its splicing — allowing precise intervention
            at the gene-expression level.
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">How ASOs work</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            DNA is double-stranded. RNA is usually single-stranded. An
            antisense oligonucleotide is a short synthetic molecule whose
            sequence is complementary to a specific RNA target. When introduced
            into cells, it binds to its target RNA through Watson-Crick base
            pairing and triggers one of several effects: recruiting enzymes
            that degrade the RNA (RNase H–mediated cleavage), physically
            blocking ribosome access (steric blocking), or redirecting
            splicing machinery.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Chemical modifications to the sugar-phosphate backbone — including
            phosphorothioate linkages and 2&rsquo;-O-methoxyethyl (MOE)
            modifications — improve stability, resistance to degradation, and
            cellular uptake. These modifications were developed over decades
            and are essential to clinical viability.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why ASOs matter</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              ASOs enable a drug design logic that is fundamentally different
              from traditional small molecules or antibodies. Instead of
              targeting a protein&rsquo;s shape, ASOs target the RNA sequence
              that encodes the protein (or regulates its expression). This
              means any gene with a known RNA sequence is, in principle, a
              potential ASO target.
            </p>
            <p>
              Approved ASO therapies include nusinersen (Spinraza) for spinal
              muscular atrophy and inotersen for hereditary transthyretin
              amyloidosis. ION582 (obudanersen) for Angelman syndrome uses the
              same platform chemistry and intrathecal delivery route proven
              with nusinersen.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to the Angelman case</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            ION582 is designed to target UBE3A-ATS, the antisense transcript
            that silences the paternal UBE3A gene in neurons. By reducing
            UBE3A-ATS through RNase H–mediated degradation, the goal is to
            allow the paternal UBE3A allele to be expressed. The entire
            therapeutic rationale depends on ASO technology&rsquo;s ability to
            reach CNS neurons and selectively degrade a specific non-coding RNA.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["RNA biology", "Gene expression", "CNS drug delivery", "UBE3A", "Rare disease trials"].map((c) => (
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
