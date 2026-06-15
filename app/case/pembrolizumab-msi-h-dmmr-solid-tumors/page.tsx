import Link from "next/link";

export default function PembrolizumabMsiCasePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* ── Hero ── */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex items-center gap-3">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              TrialLineage Lineage
            </p>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              FDA Approved · 2017
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Pembrolizumab for MSI-H/dMMR solid tumors
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            In May 2017, the FDA granted accelerated approval to pembrolizumab
            (Keytruda) for adult and pediatric patients with unresectable or
            metastatic solid tumors that are microsatellite instability-high
            (MSI-H) or mismatch repair deficient (dMMR) — regardless of tumor
            type. This was the first tissue-agnostic cancer approval in FDA
            history. This lineage traces backward from that regulatory
            milestone through the science that made it possible.
          </p>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Draft scaffold. Content below contains verified endpoint facts and
            lineage structure. Sections marked [NEEDS REVIEW] require source
            confirmation before publication.
          </div>
        </div>
      </section>

      {/* ── Endpoint summary ── */}
      <section id="endpoint" className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Endpoint
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              First tissue-agnostic FDA cancer approval
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Pembrolizumab was approved for patients whose tumors carry MSI-H
              or dMMR status, regardless of where in the body the cancer
              originated. The approval was based on data from five
              single-arm clinical trials enrolling 149 patients across 15
              different tumor types. Overall response rate was 39.6%, with
              78% of responses lasting ≥6 months.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              This regulatory decision established a new precedent: a cancer
              drug could be approved based on a molecular biomarker rather than
              the organ where the tumor arose. The logic was that MSI-H/dMMR
              tumors — regardless of site — share a biological feature
              (high mutational burden and neoantigen load) that predicts
              response to PD-1 blockade.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              At a glance
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">The endpoint:</span>{" "}
                FDA accelerated approval of pembrolizumab for MSI-H/dMMR solid
                tumors, May 2017 — first tissue-agnostic cancer approval
              </li>
              <li>
                <span className="font-medium text-stone-900">The drug:</span>{" "}
                Pembrolizumab (Keytruda), anti-PD-1 monoclonal antibody
              </li>
              <li>
                <span className="font-medium text-stone-900">The biomarker:</span>{" "}
                Microsatellite instability-high (MSI-H) or mismatch repair
                deficient (dMMR) status
              </li>
              <li>
                <span className="font-medium text-stone-900">The precedent:</span>{" "}
                Drug approved for a molecular feature, not a tumor location —
                tissue-agnostic regulatory logic
              </li>
              <li>
                <span className="font-medium text-stone-900">Why it took decades:</span>{" "}
                PD-1 had to be discovered, mismatch repair had to be linked to
                immunotherapy response, and the FDA had to accept biomarker-based
                (not organ-based) approval
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Reverse-lineage scaffold ── */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Reverse-lineage scaffold
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            What had to happen first
          </h2>

          <div className="mt-10 space-y-4">
            {[
              { num: "1", title: "T-cell activation and regulation understood", text: "Immunologists mapped how T cells recognize foreign antigens and how co-stimulatory and co-inhibitory signals regulate their activity. Without this framework, checkpoint inhibitors could not have been conceived. [NEEDS REVIEW: key labs, 1980s–1990s timeline]" },
              { num: "2", title: "PD-1 discovered", text: "Tasuku Honjo's lab (Kyoto University) identified PD-1 in 1992 as a receptor involved in programmed cell death. Subsequent work showed PD-1 functions as an immune checkpoint — a brake that tumors exploit to evade immune destruction. [Verified: Ishida et al., EMBO J 1992]" },
              { num: "3", title: "PD-L1 identified on tumors", text: "Researchers demonstrated that tumors express PD-L1, which engages PD-1 on T cells to suppress anti-tumor immunity. Blocking this interaction could re-activate T cells against cancer. [NEEDS REVIEW: Dong et al., 2002; Freeman et al., 2000]" },
              { num: "4", title: "Anti-PD-1 antibodies developed", text: "Pharmaceutical companies developed monoclonal antibodies against PD-1 (pembrolizumab by Merck, nivolumab by BMS). These entered clinical testing across multiple tumor types. [Verified: pembrolizumab first approvals 2014]" },
              { num: "5", title: "DNA mismatch repair linked to cancer", text: "Researchers identified that defects in DNA mismatch repair genes (MLH1, MSH2, MSH6, PMS2) cause microsatellite instability and dramatically increase mutation rate in tumors — particularly colorectal cancer (Lynch syndrome). [NEEDS REVIEW: Fishel et al., 1993; Papadopoulos et al., 1994]" },
              { num: "6", title: "MSI-H linked to immunotherapy response", text: "Luis Diaz and Dung Le (Johns Hopkins) observed that colorectal cancers with MSI-H responded dramatically to PD-1 blockade while microsatellite-stable tumors did not. The hypothesis: high mutation burden creates many neoantigens, making these tumors visible to reinvigorated T cells. [Verified: Le et al., NEJM 2015]" },
              { num: "7", title: "Basket trials across tumor types", text: "Instead of testing one tumor type at a time, researchers enrolled patients with MSI-H/dMMR tumors from any anatomic site. Response was consistent across 15+ tumor types — supporting a biomarker-based rather than organ-based approval. [Verified: multiple single-arm trials, 149 patients]" },
              { num: "8", title: "FDA tissue-agnostic approval", text: "The FDA accepted the logic: if the biomarker (MSI-H/dMMR) predicts response regardless of tumor site, the drug can be approved across all solid tumors with that feature. This was the first time a cancer drug was approved this way. [Verified: FDA accelerated approval, May 2017]" },
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-[1.25rem] border border-stone-200 bg-stone-50 p-5"
              >
                <div className="flex items-baseline gap-3">
                  <p className="text-2xl font-semibold text-stone-300">
                    {step.num}
                  </p>
                  <p className="text-sm font-medium text-stone-900">
                    {step.title}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Discovery timeline placeholder ── */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Discovery timeline
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            [TO BE BUILT]
          </h2>
          <p className="mt-4 text-sm leading-7 text-stone-600 italic">
            Full categorized timeline to be developed after source review.
            Key events to include: T-cell biology foundations, PD-1 discovery
            (1992), PD-L1 on tumors, mismatch repair gene identification,
            Lynch syndrome genetics, Le et al. 2015 NEJM, basket trial
            enrollment, FDA tissue-agnostic precedent.
          </p>
        </div>
      </section>

      {/* ── Known vs unknown ── */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Known vs. unknown
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            What the evidence says and what remains open
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Established</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-700">
                <li>MSI-H/dMMR tumors respond to pembrolizumab across multiple tumor types</li>
                <li>The FDA accepted biomarker-based (tissue-agnostic) approval logic</li>
                <li>PD-1 blockade reactivates T cells suppressed by PD-L1-expressing tumors</li>
                <li>High mutation burden in MSI-H tumors generates neoantigens visible to T cells</li>
                <li>Overall response rate ~40% with durable responses in most responders</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-700">Not yet known</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-700">
                <li>Why ~60% of MSI-H patients do not respond [NEEDS REVIEW]</li>
                <li>Whether MSI-H status alone is sufficient or additional biomarkers improve prediction</li>
                <li>Optimal treatment duration</li>
                <li>Whether tissue-agnostic logic will extend to other biomarker-drug pairs</li>
                <li>Long-term outcomes across rare tumor types with limited data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sources and confidence ── */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Sources and confidence
          </p>

          <div className="mt-6 rounded-xl border border-stone-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Confidence flag
            </p>
            <p className="mt-2 text-sm leading-7 text-stone-700">
              <span className="font-medium text-emerald-700">High</span>{" "}
              for endpoint facts (FDA approval, trial data, tissue-agnostic
              precedent).{" "}
              <span className="font-medium text-amber-700">Moderate</span>{" "}
              for reverse-lineage details (PD-1 discovery timeline verified;
              mismatch repair history and early T-cell biology sections need
              source confirmation for specific labs and dates).
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-stone-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Source links
            </p>
            <ul className="mt-2 space-y-1.5 text-sm leading-7 text-stone-700">
              <li>FDA accelerated approval announcement, May 23, 2017</li>
              <li>Le et al., NEJM 2015 — PD-1 blockade in mismatch repair-deficient tumors</li>
              <li>Le et al., Science 2017 — MSI-H across tumor types</li>
              <li>Ishida et al., EMBO J 1992 — PD-1 discovery</li>
              <li>[TODO: Fishel et al., Cell 1993 — MSH2 cloning]</li>
              <li>[TODO: Freeman et al., J Exp Med 2000 — PD-L1 identification]</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              About this page
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-stone-700">
              This is a TrialLineage page. It traces a specific FDA approval
              backward through the scientific lineage that made it possible.
            </p>
            <p className="mt-4 text-sm text-stone-500 italic">
              Status: Draft scaffold. Under investigation. Not yet editorially complete.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-stone-500">
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
