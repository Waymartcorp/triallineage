import Link from "next/link";

const concepts: { label: string; description: string; href?: string }[] = [
  {
    label: "Oncogene discovery",
    description:
      "How the identification of cancer-causing genes changed the way scientists understood the disease — and why it was the starting point for targeted therapies.",
    href: "/concept/oncogene-discovery",
  },
  {
    label: "Protein signaling biology",
    description:
      "The science of how proteins relay messages inside cells, and why disruptions in these relay chains drive cancer growth.",
    href: "/concept/protein-signaling-biology",
  },
  {
    label: "Clinical trial design",
    description:
      "What phase 1, 2, and 3 trials actually test, why trial design is part of the discovery process, and how design choices shape what we learn about a drug.",
    href: "/concept/clinical-trial-design",
  },
  {
    label: "Medicinal chemistry",
    description:
      "The discipline of designing molecules that can act as drugs — bridging biological insight to a compound that can be tested in humans.",
    href: "/concept/medicinal-chemistry",
  },
  {
    label: "Translational oncology",
    description:
      "How laboratory discoveries about cancer are converted into clinical hypotheses, preclinical evidence, and eventually human trials.",
    href: "/concept/translational-oncology",
  },
  {
    label: "Structural biology",
    description:
      "The study of the three-dimensional shapes of proteins and other biological molecules, and why those shapes determine what drugs can do.",
    href: "/concept/structural-biology",
  },
  {
    label: "Chemical biology",
    description:
      "Using small molecules as tools to probe biological questions — testing whether a protein can be chemically engaged and what happens when it is.",
    href: "/concept/chemical-biology",
  },
  {
    label: "Pancreatic precursor lesion biology",
    description:
      "The science of how pancreatic cancer develops from earlier, pre-cancerous changes — and why understanding those stages matters for early detection and treatment.",
    href: "/concept/pancreatic-precursor-lesion-biology",
  },
];

export default function ConceptsIndexPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            TrialLineage
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Concept pages
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            TrialLineage case pages trace the full scientific lineage behind a
            clinical trial — from basic discovery through chemistry, biology,
            and translation into human testing. Concept pages explain the
            individual scientific fields and ideas that appear along that
            lineage, in plain language and with the same editorial care.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/case/daraxonrasib-pancreatic-cancer"
              className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              View the daraxonrasib case
            </Link>
            <Link
              href="/"
              className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900"
            >
              Back to TrialLineage home
            </Link>
          </div>
        </div>
      </section>

      {/* What concept pages are */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              About these pages
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Why concept pages exist
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              A clinical trial does not emerge from a single discovery. It is
              the product of many fields — genetics, cell biology, chemistry,
              pharmacology, clinical medicine — each contributing ideas, tools,
              and evidence over decades. Concept pages provide plain-language
              background on these fields so that readers can understand the full
              context behind a TrialLineage case, including the branch points in
              scientific thinking, the failed approaches that still taught the
              field something, and the ideas that had to exist before a trial
              became possible.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              Each concept page is written to be read independently or as a
              companion to a case page. They are designed for a public audience
              — not as textbook chapters, but as serious, accessible
              explanations of the science behind human-disease trials.
            </p>
          </div>
        </div>
      </section>

      {/* Concept grid */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Browse concepts
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            All concept pages
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((concept) =>
              concept.href ? (
                <Link
                  key={concept.label}
                  href={concept.href}
                  className="group flex flex-col rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7 shadow-sm transition hover:border-stone-400 hover:bg-stone-100"
                >
                  <h3 className="text-lg font-semibold text-stone-900 transition group-hover:text-stone-800">
                    {concept.label}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-stone-600">
                    {concept.description}
                  </p>
                  <p className="mt-4 text-xs font-medium text-stone-500 transition group-hover:text-stone-700">
                    Read explainer →
                  </p>
                </Link>
              ) : (
                <div
                  key={concept.label}
                  className="flex flex-col rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7 opacity-75"
                >
                  <h3 className="text-lg font-semibold text-stone-900">
                    {concept.label}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-stone-600">
                    {concept.description}
                  </p>
                  <p className="mt-4 text-xs font-medium text-stone-400">
                    Coming soon
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Note about future additions */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              More to come
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-stone-700">
              TrialLineage is building concept pages for each scientific field
              that appears in the discovery lineage behind a clinical trial.
              New pages will be added as the platform expands to cover
              additional cases and the scientific areas they depend on. If a
              concept is listed above but not yet linked, it is in preparation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
