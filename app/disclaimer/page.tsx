import Link from "next/link";

export default function DisclaimerPage() {
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

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Legal
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Disclaimer
          </h1>

          <div className="mt-10 space-y-8 text-base leading-8 text-stone-700">
            <div>
              <h2 className="text-lg font-semibold text-stone-900">Not medical advice</h2>
              <p className="mt-3">
                TrialLineage is an educational platform. Nothing on this site constitutes medical advice, diagnosis, or treatment recommendations. The information presented is for general educational purposes and should not be used as a basis for medical decisions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-stone-900">Not a substitute for professional care</h2>
              <p className="mt-3">
                The scientific and clinical trial information on TrialLineage does not replace consultation with qualified healthcare professionals. Readers with medical concerns should seek the advice of licensed physicians, pharmacists, or other qualified providers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-stone-900">Not investment advice</h2>
              <p className="mt-3">
                TrialLineage does not provide financial, investment, or trading advice. References to companies, drugs, or clinical programs are for educational context and do not constitute recommendations to buy, sell, or hold any security.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-stone-900">Information may change</h2>
              <p className="mt-3">
                Clinical trial information, regulatory status, and scientific understanding evolve over time. Information presented on TrialLineage reflects the state of the public record at the time of writing and may become outdated as new data emerges, trials progress, or regulatory decisions are made.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-stone-900">Citations are educational</h2>
              <p className="mt-3">
                Citations to peer-reviewed publications, trial registrations, and regulatory filings are provided for educational context and source verification. Their inclusion does not imply endorsement of any product, therapy, or clinical approach.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-stone-900">Consult primary sources</h2>
              <p className="mt-3">
                Readers are encouraged to consult primary sources — including ClinicalTrials.gov, FDA databases, peer-reviewed journals, and qualified professionals — for the most current and authoritative information relevant to their needs.
              </p>
            </div>
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
