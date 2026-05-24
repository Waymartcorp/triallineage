import Link from "next/link";

export default function MolecularDiagnosisConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Molecular diagnosis</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Molecular diagnosis identifies the specific genetic mutation
            responsible for a patient&rsquo;s disease. In inherited retinal
            disease, this step is essential: it determines which gene is
            affected, whether a gene therapy exists for that mutation, and
            whether the patient is eligible for treatment. Without molecular
            diagnosis, gene therapy cannot be targeted.
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What is molecular diagnosis?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Traditional diagnosis identifies a disease by its symptoms: a
            patient loses vision, and clinicians classify the condition by
            pattern of loss. Molecular diagnosis goes deeper — it identifies
            the exact genetic change causing the disease, often through DNA
            sequencing.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Two patients with similar vision loss may have mutations in entirely
            different genes, requiring different therapeutic approaches.
            Molecular diagnosis distinguishes between them and enables
            precision treatment.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why molecular diagnosis matters</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              Gene therapies are gene-specific. A therapy designed for RPE65
              mutations will not help a patient with an RPGR mutation. Molecular
              diagnosis is the gatekeeping step that determines eligibility,
              informs prognosis, and guides treatment decisions.
            </p>
            <p>
              The falling cost of genetic sequencing has made molecular diagnosis
              increasingly accessible, transforming inherited retinal disease
              from a clinical diagnosis based on symptoms into a genetic
              diagnosis based on cause.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to gene therapy</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Every patient treated with voretigene neparvovec (Luxturna) first
            required confirmation of biallelic RPE65 mutations through
            molecular genetic testing. As more gene therapies enter development
            for other retinal genes, molecular diagnosis becomes the critical
            link between knowing a disease exists and knowing which treatment
            to offer.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Inherited retinal disease", "Gene therapy", "Rare disease trials", "Retinal biology"].map((c) => (
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
