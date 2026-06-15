import Link from "next/link";

export default function WegovySelectCasePage() {
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
              FDA Approved · 2024
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Semaglutide for cardiovascular risk reduction in obesity
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            In March 2024, the FDA approved an expanded indication for
            semaglutide 2.4 mg (Wegovy) to reduce the risk of major adverse
            cardiovascular events in adults with established cardiovascular
            disease and obesity or overweight. This lineage traces backward
            from that approval through the science that made it possible.
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
              FDA label expansion based on the SELECT trial
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              The SELECT trial (Semaglutide Effects on Cardiovascular Outcomes
              in People with Overweight or Obesity) randomized over 17,000
              adults with established cardiovascular disease and BMI ≥27 to
              semaglutide 2.4 mg or placebo. The primary endpoint was time to
              first occurrence of a major adverse cardiovascular event (MACE):
              cardiovascular death, non-fatal myocardial infarction, or
              non-fatal stroke.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              Semaglutide reduced MACE by 20% (hazard ratio 0.80, 95% CI
              0.72–0.90). Based on these results, the FDA approved the
              cardiovascular risk reduction indication in March 2024.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              At a glance
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">The endpoint:</span>{" "}
                FDA approval of cardiovascular risk reduction indication for
                Wegovy (semaglutide 2.4 mg), March 2024
              </li>
              <li>
                <span className="font-medium text-stone-900">The trial:</span>{" "}
                SELECT (NCT03574597), 17,604 participants, median follow-up 39.8
                months
              </li>
              <li>
                <span className="font-medium text-stone-900">The drug:</span>{" "}
                Semaglutide 2.4 mg subcutaneous weekly injection, GLP-1 receptor
                agonist
              </li>
              <li>
                <span className="font-medium text-stone-900">The disease:</span>{" "}
                Adults with established cardiovascular disease and obesity or
                overweight (BMI ≥27)
              </li>
              <li>
                <span className="font-medium text-stone-900">Why it took decades:</span>{" "}
                GLP-1 had to be discovered as a hormone, developed as a drug,
                proven for weight loss, and then tested in a dedicated
                cardiovascular outcomes trial
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
              { num: "1", title: "Incretin biology discovered", text: "The observation that oral glucose produces greater insulin release than intravenous glucose (the incretin effect) led to the identification of gut-derived hormones including GLP-1. [NEEDS REVIEW: exact timeline and key labs]" },
              { num: "2", title: "GLP-1 identified and characterized", text: "GLP-1 was identified as a product of the proglucagon gene, secreted by intestinal L-cells. Its insulin-stimulating, appetite-suppressing, and gastric-emptying effects were characterized. [NEEDS REVIEW: key researchers, 1980s–1990s timeline]" },
              { num: "3", title: "GLP-1 made into a drug", text: "Native GLP-1 is degraded within minutes by DPP-4. Modifications (acylation, albumin binding) extended its half-life enough for weekly dosing. Novo Nordisk developed liraglutide, then semaglutide. [NEEDS REVIEW: specific chemistry milestones]" },
              { num: "4", title: "Diabetes efficacy established", text: "Semaglutide was first approved for type 2 diabetes (Ozempic, 2017). GLP-1 agonists became established as a diabetes drug class. [Verified: FDA approval 2017]" },
              { num: "5", title: "Weight loss efficacy established", text: "Higher-dose semaglutide (2.4 mg) was tested in the STEP trials for chronic weight management. FDA approved Wegovy for obesity in June 2021. [Verified: FDA approval 2021]" },
              { num: "6", title: "Cardiovascular outcomes trial designed", text: "SELECT was designed to test whether semaglutide-mediated weight loss (or other mechanisms) reduces cardiovascular events in adults with obesity and established CVD. [Verified: NCT03574597, enrolled 2018–2021]" },
              { num: "7", title: "SELECT trial results", text: "20% reduction in MACE. First GLP-1 agonist to demonstrate cardiovascular benefit in a population selected for obesity/overweight rather than diabetes. [Verified: Lincoff et al., NEJM 2023]" },
              { num: "8", title: "FDA cardiovascular indication", text: "FDA approved expanded Wegovy label for cardiovascular risk reduction, March 2024. [Verified: FDA approval]" },
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
            Full categorized timeline (Milestone / Branch point / Detour /
            Convergence) to be developed after source review. Key events to
            include: incretin effect observation, GLP-1 identification, DPP-4
            degradation problem, acylation chemistry, liraglutide development,
            semaglutide development, diabetes approvals, STEP trials, SELECT
            trial, cardiovascular indication.
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
                <li>Semaglutide 2.4 mg reduces MACE by 20% in adults with CVD and obesity/overweight</li>
                <li>The SELECT trial enrolled 17,604 participants with median 39.8 months follow-up</li>
                <li>FDA approved the cardiovascular risk reduction indication (March 2024)</li>
                <li>The drug was already approved for weight management (2021) and type 2 diabetes (2017)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-700">Not yet known</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-700">
                <li>Whether the cardiovascular benefit is driven by weight loss, direct vascular effects, or both [NEEDS REVIEW]</li>
                <li>Long-term cardiovascular outcomes beyond trial duration</li>
                <li>Whether benefit extends to patients without established CVD</li>
                <li>Durability of effect if treatment is discontinued</li>
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
              for endpoint facts (FDA approval, SELECT trial results).{" "}
              <span className="font-medium text-amber-700">Moderate</span>{" "}
              for reverse-lineage details (incretin biology history needs
              source confirmation for specific labs and dates).
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-stone-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Source links
            </p>
            <ul className="mt-2 space-y-1.5 text-sm leading-7 text-stone-700">
              <li>ClinicalTrials.gov NCT03574597 — SELECT trial record</li>
              <li>Lincoff et al., NEJM 2023 — primary SELECT results</li>
              <li>FDA approval announcement, March 2024</li>
              <li>[TODO: Holst, Physiol Rev 2007 — GLP-1 biology review]</li>
              <li>[TODO: Knudsen et al. — semaglutide chemistry]</li>
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
