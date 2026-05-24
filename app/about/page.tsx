import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm uppercase tracking-[0.18em] text-stone-500 transition hover:text-stone-900">
              TrialLineage
            </Link>
            <nav className="hidden gap-6 text-sm text-stone-600 md:flex">
              <Link href="/cases" className="transition hover:text-stone-900">Lineages</Link>
              <Link href="/concepts" className="transition hover:text-stone-900">Concepts</Link>
              <Link href="/mission" className="transition hover:text-stone-900">Mission</Link>
              <Link href="/support" className="transition hover:text-stone-900">Support</Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            About
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            What TrialLineage is
          </h1>
          <div className="mt-8 space-y-6 text-base leading-8 text-stone-700">
            <p>
              TrialLineage is a public science platform that traces the scientific lineage behind human disease breakthroughs.
            </p>
            <p>
              It connects current clinical developments to the deeper discoveries, tools, models, concepts, and decisions that made them possible.
            </p>
            <p>
              Each case page starts with a current clinical development — a drug entering trials, a therapy receiving approval, a new treatment reaching patients — and traces backward through the scientific history that led to that moment.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            What TrialLineage does
          </h2>
          <div className="mt-8 space-y-5">
            {[
              ["Traces reverse lineage", "Starting from a breakthrough, we map the chain of prior discoveries, enabling technologies, and translational decisions that made it possible."],
              ["Explains in plain language", "Scientific lineages are written for a general audience, not specialists. Technical detail is available but never required."],
              ["Covers multiple domains", "A single case may connect oncology, structural biology, medicinal chemistry, clinical trial design, and regulatory science."],
              ["Monitors active research", "A research review process tracks clinical trial registrations, regulatory filings, and research milestones to identify candidates for new lineage investigations."],
              ["Builds a public library", "Over time, TrialLineage becomes a growing collection of case pages, concept explainers, and cross-linked scientific histories."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-stone-200 bg-white px-6 py-5">
                <p className="text-sm font-semibold text-stone-900">{title}</p>
                <p className="mt-2 text-sm leading-7 text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            What TrialLineage is not
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-8 text-stone-700">
            <li>Not a news service. We do not cover breaking events as headlines.</li>
            <li>Not a clinical database. We do not replicate ClinicalTrials.gov or FDA records.</li>
            <li>Not medical advice. Nothing on this site recommends treatment or investment decisions.</li>
            <li>Not funded by industry. Editorial conclusions are independent of any donor or sponsor.</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-wrap gap-6 text-xs text-stone-500">
            <Link href="/about" className="hover:text-stone-900">About</Link>
            <Link href="/mission" className="hover:text-stone-900">Mission</Link>
            <Link href="/editorial-standards" className="hover:text-stone-900">Editorial Standards</Link>
            <Link href="/support" className="hover:text-stone-900">Support</Link>
            <Link href="/disclaimer" className="hover:text-stone-900">Disclaimer</Link>
            <Link href="/cases" className="hover:text-stone-900">Lineages</Link>
            <Link href="/concepts" className="hover:text-stone-900">Concepts</Link>
          </div>
          <p className="mt-4 text-xs text-stone-400">
            TrialLineage is a public science platform. Not medical advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
