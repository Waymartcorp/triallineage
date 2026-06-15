import Link from "next/link";

export default function RetinalGeneTherapyCasePage() {
  const conceptLinks = [
    { label: "Gene therapy", href: "/concept/gene-therapy" },
    { label: "Viral vectors / AAV", href: "/concept/viral-vectors-aav" },
    { label: "Inherited retinal disease", href: "/concept/inherited-retinal-disease" },
    { label: "Molecular diagnosis", href: "/concept/molecular-diagnosis" },
    { label: "Retinal biology", href: "/concept/retinal-biology" },
    { label: "Rare disease trials", href: "/concept/rare-disease-trials" },
    { label: "Translational medicine", href: "/concept/translational-medicine" },
    { label: "Clinical trial design", href: "/concept/clinical-trial-design" },
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
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              FDA Approved · 2017
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Gene therapy for inherited retinal disease
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            In December 2017, the FDA approved voretigene neparvovec (Luxturna)
            — the first gene therapy for a genetic disease in the United States.
            This lineage traces backward from that approval through the chain of
            science that made it possible: retinal cell biology, disease
            genetics, viral vector engineering, microsurgery, animal models,
            safety crises, and rare-disease trial design.
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
              Inherited retinal diseases are conditions where mutations in
              specific genes damage the cells needed for vision. Some cause
              progressive blindness beginning in childhood. For most of these
              conditions, there was historically no treatment at all.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              Luxturna delivers a working copy of the RPE65 gene directly into
              cells of the retina using a modified virus (AAV2) as a carrier.
              RPE65 encodes an enzyme critical to the visual cycle — without it,
              photoreceptors cannot regenerate the molecules they need to detect
              light. The therapy is delivered through subretinal injection during
              a surgical procedure.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              This did not happen quickly or cleanly. It took decades of work
              across labs that often did not know they were building toward the
              same endpoint. Retinal biologists mapped the cells. Geneticists
              found the gene. Virologists built a delivery vehicle. Surgeons
              learned to reach the target. A dog went blind from the same
              mutation and was treated successfully. Then the entire gene therapy
              field was stopped by a patient death in an unrelated trial. It
              restarted years later with harder safety constraints. The path was
              long, interrupted, and non-obvious.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              At a glance
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">The milestone:</span>{" "}
                FDA approval of voretigene neparvovec (Luxturna), December 2017
                — first gene therapy for a genetic disease in the US
              </li>
              <li>
                <span className="font-medium text-stone-900">The disease:</span>{" "}
                Leber congenital amaurosis type 2 (LCA2) — inherited blindness
                caused by biallelic RPE65 mutations
              </li>
              <li>
                <span className="font-medium text-stone-900">The mechanism:</span>{" "}
                AAV2 vector delivers a functional RPE65 gene to retinal pigment
                epithelium cells via subretinal injection
              </li>
              <li>
                <span className="font-medium text-stone-900">Key labs:</span>{" "}
                University of Pennsylvania (Bennett, Maguire), University of
                Florida (Hauswirth, Aguirre), UCL (Ali, Bainbridge), NEI/NIH
                (Redmond)
              </li>
              <li>
                <span className="font-medium text-stone-900">Why it took 40+ years:</span>{" "}
                the gene had to be found, a safe vector had to be engineered,
                the field had to survive a safety crisis, surgery had to be
                invented, and rare-disease trials had to be designed from scratch
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
            Seven things that had to succeed before this could exist
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Each step was performed by different people, in different labs,
            often decades apart. Most did not know they were contributing to
            a future therapy.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {[
              { num: "1", title: "Map the retina", text: "Cell biologists described how photoreceptors and RPE cells work together. Without understanding which cells fail, there was nothing to fix." },
              { num: "2", title: "Find RPE65", text: "Geneticists identified the gene, linked it to inherited blindness, and showed what its protein does in the visual cycle." },
              { num: "3", title: "Engineer a safe vector", text: "Virologists gutted AAV of its own genes and replaced them with a therapeutic payload. Took 20+ years to make stable, non-toxic, and manufacturable." },
              { num: "4", title: "Invent subretinal surgery", text: "Ophthalmic surgeons developed a technique to inject fluid under the retina without destroying it — reaching target cells directly." },
              { num: "5", title: "Prove it in a blind dog", text: "A Briard dog with the same RPE65 mutation was treated. It could see again. This was the proof that moved the field to humans." },
              { num: "6", title: "Survive the safety crisis", text: "A patient died in an unrelated gene therapy trial (1999). The entire field froze for years. Retinal gene therapy had to wait." },
              { num: "7", title: "Design a rare-disease trial", text: "Small patient populations, variable progression, no standard vision endpoint. Clinical teams had to invent new ways to measure benefit." },
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
            How this approval traces back through science
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
            Read from top to bottom to follow the chain. Side branches show
            detours, competing approaches, and enabling work that made later
            steps possible.
          </p>

          <div className="mt-12 grid gap-0 lg:grid-cols-[1fr_auto_1fr]">
            {/* ── Left side-branches ── */}
            <div className="hidden space-y-6 pt-2 lg:block">
              <div className="flex items-start justify-end gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-right" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Detour
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Jesse Gelsinger (1999)
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    A patient died in a liver-directed adenovirus trial at Penn. Gene therapy froze globally. Retinal programs waited years to reach humans.
                  </p>
                </div>
                <div className="mt-5 h-px w-6 bg-stone-600" />
              </div>

              <div className="h-16" />

              <div className="flex items-start justify-end gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-right" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Branch point
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Which vector? Adenovirus vs. AAV vs. lentivirus
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Multiple viral platforms competed. AAV won for the eye — low immunogenicity, stable expression, no genome integration.
                  </p>
                </div>
                <div className="mt-5 h-px w-6 bg-stone-600" />
              </div>

              <div className="h-16" />

              <div className="flex items-start justify-end gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-right" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Enabling work
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Retinal imaging (OCT, autofluorescence)
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Non-invasive imaging let clinicians see retinal structure before and after treatment — essential for measuring effect and selecting patients.
                  </p>
                </div>
                <div className="mt-5 h-px w-6 bg-stone-600" />
              </div>
            </div>

            {/* ── Central spine ── */}
            <div className="flex flex-col items-center">
              {[
                { label: "FDA approval", title: "Luxturna approved (Dec 2017)", accent: true },
                { label: "Phase 3 trial", title: "Spark Therapeutics randomized trial" },
                { label: "Phase 1 / proof in humans", title: "Three independent groups test AAV-RPE65" },
                { label: "Preclinical proof", title: "Briard dog sees again (Bennett/Maguire/Hauswirth)" },
                { label: "Surgical method", title: "Subretinal injection technique developed" },
                { label: "Vector engineering", title: "AAV2 adapted for ocular gene delivery" },
                { label: "Disease genetics", title: "RPE65 identified and linked to LCA (Redmond, NIH)" },
                { label: "Cell biology", title: "Retinal photoreceptor and RPE function mapped" },
                { label: "Basic science", title: "The visual cycle described biochemically" },
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
                    Enabling work
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Briard dog colony (Aguirre, U. of Florida)
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Gustavo Aguirre maintained a colony of naturally blind dogs with RPE65 mutations — the animal model that made everything possible.
                  </p>
                </div>
              </div>

              <div className="h-12" />

              <div className="flex items-start gap-4">
                <div className="mt-5 h-px w-6 bg-stone-600" />
                <div className="rounded-xl border border-white/10 bg-white/5 p-4" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Detour
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Immune responses to AAV capsids
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Pre-existing antibodies and inflammation forced dose adjustments, immunosuppression protocols, and patient exclusion criteria.
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
                    Gene replacement vs. gene editing vs. optogenetics
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Multiple strategies emerged for different stages of retinal disease. Gene replacement via AAV reached the clinic first.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile side-branch summary */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
            {[
              { type: "Detour", title: "Jesse Gelsinger (1999)", text: "A patient death froze gene therapy globally. Retinal programs waited years." },
              { type: "Branch point", title: "Which vector?", text: "Multiple viral platforms competed. AAV won for the eye." },
              { type: "Enabling work", title: "Retinal imaging", text: "OCT and autofluorescence let clinicians see structure before and after." },
              { type: "Enabling work", title: "Briard dog colony", text: "Naturally blind dogs with RPE65 mutations made preclinical proof possible." },
              { type: "Detour", title: "Immune responses", text: "Pre-existing antibodies forced dose adjustments and exclusion criteria." },
              { type: "Branch point", title: "Gene replacement vs. editing vs. optogenetics", text: "Multiple strategies; gene replacement reached the clinic first." },
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
            Key moments in the path to Luxturna
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Each step below made the next step possible. The people and labs
            involved usually did not know where their work would lead.
          </p>

          <div className="mt-12 space-y-0">
            {[
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1960s\u20131970s",
                title: "The retina is mapped at the cellular level",
                text: "John Dowling (Harvard) and others described the layered architecture of the retina \u2014 how photoreceptors convert light into neural signals, and how the retinal pigment epithelium (RPE) supports them by recycling visual pigment. This foundational work explained why specific gene defects produce specific patterns of blindness. Without it, there was no target for therapy.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1970s\u20131980s",
                title: "The visual cycle is described biochemically",
                text: "Researchers worked out how retinal (a form of vitamin A) is recycled between photoreceptors and RPE cells to regenerate rhodopsin after each photon is absorbed. RPE65 would later be identified as a critical enzyme in this cycle \u2014 but first the cycle itself had to be understood.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1980s\u20131990s",
                title: "Disease genetics identifies retinal disease genes",
                text: "The molecular genetics revolution \u2014 linkage analysis, positional cloning, and eventually sequencing \u2014 allowed researchers to connect inherited blindness to specific genes. Thaddeus Dryja (Harvard/Mass Eye and Ear) linked retinitis pigmentosa to rhodopsin mutations in 1990. Michael Redmond (NEI/NIH) identified RPE65 and connected it to a severe form of childhood blindness.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1980s\u20131990s",
                title: "AAV is developed as a gene delivery tool",
                text: "Adeno-associated virus was discovered as a harmless contaminant of adenovirus preparations. Over two decades, molecular biologists at the University of Florida, University of Pennsylvania, and elsewhere gutted its genome and replaced it with therapeutic cargo. AAV2 proved effective at transducing photoreceptors and RPE without integrating into the host genome \u2014 meaning stable expression with lower cancer risk.",
              },
              {
                type: "Branch point",
                color: "bg-stone-500",
                era: "1990s",
                title: "Which vector for the eye?",
                text: "Adenovirus provoked immune responses. Lentivirus integrated into the genome (raising safety concerns for cancer). AAV \u2014 particularly serotype 2 \u2014 showed stable expression with minimal inflammation. The choice of AAV was not obvious at the start; it won because of accumulating empirical evidence in animal models.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1990s",
                title: "Subretinal injection is developed",
                text: "Vitreoretinal surgeons developed a microsurgical technique to inject fluid beneath the retina, creating a temporary detachment (\u201Cbleb\u201D) that allows vector to contact target cells directly. The technique required custom instrumentation, specific volumes, precise anatomic targeting, and tolerance for temporarily lifting the retina off its support layer.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1998\u20132001",
                title: "A blind dog sees again",
                text: "Gustavo Aguirre (University of Florida, later Penn) maintained a colony of Briard dogs carrying a natural RPE65 mutation. Jean Bennett and Albert Maguire (University of Pennsylvania), with William Hauswirth (University of Florida), injected AAV-RPE65 beneath the retinas of these dogs. Treated animals navigated obstacle courses in dim light. Untreated eyes remained blind. This was the proof that moved the field from theory to clinical possibility.",
              },
              {
                type: "Detour",
                color: "bg-stone-400",
                era: "1999\u20132003",
                title: "Gene therapy\u2019s safety crisis",
                text: "Jesse Gelsinger, an 18-year-old with a metabolic condition, died in a liver-directed adenovirus trial at the University of Pennsylvania in September 1999. The FDA halted trials. Public confidence collapsed. Separately, children treated for X-SCID in Paris developed leukemia from retroviral integration. The entire field contracted. Retinal gene therapy programs \u2014 already preparing for human trials \u2014 had to wait while the field rebuilt its safety framework, oversight systems, and manufacturing standards.",
              },
              {
                type: "Detour",
                color: "bg-stone-400",
                era: "2000s",
                title: "Immune problems and dose-finding",
                text: "Even with AAV\u2019s favorable profile, researchers encountered pre-existing antibodies to AAV capsids in some patients, inflammatory responses after injection, and uncertainty about optimal dose. These problems were only resolvable through iterative clinical study \u2014 there was no shortcut.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "2007\u20132008",
                title: "Three groups independently test in humans",
                text: "Jean Bennett and Albert Maguire (Penn), Robin Ali and James Bainbridge (University College London), and a group at the University of Naples each initiated Phase 1 trials of AAV2-RPE65 in patients with RPE65-associated Leber congenital amaurosis. Early results showed improvements in light sensitivity and navigational vision in treated eyes, with acceptable safety. Three independent confirmations strengthened the evidence base enormously.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "2012\u20132015",
                title: "A Phase 3 trial with a novel endpoint",
                text: "Spark Therapeutics (a Penn spinoff) conducted a randomized trial using multi-luminance mobility testing \u2014 patients navigating a course under varying light conditions. This endpoint captured functional vision improvement in a way standard eye charts could not. The trial design itself was a scientific contribution: proving that gene therapy efficacy could be measured rigorously in a rare disease.",
              },
              {
                type: "Convergence",
                color: "bg-stone-700",
                era: "December 2017",
                title: "FDA approves Luxturna",
                text: "Voretigene neparvovec became the first FDA-approved gene therapy for a genetic disease in the United States. Retinal biology, disease genetics, vector engineering, microsurgery, animal models, safety crisis recovery, and rare-disease trial design \u2014 work spanning 40+ years across dozens of labs \u2014 converged into a single approved medicine.",
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
              This lineage shows how a therapy can emerge from basic science
              that had no therapeutic intent at the time. Retinal cell biology
              was mapped to understand vision, not to treat blindness. AAV was
              studied as a virology curiosity, not as a drug delivery vehicle.
              The convergence was not planned — it was recognized, retrospectively,
              by people who could see that the pieces fit.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                Setbacks shaped the outcome
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Gene therapy&rsquo;s safety crisis did not destroy the field — it
                forced it to become more careful. The vectors, doses, delivery
                methods, and monitoring protocols that eventually produced
                Luxturna were developed in direct response to earlier failures.
                The delay was not wasted time.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                The eye as a proving ground
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                The eye is small, surgically accessible, relatively immune-privileged,
                and directly measurable. It became the first organ where gene therapy
                proved itself — and the infrastructure it built (manufacturing, regulatory
                precedent, trial design) now supports gene therapy efforts across
                other organs and diseases.
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
              <h3 className="text-xl font-semibold">1. Vision had to become cellular and molecular</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Before inherited blindness could be addressed at the molecular
                level, scientists needed to understand how vision works at the
                cellular level. The retina is a layered tissue where
                photoreceptors (rods and cones) convert light into electrical
                signals, supported by the retinal pigment epithelium (RPE)
                which recycles visual pigment and maintains photoreceptor
                health. Understanding these relationships explained why
                mutations in specific genes produce specific patterns of
                degeneration — and identified which cells a therapy would need
                to reach.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">2. The gene had to be found and understood</h3>
              <p className="mt-3 leading-8 text-stone-700">
                The era of positional cloning and linkage analysis — followed
                by next-generation sequencing — allowed researchers to identify
                hundreds of genes responsible for inherited retinal
                dystrophies. RPE65, encoding an enzyme critical to the visual
                cycle, became one of the first therapeutic targets because its
                biology was well understood, its disease phenotype was severe
                but well-defined, and animal models existed. Michael Redmond
                at the NIH identified the gene; its connection to a specific
                form of Leber congenital amaurosis made it actionable.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">3. A safe delivery vehicle had to be engineered</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Adeno-associated virus was discovered in the 1960s as a
                non-pathogenic satellite of adenovirus. Over decades, molecular
                biologists removed its replication machinery and replaced it
                with therapeutic genes while retaining its ability to enter
                cells. AAV serotype 2 proved particularly effective at
                transducing photoreceptors and RPE cells. The vector needed to
                express the gene stably without integrating into the host
                genome and without provoking strong immune responses. This took
                20+ years of iterative engineering.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">4. A surgical approach had to be invented</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Delivering a vector to retinal cells requires subretinal
                injection: a microsurgical procedure where fluid is placed
                beneath the retina, creating a temporary detachment that
                allows the vector to contact target cells directly. Vitreoretinal
                surgeons refined these techniques over years, optimizing volume,
                injection location, and instrumentation to minimize damage while
                maximizing vector distribution. The surgery itself was a
                scientific contribution — not just a delivery step.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">5. An animal model provided the critical proof</h3>
              <p className="mt-3 leading-8 text-stone-700">
                The Briard dog model — carrying a naturally occurring RPE65
                mutation — was pivotal. These dogs are born with severe vision
                impairment matching human LCA. When treated with subretinal
                AAV-RPE65, they showed measurable restoration of visual
                behavior. The images of treated dogs navigating obstacle courses
                in dim light became some of the most compelling evidence in gene
                therapy. Without this colony (maintained for years by Gustavo
                Aguirre), the jump to humans would have been far harder to
                justify.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">6. The field had to survive its worst moment</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Jesse Gelsinger&rsquo;s death in 1999 and the subsequent leukemia
                cases in SCID trials did not just pause gene therapy — they
                forced a complete overhaul of vector safety testing, dose
                escalation protocols, informed consent, manufacturing quality,
                and regulatory oversight. The retinal gene therapy teams were
                ready to move to humans in the early 2000s but could not
                proceed until the infrastructure was rebuilt. The delay was
                painful but ultimately produced a safer, more rigorous field.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">7. Rare-disease trials had to be reinvented</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Inherited retinal diseases are individually rare. Patient
                populations are small, progression varies, and vision is
                difficult to measure in standardized ways. Clinical teams
                developed novel endpoints — including multi-luminance mobility
                testing (patients navigating a course under different light
                levels) — to capture meaningful visual improvement. Trial
                design for rare genetic diseases became a discipline in its
                own right. The endpoint Spark used for approval did not exist
                when the program started.
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
                <li>AAV2-RPE65 can restore light sensitivity in patients with biallelic RPE65 mutations</li>
                <li>Subretinal delivery reaches the target cells effectively</li>
                <li>Functional vision (navigational ability) improves after treatment</li>
                <li>The therapy has an acceptable safety profile</li>
                <li>The regulatory and manufacturing framework for retinal gene therapy works</li>
                <li>The approach has been replicated across multiple independent groups</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-700">Not yet known</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-700">
                <li>How long the therapeutic effect lasts (some patients show decline over years)</li>
                <li>Whether re-dosing is possible or necessary</li>
                <li>Whether the approach extends to other retinal genes with equal efficacy</li>
                <li>Whether treatment timing (earlier vs. later in disease) determines long-term outcome</li>
                <li>Whether next-generation vectors or approaches will improve on Luxturna&rsquo;s results</li>
                <li>How to make gene therapy accessible and affordable at scale</li>
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

      {/* ── Sources and confidence ── */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Sources and confidence
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Endpoint record
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-700">
            FDA approval of voretigene neparvovec-rzyl (Luxturna), December 19,
            2017. BLA 761036. Indication: confirmed biallelic RPE65
            mutation-associated retinal dystrophy.
          </p>

          <div className="mt-6 rounded-xl border border-stone-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Confidence flag
            </p>
            <p className="mt-2 text-sm leading-7 text-stone-700">
              <span className="font-medium text-emerald-700">High.</span>{" "}
              Endpoint is a completed FDA approval with public BLA record,
              published Phase 3 trial data, and established post-approval
              clinical use.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-stone-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Source links
            </p>
            <ul className="mt-2 space-y-1.5 text-sm leading-7 text-stone-700">
              <li>FDA BLA 761036 — approval letter and review documents</li>
              <li>ClinicalTrials.gov NCT00999609 — Phase 3 trial record</li>
              <li>Russell et al., Lancet 2017 — pivotal trial publication</li>
            </ul>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600">
            The scientific lineage on this page draws on published research in
            retinal biology, human genetics, virology, ophthalmology, and
            clinical trial methodology.
          </p>
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
              This is a TrialLineage page. It traces a specific therapeutic
              milestone backward through the scientific lineage that made it
              possible.
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
