import Link from "next/link";

export default function EditorialStandardsPage() {
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
            Standards
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Editorial Standards
          </h1>
          <p className="mt-6 text-base leading-8 text-stone-700">
            TrialLineage is built on the principle that public trust requires editorial discipline. These standards govern how we source, present, and distinguish different types of information.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Source distinction
          </h2>
          <p className="mt-4 text-base leading-8 text-stone-700">
            TrialLineage distinguishes clearly between the following types of information:
          </p>
          <div className="mt-6 space-y-4">
            {[
              ["Public trial record facts", "Information drawn directly from ClinicalTrials.gov, FDA filings, or equivalent regulatory databases. Presented as factual, with source attribution."],
              ["Peer-reviewed scientific background", "Published research cited by DOI, PMID, or equivalent identifier. Represents the established scientific record as of the date cited."],
              ["Company or institutional announcements", "Press releases, corporate filings, or institutional communications. Presented as claims from the source, not as verified conclusions."],
              ["TrialLineage interpretation", "Our editorial synthesis connecting sources into a lineage narrative. Clearly marked as interpretation, not primary evidence."],
              ["Open questions and uncertainties", "Explicitly flagged areas where evidence is incomplete, contested, or developing. Never smoothed over for narrative convenience."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-stone-200 bg-white px-6 py-5">
                <p className="text-sm font-semibold text-stone-900">{title}</p>
                <p className="mt-2 text-sm leading-7 text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Core principles
          </h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-stone-900">Citation-first standard</h3>
              <p className="mt-2 text-base leading-8 text-stone-700">
                Every factual claim in a TrialLineage case page or concept explainer must be traceable to a primary source. We cite trial registrations, peer-reviewed publications, regulatory filings, or authoritative databases. Unsourced claims are not published.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-stone-900">Separation of signal, evidence, and interpretation</h3>
              <p className="mt-2 text-base leading-8 text-stone-700">
                A signal (e.g., a new trial registration) is not the same as evidence (e.g., published efficacy data), which is not the same as interpretation (e.g., a lineage narrative connecting decades of work). We never conflate these layers.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-stone-900">Correction policy</h3>
              <p className="mt-2 text-base leading-8 text-stone-700">
                If we publish an error of fact, we correct it promptly and transparently. Corrections are noted on the relevant page with the date of the correction.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-stone-900">No medical advice</h3>
              <p className="mt-2 text-base leading-8 text-stone-700">
                TrialLineage is an educational resource. Nothing on this platform constitutes medical advice, treatment recommendations, or clinical guidance. Readers should consult qualified professionals for medical decisions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-stone-900">Editorial independence</h3>
              <p className="mt-2 text-base leading-8 text-stone-700">
                No donor, sponsor, or external party has editorial control over TrialLineage content. Financial support does not influence which cases are selected, how lineages are traced, or what conclusions are reached.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            What this means in practice
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-8 text-stone-700">
            <li>Every case page attributes its sources explicitly.</li>
            <li>Interpretation is labeled, not disguised as fact.</li>
            <li>Uncertainty is preserved, not hidden for clarity.</li>
            <li>We do not promote any therapy, company, or investment.</li>
            <li>Corrections are visible and dated.</li>
            <li>Donors support the platform, not the conclusions.</li>
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
