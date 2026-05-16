export default function DaraxonrasibCasePage() {
  const conceptLinks: { label: string; href?: string }[] = [
    { label: "Oncogene discovery", href: "/concept/oncogene-discovery" },
    { label: "Protein signaling biology", href: "/concept/protein-signaling-biology" },
    { label: "Pancreatic precursor lesion biology" },
    { label: "Chemical biology" },
    { label: "Medicinal chemistry" },
    { label: "Structural biology" },
    { label: "Translational oncology" },
    { label: "Clinical trial design", href: "/concept/clinical-trial-design" },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* ── Hero ── */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            TrialLineage Case
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Daraxonrasib in pancreatic cancer
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            This page traces a pancreatic cancer drug story backward through the
            scientific lineage that made it possible. It is designed to be read
            in layers: a plain-language summary for any reader, a visual map of
            the discovery chain, a timeline of milestones and detours, and a
            deeper explainer for those who want the fuller scientific history.
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
              What is this case about?
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Daraxonrasib is a drug being tested in clinical trials for
              pancreatic cancer. It is designed to block a specific protein
              called KRAS, which is found in a mutated form in most pancreatic
              tumors. When KRAS is mutated, it gets stuck in an &ldquo;on&rdquo;
              position and keeps telling the cell to grow — even when the cell
              should stop. That relentless growth signal is one of the core
              reasons pancreatic cancer is so aggressive and hard to treat.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              Pancreatic cancer matters because it is one of the deadliest forms
              of cancer. It is usually diagnosed late, it resists most existing
              treatments, and survival rates have improved only slowly over
              decades. A drug that could effectively target the molecular driver
              behind the disease would represent a genuine shift in how the
              disease is treated.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              But daraxonrasib did not appear out of nowhere. It exists because
              of a long chain of earlier scientific work — decades of research
              across multiple fields that gradually built the understanding,
              tools, and chemical strategies needed to reach this point. This
              page traces that chain.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              At a glance
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">The drug:</span>{" "}
                daraxonrasib, a KRAS-directed therapy now in human trials
              </li>
              <li>
                <span className="font-medium text-stone-900">The disease:</span>{" "}
                pancreatic cancer — aggressive, usually late-diagnosed, with
                limited effective treatments
              </li>
              <li>
                <span className="font-medium text-stone-900">The target:</span>{" "}
                KRAS, a protein that acts as a growth switch inside cells and is
                mutated in most pancreatic cancers
              </li>
              <li>
                <span className="font-medium text-stone-900">The timeline:</span>{" "}
                KRAS was identified as a cancer gene in the early 1980s — it took
                roughly four decades to develop credible drugs against it
              </li>
              <li>
                <span className="font-medium text-stone-900">Why it took so long:</span>{" "}
                the protein&rsquo;s shape and behavior made it extremely
                difficult to target with conventional drug-design strategies
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
            Five steps that made this drug possible
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            None of these steps alone produced a drug. Each one built on
            the last, and the full chain took decades to assemble.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-5">
            {[
              { num: "1", title: "Find the gene", text: "Scientists discovered that certain genes, when altered, can drive cells to become cancerous. KRAS was one of the first identified." },
              { num: "2", title: "Understand the wiring", text: "Researchers mapped the signaling pathway KRAS belongs to and learned how a mutation locks it into constant activity." },
              { num: "3", title: "Connect it to the disease", text: "Studies showed that KRAS mutations appear in nearly all pancreatic cancers and are present from the earliest stages." },
              { num: "4", title: "Learn how to reach it", text: "Structural and chemical biology gradually revealed the protein\u2019s shape, behavior, and potential vulnerabilities." },
              { num: "5", title: "Design and test a drug", text: "Medicinal chemists built compounds to target KRAS, and clinical teams designed trials to test them in patients." },
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
            where ideas failed but still mattered, and where enabling methods
            made later steps possible.
          </p>

          <div className="mt-12 grid gap-0 lg:grid-cols-[1fr_auto_1fr]">
            {/* ── Left side-branches ── */}
            <div className="hidden space-y-6 pt-2 lg:block">
              <div className="flex items-start justify-end gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-right" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Branch point
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Viral vs. cellular origin debate
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Were cancer genes viral or cellular? The answer — cellular — reshaped the entire field.
                  </p>
                </div>
                <div className="mt-5 h-px w-6 bg-stone-600" />
              </div>

              <div className="h-20" />

              <div className="flex items-start justify-end gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-right" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Failed approach
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    EGFR inhibitors in KRAS-mutant tumors
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Blocking receptors upstream of KRAS failed because the switch no longer depended on external signals.
                  </p>
                </div>
                <div className="mt-5 h-px w-6 bg-stone-600" />
              </div>

              <div className="h-14" />

              <div className="flex items-start justify-end gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-right" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Failed approach
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Farnesyltransferase inhibitors
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Tried to block KRAS from reaching the cell membrane. RAS used alternate routes.
                  </p>
                </div>
                <div className="mt-5 h-px w-6 bg-stone-600" />
              </div>
            </div>

            {/* ── Central spine ── */}
            <div className="flex flex-col items-center">
              {[
                { label: "Clinical trial", title: "Daraxonrasib in human patients", accent: true },
                { label: "Translational step", title: "Translational oncology" },
                { label: "Chemistry", title: "Medicinal chemistry" },
                { label: "Structural era", title: "Chemical & structural biology" },
                { label: "Disease research", title: "Pancreatic cancer biology" },
                { label: "Cell biology", title: "Protein signaling biology" },
                { label: "Basic science", title: "Oncogene discovery" },
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
                    Biomarker-selected vs. all-comers trials
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Should trials enroll broadly or select for KRAS mutations? Selection became essential.
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
                    Covalent drug design
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    New chemical strategies allowed drugs to form permanent bonds with KRAS — a key technical advance.
                  </p>
                </div>
              </div>

              <div className="h-12" />

              <div className="flex items-start gap-4">
                <div className="mt-5 h-px w-6 bg-stone-600" />
                <div className="rounded-xl border border-white/10 bg-white/5 p-4" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Branch point
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Direct inhibition vs. synthetic lethality
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Two divergent strategies for KRAS-mutant cancers. Both remain active research directions.
                  </p>
                </div>
              </div>

              <div className="h-8" />

              <div className="flex items-start gap-4">
                <div className="mt-5 h-px w-6 bg-stone-600" />
                <div className="rounded-xl border border-white/10 bg-white/5 p-4" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Enabling method
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    X-ray crystallography and cryo-EM
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Structural methods revealed binding pockets on KRAS that were invisible to earlier techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile side-branch summary */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
            {[
              { type: "Branch point", title: "Viral vs. cellular origin debate", text: "Were cancer genes viral or cellular? The answer — cellular — reshaped the entire field." },
              { type: "Branch point", title: "Biomarker-selected vs. all-comers trials", text: "Should trials enroll broadly or select for KRAS mutations? Selection became essential." },
              { type: "Failed approach", title: "EGFR inhibitors in KRAS-mutant tumors", text: "Blocking receptors upstream of KRAS failed because the switch no longer depended on external signals." },
              { type: "Failed approach", title: "Farnesyltransferase inhibitors", text: "Tried to block KRAS from reaching the cell membrane. RAS used alternate routes." },
              { type: "Enabling method", title: "Covalent drug design", text: "New chemical strategies allowed drugs to form permanent bonds with KRAS — a key technical advance." },
              { type: "Branch point", title: "Direct inhibition vs. synthetic lethality", text: "Two divergent strategies for KRAS-mutant cancers. Both remain active research directions." },
              { type: "Enabling method", title: "X-ray crystallography and cryo-EM", text: "Structural methods revealed binding pockets on KRAS that were invisible to earlier techniques." },
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
            Key moments in the path to daraxonrasib
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            This timeline traces milestones, branch points, detours, and
            convergence events across the scientific fields that eventually
            produced a KRAS-directed drug in pancreatic cancer trials.
            Not every entry is a success — several represent failures or
            unresolved debates that still shaped what came next.
          </p>

          <div className="mt-12 space-y-0">
            {[
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1970s – early 1980s",
                title: "Retroviral oncogenes are identified",
                text: "Researchers studying cancer-causing retroviruses in animals — particularly in the laboratories of the NCI and university virology departments — discovered that these viruses carried genes capable of transforming normal cells into cancerous ones. This was the first evidence that cancer could be traced to specific genes.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "Early 1980s",
                title: "Human cellular oncogenes are confirmed",
                text: "Work by multiple groups showed that the cancer-causing genes found in retroviruses were not truly viral — they were altered copies of normal human genes. The cell\u2019s own genome contained the seeds of cancer. This finding reframed the entire field around cellular and molecular genetics rather than virology.",
              },
              {
                type: "Branch point",
                color: "bg-stone-500",
                era: "Early 1980s",
                title: "The viral vs. cellular origin debate resolves",
                text: "A major fork in thinking: was cancer fundamentally a viral disease or a genetic one? The evidence that oncogenes were cellular in origin settled this question and redirected enormous research effort toward understanding how the cell\u2019s own genes could become drivers of disease.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1982 – 1983",
                title: "KRAS is identified as a human oncogene",
                text: "Several research groups — working across institutions in the United States, Europe, and Japan — identified mutated RAS genes in human tumor cells. KRAS, HRAS, and NRAS were among the first oncogenes shown to be directly activated by point mutations in human cancers, establishing the RAS family as central to molecular oncology.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "Late 1980s – 1990s",
                title: "The RAS-MAPK signaling pathway is mapped",
                text: "Cell biologists and biochemists — many working in signal transduction laboratories at major research universities — charted the cascade of protein interactions downstream of RAS. This work showed exactly how a mutant KRAS protein, stuck in its active state, relays a continuous growth signal through RAF, MEK, and ERK to the cell\u2019s growth machinery.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1990s",
                title: "KRAS mutations found in most pancreatic cancers",
                text: "Pathologists and pancreatic cancer researchers demonstrated that KRAS mutations appear in the vast majority of pancreatic ductal adenocarcinomas and are detectable even in early precursor lesions called PanINs. This made KRAS the most biologically central target in the disease — but also one of the hardest to reach.",
              },
              {
                type: "Branch point",
                color: "bg-stone-500",
                era: "1990s – 2000s",
                title: "KRAS is labeled \u201Cundruggable\u201D",
                text: "The RAS protein\u2019s small size, smooth surface, and extremely tight binding to its natural substrate (GTP) made it resist conventional drug-design approaches. The scientific community debated whether direct KRAS inhibition was feasible at all, and many researchers redirected effort toward downstream or indirect strategies.",
              },
              {
                type: "Detour",
                color: "bg-stone-400",
                era: "Late 1990s – 2000s",
                title: "Farnesyltransferase inhibitors fail in clinical trials",
                text: "One of the first serious attempts to target RAS aimed to block the enzyme that attaches RAS to the cell membrane. The drugs were based on sound biological logic, but KRAS could use alternative enzymes to reach the membrane. Clinical trials failed. The experience taught the field that RAS biology was more redundant than expected.",
              },
              {
                type: "Detour",
                color: "bg-stone-400",
                era: "2000s – 2010s",
                title: "Downstream-only strategies show limited benefit in KRAS-mutant tumors",
                text: "Because KRAS itself seemed untouchable, researchers targeted downstream kinases — RAF, MEK, ERK. These drugs helped in cancers driven by downstream mutations (particularly BRAF), but in KRAS-mutant tumors, blocking one downstream branch often triggered compensatory signaling through parallel pathways. The network was more resilient than expected.",
              },
              {
                type: "Detour",
                color: "bg-stone-400",
                era: "2000s",
                title: "EGFR-targeted drugs fail in KRAS-mutant patients",
                text: "Drugs designed to block EGFR, the receptor upstream of KRAS, were tested broadly across cancers. In KRAS-mutant tumors, they were ineffective — the growth signal originated from the stuck switch inside the cell, not from the receptor above it. This clarified that interventions upstream of the broken node could not fix the problem.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "2010s",
                title: "Structural biology reveals hidden vulnerabilities on KRAS",
                text: "Advances in X-ray crystallography and cryo-electron microscopy — driven by structural biology groups at academic centers and drug-discovery institutes — revealed previously unseen pockets on the KRAS protein surface. One pocket, accessible only in the GDP-bound (inactive) state of KRAS G12C, became the first credible direct-targeting site.",
              },
              {
                type: "Branch point",
                color: "bg-stone-500",
                era: "2010s – present",
                title: "Direct inhibition vs. synthetic lethality — two paths diverge",
                text: "With new structural insight, some researchers pursued direct KRAS inhibition through covalent compounds that lock onto the protein. Others explored synthetic lethality — killing KRAS-mutant cells by targeting something else they uniquely depend on. Both branches remain active in clinical research, and neither has fully displaced the other.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "Mid-2010s onward",
                title: "Covalent inhibitors demonstrate proof of concept against KRAS",
                text: "Medicinal chemistry teams — in both academic and industry laboratories — designed small molecules that form irreversible bonds with specific KRAS mutant forms. These compounds demonstrated for the first time that KRAS could be directly and selectively inhibited. The \u201Cundruggable\u201D label began to lose its authority.",
              },
              {
                type: "Convergence",
                color: "bg-stone-700",
                era: "Recent years",
                title: "Translational oncology connects lab evidence to trial design",
                text: "Translational research groups bridged the gap between laboratory findings and clinical feasibility. They established biomarker-selection strategies, defined patient populations by mutation subtype, and designed dose-escalation protocols that reflected the specific pharmacology of KRAS-directed compounds.",
              },
              {
                type: "Convergence",
                color: "bg-stone-700",
                era: "Current",
                title: "Daraxonrasib enters clinical trials in pancreatic cancer",
                text: "The full chain converges: oncogene discovery identified the gene, signaling biology explained the mechanism, disease research showed centrality in pancreatic cancer, structural and chemical biology found a way to reach the target, and translational teams designed a trial to test the drug in the patients most likely to benefit.",
              },
            ].map((entry, i) => (
              <div key={entry.title} className="relative flex gap-6">
                {/* Vertical line and dot */}
                <div className="flex flex-col items-center">
                  <div
                    className={`relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full ${entry.color} ${
                      entry.type === "Convergence"
                        ? "ring-4 ring-stone-200"
                        : ""
                    }`}
                  />
                  {i < 14 && <div className="w-px grow bg-stone-200" />}
                </div>

                {/* Card */}
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

      {/* ━━━━━━━━━━ LAYER 3: DEEPER EXPLAINER ━━━━━━━━━━ */}

      {/* Summary why-it-matters */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-10">
          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Why this case matters
            </p>
            <p className="mt-4 leading-8 text-stone-700">
              Daraxonrasib is important not just because it represents a new
              therapeutic effort in pancreatic cancer, but because it stands on
              decades of inquiry into how cancer genes work, how KRAS signals,
              why pancreatic tumors depend so heavily on KRAS-related biology,
              and how chemistry gradually found ways to intervene. In public
              language, this is not just a story about one drug. It is a story
              about how many layers of science had to accumulate before a
              treatment strategy could become plausible in humans.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                Why earlier layers matter
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                This case shows how human disease breakthroughs often depend on
                many layers of scientific work that do not look directly
                therapeutic at the time they are performed. The public usually
                sees the late-stage milestone. TrialLineage is designed to make
                the earlier layers visible.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                Failed or indirect paths still mattered
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Not every line of inquiry produced a successful therapy. But many
                of those routes still clarified the biology, exposed weaknesses
                in old assumptions, and improved the field&rsquo;s ability to
                design better strategies later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-dive longer lineage */}
      <section id="deep-dive" className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Deep-dive view
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            The longer scientific lineage
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Each section below expands on one layer of the discovery chain. For
            readers who want the fuller history behind the visual map above.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">1. Cancer had to become molecular</h3>
              <p className="mt-3 leading-8 text-stone-700">
                One of the deepest roots of this case is the shift from thinking
                of cancer as vague uncontrolled growth to understanding it as a
                disease that can be driven by altered genes and signaling
                pathways. That change created the conceptual framework for
                targets like KRAS to matter at all.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">2. KRAS had to be understood as a signaling switch</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Scientists then had to work out what KRAS actually does. In lay
                terms, it acts like part of the cell&rsquo;s growth-control
                wiring. When mutated, that wiring can remain abnormally active.
                That helped explain why KRAS is not just associated with cancer,
                but functionally important to it.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">3. Pancreatic cancer biology showed the target was central</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Pancreatic cancer research gradually showed that KRAS-related
                biology is deeply woven into the disease. That gave the field a
                reason to keep trying, even when direct targeting looked very
                difficult.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">4. The &ldquo;undruggable&rdquo; era still produced useful knowledge</h3>
              <p className="mt-3 leading-8 text-stone-700">
                For years, KRAS was treated as an extremely hard target. But
                those frustrating years still mattered. Researchers learned
                about protein shape, signaling dependencies, pathway behavior,
                and why earlier strategies struggled. Even indirect or
                unsuccessful routes helped narrow the path toward better ones.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">5. Chemistry and structure changed the odds</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Chemical biology, structural biology, and medicinal chemistry
                helped transform a biological problem into a tractable drug
                discovery problem. The field moved from knowing KRAS mattered to
                understanding how drug design might actually engage it.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">6. Human trials turned scientific possibility into evidence</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Once a credible candidate exists, the story becomes clinical as
                well as scientific. Trial design, patient selection, outcome
                measures, safety, and comparison against existing care all
                become part of the lineage of whether an idea truly matters in
                human disease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related concept pages ── */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Related concept pages
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Offshoot explanations this case connects to
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Each concept below represents a connected background field that
            helped make the daraxonrasib trial possible. Pages that are live
            can be read as standalone explainers or as companions to this case.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {conceptLinks.map((concept) =>
              concept.href ? (
                <a
                  key={concept.label}
                  href={concept.href}
                  className="rounded-[1.25rem] border border-stone-200 bg-white px-5 py-4 text-sm font-medium text-stone-800 shadow-sm transition hover:border-stone-400 hover:bg-stone-50 hover:text-stone-900"
                >
                  {concept.label}
                  <span className="mt-1.5 block text-xs font-normal text-stone-500">
                    Read explainer →
                  </span>
                </a>
              ) : (
                <div
                  key={concept.label}
                  className="rounded-[1.25rem] border border-stone-200 bg-white px-5 py-4 text-sm font-medium text-stone-800 shadow-sm"
                >
                  {concept.label}
                  <span className="mt-1.5 block text-xs font-normal text-stone-400">
                    Coming soon
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              About this page
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-stone-700">
              This is a TrialLineage case page. It traces a human-disease trial
              backward through the scientific lineage that made it possible,
              presented in four layers: a plain-language summary for any reader,
              a visual reverse-lineage map showing main paths and side branches,
              a discovery timeline of milestones, branch points, detours, and
              convergence events, and a deeper explainer for those who want the
              fuller scientific history. The format is designed to make the
              discovery process behind phase 1&ndash;3 trials visible and
              understandable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
