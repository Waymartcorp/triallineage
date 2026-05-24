import Link from "next/link";

export default function GeneTherapyConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            TrialLineage Concept
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Gene therapy
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Gene therapy is a medical approach that treats disease by delivering
            genetic material into a patient&rsquo;s cells. Rather than managing
            symptoms, it aims to address the underlying cause of a genetic
            condition by restoring, replacing, or modifying the function of a
            gene. This page explains the concept, its significance in modern
            medicine, and how it connects to the development of treatments for
            inherited retinal disease.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/case/gene-therapy-inherited-retinal-disease"
              className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              View the retinal gene therapy case
            </Link>
            <Link
              href="/concepts"
              className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900"
            >
              All concepts
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            In plain language
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            What is gene therapy?
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Many diseases are caused by mutations in specific genes — changes
            that prevent the gene from producing a protein the body needs. Gene
            therapy delivers a working copy of that gene, or another genetic
            instruction, directly into the affected cells. If successful, the
            cells begin producing the missing protein, and the disease process
            is slowed or reversed.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            The concept is simple in principle but demanding in practice.
            Delivering genetic material safely into the right cells, at the
            right dose, without provoking immune reactions or unintended
            effects, required decades of scientific and engineering work.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Why gene therapy matters
          </h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              Gene therapy represents a shift from treating symptoms to
              addressing root causes. For diseases caused by a single gene
              defect — particularly rare inherited conditions — it offers the
              possibility of a one-time intervention that fundamentally changes
              the course of disease.
            </p>
            <p>
              It also serves as a proof of concept for a broader principle:
              that understanding the genetic basis of disease can lead to
              therapies that work at the molecular level, tailored to specific
              mutations and specific patients.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Connection to inherited retinal disease
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            The eye became one of the first organs where gene therapy
            demonstrated clinical success. Inherited retinal diseases are
            caused by mutations in specific genes needed for vision. The
            retina&rsquo;s accessibility, immune privilege, and
            measurability made it an ideal proving ground. The approval of
            voretigene neparvovec (Luxturna) in 2017 for RPE65-associated
            retinal dystrophy showed that gene therapy could restore
            meaningful visual function in patients with confirmed genetic
            mutations.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Position in the scientific lineage
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Gene therapy sits at the convergence of multiple fields: human
            genetics (identifying disease genes), molecular biology
            (understanding gene function), virology (engineering safe delivery
            vehicles), and clinical medicine (designing trials and measuring
            outcomes). Each of these fields had to mature independently before
            gene therapy could move from concept to clinical reality.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Related concepts
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Viral vectors / AAV", "Inherited retinal disease", "Molecular diagnosis", "Retinal biology", "Translational medicine"].map((c) => (
              <span key={c} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-600">
                {c}
              </span>
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
