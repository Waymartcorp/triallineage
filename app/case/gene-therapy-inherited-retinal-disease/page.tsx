import Link from "next/link";

export default function RetinalGeneTherapyCasePage() {
  const conceptLinks = [
    { label: "Gene therapy", href: null },
    { label: "Viral vectors / AAV", href: null },
    { label: "Inherited retinal disease", href: null },
    { label: "Molecular diagnosis", href: null },
    { label: "Retinal biology", href: null },
    { label: "Rare disease trials", href: null },
    { label: "Translational medicine", href: null },
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
            Gene therapy for inherited retinal disease
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            This page starts with a gene therapy story for inherited vision
            loss, then traces backward through the scientific lineage that made
            it possible. It unfolds in layers: a plain-language summary, a
            visual map of the discovery chain, a timeline of milestones and
            detours, and a deeper account of the scientific history.
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
              Inherited retinal diseases are conditions where changes in a
              person&rsquo;s genes damage the cells needed for vision. Some
              cause progressive vision loss beginning in childhood. Others lead
              to near-total blindness. For most of these conditions, there was
              historically no treatment at all.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              Gene therapy attempts to address the root cause: delivering a
              working copy of a gene — or otherwise restoring a missing
              biological function — directly to the cells of the eye. The eye
              became one of the first organs where gene therapy could
              demonstrate clear clinical promise, because it is small,
              accessible to specialized surgery, relatively contained from the
              immune system, and directly measurable through vision testing and
              retinal imaging.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              But gene therapy for vision loss did not appear suddenly. It
              depended on decades of foundational work: identifying disease
              genes, understanding retinal cell biology, engineering viral
              vectors that could safely carry genetic material into target
              cells, developing surgical methods to reach the retina, and
              designing clinical trials for rare conditions with small patient
              populations.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              At a glance
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">The treatment:</span>{" "}
                gene therapy delivered to retinal cells to restore or preserve vision
              </li>
              <li>
                <span className="font-medium text-stone-900">The disease:</span>{" "}
                inherited retinal dystrophies — genetic conditions that damage
                photoreceptors or retinal pigment epithelium
              </li>
              <li>
                <span className="font-medium text-stone-900">The mechanism:</span>{" "}
                delivering a functional gene to compensate for a mutated or
                missing one
              </li>
              <li>
                <span className="font-medium text-stone-900">The timeline:</span>{" "}
                disease genes were identified from the late 1980s onward; the
                first approved retinal gene therapy came in 2017
              </li>
              <li>
                <span className="font-medium text-stone-900">Why it took so long:</span>{" "}
                safe delivery, vector engineering, surgical access, small patient
                populations, and measuring meaningful visual change all required
                their own chains of development
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
            Six steps that made retinal gene therapy possible
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            None of these steps alone produced a treatment. Each one built on
            the last, and the full chain took decades to assemble.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { num: "1", title: "Understand the retina", text: "Scientists mapped how photoreceptors and retinal pigment epithelium convert light into neural signals — and what happens when those cells fail." },
              { num: "2", title: "Find the genes", text: "Human geneticists identified specific genes whose mutations cause inherited retinal diseases, starting with RPE65 and expanding to hundreds of others." },
              { num: "3", title: "Build a delivery vehicle", text: "Virologists and molecular biologists engineered adeno-associated virus (AAV) into a safe vector capable of carrying genes into cells without causing disease." },
              { num: "4", title: "Reach the target cells", text: "Ophthalmic surgeons developed subretinal injection techniques to deliver vectors beneath the retina, directly to the cells that need them." },
              { num: "5", title: "Test in animal models", text: "Researchers used naturally occurring and engineered animal models of retinal disease to show that gene delivery could restore visual function." },
              { num: "6", title: "Design human trials", text: "Clinical teams built trials for rare diseases: small populations, careful patient selection, sensitive endpoints, and long-term follow-up." },
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
            How retinal gene therapy traces back through science
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
            Read from top to bottom to see the chain of scientific fields that
            built on each other. Side branches show where the path diverged,
            where early attempts struggled, and where enabling methods made
            later steps possible.
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
                    Early gene therapy safety crises
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    The death of Jesse Gelsinger (1999) and leukemia cases in SCID trials forced the entire field to rebuild its safety framework.
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
                    Multiple viral platforms competed. AAV emerged as safest for the eye due to low immunogenicity and stable expression.
                  </p>
                </div>
                <div className="mt-5 h-px w-6 bg-stone-600" />
              </div>

              <div className="h-16" />

              <div className="flex items-start justify-end gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-right" style={{ maxWidth: "16rem" }}>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
                    Detour
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Immune responses to viral vectors
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Pre-existing immunity to AAV and inflammatory responses required careful dose selection and immunosuppression protocols.
                  </p>
                </div>
                <div className="mt-5 h-px w-6 bg-stone-600" />
              </div>
            </div>

            {/* ── Central spine ── */}
            <div className="flex flex-col items-center">
              {[
                { label: "Clinical outcome", title: "Gene therapy for inherited vision loss", accent: true },
                { label: "Clinical translation", title: "Human trials and regulatory approval" },
                { label: "Surgical delivery", title: "Subretinal injection" },
                { label: "Vector engineering", title: "AAV vector design and production" },
                { label: "Animal models", title: "Proof of concept in inherited retinal disease models" },
                { label: "Disease genetics", title: "Molecular diagnosis of retinal dystrophies" },
                { label: "Cell biology", title: "Retinal photoreceptor and RPE biology" },
                { label: "Basic science", title: "Human genetics and gene function" },
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
                    Enabling method
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    Retinal imaging (OCT, fundus autofluorescence)
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Non-invasive imaging allowed monitoring of retinal structure before and after treatment.
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
                    Genetic sequencing and molecular diagnosis
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Identifying the exact genetic cause in each patient became essential for selecting who could benefit.
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
                    Multiple strategies emerged for different stages and types of retinal disease. Gene replacement succeeded first.
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
                    Natural animal models (Briard dog, rd mice)
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Naturally blind animals with matching genetic mutations provided critical proof-of-concept before human trials.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile side-branch summary */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
            {[
              { type: "Detour", title: "Early gene therapy safety crises", text: "The death of Jesse Gelsinger (1999) and leukemia cases in SCID trials forced the entire field to rebuild its safety framework." },
              { type: "Branch point", title: "Which vector? Adenovirus vs. AAV vs. lentivirus", text: "Multiple viral platforms competed. AAV emerged as safest for the eye." },
              { type: "Detour", title: "Immune responses to viral vectors", text: "Pre-existing immunity and inflammation required careful dose selection." },
              { type: "Enabling method", title: "Retinal imaging (OCT, fundus autofluorescence)", text: "Non-invasive imaging allowed monitoring of retinal structure." },
              { type: "Enabling method", title: "Genetic sequencing and molecular diagnosis", text: "Identifying the exact genetic cause became essential for patient selection." },
              { type: "Branch point", title: "Gene replacement vs. gene editing vs. optogenetics", text: "Multiple strategies for different stages of disease. Gene replacement succeeded first." },
              { type: "Enabling method", title: "Natural animal models (Briard dog, rd mice)", text: "Naturally blind animals provided critical proof-of-concept." },
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
            Key moments in the path to retinal gene therapy
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            This timeline traces milestones, branch points, detours, and
            convergence events across the scientific fields that eventually
            produced gene therapies for inherited blindness.
          </p>

          <div className="mt-12 space-y-0">
            {[
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1960s\u20131970s",
                title: "Retinal cell biology is mapped in detail",
                text: "Researchers including John Dowling (Harvard) and others characterized the layered architecture of the retina, establishing how rod and cone photoreceptors, bipolar cells, and retinal pigment epithelium (RPE) work together to support vision. This foundational biology later explained why specific gene defects cause specific patterns of vision loss.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1980s",
                title: "Human disease genetics identifies retinal disease genes",
                text: "The molecular genetics revolution enabled mapping of inherited retinal diseases to specific chromosomal locations. The gene for retinitis pigmentosa linked to rhodopsin mutations was identified in 1990 by groups including those of Thaddeus Dryja (Harvard/Mass Eye and Ear). RPE65, later central to the first approved gene therapy, was identified in the 1990s by Michael Redmond (NEI/NIH) and others.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1980s\u20131990s",
                title: "Adeno-associated virus is developed as a gene delivery tool",
                text: "AAV was initially discovered as a contaminant in adenovirus preparations. Researchers including Nicholas Bhatt and Barrie Carter, followed by work from groups at the University of Florida and the University of Pennsylvania, gradually engineered AAV into a non-pathogenic vector capable of delivering genes to non-dividing cells with long-term expression and limited immune activation.",
              },
              {
                type: "Branch point",
                color: "bg-stone-500",
                era: "1990s",
                title: "Which vector for the eye?",
                text: "Multiple viral delivery systems were tested for ocular gene transfer: adenovirus, lentivirus, and AAV. Adenovirus provoked strong immune responses. Lentivirus integrated into the genome (raising safety concerns). AAV, particularly serotype 2, showed stable transduction of photoreceptors and RPE with minimal inflammation, making it the lead candidate for retinal applications.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "1998\u20132001",
                title: "Proof of concept in the Briard dog",
                text: "A naturally occurring strain of Briard dog carries a mutation in RPE65, causing a condition closely resembling human Leber congenital amaurosis (LCA). Jean Bennett and Albert Maguire (University of Pennsylvania), along with collaborators including Gustavo Aguirre and William Hauswirth (University of Florida), demonstrated that subretinal injection of AAV-RPE65 could restore visual function in these dogs. The dramatic results \u2014 treated dogs navigating obstacle courses in dim light \u2014 became a landmark proof of concept.",
              },
              {
                type: "Detour",
                color: "bg-stone-400",
                era: "1999\u20132000s",
                title: "Gene therapy safety crises halt the field",
                text: "The death of Jesse Gelsinger in a liver-directed adenovirus trial (1999) and subsequent leukemia cases in X-SCID gene therapy trials in Paris triggered regulatory freezes, institutional reviews, and widespread public concern. The entire gene therapy field contracted. Retinal gene therapy, already in development, had to wait for the field\u2019s safety framework to be rebuilt before advancing to human trials.",
              },
              {
                type: "Detour",
                color: "bg-stone-400",
                era: "2000s",
                title: "Immune responses and dose-finding challenges",
                text: "Even with AAV\u2019s relatively favorable safety profile, researchers encountered challenges: some patients had pre-existing antibodies to AAV capsids, others developed inflammation after injection. Dose selection, immunosuppression protocols, and timing of intervention all required careful optimization that could only be resolved through iterative clinical study.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "2007\u20132008",
                title: "First human trials for RPE65-associated LCA",
                text: "Three independent groups \u2014 at the University of Pennsylvania (Bennett/Maguire), University College London (Robin Ali and James Bainbridge), and the University of Naples \u2014 initiated phase I trials of AAV2-RPE65 subretinal injection in patients with LCA due to RPE65 mutations. Early results showed improvements in light sensitivity and navigational vision in treated eyes, with acceptable safety profiles.",
              },
              {
                type: "Branch point",
                color: "bg-stone-500",
                era: "2010s",
                title: "Gene replacement vs. mutation-independent approaches",
                text: "RPE65 gene replacement worked for one specific gene. But hundreds of retinal disease genes exist. Researchers diverged into multiple strategies: gene-specific replacement for other genes, gene editing (CRISPR), antisense oligonucleotides for splicing defects, and optogenetics for late-stage disease where photoreceptors are already lost. Each addresses a different slice of the problem.",
              },
              {
                type: "Milestone",
                color: "bg-stone-900",
                era: "2017",
                title: "FDA approves voretigene neparvovec (Luxturna)",
                text: "Spark Therapeutics\u2019 voretigene neparvovec became the first FDA-approved gene therapy for a genetic disease in the United States. It delivers a functional RPE65 gene via AAV2 to the retinal pigment epithelium of patients with confirmed biallelic RPE65 mutations. Approval was based on a randomized trial showing meaningful improvement in navigational ability under low light conditions.",
              },
              {
                type: "Convergence",
                color: "bg-stone-700",
                era: "2017\u2013present",
                title: "Retinal gene therapy becomes a platform",
                text: "Following RPE65, multiple programs advanced gene therapies targeting other retinal genes: RPGR for X-linked retinitis pigmentosa, CNGA3 and CNGB3 for achromatopsia, RS1 for retinoschisis, and others. The surgical, manufacturing, and regulatory infrastructure established for Luxturna now supports a broader pipeline. The question shifted from \u201Ccan gene therapy work in the eye?\u201D to \u201Cwhich conditions, which genes, and which patients?\u201D",
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
              Why this case matters
            </p>
            <p className="mt-4 leading-8 text-stone-700">
              Retinal gene therapy matters not only because it treats a
              previously untreatable condition, but because it demonstrates a
              broader principle: that understanding the genetic basis of a
              disease, combined with a safe delivery method and careful clinical
              development, can produce a fundamentally new kind of medicine.
              The eye served as a proving ground for concepts now being extended
              across genetic medicine.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                Why earlier layers matter
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Without retinal cell biology, there would be no understanding
                of which cells to target. Without disease genetics, no way to
                know which gene to deliver. Without vector engineering, no safe
                vehicle. Without surgical technique, no way to reach the cells.
                Each layer was necessary — and none looked like a treatment
                when it was first performed.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                Setbacks shaped the path
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Gene therapy&rsquo;s safety crises in the late 1990s and early
                2000s did not destroy the field — they forced it to become more
                careful. The vectors, doses, delivery methods, and monitoring
                protocols that eventually succeeded were developed in direct
                response to earlier failures.
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
            Each section below expands on one layer of the discovery chain,
            providing the fuller history behind the visual map above.
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
                degeneration.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">2. Disease genes had to be identified</h3>
              <p className="mt-3 leading-8 text-stone-700">
                The era of positional cloning and linkage analysis — followed
                by next-generation sequencing — allowed researchers to identify
                hundreds of genes responsible for inherited retinal
                dystrophies. RPE65, encoding an enzyme critical to the visual
                cycle, became one of the first therapeutic targets because its
                biology was well understood, its disease phenotype was clear,
                and animal models existed. Identifying the gene was necessary
                but not sufficient: a delivery mechanism was still needed.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">3. A safe vector had to be engineered</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Adeno-associated virus was discovered in the 1960s as a
                non-pathogenic satellite of adenovirus. Over decades, molecular
                biologists removed its disease-associated sequences, replacing
                them with therapeutic genes while retaining its ability to
                enter cells. AAV serotype 2 proved particularly effective at
                transducing photoreceptors and RPE cells. The vector needed to
                express the gene stably without integrating into the host
                genome (reducing cancer risk) and without provoking strong
                immune responses.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">4. Surgical access to the retina had to be developed</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Delivering a vector to retinal cells requires subretinal
                injection: a microsurgical procedure where fluid is placed
                beneath the retina, creating a temporary detachment (a
                &ldquo;bleb&rdquo;) that allows the vector to contact target
                cells directly. Vitreoretinal surgeons refined these techniques
                over years, optimizing volume, location, and instrumentation
                to minimize damage while maximizing vector distribution.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">5. Animal models provided proof of concept</h3>
              <p className="mt-3 leading-8 text-stone-700">
                The Briard dog model — carrying a natural RPE65 mutation — was
                pivotal. Treated dogs showed measurable restoration of visual
                behavior, providing the evidence needed to justify human
                trials. Mouse models of other retinal diseases (rd1, rd10,
                and others) allowed testing of vectors, promoters, and doses
                at scale. Without these models, the step from laboratory to
                clinic would have been far more uncertain.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">6. Clinical translation required new trial designs</h3>
              <p className="mt-3 leading-8 text-stone-700">
                Inherited retinal diseases are individually rare. Patient
                populations are small, progression varies, and vision is
                difficult to measure in standardized ways. Clinical teams
                developed novel endpoints — including multi-luminance mobility
                testing, full-field stimulus testing, and retinal imaging
                biomarkers — to capture meaningful visual improvement. Trial
                design for rare genetic diseases became a discipline in its
                own right, balancing statistical rigor against the reality of
                small numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What this story teaches ── */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              What this story teaches
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Convergence across fields
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Gene therapy for inherited retinal disease shows how basic
              genetics, cell biology, vector engineering, surgical technique,
              and clinical measurement can converge into a new kind of
              medicine. No single field produced the treatment. The result
              required decades of parallel and sequential work — much of it
              not obviously therapeutic at the time — before the pieces could
              be assembled into something that helps patients.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              It also demonstrates that the eye, because of its accessibility
              and measurability, can serve as a proving ground for therapeutic
              concepts that later extend to other organs and other diseases.
            </p>
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

          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Each concept below represents a connected background field that
            contributed to retinal gene therapy. Live pages function as
            standalone explainers or as companions to this case.
          </p>

          <div className="mt-4">
            <Link
              href="/concepts"
              className="text-sm font-medium text-stone-600 transition hover:text-stone-900"
            >
              Browse all concept pages →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {conceptLinks.map((concept) =>
              concept.href ? (
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
              ) : (
                <div
                  key={concept.label}
                  className="rounded-[1.25rem] border border-stone-200 bg-stone-50 px-5 py-4 text-sm font-medium text-stone-800 shadow-sm"
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

      {/* ── Sources ── */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Sources and further reading
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            References
          </h2>
          <p className="mt-4 text-sm leading-7 text-stone-600 italic">
            Source citations for this case are under review and will be added
            as the page moves from draft to published status. All factual
            claims will be traceable to primary sources including peer-reviewed
            publications, ClinicalTrials.gov registrations, and FDA regulatory
            documents.
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
              This is a TrialLineage case page. It starts with a gene therapy
              for inherited vision loss, then traces backward through the
              scientific lineage that made it possible. The format presents
              the discovery process in layers: a plain-language summary, a
              visual lineage map, a timeline of key events, and a deeper
              account of the scientific history.
            </p>
            <p className="mt-4 text-sm text-stone-500 italic">
              Status: Draft — in development. Content is subject to review and revision.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-stone-500">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <Link href="/cases" className="hover:text-stone-900">Cases</Link>
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
