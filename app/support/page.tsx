import Link from "next/link";

const fundedWork = [
  "Researching clinical trials and scientific background",
  "Tracing discovery histories across papers, institutions, model systems, and failed paths",
  "Writing public-facing lineage pages and concept explainers",
  "Reviewing sources, citations, and uncertainty labels",
  "Maintaining the website and improving navigation, design, and accessibility",
  "Sustaining the labor required to keep building the public science library",
];

const tiers = [
  {
    amount: "$8/month",
    name: "Reader Supporter",
    description: "Help keep TrialLineage public, independent, and free to read.",
  },
  {
    amount: "$25/month",
    name: "Science Supporter",
    description: "Support the research, writing, and source review behind new public science histories.",
  },
  {
    amount: "$100/month",
    name: "Founding Supporter",
    description: "Help build the core TrialLineage library and support the project during its early stage.",
  },
  {
    amount: "$500–$2,500+",
    name: "Sponsor a Science History",
    description: "Help fund a specific public-facing lineage or topic area while TrialLineage retains editorial independence.",
  },
];

const sponsorExamples = [
  "A rare disease trial lineage",
  "A cancer treatment lineage",
  "A gene therapy history",
  "An immunology breakthrough history",
  "A model organism or basic science lineage",
  "A public funding-to-clinical-trial history",
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm uppercase tracking-[0.18em] text-stone-500 transition hover:text-stone-900">
              TrialLineage
            </Link>
            <nav className="hidden gap-6 text-sm text-stone-600 md:flex">
              <Link href="/cases" className="transition hover:text-stone-900">Lineages</Link>
              <Link href="/concepts" className="transition hover:text-stone-900">Concepts</Link>
              <Link href="/about" className="transition hover:text-stone-900">About</Link>
              <Link href="/editorial-standards" className="transition hover:text-stone-900">Standards</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Support TrialLineage
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Help build an independent public library of science histories.
          </h1>
          <div className="mt-6 space-y-4 text-base leading-8 text-stone-700">
            <p>
              TrialLineage explains how today&apos;s clinical trials and medical
              breakthroughs emerged from long chains of discovery, failure, debate,
              model systems, public funding, private risk, and human persistence.
            </p>
            <p>
              Support from readers, sponsors, and partner organizations helps fund
              the time required to research, write, edit, maintain, and expand this
              public science library.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:support@triallineage.com?subject=Support%20TrialLineage"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Support the work
            </a>
            <a
              href="mailto:support@triallineage.com?subject=Sponsor%20a%20Science%20History"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-900 hover:text-stone-900"
            >
              Sponsor a science history
            </a>
          </div>

          <div className="mt-10 rounded-xl border border-stone-200 bg-stone-50 px-5 py-4 text-sm leading-7 text-stone-600">
            TrialLineage is currently an independent .com project, not a nonprofit
            organization. Support payments are not tax-deductible charitable
            donations. Support helps fund the independent production of public
            science education materials, including research, writing, editing,
            website maintenance, and the labor required to keep building the library.
          </div>
        </div>
      </section>

      {/* 2. Why support this work */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Science is often explained too late and too narrowly.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-stone-700">
            <p>
              The public usually hears about a medical breakthrough only after it
              becomes news. What gets lost is the deeper story: the early ideas,
              the basic research, the animal models, the failed hypotheses, the
              trial designs, the institutions, the funders, and the people who
              carried the work forward.
            </p>
            <p>
              That missing history matters. It helps patients understand hope
              without hype, helps students see science as a human process, helps
              supporters understand what long-term commitment makes possible, and
              helps the public recognize that breakthroughs are not sudden events.
              They are lineages.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What support funds */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Support funds the work behind the public library.
          </h2>
          <p className="mt-4 text-base leading-8 text-stone-700">
            TrialLineage is founder-operated at this stage. Support makes it
            possible to keep building the site with the seriousness, care, and
            time the subject deserves.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {fundedWork.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-stone-200 bg-stone-50 px-5 py-4 text-sm leading-7 text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ways to support */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Help sustain independent science education.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl border border-stone-200 bg-white px-6 py-6"
              >
                <p className="text-lg font-semibold text-stone-900">{tier.amount}</p>
                <p className="mt-1 text-sm font-medium text-stone-700">{tier.name}</p>
                <p className="mt-3 text-sm leading-7 text-stone-600">{tier.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-stone-200 bg-white px-6 py-5 text-center">
            <p className="text-sm text-stone-700">
              Payment infrastructure is being set up. To support TrialLineage now, contact the project directly.
            </p>
            <p className="mt-2 text-sm font-semibold text-stone-900">
              support@triallineage.com
            </p>
          </div>
        </div>
      </section>

      {/* 5. Sponsor a science history */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Underwrite a specific public-facing lineage.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-stone-700">
            <p>
              A sponsor can help fund the production of a specific lineage or topic
              area. Sponsored histories retain editorial independence. Sponsors may
              be acknowledged, but they do not control the conclusions, framing,
              source selection, or scientific interpretation.
            </p>
          </div>
          <div className="mt-6">
            <p className="text-sm font-medium text-stone-700">Examples of sponsorable lineages:</p>
            <ul className="mt-3 space-y-2">
              {sponsorExamples.map((ex) => (
                <li key={ex} className="text-sm leading-7 text-stone-600">
                  — {ex}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <a
              href="mailto:support@triallineage.com?subject=Sponsor%20a%20Science%20History"
              className="inline-flex items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Discuss a sponsorship
            </a>
          </div>
        </div>
      </section>

      {/* 6. Editorial independence */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Supporters fund the work, not the conclusions.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-stone-700">
            <p>
              TrialLineage is built around trust. Supporters and sponsors help fund
              the work, but they do not determine the conclusions. TrialLineage
              retains editorial control over research, framing, source selection,
              and interpretation.
            </p>
            <p>
              When a page is supported by a sponsor or patron, that support will be
              disclosed clearly. The goal is not promotion. The goal is public
              understanding.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Make the hidden lineage of discovery visible.
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-700">
              If you believe the public deserves a better way to understand how
              science becomes medicine, you can help build TrialLineage.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:support@triallineage.com?subject=Support%20TrialLineage"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
              >
                Support the work
              </a>
              <a
                href="mailto:support@triallineage.com?subject=Sponsor%20a%20Science%20History"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-900 hover:text-stone-900"
              >
                Sponsor a science history
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-stone-500">
            <Link href="/about" className="hover:text-stone-900">About</Link>
            <Link href="/mission" className="hover:text-stone-900">Mission</Link>
            <Link href="/editorial-standards" className="hover:text-stone-900">Editorial Standards</Link>
            <Link href="/support" className="hover:text-stone-900">Support</Link>
            <Link href="/disclaimer" className="hover:text-stone-900">Disclaimer</Link>
            <Link href="/cases" className="hover:text-stone-900">Lineages</Link>
            <Link href="/concepts" className="hover:text-stone-900">Concepts</Link>
          </div>
          <p className="mt-6 text-center text-xs text-stone-400">
            TrialLineage is a public science platform. Not medical advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
