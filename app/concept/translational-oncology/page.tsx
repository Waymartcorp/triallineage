export default function TranslationalOncologyPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            TrialLineage Concept
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Translational oncology
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            A laboratory discovery about cancer does not automatically become a
            treatment. Between the moment scientists understand something new
            about a disease and the moment that understanding reaches a patient,
            there is a long, uncertain, and often poorly understood process
            called translation. Translational oncology is the field that
            navigates this crossing — converting research findings into clinical
            hypotheses, preclinical evidence, and ultimately human trials. This
            page explains what translational oncology involves, why it matters,
            and how it shaped the path from KRAS biology to the daraxonrasib
            clinical trial in pancreatic cancer.
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
              What is translational oncology?
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Translational oncology is the work of moving cancer research from
              laboratory findings toward clinical use. It is sometimes described
              as &ldquo;bench to bedside,&rdquo; but that phrase understates how
              complex the process is. Translation is not a single handoff. It
              involves designing experiments that test whether a laboratory
              insight holds up in living systems, building animal models that
              approximate human disease, determining safe starting doses,
              identifying which patients are most likely to benefit, and
              constructing clinical trials that can answer the right questions
              with the right evidence.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              None of this is automatic. A compound that kills cancer cells in a
              dish may fail in animals. A compound that works in animals may be
              too toxic in humans. A compound that is safe may not be given to
              the right patients, or may be tested in a trial designed to answer
              the wrong question. Translational oncology is the discipline that
              tries to anticipate and navigate each of these failure points
              before they become expensive or harmful surprises in a clinical
              trial.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Key concepts
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">Preclinical models:</span>{" "}
                laboratory systems — cell lines, organoids, genetically
                engineered mice, patient-derived xenografts — used to test
                whether a drug works before it reaches humans
              </li>
              <li>
                <span className="font-medium text-stone-900">Biomarker:</span>{" "}
                a measurable biological signal (a mutation, a protein level, a
                gene expression pattern) used to select patients, predict
                response, or monitor treatment
              </li>
              <li>
                <span className="font-medium text-stone-900">IND-enabling studies:</span>{" "}
                the package of safety, pharmacology, and manufacturing data
                required before regulators allow a drug to be tested in humans
                for the first time
              </li>
              <li>
                <span className="font-medium text-stone-900">Patient selection:</span>{" "}
                the process of identifying which patients should receive a
                particular therapy, often based on the molecular characteristics
                of their tumor
              </li>
              <li>
                <span className="font-medium text-stone-900">Therapeutic window:</span>{" "}
                the range of drug doses that produces the intended effect
                without causing unacceptable harm — one of the central questions
                translation must answer
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why translational oncology matters in cancer research */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Why it matters
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Why translational oncology matters in cancer research
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                Most laboratory discoveries never reach patients
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                The gap between knowing something about cancer and being able to
                treat cancer with that knowledge is enormous. Most drugs that
                enter clinical trials fail, and most fail not because the
                underlying science was wrong but because the translation was
                incomplete — the wrong model was used, the dose was misjudged,
                the patient population was too broad, or the trial asked a
                question the drug could not answer. Translational oncology
                exists to reduce these failures by being more rigorous about the
                steps between laboratory and clinic.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It is where scientific fields converge into a clinical plan
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Basic science, structural biology, medicinal chemistry, and
                disease biology each produce their own insights. Translational
                oncology is the stage where those insights are brought together
                into a single coherent strategy: which compound, in which
                patients, at what dose, measured by what outcomes, and tested
                through what trial design. This convergence is intellectually
                demanding and involves judgment calls that no single upstream
                discipline can make on its own.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It determines the quality of clinical evidence
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                A clinical trial is only as good as the translational thinking
                behind it. If the preclinical models did not reflect the human
                disease accurately, the trial may test the right drug in the
                wrong way. If biomarker selection was imprecise, the trial may
                enroll patients who were never likely to respond. Translational
                oncology shapes the conditions under which clinical evidence is
                generated — and poor translation produces misleading results
                regardless of how well the trial itself is run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it connects lab discovery to human trials */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            The crossing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How translational oncology connects lab discovery to human trials
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Translation is not a single leap. It is a sequence of increasingly
            demanding tests, each designed to answer a question that the
            previous stage could not. The work moves through several broadly
            recognized phases, though in practice the boundaries between them
            are blurred and iterative.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Target validation
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Before investing in drug development, translational teams need
                evidence that the target actually drives the disease in a way
                that can be disrupted therapeutically. This goes beyond basic
                biology. It requires showing that inhibiting the target in
                disease-relevant models produces the expected effect — reduced
                tumor growth, cell death, pathway suppression — and that the
                effect is not easily compensated by other pathways.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Preclinical development
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Once a drug candidate exists, it must be tested in systems that
                approximate human biology. Cell lines and organoids test
                efficacy and selectivity. Animal models assess whether the drug
                reaches the tumor, how long it lasts in the body, and whether
                it causes harm at therapeutic doses. Manufacturing processes
                must be established. The totality of this work forms the
                regulatory package that allows human testing to begin.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Clinical hypothesis and trial design
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Translational oncology also shapes the design of the clinical
                trial itself: what dose to start at, which patients to enroll
                (based on tumor genetics, prior treatments, disease stage), what
                endpoints to measure, and how to interpret early signals of
                activity. These decisions are informed by preclinical data but
                also by clinical judgment and regulatory requirements. The
                quality of this design profoundly affects whether the trial
                produces clear, interpretable results.
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
            Why translation was especially difficult for KRAS in pancreatic
            cancer
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                The biology was clear; the path to the clinic was not
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                By the time covalent KRAS inhibitors became chemically feasible,
                the biological rationale for targeting KRAS in pancreatic cancer
                was well established. KRAS mutations — particularly G12D — are
                present in the vast majority of pancreatic ductal
                adenocarcinomas. But biological rationale alone does not make a
                clinical program. Translational teams still had to show that
                inhibiting mutant KRAS in preclinical models of pancreatic
                cancer produced meaningful tumor responses, that the drug
                reached the pancreas at sufficient concentrations, and that the
                therapeutic window was wide enough to justify human testing.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Preclinical models of pancreatic cancer are unusually difficult
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Pancreatic cancer has a dense stromal microenvironment — a thick
                layer of connective tissue and immune cells surrounding the
                tumor — that affects drug delivery and may influence treatment
                response. Simple cell-line models do not capture this
                complexity. Translational work for daraxonrasib likely required
                more physiologically relevant systems such as patient-derived
                organoids and genetically engineered mouse models that
                recapitulate the stromal architecture of human pancreatic
                tumors. Choosing the right preclinical model is itself a
                consequential translational decision.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Patient selection required molecular specificity
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Because daraxonrasib targets a specific mutant form of KRAS,
                clinical translation required a reliable way to identify
                patients who carry that mutation. This means integrating tumor
                genomic sequencing into patient enrollment — a practical and
                logistical challenge, especially in pancreatic cancer where
                tissue biopsies can be difficult to obtain. Translational
                oncology must solve not just the biology but the clinical
                infrastructure needed to act on it.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Prior translational failures with KRAS informed this program
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Earlier attempts to translate KRAS biology into therapies —
                including farnesyltransferase inhibitors and downstream pathway
                inhibitors — failed in clinical trials despite strong preclinical
                rationale. Those failures provided translational lessons: that
                indirect KRAS targeting is often insufficient, that pathway
                redundancy can defeat single-agent approaches, and that
                preclinical models must capture the right biology to predict
                clinical outcomes. The translational strategy behind
                daraxonrasib was shaped, in part, by what earlier programs got
                wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branch points in scientific thinking within translational oncology */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Branch points in scientific thinking
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How translational thinking branched and evolved in oncology
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Translational oncology has not followed a single path. The field has
            branched as new tools, models, and regulatory philosophies have
            emerged — and several of these branches are directly relevant to how
            KRAS-directed therapies reached human trials.
          </p>

          <div className="mt-10 space-y-5">
            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Empirical dosing vs. mechanism-guided dosing
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Find the maximum tolerated dose, or the minimum effective one?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Traditional oncology translation pushed doses as high as the
                body could tolerate, based on the logic that more drug means
                more tumor killing. For targeted therapies, this logic is
                increasingly questioned. If the drug is designed to inhibit a
                specific protein, the relevant question may be what dose
                achieves sufficient target engagement — not what dose causes
                dose-limiting toxicity. This shift in translational philosophy
                affects how phase 1 trials are designed and what they are
                intended to learn.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Tumor-type-agnostic vs. disease-specific development
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Develop across all cancers with the mutation, or focus on one
                disease?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Some targeted therapies are developed in a
                &ldquo;basket&rdquo; approach — enrolling patients from
                multiple tumor types that share the same molecular alteration.
                Others are developed disease by disease, recognizing that the
                same mutation may behave differently depending on the tissue of
                origin, the co-occurring mutations, and the tumor
                microenvironment. For KRAS, this distinction matters: G12C
                inhibitors were initially developed primarily in lung cancer,
                and extending that approach to pancreatic cancer required
                separate translational work because the disease biology, stromal
                context, and patient populations differ substantially.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Single-agent testing vs. early combination strategies
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Test the drug alone first, or start with combinations?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                A recurring debate in translational oncology is whether to test
                a new drug as a single agent — establishing its activity in
                isolation — or to combine it early with other treatments that
                may enhance its effect. For KRAS-directed therapies, this
                question is especially pressing because adaptive resistance
                mechanisms have been observed in preclinical models, suggesting
                that single-agent responses may be short-lived. Whether and when
                to add combination partners is a translational judgment call
                with significant implications for trial design, regulatory
                strategy, and patient risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Failed or incomplete translational approaches */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Failed and incomplete approaches
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Translational efforts that fell short — but still taught the field
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Much of what translational oncology knows today was learned from
            programs that did not succeed. Several KRAS-related translational
            efforts illustrate the kinds of failures that accumulate into
            eventual progress.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Farnesyltransferase inhibitors in pancreatic cancer trials
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Farnesyltransferase inhibitors were among the first drugs
                developed with the explicit goal of targeting KRAS signaling.
                They reached clinical trials in pancreatic cancer in the early
                2000s but showed no meaningful benefit. The translational
                failure was not in the chemistry or the biology per se, but in
                the assumption that blocking farnesylation would be sufficient
                to disable KRAS membrane localization. KRAS could use
                alternative lipid modifications to reach the membrane. The
                lesson was that indirect targeting strategies must account for
                the redundancy of the biological system.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                MEK inhibitor trials in KRAS-mutant cancers
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Inhibitors of MEK — a kinase downstream of KRAS in the MAPK
                signaling pathway — were tested in KRAS-mutant tumors on the
                rationale that blocking downstream signaling might compensate
                for the inability to target KRAS directly. Results in pancreatic
                cancer were largely disappointing. The translational insight was
                that KRAS activates multiple downstream pathways, and blocking
                one is often insufficient. This reinforced the case for direct
                KRAS inhibition and helped clarify why indirect approaches had
                limited single-agent activity.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Preclinical models that did not predict clinical outcomes
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Some early translational programs relied heavily on cell-line
                xenograft models — human cancer cells implanted into mice — that
                grew quickly and responded well to drugs in preclinical
                settings. But these models often lacked the stromal complexity,
                immune context, and genetic heterogeneity of actual human
                tumors. When drugs that performed well in these models failed in
                patients, the field was forced to develop more representative
                preclinical systems. This drove the adoption of patient-derived
                organoids and genetically engineered mouse models that better
                reflect the biology of diseases like pancreatic cancer.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Overly broad patient enrollment in early targeted trials
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Some early trials of targeted therapies enrolled patients based
                on tumor type alone, without requiring molecular confirmation
                that the target was present. This diluted the signal: patients
                whose tumors did not carry the relevant alteration were unlikely
                to benefit, and their inclusion made the drug appear less
                effective than it may have been in a molecularly selected
                population. The translational lesson — that biomarker-driven
                enrollment is essential for targeted therapies — is now widely
                accepted but was learned through costly trial failures.
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
              What the public usually does not hear about translational oncology
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Translational oncology is largely invisible to the public. News
              coverage tends to jump from &ldquo;scientists discover&rdquo; to
              &ldquo;drug enters trial&rdquo; as though those are adjacent
              events. The years of work between them — and the intellectual
              substance of that work — are almost never explained.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Translation is not just logistics
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                It is tempting to think of translation as the bureaucratic or
                logistical part of drug development — paperwork, manufacturing,
                regulatory filings. In reality, it involves some of the most
                consequential scientific decisions in the entire process. Which
                preclinical model to use, which patient population to target,
                what dose to start with, what endpoints to measure — these are
                scientific questions with uncertain answers, and getting them
                wrong can sink an otherwise promising drug.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Most clinical trial failures are translational failures
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                When a drug fails in a clinical trial, the public usually
                concludes that the drug did not work. Often, the more accurate
                statement is that the translational strategy was flawed: the
                wrong patients were enrolled, the dose was suboptimal, the
                preclinical models were misleading, or the trial was not
                designed to detect the kind of benefit the drug could provide.
                Improving translational rigor is one of the most important ways
                to reduce wasted clinical trials.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                The &ldquo;valley of death&rdquo; is real and consequential
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                The gap between academic discovery and clinical development is
                sometimes called the &ldquo;valley of death&rdquo; because so
                many promising findings fail to cross it. This is partly a
                funding problem — academic grants rarely cover the cost of
                preclinical development — and partly an expertise problem,
                because the skills needed for translation differ from those
                needed for basic research. The result is that many validated
                biological insights never get tested in patients, not because
                they are scientifically wrong but because no one carried them
                through the translational process.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Translation is where scientific disciplines must converge
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                A translational oncology team draws on biology, chemistry,
                pharmacology, pathology, clinical medicine, biostatistics, and
                regulatory science. No single discipline owns the process.
                This makes translation inherently collaborative and
                interdisciplinary — and also makes it difficult to attribute
                progress to any one breakthrough. It is a field defined more by
                integration than by singular discovery.
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
                  Translational oncology is the final conceptual layer before
                  the clinical trial itself. It sits at the point in the
                  discovery chain where oncogene biology, signaling research,
                  disease-specific knowledge, structural insight, and medicinal
                  chemistry all converge into a testable clinical hypothesis.
                  The daraxonrasib case page traces this full lineage — from
                  basic science through each intermediate field — showing how a
                  phase 1&ndash;3 trial in pancreatic cancer emerged from
                  decades of interrelated research.
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
