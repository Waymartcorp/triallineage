import Link from "next/link";

export default function IpfFibrosisCasePage() {
  const conceptLinks = [
    { label: "Idiopathic pulmonary fibrosis", href: "/concept/idiopathic-pulmonary-fibrosis" },
    { label: "Fibrosis", href: "/concept/fibrosis" },
    { label: "Fibroblasts", href: "/concept/fibroblasts" },
    { label: "Extracellular matrix", href: "/concept/extracellular-matrix" },
    { label: "Lysophosphatidic acid signaling", href: "/concept/lysophosphatidic-acid-signaling" },
    { label: "LPA1 receptor", href: "/concept/lpa1-receptor" },
    { label: "Antifibrotic therapy", href: "/concept/antifibrotic-therapy" },
    { label: "Forced vital capacity", href: "/concept/forced-vital-capacity" },
    { label: "Clinical trial design", href: "/concept/clinical-trial-design" },
    { label: "Translational medicine", href: "/concept/translational-medicine" },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* ── Hero ── */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex items-center gap-3">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              TrialLineage Lineage
            </p>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Phase 3 · Active
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Targeting fibrosis signaling in idiopathic pulmonary fibrosis
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            This lineage starts with a Phase 3 trial of an oral drug targeting
            the LPA1 receptor in IPF, then traces backward through the chain of
            science that made it possible: fibrosis pathology, fibroblast
            biology, lipid signaling, receptor pharmacology, and antifibrotic
            drug development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#plain-language"
              className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Start with the summary
            </a>
            <a
              href="#lineage-map"
              className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900"
            >
              Lineage map
            </a>
            <a
              href="#timeline"
              className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900"
            >
              Discovery timeline
            </a>
            <a
              href="#deep-dive"
              className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900"
            >
              Deep-dive view
            </a>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━ LAYER 1: PLAIN-LANGUAGE SUMMARY ━━━━━━━━━━ */}

      <section id="plain-language" className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              In plain language
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              The drug, the disease, and the chain of science behind both
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Idiopathic pulmonary fibrosis (IPF) is a progressive lung disease
              in which scar tissue gradually replaces normal lung tissue, making
              it harder and harder to breathe. Two existing drugs can slow it
              down. Neither stops it. Median survival is 3–5 years from
              diagnosis.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              BMS-986278 is an investigational oral drug designed to block the
              LPA1 receptor — a molecular switch that activates fibroblasts,
              the cells responsible for producing scar tissue. If blocking LPA1
              reduces fibroblast activation, the progressive scarring that
              destroys lung function may slow.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              But this trial did not appear from nowhere. It exists because of
              decades of work: pathologists who identified the disease pattern,
              cell biologists who understood fibroblasts, biochemists who
              discovered LPA as a signaling molecule, molecular biologists who
              cloned LPA receptors, and medicinal chemists who designed a drug
              to block one. This page traces that chain.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              At a glance
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">The drug:</span>{" "}
                BMS-986278, an oral LPA1 receptor antagonist
              </li>
              <li>
                <span className="font-medium text-stone-900">The disease:</span>{" "}
                idiopathic pulmonary fibrosis — progressive, irreversible lung
                scarring with limited treatment options
              </li>
              <li>
                <span className="font-medium text-stone-900">The target:</span>{" "}
                LPA1, a receptor that drives fibroblast activation and collagen
                production in the lung
              </li>
              <li>
                <span className="font-medium text-stone-900">The trial:</span>{" "}
                NCT06003426, Phase 3, measuring whether LPA1 blockade slows the
                rate of lung function decline (FVC)
              </li>
              <li>
                <span className="font-medium text-stone-900">Why it took decades:</span>{" "}
                IPF was first treated as inflammation (wrong). LPA had to be
                recognized as a signaling molecule. LPA1 had to be cloned.
                Selective chemistry had to be designed. An endpoint had to be
                validated.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What had to happen first */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            What had to happen first?
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Six steps that made this trial possible
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            None of these steps alone produced a drug. Each one built on the
            last, and the full chain took decades to assemble.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { num: "1", title: "Name the disease", text: "Pathologists described a distinct pattern of progressive lung scarring and gave it a name: usual interstitial pneumonia / IPF." },
              { num: "2", title: "Understand fibroblasts", text: "Cell biologists identified fibroblasts as the primary effector cells of tissue scarring — not inflammation, not dead tissue." },
              { num: "3", title: "Abandon the wrong hypothesis", text: "Anti-inflammatory treatments failed. The field recognized IPF as aberrant wound healing, not chronic inflammation." },
              { num: "4", title: "Discover LPA signaling", text: "Biochemists found that lysophosphatidic acid is a potent bioactive lipid that drives fibroblast activation through specific receptors." },
              { num: "5", title: "Design a selective drug", text: "Medicinal chemists built an orally available small molecule that selectively blocks LPA1 without disrupting other LPA receptors." },
              { num: "6", title: "Validate the endpoint", text: "Pirfenidone and nintedanib trials established FVC decline rate as a regulatory-accepted measure of IPF progression." },
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-[1.25rem] border border-stone-200 bg-stone-50 p-5"
              >
                <p className="text-2xl font-semibold text-stone-300">
                  {step.num}
                </p>
                <p className="mt-2 text-sm font-medium text-stone-900">
                  {step.title}
                </p>
                <p className="mt-2 text-xs leading-5 text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ LAYER 2: REVERSE-LINEAGE MAP ━━━━━━━━━━ */}

      <section id="lineage-map" className="border-b border-stone-200 bg-stone-900 text-stone-100">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-400">
            Reverse-lineage map
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            How this trial traces back through science
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
            Read from top to bottom to see the chain of scientific fields that
            built on each other. Side branches show where the path diverged,
            where earlier approaches failed, and where enabling work de-risked
            key steps.
          </p>

          <div className="mt-12 grid gap-0 lg:grid-cols-[1fr_auto_1fr]">
            {/* ── Left side-branches ── */}
            <div className="hidden space-y-6 pt-2 lg:block">
              <div className="flex items-start justify-end gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-right" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Failed approach
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Anti-inflammatory treatment
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Corticosteroids and immunosuppressants were tried for decades. They failed — IPF is not primarily an inflammatory disease.
                  </p>
                </div>
                <div className="mt-5 h-px w-6 bg-stone-600" />
              </div>

              <div className="h-16" />

              <div className="flex items-start justify-end gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-right" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Enabling method
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    LPA1 knockout mice
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Mice lacking LPA1 showed significantly reduced lung fibrosis after injury — confirming the receptor as a druggable target.
                  </p>
                </div>
                <div className="mt-5 h-px w-6 bg-stone-600" />
              </div>

              <div className="h-16" />

              <div className="flex items-start justify-end gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-right" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Enabling method
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    FVC as a regulatory endpoint
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Pirfenidone and nintedanib trials validated FVC decline rate as an accepted primary endpoint for IPF drug approval.
                  </p>
                </div>
                <div className="mt-5 h-px w-6 bg-stone-600" />
              </div>
            </div>

            {/* ── Central spine ── */}
            <div className="flex flex-col items-center">
              {[
                { label: "Clinical trial", title: "Phase 3: BMS-986278 in IPF", accent: true },
                { label: "Phase 2 evidence", title: "Tolerability and potential efficacy signal" },
                { label: "Drug design", title: "Oral selective LPA1 antagonist" },
                { label: "Target validation", title: "LPA1 linked to fibrosis in lung" },
                { label: "Receptor biology", title: "LPA receptors cloned and characterized" },
                { label: "Lipid signaling", title: "LPA identified as bioactive signaling molecule" },
                { label: "Conceptual shift", title: "IPF redefined as aberrant wound healing" },
                { label: "Cell biology", title: "Fibroblasts and extracellular matrix" },
                { label: "Pathology", title: "Lung fibrosis recognized as distinct disease" },
              ].map((node, i, arr) => (
                <div key={node.title} className="flex flex-col items-center">
                  <div
                    className={`w-64 rounded-2xl border p-5 text-center shadow-sm sm:w-72 ${
                      node.accent
                        ? "border-white/20 bg-white/10"
                        : "border-white/10 bg-white/[0.04]"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                      {node.label}
                    </p>
                    <p
                      className={`mt-1.5 text-sm font-semibold ${
                        node.accent ? "text-white" : "text-stone-200"
                      }`}
                    >
                      {node.title}
                    </p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex flex-col items-center py-1">
                      <div className="h-6 w-px bg-stone-600" />
                      <div className="text-stone-500">&#9662;</div>
                      <div className="h-2 w-px bg-stone-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ── Right side-branches ── */}
            <div className="hidden space-y-6 pt-2 lg:block">
              <div className="h-8" />

              <div className="flex items-start gap-4">
                <div className="mt-5 h-px w-6 bg-stone-600" />
                <div className="rounded-xl border border-white/10 bg-white/5 p-4" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Branch point
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Multiple antifibrotic pathways
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    TGF-beta, PDGF, Wnt, and other pathways also drive fibrosis. LPA1 is one of several active drug targets.
                  </p>
                </div>
              </div>

              <div className="h-12" />

              <div className="flex items-start gap-4">
                <div className="mt-5 h-px w-6 bg-stone-600" />
                <div className="rounded-xl border border-white/10 bg-white/5 p-4" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Enabling method
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Pirfenidone and nintedanib (2014)
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    First-generation antifibrotics proved the concept and built the regulatory/clinical framework BMS-986278 now uses.
                  </p>
                </div>
              </div>

              <div className="h-12" />

              <div className="flex items-start gap-4">
                <div className="mt-5 h-px w-6 bg-stone-600" />
                <div className="rounded-xl border border-white/10 bg-white/5 p-4" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Open question
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Single-pathway sufficiency
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Is blocking LPA1 alone enough? Or does fibrosis require combination approaches targeting redundant pathways?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile side-branch summary */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
            {[
              { type: "Failed approach", title: "Anti-inflammatory treatment", text: "Corticosteroids failed. IPF is not primarily inflammatory." },
              { type: "Enabling method", title: "LPA1 knockout mice", text: "Confirmed the receptor as a druggable target." },
              { type: "Enabling method", title: "FVC as a regulatory endpoint", text: "Pirfenidone/nintedanib trials validated the primary endpoint." },
              { type: "Branch point", title: "Multiple antifibrotic pathways", text: "LPA1 is one of several active drug targets." },
              { type: "Enabling method", title: "Pirfenidone and nintedanib", text: "First-generation antifibrotics built the framework." },
              { type: "Open question", title: "Single-pathway sufficiency", text: "Is blocking LPA1 alone enough?" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                  {item.type}
                </p>
                <p className="mt-1 text-sm font-medium text-stone-200">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-stone-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ LAYER 2.5: DISCOVERY TIMELINE ━━━━━━━━━━ */}

      <section id="timeline" className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Discovery timeline
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Key moments in the path to this trial
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Each step below made the next step possible. Without any one of
            them, this Phase 3 trial would not exist.
          </p>

          <div className="mt-12 space-y-0">
            {[
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1930s\u20131960s",
                title: "Lung fibrosis recognized as a distinct pathology",
                text: "Pathologists described progressive lung scarring distinct from infection or cancer. By the 1960s, \u201Cusual interstitial pneumonia\u201D (UIP) was identified as the histological pattern underlying what would become IPF.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1970s\u20131980s",
                title: "Fibroblasts and extracellular matrix become central",
                text: "Cell biologists identified fibroblasts as the primary effector cells of tissue scarring. The concept of extracellular matrix as an active, remodeled structure changed how scientists understood fibrosis \u2014 it could be studied as a problem of cell behavior.",
              },
              {
                type: "Detour",
                color: "bg-stone-400",
                era: "1980s\u20131990s",
                title: "Anti-inflammatory approaches fail",
                text: "Patients received corticosteroids and immunosuppressants for decades. They were ineffective and sometimes harmful. This long failure eventually forced a conceptual shift \u2014 away from inflammation and toward aberrant wound healing.",
              },
              {
                type: "Branch point",
                color: "bg-stone-500",
                era: "1990s",
                title: "IPF redefined as aberrant wound healing",
                text: "Researchers recognized that IPF is not chronic inflammation but disordered tissue repair \u2014 repetitive microscopic lung injury activating fibroblasts through wound-healing pathways that never resolve. This redirected the field toward profibrotic signaling.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1990s",
                title: "LPA identified as a bioactive signaling lipid",
                text: "Biochemists discovered that lysophosphatidic acid is not merely a metabolic intermediate but a potent signaling molecule that activates cell proliferation, migration, and survival through specific G protein-coupled receptors.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1996\u20132001",
                title: "LPA receptors cloned and characterized",
                text: "Molecular biologists cloned LPA1, LPA2, and LPA3 and mapped their tissue distribution. LPA1 was found in fibroblasts and lung tissue. Each receptor had distinct effects, making selective targeting conceivable.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "2002\u20132008",
                title: "LPA and LPA1 linked to fibrosis in the lung",
                text: "LPA levels were found elevated in IPF lungs. LPA1 signaling promoted fibroblast recruitment, proliferation, and collagen production. LPA1 knockout mice showed reduced fibrosis after lung injury. LPA1 became a druggable profibrotic target.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "2010s",
                title: "Small-molecule LPA1 antagonists designed",
                text: "Medicinal chemists developed orally bioavailable molecules that selectively block LPA1. Drug design required balancing receptor selectivity, oral absorption, metabolic stability, and potency. BMS-986278 emerged from this work.",
              },
              {
                type: "Convergence",
                color: "bg-stone-700",
                era: "2014",
                title: "Pirfenidone and nintedanib establish the framework",
                text: "These first-generation antifibrotics validated two things simultaneously: that antifibrotic drugs could slow IPF, and that FVC decline rate was an acceptable primary endpoint for regulatory approval. They built the trial framework BMS-986278 now uses.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "2020\u20132022",
                title: "Phase 2 clinical evidence",
                text: "A Phase 2 trial of BMS-986278 provided initial evidence of tolerability and suggested a potential treatment effect on lung function decline. These results supported advancement to Phase 3.",
              },
              {
                type: "Convergence",
                color: "bg-stone-700",
                era: "2023\u2013present",
                title: "Phase 3: testing whether LPA1 antagonism slows IPF",
                text: "The Phase 3 trial (NCT06003426) evaluates whether BMS-986278 produces clinically meaningful reduction in FVC decline. Decades of accumulated knowledge \u2014 from fibrosis pathology to lipid signaling to receptor pharmacology to endpoint validation \u2014 converges into a controlled experiment.",
              },
            ].map((entry, i, arr) => (
              <div key={entry.title} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className={`relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full ${entry.color} ${
                      entry.type === "Convergence"
                        ? "ring-4 ring-stone-200"
                        : ""
                    }`}
                  />
                  {i < arr.length - 1 && <div className="w-px grow bg-stone-200" />}
                </div>

                <div className="mb-6 flex-1 rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6 shadow-sm">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-block rounded-full px-3 py-0.5 text-xs font-medium ${
                        entry.type === "Milestone"
                          ? "bg-stone-900 text-white"
                          : entry.type === "Branch point"
                            ? "bg-stone-200 text-stone-700"
                            : entry.type === "Detour"
                              ? "bg-stone-100 text-stone-500"
                              : "bg-stone-700 text-white"
                      }`}
                    >
                      {entry.type}
                    </span>
                    <span className="text-xs tracking-wide text-stone-400">
                      {entry.era}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-stone-900">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-stone-700">
                    {entry.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ WHY THIS MATTERS ━━━━━━━━━━ */}

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-10">
          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Why this lineage matters
            </p>
            <p className="mt-4 leading-8 text-stone-700">
              This lineage shows how pulmonary fibrosis can be approached not
              as scar tissue already formed, but as a disease process shaped by
              injury-repair signaling, fibroblast behavior, and molecular
              pathways that may be therapeutically targeted. It required a major
              conceptual shift: from treating IPF as inflammation (which failed)
              to understanding it as aberrant wound healing.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                A wrong hypothesis had to fail first
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Decades of anti-inflammatory treatment failed. That failure was
                not wasted — it forced the field to rethink the disease
                mechanism entirely. The current trial exists because the wrong
                answer was pursued long enough to be disproven.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                The question this trial answers
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Whether selective LPA1 receptor blockade translates into
                meaningful slowing of lung function decline. The scientific
                lineage is coherent; the clinical outcome is still unknown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ LAYER 3: DEEPER EXPLAINER ━━━━━━━━━━ */}

      <section id="deep-dive" className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Deep-dive view
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            The longer scientific lineage
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Each section below expands on one layer of the discovery chain.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">1. Fibrosis had to become a cell-biology problem</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Before IPF could be treated mechanistically, scientists had to
                understand that fibrosis is driven by specific cells
                (fibroblasts) producing specific molecules (extracellular matrix
                proteins). The concept of fibrosis as active cellular behavior
                — not just dead tissue — opened it to therapeutic targeting.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">2. The inflammation hypothesis had to fail</h3>
              <p className="mt-3 leading-8 text-stone-700">
                For decades, the default explanation was that lung scarring
                resulted from chronic inflammation. Corticosteroids and
                immunosuppressants were the standard. They did not work. This
                long, costly failure eventually forced the field to ask
                different questions about what drives fibroblast activation
                in the absence of ongoing inflammation.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">3. A lipid had to be recognized as a signal</h3>
              <p className="mt-3 leading-8 text-stone-700">
                LPA was long considered a metabolic intermediate. The discovery
                that it signals through specific cell-surface receptors to drive
                proliferation, migration, and survival reframed it as a
                potential disease mediator. Finding elevated LPA in fibrotic
                lungs then connected it to IPF specifically.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">4. A receptor had to be cloned and validated</h3>
              <p className="mt-3 leading-8 text-stone-700">
                LPA signals through multiple receptors. Cloning LPA1 and showing
                that it specifically mediates profibrotic effects — and that
                LPA1 knockout mice are protected from lung fibrosis — provided
                the target validation needed to justify drug development.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">5. Chemistry had to produce a selective oral drug</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Knowing the target is not enough. Medicinal chemists had to
                design a molecule that selectively blocks LPA1 (not LPA2 or
                LPA3), is orally bioavailable, metabolically stable, and potent
                enough to produce a biological effect at tolerable doses.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">6. The full chain converges in a Phase 3 trial</h3>
              <p className="mt-3 leading-8 text-stone-700">
                The Phase 3 trial tests whether selective LPA1 blockade slows
                the rate of lung function decline in IPF patients. Every upstream
                step — from disease recognition to the failure of inflammation,
                to LPA biology, to receptor pharmacology, to endpoint
                validation — had to succeed before this experiment could exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Known vs unknown ── */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Known vs. unknown
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            What the evidence says and what remains open
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Established</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-700">
                <li>IPF is a progressive fibrotic lung disease with limited treatment options</li>
                <li>LPA levels are elevated in fibrotic lungs</li>
                <li>LPA1 signaling promotes fibroblast activation and collagen production</li>
                <li>LPA1 knockout mice show reduced fibrosis after lung injury</li>
                <li>BMS-986278 is a selective oral LPA1 receptor antagonist</li>
                <li>Phase 2 data supported advancement to Phase 3</li>
                <li>FVC decline rate is an accepted primary endpoint</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-700">Not yet known</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-700">
                <li>Whether BMS-986278 produces clinically meaningful slowing of FVC decline</li>
                <li>Whether LPA1 antagonism alone is sufficient to alter IPF progression</li>
                <li>How much of IPF fibrotic drive is LPA1-dependent vs. redundant pathways</li>
                <li>Whether the drug provides benefit beyond existing antifibrotics</li>
                <li>Long-term safety and tolerability</li>
                <li>Whether combination with pirfenidone/nintedanib is more effective</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related concept pages ── */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Related concept pages
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Connected scientific fields
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {conceptLinks.map((concept) => (
              <Link
                key={concept.label}
                href={concept.href}
                className="rounded-[1.25rem] border border-stone-200 bg-stone-50 px-5 py-4 text-sm font-medium text-stone-800 shadow-sm transition hover:border-stone-400 hover:bg-white hover:text-stone-900"
              >
                {concept.label}
                <span className="mt-1.5 block text-xs font-normal text-stone-500">
                  Read explainer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sources ── */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Source
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Trial record
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-700">
            ClinicalTrials.gov — NCT06003426: A Study of BMS-986278 in
            Participants With Idiopathic Pulmonary Fibrosis.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">
            The scientific lineage on this page draws on published research in
            pulmonary medicine, fibrosis biology, lipid biochemistry, and
            receptor pharmacology.
          </p>
          <div className="mt-4">
            <a
              href="https://clinicaltrials.gov/study/NCT06003426"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-stone-700 transition hover:text-stone-900"
            >
              View trial record →
            </a>
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
              This is a TrialLineage page. It traces an investigational therapy
              backward through the scientific lineage that made it possible.
            </p>
            <p className="mt-4 text-sm text-stone-500 italic">
              Content is based on public trial records and published research.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-stone-500">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <Link href="/cases" className="hover:text-stone-900">Lineages</Link>
            <Link href="/concepts" className="hover:text-stone-900">Concepts</Link>
            <Link href="/about" className="hover:text-stone-900">About</Link>
            <Link href="/support" className="hover:text-stone-900">Support</Link>
            <Link href="/disclaimer" className="hover:text-stone-900">Disclaimer</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
