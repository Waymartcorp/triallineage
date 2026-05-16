import Link from "next/link";

export default function ChemicalBiologyPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            TrialLineage Concept
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Chemical biology
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Chemical biology sits at the intersection of chemistry and biology.
            It uses small molecules not only as potential drugs but as tools to
            ask biological questions — probing what a protein does, whether it
            can be engaged by a chemical, and what happens to a cell when its
            function is disrupted. This page explains what chemical biology is,
            why it matters to drug discovery, and how it helped open the door
            to KRAS-directed therapies now in clinical trials for pancreatic
            cancer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/case/daraxonrasib-pancreatic-cancer"
              className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              View the daraxonrasib case
            </Link>
            <Link
              href="/"
              className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900"
            >
              Back to TrialLineage home
            </Link>
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
              What is chemical biology?
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Chemical biology is a discipline that uses the tools and thinking
              of chemistry to study living systems. Where a traditional
              biologist might knock out a gene to learn what it does, a chemical
              biologist designs or selects a small molecule that interacts with
              the gene&rsquo;s protein product — blocking it, activating it,
              labeling it, or changing its behavior — and then observes what
              happens in the cell.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              This approach has a distinctive advantage: it provides information
              about whether a protein can be engaged by a molecule. That
              question is different from whether a protein matters biologically.
              Many proteins matter enormously to disease but resist chemical
              engagement. Chemical biology is the field that tests the boundary
              between biological importance and chemical tractability — and in
              doing so, it often reveals unexpected ways to intervene.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              Chemical biology is closely related to medicinal chemistry, but
              the two are not the same. Medicinal chemistry optimizes molecules
              toward a drug. Chemical biology uses molecules to understand
              biology. In practice, the fields overlap — and insights from
              chemical biology frequently become the starting points for drug
              discovery programs.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Core approaches
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">Chemical probes:</span>{" "}
                small molecules designed to selectively engage a specific
                protein, used to study that protein&rsquo;s role in cells
                without modifying the genome
              </li>
              <li>
                <span className="font-medium text-stone-900">Fragment screening:</span>{" "}
                testing very small, simple molecules against a target to find
                initial binding interactions, even weak ones, that reveal
                accessible sites on the protein
              </li>
              <li>
                <span className="font-medium text-stone-900">Covalent labeling and trapping:</span>{" "}
                using reactive molecules that form permanent bonds with specific
                residues on a protein, enabling detection of transient pockets
                or conformational states
              </li>
              <li>
                <span className="font-medium text-stone-900">Activity-based profiling:</span>{" "}
                chemical tools that report on the functional state of proteins
                inside living cells, showing which targets are active and
                accessible in a disease-relevant context
              </li>
              <li>
                <span className="font-medium text-stone-900">Chemogenomic screening:</span>{" "}
                systematically testing libraries of well-characterized compounds
                against cells to build a map of which chemical strategies affect
                which biological pathways
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why chemical biology matters */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Why it matters
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Why chemical biology matters in drug discovery and disease research
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It tests whether a target is chemically reachable
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Genetics can show that a protein drives disease. Structural
                biology can reveal its shape. But neither discipline answers the
                practical question: can a small molecule actually engage this
                protein in a living cell? Chemical biology answers that question
                directly, using chemical probes, fragment screens, and covalent
                labeling to test whether the protein has accessible, exploitable
                sites. This information is essential before committing to the
                long, expensive process of drug optimization.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It reveals biology that genetics alone cannot
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Knocking out a gene removes the protein entirely and
                permanently. A chemical probe can inhibit the protein partially,
                transiently, or in one tissue but not another. This finer level
                of control can reveal biological roles and dependencies that
                genetic studies miss. It also more closely resembles what a drug
                actually does in the body — providing a more realistic preview
                of therapeutic effects and limitations.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It bridges basic science and drug development
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Chemical biology occupies the space between academic discovery
                and pharmaceutical development. Its tools — probes, screens,
                labeling strategies — generate the early evidence that a target
                can be engaged, which in turn justifies the investment in
                medicinal chemistry and preclinical development. Many drug
                programs begin not with a clinical hypothesis but with a
                chemical biology experiment that demonstrates a molecule can
                reach and alter a target in a relevant biological system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How chemical biology connects molecules to biological understanding */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Molecules as tools
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How chemical biology connects molecules to biological understanding
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            The core logic of chemical biology is that a well-designed molecule
            can serve as both a question and a measurement. It asks: can this
            protein be reached? And the cell&rsquo;s response answers the
            question.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Probing target engagement
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Chemical probes allow researchers to test whether a specific
                protein can be engaged by a molecule in a biologically relevant
                context — inside a cell, in a tissue, or in an animal model.
                This goes beyond binding assays in test tubes. A probe that
                engages its target in a living cell demonstrates that the
                protein is accessible, that the molecule can reach it through
                membranes and competing interactions, and that engagement
                produces a measurable biological effect.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Discovering new binding sites
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Fragment screening and covalent labeling can reveal binding
                opportunities on a protein that were not predicted by structural
                biology alone. A fragment that binds weakly to an unexpected
                surface, or a covalent probe that reacts with a previously
                overlooked residue, provides experimental evidence that the
                site is chemically accessible. For proteins considered
                undruggable, these experiments are often the first indication
                that a chemical strategy might exist.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Validating targets before drug optimization
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Before investing years in medicinal chemistry, drug developers
                want evidence that inhibiting a target will produce the expected
                biological effect. Chemical probes provide this validation. If
                a probe that selectively inhibits a target in cells produces
                anti-tumor effects, it strengthens the case for pursuing a drug
                against that target. If it does not, it saves the field from a
                costly misallocation of effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it mattered specifically to KRAS, daraxonrasib, and pancreatic cancer */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Connection to KRAS, daraxonrasib, and pancreatic cancer
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How chemical biology helped break the KRAS problem open
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Covalent screening revealed a hidden vulnerability
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                The pivotal advance in KRAS drug development came from a
                chemical biology experiment, not a traditional drug discovery
                program. Researchers — including the Shokat lab at UCSF — used
                covalent fragment screening to test whether any small molecules
                could form bonds with specific residues on KRAS G12C. This
                approach identified compounds that reacted with cysteine 12
                near the switch-II region, demonstrating for the first time
                that KRAS could be chemically engaged. The discovery was
                fundamentally a chemical biology result: a molecule was used to
                answer a biological question about tractability.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Probes demonstrated functional consequences of KRAS engagement
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Finding a molecule that binds KRAS is not enough. Chemical
                biology tools were used to show that engaging KRAS at the
                switch-II pocket actually disrupts its signaling function —
                shifting it to an inactive state, reducing downstream MAPK
                pathway activation, and inhibiting the growth of KRAS-dependent
                cancer cells. These experiments, conducted with early tool
                compounds rather than optimized drugs, provided the biological
                validation that justified full-scale medicinal chemistry
                investment.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Chemical biology defined what &ldquo;druggable&rdquo; means
                for KRAS
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                For decades, KRAS was called undruggable — a judgment based on
                its structural features and the failure of conventional
                screening approaches. Chemical biology reframed the question.
                Instead of asking whether KRAS fit the profile of a traditional
                drug target, it asked whether any chemical strategy, including
                unconventional ones like covalent inhibition, could find
                purchase on the protein. The answer changed the field&rsquo;s
                assessment of KRAS from intractable to tractable under the
                right chemical conditions.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                The approach now extends to other KRAS mutations
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                The chemical biology strategies that opened KRAS G12C are now
                being applied to G12D, G12V, and other variants that are more
                prevalent in pancreatic cancer. These mutations do not have a
                reactive cysteine at position 12, so new chemical approaches
                are needed. Fragment screening, covalent warhead libraries, and
                electrophilic probes are being used to search for exploitable
                sites on these variants — repeating the chemical biology logic
                that initiated the first KRAS breakthrough.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branch points in scientific thinking within chemical biology */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Branch points in scientific thinking
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How chemical biology thinking branched and evolved
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Chemical biology is not a single methodology. The field has branched
            as different philosophies about how to use molecules to study
            biology have emerged — and several of those branches bear directly
            on the KRAS drug discovery story.
          </p>

          <div className="mt-10 space-y-5">
            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Selectivity-first vs. reactivity-first probes
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Design a precise key, or cast a reactive net?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                One branch of chemical biology prioritizes highly selective
                probes — molecules that engage one target and nothing else.
                Another uses broadly reactive molecules (such as electrophilic
                fragments) to survey many proteins at once, looking for any
                that can be chemically engaged. For KRAS, the reactivity-first
                approach was decisive: broadly reactive covalent fragments
                identified the switch-II pocket before anyone had designed a
                selective probe for it. Selectivity was then built in during
                the subsequent medicinal chemistry phase.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Target-centric vs. phenotypic chemical biology
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Start from a known target, or screen for a cellular effect?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Some chemical biology programs begin with a defined target and
                seek molecules that engage it. Others screen molecules against
                cells and look for desirable phenotypic effects — then work
                backward to identify the target. The KRAS story was
                target-centric: the protein was known, and the question was
                whether chemistry could reach it. But phenotypic approaches
                have contributed to the broader understanding of KRAS-driven
                signaling by revealing unexpected dependencies and resistance
                mechanisms in KRAS-mutant cells.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Chemical biology as academic science vs. as industry tool
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Publish probes, or advance drug candidates?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                A persistent tension in chemical biology is whether its primary
                output should be published chemical tools for the research
                community or proprietary compounds heading toward drug
                development. For KRAS, both paths contributed. Academic chemical
                biology produced the foundational proof that KRAS could be
                chemically engaged, using tool compounds shared through
                publications. Pharmaceutical and biotech programs then used
                those insights as starting points for proprietary medicinal
                chemistry campaigns, including the one that produced
                daraxonrasib.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Failed, incomplete, or indirect approaches */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Incomplete and indirect approaches
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Chemical biology efforts that fell short — but still taught the
            field
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Not every chemical biology approach to KRAS succeeded. Several
            strategies produced partial results or were eventually superseded —
            but each one contributed to the understanding that eventually
            enabled progress.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                High-throughput screens against KRAS produced few useful hits
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Multiple groups ran large-scale compound screens against KRAS,
                hoping to find molecules that bind the protein directly. These
                screens generally failed to produce viable starting points —
                not because the screening technology was flawed, but because
                KRAS lacks the conventional binding pockets that most screening
                libraries are designed to exploit. The negative result was
                informative: it demonstrated that conventional approaches were
                insufficient and that new chemical strategies would be needed.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                SOS-mediated nucleotide exchange inhibitors
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Chemical biologists explored compounds that interfere with the
                interaction between KRAS and its guanine nucleotide exchange
                factor, SOS. These compounds aimed to prevent KRAS from cycling
                back to its active GTP-bound state. Some showed activity in
                biochemical assays, but translating this into potent, selective
                cellular activity proved difficult. The work nonetheless
                clarified the SOS-KRAS interface as a potential point of
                intervention and informed later combination strategies.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Non-selective covalent tools with off-target effects
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Early covalent compounds that reacted with KRAS G12C also
                reacted with other proteins bearing accessible cysteine
                residues. These off-target effects made it difficult to
                attribute cellular phenotypes specifically to KRAS inhibition.
                Improving selectivity required extensive chemical optimization
                — a process that blurred the line between chemical biology and
                medicinal chemistry. The early, imperfect tools nonetheless
                provided the proof of concept that motivated that optimization.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Indirect pathway probes that did not translate clinically
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Chemical biology tools that inhibit proteins downstream of
                KRAS — such as RAF, MEK, or ERK — were used extensively to
                study KRAS-dependent signaling. These probes were scientifically
                valuable and helped map the pathway. But as therapeutic
                strategies, downstream inhibitors generally showed limited
                single-agent efficacy in KRAS-mutant cancers because of
                compensatory signaling. This reinforced the rationale for
                directly targeting KRAS itself.
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
              What the public usually does not hear about chemical biology
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Chemical biology is rarely named in public discussions of drug
              discovery. Its contributions are usually absorbed into the broader
              narrative of &ldquo;scientists developed a drug&rdquo; without
              distinction between the biological insight, the chemical tools
              that tested it, and the drug optimization that followed.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Probes are not drugs, but drugs often begin as probes
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Chemical probes are designed to answer scientific questions, not
                to be given to patients. They may be too reactive, too unstable,
                or too non-selective for therapeutic use. But the binding
                interactions they reveal — the pockets they find, the residues
                they react with — are frequently the starting points for drug
                programs. The distinction between a probe and a drug matters
                scientifically, even though it is invisible to the public.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                &ldquo;Undruggable&rdquo; is a chemical biology judgment
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                When scientists label a target &ldquo;undruggable,&rdquo; they
                are making a chemical biology claim: no molecule has been found
                that can engage this protein effectively. It is not a statement
                about the protein&rsquo;s biological importance. Chemical biology
                is the discipline that challenges these labels — by trying new
                chemical strategies, new screening methods, or new ways of
                thinking about molecular engagement. The reclassification of
                KRAS from undruggable to druggable was a chemical biology
                achievement.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                The academic-industry boundary is especially porous here
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Chemical biology discoveries — such as the identification of
                the KRAS switch-II pocket — often originate in academic
                laboratories and are then developed by pharmaceutical or
                biotech companies. This transfer of insight from public science
                to commercial drug development is one of the defining features
                of how modern targeted therapies come into being. The public
                rarely sees this chain of translation.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Chemical biology is how we learn what molecules can and cannot
                do
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Before a drug is designed, before a clinical trial is planned,
                someone has to demonstrate that the target can be chemically
                engaged in a meaningful way. This foundational step — usually
                taken in a chemical biology laboratory — is what makes
                everything downstream possible. It is the least visible and
                among the most consequential stages of drug development.
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
                  Chemical biology provided the critical proof that KRAS could
                  be chemically engaged — the step that transformed it from
                  an undruggable target into one that medicinal chemistry could
                  optimize toward a clinical candidate. In the TrialLineage
                  discovery chain, chemical biology sits between structural
                  insight and medicinal chemistry, bridging the knowledge of
                  what KRAS looks like to the demonstration that a molecule
                  can reach it and alter its function. The case page traces the
                  full lineage, from oncogene discovery through to clinical
                  translation.
                </p>
              </div>
              <Link
                href="/case/daraxonrasib-pancreatic-cancer"
                className="shrink-0 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
              >
                View the full case
              </Link>
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
              <Link href="/concept/structural-biology" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Structural biology</Link>
              <Link href="/concept/medicinal-chemistry" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Medicinal chemistry</Link>
              <Link href="/concept/translational-oncology" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Translational oncology</Link>
              <Link href="/concept/clinical-trial-design" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Clinical trial design</Link>
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
