import Link from "next/link";

export default function GeneExpressionConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Gene expression
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Gene expression is the process by which information encoded in DNA
            is converted into functional products — typically proteins. Cells
            regulate which genes are expressed, when, and at what level. When
            this regulation fails, disease can result. Many modern therapies
            work by restoring, blocking, or modulating gene expression.
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What is gene expression?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Every cell in the body contains the same DNA, yet cells differ
            enormously — a neuron looks and functions nothing like a liver cell.
            The difference lies in which genes each cell expresses. Gene
            expression is the reading of a gene&rsquo;s DNA sequence,
            transcription into RNA, and translation into protein.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Expression is controlled at multiple levels: which genes are
            accessible (chromatin state), which are transcribed (transcription
            factors), which mRNAs are stable (RNA processing), and which
            proteins are made (translation regulation). Genomic imprinting —
            where one parental allele is silenced — is a specific form of
            expression control directly relevant to Angelman syndrome.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why gene expression matters for this case</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              Angelman syndrome is fundamentally a gene expression disorder.
              The paternal UBE3A gene is structurally intact in most patients
              — it is not mutated or deleted. It is silenced: an antisense
              RNA transcript prevents its expression in neurons. The therapy
              being tested (ION582) aims to alter expression by removing this
              silencing mechanism.
            </p>
            <p>
              This illustrates a broader principle: not all genetic diseases
              require gene replacement. Some can potentially be treated by
              changing how existing genes are expressed — turning silent genes
              back on, or turning harmful genes off.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["RNA biology", "UBE3A", "Antisense oligonucleotides", "Gene therapy"].map((c) => (
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
