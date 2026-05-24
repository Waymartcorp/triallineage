import Link from "next/link";

export default function AngelmanSyndromeConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Angelman syndrome
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Angelman syndrome is a rare neurodevelopmental genetic disorder
            caused by loss of functional UBE3A expression in neurons. It is
            characterized by severe intellectual disability, movement
            abnormalities, seizures, and minimal speech. Understanding its
            genetic mechanism has opened it to RNA-targeted therapeutic
            approaches.
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What is Angelman syndrome?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Angelman syndrome affects approximately 1 in 12,000 to 20,000
            people. Children with Angelman syndrome typically show developmental
            delays by 6–12 months of age. The condition causes severe
            intellectual disability, little or no speech, motor difficulties
            including ataxia (unsteady gait), and frequent seizures. Many
            individuals also exhibit a characteristic happy demeanor with
            frequent smiling.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            The condition is lifelong. Current management is supportive —
            antiepileptic drugs for seizures, physical therapy for motor
            function, and communication aids. There are no approved treatments
            that address the underlying molecular cause.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">The genetic basis</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              Angelman syndrome is caused by loss of function of the UBE3A gene
              on chromosome 15q11.2-q13. In most neurons, only the maternal
              copy of UBE3A is active — the paternal copy is silenced through
              genomic imprinting. This means that if the maternal copy is
              deleted, mutated, or otherwise non-functional, neurons have no
              source of UBE3A protein.
            </p>
            <p>
              The most common cause (~70%) is a de novo deletion of the
              maternal 15q11-q13 region. Other causes include UBE3A point
              mutations (~11%), paternal uniparental disomy (~7%), and
              imprinting center defects (~3%).
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why this disorder is therapeutically relevant</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Unlike many genetic conditions where the causative gene is damaged
            or absent, most Angelman syndrome patients retain an intact
            paternal UBE3A gene — it is simply silenced in neurons. This
            creates a therapeutic opportunity: if the silencing mechanism can be
            disrupted, the paternal copy might be activated. This is the
            rationale for ASO-based therapies targeting the UBE3A antisense
            transcript.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["UBE3A", "Gene expression", "Antisense oligonucleotides", "Rare genetic disease", "CNS drug delivery"].map((c) => (
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
