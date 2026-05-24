import Link from "next/link";

export default function RnaBiologyConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            RNA biology
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            RNA is the molecular intermediary between DNA and protein. Beyond
            its role as a messenger, RNA participates in gene regulation,
            catalysis, and cellular signaling. Understanding RNA biology is
            foundational to the development of RNA-targeted therapies —
            including antisense oligonucleotides, siRNAs, and mRNA medicines.
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What is RNA?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            DNA stores genetic instructions, but those instructions must be
            converted into action. RNA performs this conversion: messenger RNA
            (mRNA) carries gene sequences from the nucleus to ribosomes, where
            proteins are built. Other RNA types — transfer RNA, ribosomal RNA,
            and regulatory non-coding RNAs — perform structural, catalytic, and
            regulatory roles.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Non-coding RNAs are particularly relevant to disease: they can
            silence genes, regulate protein production, and control
            developmental programs. When these regulatory RNAs malfunction or
            can be therapeutically manipulated, they become potential drug
            targets.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why RNA biology matters for medicine</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              RNA-targeted therapies work by intervening at the RNA level —
              before a protein is ever made. This allows treatments to address
              diseases caused by toxic proteins, missing proteins, or
              dysregulated gene expression. The discovery that antisense
              oligonucleotides and siRNAs can selectively degrade or block
              specific RNA transcripts opened a new class of medicines.
            </p>
            <p>
              In Angelman syndrome, the therapeutic target is a long non-coding
              antisense RNA (UBE3A-ATS) that silences the paternal UBE3A gene
              in neurons. Reducing this transcript is the mechanism by which
              ION582 aims to restore UBE3A expression.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Gene expression", "Antisense oligonucleotides", "UBE3A", "Translational medicine"].map((c) => (
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
