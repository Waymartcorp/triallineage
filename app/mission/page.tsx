import Link from "next/link";

export default function MissionPage() {
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
              <Link href="/support" className="transition hover:text-stone-900">Support</Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Mission
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Why TrialLineage exists
          </h1>
          <div className="mt-8 space-y-6 text-base leading-8 text-stone-700">
            <p>
              Most people only see the endpoint of biomedical science: a new drug, a trial announcement, or a breakthrough headline.
            </p>
            <p>
              TrialLineage restores the hidden story: the basic science, failed hypotheses, model systems, technologies, and people behind progress.
            </p>
            <p>
              Every clinical trial has a lineage. Every approved therapy rests on decades of prior work — discoveries that are rarely explained, poorly connected in public discourse, and often invisible to the people who benefit most from the result.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            The problem we address
          </h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-stone-700">
            <p>
              Science reporting tends to cover endpoints: a drug is approved, a trial succeeds, a company announces results. This creates a distorted impression of how breakthroughs happen.
            </p>
            <p>
              The actual structure is more like an inverted tree. A single clinical breakthrough may depend on structural biology from the 1990s, a mouse model developed in 2004, a screening method published in 2011, and a translational insight that took five years to validate.
            </p>
            <p>
              Without making that structure visible, the public loses the ability to understand where progress comes from, why it takes time, and why investing in basic science matters.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            What we believe
          </h2>
          <ul className="mt-8 space-y-4 text-base leading-8 text-stone-700">
            <li>Scientific progress is cumulative. No breakthrough is isolated.</li>
            <li>The public deserves access to the reasoning behind medical advances, not just the conclusions.</li>
            <li>Explaining lineage honestly — including failed paths and open questions — builds trust in science better than hype does.</li>
            <li>A public library of scientific histories can serve patients, students, journalists, policymakers, and researchers.</li>
            <li>Independence from industry and advocacy groups is non-negotiable for credibility.</li>
          </ul>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Where we are now
          </h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-stone-700">
            <p>
              TrialLineage is in early build. The first case page is live, concept explainers are growing, and new lineage investigations are being identified through ongoing research review.
            </p>
            <p>
              We are building this as a public resource funded by individual supporters, not industry sponsors.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/support"
              className="inline-flex items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Support TrialLineage
            </Link>
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
