import Link from "next/link";

export default function TranslationalMedicineConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Translational medicine</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Translational medicine is the process of moving discoveries from
            basic science into clinical practice. It bridges the gap between
            laboratory findings and patient benefit — a transition that
            requires not just scientific insight but also manufacturing,
            regulatory navigation, trial design, and systematic evidence
            generation.
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What is translational medicine?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Knowing the genetic cause of a disease and having a potential
            therapy are necessary but not sufficient. Between a laboratory
            proof of concept and a treatment that reaches patients lies a
            series of challenges: manufacturing the therapy at clinical grade,
            establishing safety in animals, designing appropriate human trials,
            measuring outcomes that matter to patients and regulators, and
            navigating the regulatory process to approval.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Translational medicine is the discipline that manages this
            transition. It is where biology meets engineering, regulation, and
            clinical practice.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why translational medicine matters</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              Many promising discoveries never reach patients. The gap between
              laboratory proof of concept and clinical benefit — sometimes
              called the &ldquo;valley of death&rdquo; — is where most
              therapeutic ideas fail. Translational medicine works to make
              that crossing more systematic and less dependent on luck.
            </p>
            <p>
              For gene therapy, translation involved solving manufacturing
              challenges (producing enough high-quality vector), establishing
              safety (through preclinical toxicology), and designing endpoints
              that regulators would accept as evidence of benefit.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to retinal gene therapy</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            The path from demonstrating gene restoration in the Briard dog
            (2001) to FDA approval of Luxturna (2017) took sixteen years. That
            time was spent on translational work: scaling vector production,
            conducting formal toxicology studies, designing phase I/III trials,
            developing the multi-luminance mobility test as a primary endpoint,
            and building the regulatory dossier. The science was largely
            settled years before the therapy reached patients.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Gene therapy", "Rare disease trials", "Clinical trial design", "Viral vectors / AAV"].map((c) => (
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
