import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm uppercase tracking-[0.18em] text-stone-500 transition hover:text-stone-900">
              TrialLineage
            </Link>
            <nav className="hidden gap-6 text-sm text-stone-600 md:flex">
              <Link href="/cases" className="transition hover:text-stone-900">Cases</Link>
              <Link href="/concepts" className="transition hover:text-stone-900">Concepts</Link>
              <Link href="/about" className="transition hover:text-stone-900">About</Link>
              <Link href="/mission" className="transition hover:text-stone-900">Mission</Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Support
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Help build a public library of scientific lineages
          </h1>
          <p className="mt-6 text-base leading-8 text-stone-700">
            TrialLineage is an independent public science platform. We trace the full scientific history behind human disease breakthroughs — and we do it without industry funding, promotional language, or editorial compromise.
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700">
            Your support funds case research, concept explainers, clinical trial review, and the preservation of discovery history for a public audience.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Support tiers
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                amount: "$5/month",
                title: "Reader",
                desc: "Support public science explainers. Help keep TrialLineage accessible and independent.",
              },
              {
                amount: "$15/month",
                title: "Investigator",
                desc: "Help fund new lineage investigations. Your support enables deeper research into additional disease breakthroughs.",
              },
              {
                amount: "$50/month",
                title: "Case Sponsor",
                desc: "Sponsor deeper case development. Directly support the research, writing, and verification of full case pages.",
              },
              {
                amount: "$250+/month",
                title: "Research Desk",
                desc: "Support a disease-area research desk. Help sustain ongoing research monitoring and case development for an entire therapeutic area.",
              },
            ].map((tier) => (
              <div
                key={tier.amount}
                className="rounded-2xl border border-stone-200 bg-white px-6 py-6"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
                  {tier.amount}
                </p>
                <p className="mt-2 text-base font-semibold text-stone-900">
                  {tier.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            What your support funds
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-8 text-stone-700">
            <li>Research and writing of public case pages tracing scientific lineages</li>
            <li>Concept explainer pages that make complex fields accessible</li>
            <li>Clinical trial review and monitoring infrastructure</li>
            <li>Source verification and citation management</li>
            <li>Platform development and public accessibility</li>
            <li>Preservation of the history of scientific discovery</li>
          </ul>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Our commitment to supporters
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-stone-700">
            <p>
              Donors support the platform, not the conclusions. No supporter — at any tier — has influence over which cases we investigate, what we write, or how we interpret the scientific record.
            </p>
            <p>
              TrialLineage maintains full editorial independence. Our credibility depends on it.
            </p>
          </div>
          <div className="mt-10 rounded-2xl border border-stone-200 bg-white px-6 py-6 text-center">
            <p className="text-sm text-stone-500">
              Donation infrastructure is being set up. To support TrialLineage now, contact us directly.
            </p>
            <p className="mt-3 text-sm font-medium text-stone-900">
              support@triallineage.org
            </p>
          </div>
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
            <Link href="/cases" className="hover:text-stone-900">Cases</Link>
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
