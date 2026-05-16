import Link from "next/link";

export default function MedicinalChemistryPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            TrialLineage Concept
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Medicinal chemistry
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Knowing that a protein causes disease is not the same as having a
            drug that can reach it. Medicinal chemistry is the discipline that
            bridges that gap — designing, building, and refining small molecules
            that can interact with a specific biological target inside the human
            body. This page explains what medicinal chemists do, why their work
            is a critical and often misunderstood part of drug discovery, and
            how it connects to the development of KRAS-directed therapies now
            in clinical trials for pancreatic cancer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/case/daraxonrasib-pancreatic-cancer"
              className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              View the daraxonrasib case
            </a>
            <a
              href="/"
              className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900"
            >
              Back to TrialLineage home
            </a>
          </div>
        </div>
      </section>

      {/* Plain-language definition */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              In plain language
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              What is medicinal chemistry?
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Medicinal chemistry is the science of designing molecules that can
              act as drugs. A medicinal chemist takes what biologists have
              learned about a disease target — its shape, its behavior, where it
              sits in the cell — and tries to build a small molecule that can
              reach that target, bind to it, and change what it does. The
              molecule has to do all of this while also being safe enough to
              give to a person, stable enough to survive in the body, and
              selective enough to affect the target without disrupting too much
              else.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              This is not a single step. It is an iterative process that can
              take years. Chemists design a molecule, test it, learn what works
              and what does not, and redesign. Each cycle improves the
              compound&rsquo;s potency, selectivity, stability, or safety — or
              reveals that a particular chemical strategy is a dead end and a
              new approach is needed. The compound that eventually enters a
              clinical trial is typically the product of hundreds or thousands
              of earlier compounds that were made, tested, and set aside.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Core vocabulary
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">Hit:</span>{" "}
                an early-stage molecule that shows some activity against the
                target, usually discovered through screening
              </li>
              <li>
                <span className="font-medium text-stone-900">Lead:</span>{" "}
                a more refined compound with enough potency, selectivity, and
                drug-like properties to be worth optimizing further
              </li>
              <li>
                <span className="font-medium text-stone-900">Lead optimization:</span>{" "}
                the iterative process of modifying a lead compound to improve
                its properties for use in humans
              </li>
              <li>
                <span className="font-medium text-stone-900">SAR (structure-activity relationship):</span>{" "}
                the systematic study of how changes to a molecule&rsquo;s
                structure affect its biological activity
              </li>
              <li>
                <span className="font-medium text-stone-900">Drug candidate:</span>{" "}
                the final optimized compound selected to enter preclinical
                safety testing and, if successful, clinical trials
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why medicinal chemistry matters in drug discovery */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Why it matters
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Why medicinal chemistry is essential to drug discovery
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                Biology identifies targets; chemistry makes drugs
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Decades of research in oncogene discovery, signaling biology,
                and disease genomics can identify a protein that drives a
                disease. But identification is not intervention. Without a
                molecule that can physically reach the protein, bind to it in a
                specific way, and alter its function, the biological knowledge
                remains scientifically important but therapeutically inert.
                Medicinal chemistry is the discipline that converts a validated
                target into a testable drug.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It solves problems that biology cannot
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                A molecule might bind its target perfectly in a test tube but
                fail in the body because it is broken down by liver enzymes,
                cannot cross cell membranes, or is cleared too quickly to
                maintain an effective concentration. These are chemistry
                problems, not biology problems. Medicinal chemists modify the
                molecule&rsquo;s structure to address each issue — adjusting its
                metabolic stability, membrane permeability, solubility, and
                pharmacokinetics — while preserving its ability to hit the
                target.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It determines whether a target is practically druggable
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Some targets are biologically validated but chemically
                intractable — meaning no one has found a way to build a small
                molecule that can engage them effectively. Whether a target is
                &ldquo;druggable&rdquo; is ultimately a medicinal chemistry
                question, not a biology question. The decades-long struggle to
                drug KRAS is one of the defining examples: the biology was clear,
                but the chemistry was extraordinarily difficult.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it connects biological insight to actual drug candidates */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            The bridge
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How medicinal chemistry connects biology to a drug candidate
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            The work of medicinal chemistry sits between two other kinds of
            knowledge: structural biology (which reveals the target&rsquo;s
            shape) and clinical development (which tests the drug in humans).
            Medicinal chemistry is the translation layer between understanding
            a target and having something to put in a pill or an infusion.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Input from structural biology
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Structural studies provide a three-dimensional picture of the
                target protein — its surface contours, binding pockets, and
                flexible regions. Medicinal chemists use this information to
                design molecules that fit into specific sites on the protein,
                much the way a key is shaped to fit a lock. Without structural
                data, chemistry is largely trial and error. With it, design
                becomes rational.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                The chemistry cycle
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Chemists synthesize a candidate molecule, test it for target
                binding and cellular activity, measure its behavior in
                biological systems (absorption, metabolism, toxicity), and then
                redesign based on results. This cycle — make, test, learn,
                redesign — may repeat hundreds of times before a compound is
                good enough to advance. Each iteration is informed by
                structure-activity relationships that reveal which parts of the
                molecule are critical and which can be changed.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Output to clinical development
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                The end product of medicinal chemistry is a drug candidate:
                a single compound with a defined structure, a known mechanism,
                acceptable safety in preclinical models, and properties that
                allow it to be manufactured, formulated, and dosed in humans.
                This compound is what enters phase 1 clinical trials. Everything
                that happens afterward — dosing, safety, efficacy — depends on
                the chemical choices made during this stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it mattered specifically to KRAS and daraxonrasib */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Connection to KRAS and daraxonrasib
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Why medicinal chemistry was the bottleneck for KRAS
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                The target was known for decades before chemistry caught up
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                KRAS was identified as an oncogene in the early 1980s. Its role
                in cancer was biologically validated across multiple tumor types.
                But the protein&rsquo;s surface was smooth, with no obvious
                pocket for a small molecule to bind. It held its natural
                substrate (GTP) with extremely high affinity, making competitive
                inhibition impractical. For roughly three decades, the central
                challenge was not biological understanding but chemical
                tractability — medicinal chemistry was the rate-limiting step.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Covalent chemistry changed the equation
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                The breakthrough came when medicinal chemists adopted a strategy
                that had been considered risky: covalent inhibition. Instead of
                designing a molecule that temporarily occupies a pocket on KRAS,
                they designed one that forms a permanent chemical bond with a
                specific amino acid near the switch-II pocket. This approach
                exploited a structural vulnerability that was only accessible in
                certain KRAS mutant forms. The chemistry was unconventional, but
                it worked — and it is the basis for the class of KRAS-directed
                compounds now in clinical trials, including daraxonrasib.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
            <p className="leading-8 text-stone-700">
              Daraxonrasib is a direct product of medicinal chemistry. Its
              structure, binding mode, selectivity profile, and pharmacokinetic
              properties were shaped through the iterative chemistry process
              described above. The advances in covalent drug design and
              structure-guided optimization that emerged over the past decade
              were preconditions for compounds like it to reach clinical trials
              in pancreatic cancer.
            </p>
          </div>
        </div>
      </section>

      {/* Branch points in scientific thinking within medicinal chemistry */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Branch points in scientific thinking
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How medicinal chemistry thinking branched and evolved
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Medicinal chemistry is not a single method applied uniformly. The
            field has branched repeatedly as new tools, strategies, and
            philosophies of drug design have emerged — and several of these
            branches directly shaped the path to KRAS-directed drugs.
          </p>

          <div className="mt-10 space-y-5">
            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Reversible vs. covalent inhibition
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Should a drug bind temporarily or permanently?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                For decades, the dominant philosophy in medicinal chemistry
                favored reversible inhibitors — molecules that bind a target
                temporarily and then dissociate. Covalent inhibitors, which form
                a permanent bond, were considered too risky because of concerns
                about off-target toxicity. But for targets like KRAS, where
                reversible binding was insufficient to overcome the protein&rsquo;s
                tight grip on GTP, covalent strategies proved essential. The
                success of covalent KRAS inhibitors has reshaped the field&rsquo;s
                attitude toward this approach.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Screening-driven vs. structure-guided design
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Start from random libraries or design from the target&rsquo;s
                shape?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                One branch of medicinal chemistry relies on high-throughput
                screening — testing thousands or millions of compounds against a
                target to find initial hits. Another branch starts from the
                target&rsquo;s three-dimensional structure and designs molecules
                rationally. In the KRAS case, early screening efforts largely
                failed because the protein offered no accessible binding site
                for conventional libraries. The breakthrough required
                structure-guided design informed by work from the Shokat lab
                at UCSF, whose identification of the switch-II pocket opened a
                binding site that conventional screens had missed entirely.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Mutation-specific vs. pan-RAS approaches
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Target one KRAS mutation or all of them?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                The first successful covalent KRAS inhibitors were specific to
                one mutation: G12C. This mutation is common in lung cancer but
                less so in pancreatic cancer, where G12D and G12V predominate.
                A major branch in current medicinal chemistry is the effort to
                develop inhibitors that work against other KRAS mutations or
                against multiple RAS variants at once. This is one of the active
                frontiers of the field and is directly relevant to extending
                KRAS-directed therapy to more pancreatic cancer patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Failed or incomplete chemistry approaches */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Failed and incomplete approaches
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Chemistry strategies that did not work — but still advanced the
            field
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            The path to a successful KRAS drug was littered with chemical
            approaches that failed or fell short. Each one taught the field
            something about what KRAS would and would not allow.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Competitive GTP-binding inhibitors
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                The most intuitive chemical strategy was to design a molecule
                that competes with GTP for the active site of KRAS — the way
                many kinase inhibitors compete with ATP. But KRAS binds GTP
                with extremely high affinity, and cellular GTP concentrations are
                high. No competitive inhibitor could achieve the binding
                strength needed to displace GTP in a living cell. This failure
                forced the field to look for alternative binding sites entirely.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Protein-protein interaction disruptors
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Another approach attempted to block the interaction between KRAS
                and its downstream effector proteins (such as RAF) by designing
                molecules that wedge into the protein-protein interface. These
                interfaces are typically large, flat, and featureless — the
                opposite of what drug-like molecules engage well. Some compounds
                showed activity in laboratory settings but could not achieve
                sufficient potency or selectivity for clinical use. The effort
                clarified the structural challenges of targeting RAS interactions
                directly.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Farnesylation-blocking strategies
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Farnesyltransferase inhibitors aimed to prevent KRAS from
                reaching the cell membrane, a step required for its signaling
                function. The chemistry worked — the inhibitors did block
                farnesylation — but KRAS could be modified by an alternative
                enzyme (geranylgeranyltransferase), bypassing the blockade.
                The lesson was not that the chemistry was wrong, but that the
                biological redundancy of KRAS membrane attachment defeated the
                chemical strategy.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Fragment-based approaches with insufficient follow-through
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Fragment-based drug discovery — starting with very small, weak-
                binding molecules and growing them into potent compounds — was
                applied to KRAS by several groups. Some fragments were found to
                bind near the switch-II region, providing early validation that
                the area was chemically accessible. But translating fragment
                hits into drug-like leads proved difficult without the
                structural insight and covalent strategies that came later.
                These early efforts laid groundwork that was built upon by
                subsequent programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the public usually misses */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              What often gets missed
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              What the public usually does not hear about medicinal chemistry
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Medicinal chemistry is one of the most critical steps in drug
              development, but it is almost invisible in public discussion.
              When a drug enters clinical trials, the chemistry behind it is
              rarely explained — and several important aspects of the field
              remain poorly understood.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                A drug is not just a target — it is a specific molecule
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Public discussions often say &ldquo;a drug that targets
                KRAS&rdquo; as if targeting were the whole story. In reality,
                the specific molecular structure of the drug determines
                everything: how tightly it binds, where in the body it goes, how
                long it lasts, what side effects it causes, and whether it can
                be manufactured. Two drugs that target the same protein can
                behave completely differently because of their chemical
                structures.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Most drug candidates fail, and that is expected
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                For every compound that enters clinical trials, hundreds or
                thousands were made and discarded during lead optimization.
                Failure in medicinal chemistry is not a sign that the science
                is broken — it is the mechanism by which the science works.
                Each failed compound teaches the team something about the
                target, the chemistry, or the biology that narrows the path
                toward a better one.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                &ldquo;Drug discovery&rdquo; is mostly chemistry
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                The phrase &ldquo;drug discovery&rdquo; is often used loosely to
                describe everything from basic science to clinical trials. In
                practice, the actual discovery of the drug — the molecule that
                will be tested in humans — happens in the medicinal chemistry
                phase. Target identification, signaling research, and structural
                biology set the stage, but the drug itself is a chemical entity
                designed and built by chemists.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                The chemistry constrains what is clinically possible
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Many of the limitations that show up in clinical trials —
                inadequate duration of response, dose-limiting toxicity,
                resistance — have their roots in the chemical properties of the
                drug. A molecule that clears the body too quickly may require
                doses high enough to cause side effects. A molecule that binds
                only one mutant form may not help patients with a different
                mutation. These are not failures of clinical design — they are
                reflections of what the chemistry could and could not achieve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related case link */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Related case
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Where this concept appears in TrialLineage
          </h2>

          <div className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold">
                  Daraxonrasib in pancreatic cancer
                </h3>
                <p className="mt-3 leading-8 text-stone-700">
                  Medicinal chemistry sits near the end of the scientific
                  lineage behind daraxonrasib — the stage where decades of
                  biological understanding, structural insight, and chemical
                  strategy converge into the specific molecule that enters human
                  trials. The case page traces the full discovery chain, from
                  oncogene discovery through signaling biology, pancreatic
                  disease research, structural biology, and clinical
                  translation, showing how a phase 1&ndash;3 trial emerges from
                  interrelated research across many fields.
                </p>
              </div>
              <a
                href="/case/daraxonrasib-pancreatic-cancer"
                className="shrink-0 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
              >
                View the full case
              </a>
            </div>
          </div>

          <div className="mt-6 rounded-[2rem] border border-stone-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Related concepts
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Other scientific fields in the TrialLineage discovery chain.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/concept/oncogene-discovery" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Oncogene discovery</Link>
              <Link href="/concept/protein-signaling-biology" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Protein signaling biology</Link>
              <Link href="/concept/translational-oncology" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Translational oncology</Link>
              <Link href="/concept/clinical-trial-design" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Clinical trial design</Link>
              <Link href="/concept/structural-biology" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Structural biology</Link>
              <Link href="/concept/chemical-biology" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Chemical biology</Link>
              <Link href="/concept/pancreatic-precursor-lesion-biology" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Pancreatic precursor lesion biology</Link>
              <Link href="/concepts" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-500 transition hover:border-stone-400 hover:text-stone-700">All concepts →</Link>
            </div>
          </div>

          <div className="mt-6 rounded-[2rem] border border-stone-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              About this page
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-stone-700">
              This is a TrialLineage concept explainer. Concept pages provide
              plain-language background on the scientific fields, branch points,
              and discoveries that underlie specific clinical developments. They
              are designed to be read independently or as companions to case
              pages — helping a public audience understand the full discovery
              process behind a human-disease trial.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
