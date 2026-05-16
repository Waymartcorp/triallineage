import Link from "next/link";

export default function PancreaticPrecursorLesionBiologyPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            TrialLineage Concept
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Pancreatic precursor lesion biology
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Pancreatic cancer does not appear suddenly. It develops over years
            or decades from earlier, precancerous changes in the cells of the
            pancreas — changes known as precursor lesions. The study of these
            lesions has reshaped how scientists understand when pancreatic
            cancer begins, which mutations drive its earliest stages, and why
            KRAS occupies such a central role in the disease. This page
            explains what precursor lesion biology is, what it revealed about
            pancreatic cancer, and how it connects to the scientific lineage
            behind KRAS-directed therapies now in clinical trials.
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
              What are pancreatic precursor lesions?
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              A precursor lesion is an abnormal change in tissue that is not
              yet cancer but that can, over time, progress toward cancer. In
              the pancreas, the best-studied precursor lesions are called
              pancreatic intraepithelial neoplasias, or PanINs. These are
              microscopic changes in the cells lining the small ducts of the
              pancreas. They are graded by severity: PanIN-1 lesions show mild
              changes, PanIN-2 lesions show moderate changes, and PanIN-3
              lesions — sometimes called carcinoma in situ — are one step short
              of invasive cancer.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              The critical insight from precursor lesion biology is that each
              stage of PanIN progression is associated with the accumulation of
              specific genetic mutations. KRAS mutations appear very early —
              already present in low-grade PanIN-1 lesions — and are found in
              the vast majority of pancreatic ductal adenocarcinomas. This
              means KRAS mutation is not a late event in pancreatic cancer but
              an initiating one. Other mutations, such as those in CDKN2A, TP53,
              and SMAD4, accumulate in later stages, but KRAS is where the
              molecular story begins.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Key terms
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">PanIN (pancreatic intraepithelial neoplasia):</span>{" "}
                the most common type of pancreatic precursor lesion, graded
                from low-grade (PanIN-1) to high-grade (PanIN-3)
              </li>
              <li>
                <span className="font-medium text-stone-900">IPMN (intraductal papillary mucinous neoplasm):</span>{" "}
                a larger, cystic precursor lesion that can be detected on
                imaging and that carries a variable risk of progression to
                invasive cancer
              </li>
              <li>
                <span className="font-medium text-stone-900">Progression model:</span>{" "}
                the concept that cancer develops through a series of
                increasingly abnormal stages, each associated with additional
                genetic alterations
              </li>
              <li>
                <span className="font-medium text-stone-900">Initiating mutation:</span>{" "}
                a genetic change present at the earliest detectable stage of
                a precursor lesion, suggesting it plays a causal role in
                starting the disease process
              </li>
              <li>
                <span className="font-medium text-stone-900">Clonal evolution:</span>{" "}
                the process by which a single mutant cell gives rise to a
                population of descendants that acquire additional mutations
                over time
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why precursor lesions matter in understanding pancreatic cancer */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Why it matters
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Why precursor lesion biology matters in understanding pancreatic
            cancer
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It established KRAS as the earliest and most universal driver
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Before precursor lesion biology, KRAS was known to be mutated in
                pancreatic cancer, but its precise role in the disease&rsquo;s
                origin was less clear. Studies of PanIN lesions showed that KRAS
                mutations are present at the very earliest detectable stages of
                precancerous change — well before the tumor becomes invasive.
                This finding positioned KRAS not just as a feature of pancreatic
                cancer but as a likely initiating event, strengthening the
                rationale for targeting it therapeutically.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It provided a framework for how pancreatic cancer develops over
                time
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                The progression model — from normal tissue through PanIN-1,
                PanIN-2, PanIN-3, to invasive cancer — gave scientists a
                temporal framework for understanding how genetic damage
                accumulates. KRAS mutation comes first. Inactivation of tumor
                suppressors like CDKN2A follows. Loss of TP53 and SMAD4 occurs
                later, associated with higher-grade lesions and invasive
                disease. This sequence matters because it tells scientists which
                events initiate the cancer and which events accelerate it — a
                distinction relevant to both prevention and treatment.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It informs the search for early detection
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Pancreatic cancer is usually diagnosed late, when the disease
                has already spread beyond the pancreas. Precursor lesion biology
                suggests that there is a window — potentially years or decades
                — during which the disease exists as a precursor and might be
                detectable before it becomes lethal. Understanding the molecular
                and histological features of precursor lesions is essential to
                efforts to develop biomarkers, imaging strategies, or screening
                tests that could catch the disease earlier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How this field changed understanding of when pancreatic cancer begins */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Changing the timeline
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How precursor lesion biology changed when we think pancreatic
            cancer begins
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            The discovery and characterization of PanINs fundamentally altered
            the scientific view of pancreatic cancer as a disease that emerges
            suddenly. Instead, it revealed a slow, stepwise molecular process.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Before precursor lesion studies
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Pancreatic cancer was largely understood as a disease diagnosed
                at an advanced stage, with the molecular events leading to it
                poorly defined. The relationship between early tissue changes
                and invasive disease was hypothesized but not systematically
                characterized at the genetic level. There was no widely accepted
                model for how or when the disease begins at the molecular level.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                The progression model emerges
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Work by pathologists and molecular biologists — including
                research groups at Johns Hopkins and other institutions —
                established the PanIN grading system and mapped the genetic
                alterations associated with each stage. This created a
                progression model analogous to the adenoma-carcinoma sequence
                in colon cancer: a clear, evidence-based path from normal
                tissue to invasive disease, with defined molecular steps at
                each transition.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Implications for the present
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                This progression model is now foundational to how pancreatic
                cancer research is organized. It guides early-detection
                research, informs genetically engineered mouse models used in
                preclinical drug testing, and provides the biological context
                for why KRAS-directed therapy is considered relevant across the
                full spectrum of pancreatic cancer — because KRAS mutation is
                present from the very beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it mattered specifically to KRAS, daraxonrasib, and pancreatic cancer research */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Connection to KRAS, daraxonrasib, and pancreatic cancer research
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How precursor lesion biology strengthened the case for targeting
            KRAS
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                KRAS as the initiating event
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Precursor lesion studies showed that KRAS mutations are present
                in the majority of even the lowest-grade PanIN lesions. This
                finding — replicated across multiple research groups and patient
                cohorts — established KRAS as the most likely initiating
                mutation in the pancreatic cancer progression sequence. For
                drug development, this meant that KRAS is not just one of many
                targets in pancreatic cancer but is the mutation most deeply
                embedded in the disease&rsquo;s biology from its origin.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Mouse models built on the progression concept
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                The understanding of KRAS as an early driver led to the
                development of genetically engineered mouse models that express
                mutant KRAS in the pancreas — most notably the KPC model (which
                combines KRAS and TP53 mutations). These mice develop PanIN
                lesions that progress to invasive cancer in a way that closely
                resembles human disease. These models are now standard tools in
                preclinical testing of pancreatic cancer drugs, including
                KRAS-directed therapies like daraxonrasib.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                The near-universal prevalence of KRAS mutations in pancreatic
                cancer
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Precursor lesion biology contributed to the understanding that
                KRAS mutations — particularly at codon 12 — are present in
                approximately 90% or more of pancreatic ductal
                adenocarcinomas. This is one of the highest mutation frequencies
                for any oncogene in any cancer type. It means that a drug
                effective against mutant KRAS would be relevant to the vast
                majority of patients, not a molecular subgroup. This broad
                applicability is part of what makes KRAS such a high-priority
                target in pancreatic cancer research.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Connecting disease biology to therapeutic rationale
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                The lineage from precursor lesion biology to daraxonrasib is
                indirect but foundational. Precursor lesion studies established
                why KRAS matters in pancreatic cancer — not as a peripheral
                feature but as the molecular event at the root of the disease.
                This biological rationale is part of what justifies the
                clinical development of KRAS-directed therapies in a disease
                where patients have few effective options and the need for
                molecularly targeted approaches is acute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branch points in scientific thinking */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Branch points in scientific thinking
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How thinking branched within precursor lesion research
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            The study of pancreatic precursor lesions has not followed a single
            interpretive path. Several key questions remain actively debated,
            and the way researchers have approached them has influenced how the
            field understands pancreatic cancer.
          </p>

          <div className="mt-10 space-y-5">
            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Linear progression vs. branching evolution
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Does pancreatic cancer follow a single path, or multiple
                diverging ones?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                The early progression model — PanIN-1 to PanIN-2 to PanIN-3
                to invasive cancer — implied a linear sequence. More recent
                genomic studies suggest that the picture may be more complex:
                different regions of a single precursor lesion can evolve
                independently, and some invasive cancers may arise through
                paths that do not neatly follow the graded PanIN stages. This
                branching model of clonal evolution has implications for early
                detection, because it suggests that progression may not always
                pass through predictable intermediate stages.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                PanINs vs. IPMNs as the primary precursor
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Which type of precursor lesion is most clinically relevant?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                PanINs are microscopic and discovered primarily through
                pathological examination of tissue. IPMNs are larger cystic
                lesions that can be detected on imaging in living patients.
                Both carry KRAS mutations, but they differ in their clinical
                management implications. A major branch in the field concerns
                which type of precursor is most tractable for early detection
                and prevention strategies. IPMNs are clinically identifiable
                but progress to cancer at variable and difficult-to-predict
                rates. PanINs are more directly linked to the common form of
                pancreatic cancer but are usually invisible without surgery or
                biopsy.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Cell of origin
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Which pancreatic cell type gives rise to PanINs and cancer?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                A long-standing question in the field is whether PanINs arise
                from ductal cells, acinar cells that undergo transdifferentiation,
                or a specific progenitor population. Mouse model studies have
                provided evidence supporting multiple origins, and the answer
                may differ depending on context. This question is not purely
                academic — the cell of origin may influence how the tumor
                responds to therapies, including KRAS-directed ones, and
                which precursor stages are most amenable to interception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Failed, incomplete, or debated approaches */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Incomplete and debated approaches
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Efforts that fell short or remain unresolved — but advanced
            understanding
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Precursor lesion biology has generated important insights but has
            also encountered limitations. Several lines of investigation have
            produced ambiguous or partial results that continue to shape the
            field.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Early detection biomarkers remain elusive
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                The hope that precursor lesion biology would quickly lead to
                blood-based or imaging-based early detection tests for
                pancreatic cancer has not yet been fulfilled. KRAS mutations
                are detectable in circulating DNA in some settings, but the
                sensitivity and specificity needed for population-level
                screening remain insufficient. The biological insight — that
                there is a long precancerous phase — is sound, but translating
                it into a practical screening tool has proven extraordinarily
                difficult.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Chemoprevention strategies have not been validated
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                The existence of a progression sequence raises the theoretical
                possibility of chemoprevention — using drugs to prevent
                precursor lesions from advancing to invasive cancer. In
                practice, no chemoprevention strategy for pancreatic cancer
                has been clinically validated. The challenges include
                identifying who is at risk (most precursor lesions never
                progress), determining the right intervention point, and
                justifying the cost and side effects of treatment in people
                who may never develop cancer.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Grading systems have proven difficult to apply consistently
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                The PanIN grading system was a conceptual advance, but its
                application in practice has faced challenges. Pathologists
                sometimes disagree on the grade of a given lesion, particularly
                at the boundary between PanIN-1 and PanIN-2. The system has
                been revised to a simplified two-tier classification (low-grade
                and high-grade) in part to improve reproducibility. These
                grading debates reflect the inherent difficulty of imposing
                discrete categories on a continuous biological process.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                The timeline from precursor to cancer remains uncertain
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Computational modeling and autopsy studies suggest that the
                progression from an initiating KRAS mutation to invasive
                pancreatic cancer may take a decade or more. But these
                estimates are inferred, not directly observed in living patients,
                and the timeline almost certainly varies between individuals.
                The uncertainty about progression speed limits the ability to
                design interception strategies and makes it difficult to predict
                which precursor lesions will become dangerous.
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
              What the public usually does not hear about pancreatic precursor
              lesion biology
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Public awareness of pancreatic cancer focuses almost entirely on
              the disease after diagnosis — treatment options, survival
              statistics, and clinical trials. The decades-long biological
              process that precedes diagnosis is rarely discussed, even though
              it holds some of the most important clues for both prevention and
              treatment.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Pancreatic cancer has a long precancerous phase
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                The public perception of pancreatic cancer as a disease that
                strikes without warning is understandable given how late it is
                usually diagnosed. But biologically, the disease develops over
                many years through identifiable molecular stages. The gap
                between biological onset and clinical detection is not a
                reflection of how the disease works — it is a reflection of
                our current inability to detect it early enough.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                KRAS is not just one mutation among many
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                In public-facing cancer information, KRAS is often listed
                alongside other mutated genes as though they are equivalent
                features of the disease. Precursor lesion biology reveals that
                KRAS mutation is qualitatively different: it appears first, is
                present in nearly all cases, and is likely the event that
                initiates the entire disease process. This gives KRAS-directed
                therapy a biological logic that goes beyond simply targeting
                the most common mutation.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Most precursor lesions never become cancer
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Low-grade PanIN lesions are common in the general population,
                especially with age. The vast majority of them never progress
                to invasive cancer. This means that the presence of a KRAS
                mutation in a precursor lesion does not, by itself, predict
                cancer — additional mutations and microenvironmental changes
                are needed. Understanding what drives some lesions to progress
                while most remain indolent is one of the major open questions
                in the field.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                This research shapes how preclinical drug models are built
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                The genetically engineered mouse models used to test pancreatic
                cancer drugs — including models used in the preclinical
                development of KRAS-directed therapies — are designed based on
                precursor lesion biology. They are built to recapitulate the
                PanIN-to-cancer progression sequence, with KRAS mutation as the
                initiating event. Without precursor lesion biology, these models
                would not exist, and the preclinical evidence supporting drugs
                like daraxonrasib would be less robust.
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
                  Pancreatic precursor lesion biology is the disease-level
                  foundation in the scientific lineage behind daraxonrasib. It
                  established why KRAS is central to pancreatic cancer — not as
                  a coincidental mutation but as the molecular event at the root
                  of the disease. The case page traces the full discovery chain,
                  from oncogene discovery and signaling biology through disease
                  research, structural insight, chemical biology, medicinal
                  chemistry, and clinical translation.
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
              <Link href="/concept/chemical-biology" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Chemical biology</Link>
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
