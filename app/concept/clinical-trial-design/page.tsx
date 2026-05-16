import Link from "next/link";

export default function ClinicalTrialDesignPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            TrialLineage Concept
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Clinical trial design
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            A clinical trial is not just a final test of a drug. It is a
            structured scientific investigation with its own history of ideas,
            failures, and design choices that shape what we learn and how fast we
            learn it. This page explains what clinical trial design actually
            involves, why it is part of the discovery process rather than merely
            its conclusion, and how the choices made in trial design affect
            whether a drug like daraxonrasib can demonstrate its value in
            pancreatic cancer.
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
              What is clinical trial design?
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Clinical trial design is the set of decisions that determine how a
              drug is tested in humans. It includes who participates, what dose
              they receive, what the trial measures, how long it runs, what
              counts as success, and what the comparison group looks like. These
              are not administrative details — they are scientific choices that
              determine whether a trial can answer the question it was built to
              ask.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              A poorly designed trial can make an effective drug look useless, or
              an ineffective drug look promising. A well-designed trial can
              produce clear evidence even in a difficult disease with limited
              treatment options. The design is what stands between a biological
              hypothesis and a credible human result.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Core vocabulary
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">Endpoint:</span>{" "}
                the specific outcome a trial is designed to measure, such as
                tumor shrinkage, survival time, or progression-free interval
              </li>
              <li>
                <span className="font-medium text-stone-900">Control arm:</span>{" "}
                the group of patients who receive the standard treatment or
                placebo, providing a baseline for comparison
              </li>
              <li>
                <span className="font-medium text-stone-900">Randomization:</span>{" "}
                the process of assigning patients to treatment or control groups
                by chance, reducing bias
              </li>
              <li>
                <span className="font-medium text-stone-900">Biomarker selection:</span>{" "}
                enrolling only patients whose tumors carry a specific molecular
                feature, such as a KRAS mutation
              </li>
              <li>
                <span className="font-medium text-stone-900">Statistical power:</span>{" "}
                whether the trial enrolls enough patients to reliably detect a
                real difference between treatment and control
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What phase 1, 2, and 3 actually mean */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            The phases
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            What phase 1, phase 2, and phase 3 actually mean
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            The phase system is widely referenced in news coverage but rarely
            explained in a way that captures what each phase is actually designed
            to learn. These are not just sequential hurdles — each phase asks a
            fundamentally different scientific question.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                Phase 1: Can this drug be given safely to humans?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                A phase 1 trial is usually the first time a drug is given to
                people. The primary question is not whether the drug works, but
                whether it can be tolerated at a dose that might be effective.
                These trials typically enroll small numbers of patients, often
                with advanced disease and limited remaining options. Researchers
                start at a low dose and escalate carefully, watching for
                toxicity. A phase 1 trial may also begin to collect early signals
                about whether the drug is reaching its target and having any
                biological effect, but its core purpose is to establish a safe
                and tolerable dose range for further study.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                Phase 2: Is there a signal that this drug has meaningful
                activity?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Phase 2 trials test whether the drug shows signs of working in
                patients with a specific disease, at the dose identified in
                phase 1. The question shifts from safety to activity: does the
                drug shrink tumors, slow progression, or improve some
                measurable outcome? These trials are larger than phase 1 but
                still relatively small, and they may or may not include a
                control group. A positive phase 2 result does not prove the
                drug works — it provides enough evidence to justify the much
                larger and more expensive phase 3 trial.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                Phase 3: Does this drug actually improve outcomes compared to
                existing care?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Phase 3 is the definitive test. It compares the new drug against
                the current standard of care in a large, randomized trial
                designed to produce statistically reliable results. The question
                is no longer whether the drug does something biologically — it is
                whether it improves patient outcomes enough to justify changing
                how the disease is treated. Phase 3 trials are what regulatory
                agencies typically require before approving a drug for general
                use, and they are designed to minimize the chance that the result
                is due to bias, chance, or patient selection rather than the
                drug itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why trial design is part of the discovery process */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Part of discovery
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Why trial design is part of the discovery process, not just a final
            test
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            The public usually encounters clinical trials as the last step
            before a drug reaches patients. In reality, trial design is an
            active area of scientific reasoning where decisions can determine
            whether decades of prior research produce a clear answer or an
            ambiguous one.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Trials generate new biological knowledge
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Clinical trials do not only test whether a drug works — they
                reveal new information about the disease. A trial might show that
                a drug works in patients with one mutation but not another, or
                that a tumor responds initially but develops resistance through a
                specific mechanism. These findings feed back into basic science
                and inform the next generation of research. In many cases, a
                trial teaches the field more from its failures and unexpected
                results than from its intended endpoint.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Design choices encode scientific hypotheses
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Every trial design reflects a set of assumptions about how the
                drug works, which patients will benefit, and what kind of
                evidence will be convincing. Choosing to enroll only
                KRAS-mutant patients, for example, is a hypothesis that the
                drug&rsquo;s mechanism is specific to that mutation. Choosing
                progression-free survival as an endpoint rather than overall
                survival reflects a judgment about what the drug is likely to
                affect and how quickly. These are scientific decisions, not just
                logistical ones.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
            <p className="leading-8 text-stone-700">
              Trial design is where the accumulated knowledge from oncogene
              discovery, signaling biology, disease-specific research, and
              medicinal chemistry converges into a testable plan. It is the
              final expression of decades of scientific thinking — and getting it
              wrong can waste years and obscure a drug&rsquo;s true potential.
            </p>
          </div>
        </div>
      </section>

      {/* How scientific thinking branches inside trial design */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Branch points in scientific thinking
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How trial design thinking has branched over time
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Trial design is not static. The field has debated and revised its
            core approaches repeatedly, and several of these branch points
            directly affect how targeted therapies like daraxonrasib are
            evaluated.
          </p>

          <div className="mt-10 space-y-5">
            <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                All-comers vs. biomarker-selected enrollment
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Should trials enroll broadly or select for molecular features?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Historically, cancer trials enrolled patients based primarily on
                tumor location — all pancreatic cancer patients, for example.
                But as molecular understanding deepened, a branch emerged:
                biomarker-selected trials that enroll only patients whose tumors
                carry a specific alteration. This approach increases the chance
                of detecting a real signal in a smaller trial, but it also
                narrows the eligible population and risks missing patients who
                might have benefited. The tension between broad and selected
                enrollment is one of the defining design debates in modern
                oncology.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Survival vs. surrogate endpoints
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                What should a trial measure to know if a drug works?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                The most convincing endpoint is overall survival — whether
                patients live longer. But in aggressive cancers like pancreatic
                cancer, overall survival trials require large numbers of patients
                and long follow-up. Surrogate endpoints like progression-free
                survival or tumor response rate can provide faster answers,
                but they do not always predict whether patients will ultimately
                live longer. This branch point in trial thinking affects the
                speed, cost, and interpretability of every oncology trial.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Fixed design vs. adaptive design
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Should a trial plan be locked in advance or adjust as data
                arrives?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Traditional trials lock their design before enrollment begins
                and do not change course until the trial is complete. Adaptive
                trials allow pre-planned modifications based on interim data —
                such as dropping an ineffective dose, expanding a promising
                subgroup, or adjusting the sample size. This branch represents a
                fundamental shift in thinking: from trials as rigid experiments
                to trials as structured learning systems. Adaptive approaches
                are increasingly used in early-phase oncology, though they
                introduce their own statistical and regulatory complexities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why trial design mattered to daraxonrasib and pancreatic cancer */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Connection to daraxonrasib and pancreatic cancer
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Why trial design choices matter for daraxonrasib
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Patient selection reflects decades of biology
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Daraxonrasib trials enroll patients based on the presence of
                specific KRAS mutations. That selection criterion is not
                arbitrary — it is the culmination of decades of oncogene
                discovery, signaling biology, and pancreatic cancer research that
                established KRAS as a central driver. The trial design encodes
                the scientific lineage. Without that lineage, there would be no
                rational basis for selecting these patients.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Pancreatic cancer creates specific design pressures
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Pancreatic cancer is aggressive, often diagnosed late, and has
                limited effective treatments. These realities shape every
                aspect of trial design: the comparison arm may be a weak
                standard of care, follow-up windows are compressed, and patient
                enrollment is difficult because many patients deteriorate
                quickly. Designing a trial that can produce clear evidence under
                these constraints is a scientific challenge in itself — not just
                a procedural exercise.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
            <p className="leading-8 text-stone-700">
              The daraxonrasib trials represent a point where basic science,
              translational research, and clinical reasoning all converge. The
              trial design is not separate from the science — it is the
              instrument through which the science is tested in human patients.
              Every design choice reflects a judgment informed by the earlier
              layers of the discovery chain.
            </p>
          </div>
        </div>
      </section>

      {/* Failed, inconclusive, or imperfect trial approaches */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Imperfect and instructive trials
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Trial approaches that failed or fell short — but still advanced the
            field
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            The history of clinical trial design in oncology includes many
            examples of trials that did not succeed on their own terms but
            still changed how the field thinks about testing drugs.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Unselected trials that obscured real signals
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Several early targeted-therapy trials enrolled all patients with
                a particular cancer type, regardless of molecular status. In some
                cases, a drug that genuinely benefited a molecular subgroup
                appeared to fail because its effect was diluted by patients
                whose tumors lacked the relevant target. These experiences
                demonstrated that molecular selection was not just a refinement
                but a necessity for evaluating mechanism-driven drugs.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Trials with wrong endpoints for the drug&rsquo;s actual effect
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Some trials measured tumor shrinkage as their primary endpoint,
                but the drug&rsquo;s mechanism of action was better suited to
                stabilizing disease than shrinking it. A drug that keeps a tumor
                from growing can be genuinely effective but will appear to fail
                if the trial only counts shrinkage. These mismatches taught the
                field to align endpoints more carefully with the expected
                biology of the drug.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Underpowered trials in rare subtypes
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Trials in diseases with small eligible populations sometimes
                enrolled too few patients to detect a real difference between
                treatment and control. The result was statistical ambiguity: the
                drug might work, but the trial could not prove it. These
                experiences drove the development of adaptive trial designs,
                basket trials, and other approaches intended to extract more
                information from smaller patient groups.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Combination trials with unclear contribution of each agent
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                When multiple drugs are tested together, it can be difficult to
                determine which drug is driving the benefit. Some combination
                trials in pancreatic cancer produced positive results but left
                open the question of whether both agents were necessary, or
                whether the effect came primarily from one. This ambiguity has
                pushed the field toward more rigorous factorial designs and
                clearer mechanistic justifications for combinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the public usually misunderstands */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              What often gets missed
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              What the public usually misunderstands about clinical trials
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Clinical trials are among the most publicly visible parts of drug
              development, but they are also among the most misunderstood.
              Several common assumptions about how trials work are either
              incomplete or wrong.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                A trial is not just a yes-or-no test
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Most people think of a clinical trial as a simple question: does
                the drug work or not? In practice, a trial tests a specific
                drug, at a specific dose, in a specific patient population,
                measured by a specific endpoint, compared to a specific
                alternative. Change any one of those variables and the answer
                might be different. A negative trial result does not necessarily
                mean the drug is useless — it may mean the trial was not
                designed to detect what the drug actually does.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                &ldquo;Phase 1&rdquo; does not mean untested and dangerous
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                The phrase &ldquo;phase 1 trial&rdquo; often sounds alarming to
                the public, as though patients are being exposed to a completely
                unknown substance. In reality, a drug entering phase 1 has
                already been through extensive laboratory testing, animal
                studies, and toxicology review. Phase 1 is the first human
                exposure, but it is carefully dosed and intensively monitored. It
                is a deliberate, structured step — not a gamble.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Placebo controls are rare in cancer trials
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Many people assume that half the patients in a cancer trial
                receive a sugar pill. In practice, placebo-only control arms are
                unusual in oncology. Most cancer trials compare the new drug
                against the current standard of care, or add the new drug on top
                of the standard treatment. When placebo is used, it is typically
                in the context of &ldquo;standard treatment plus drug&rdquo;
                versus &ldquo;standard treatment plus placebo,&rdquo; so all
                patients receive active therapy.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Trial participation is not a last resort
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                A common public perception is that clinical trials are only for
                patients who have exhausted all other options. While some trials
                do enroll patients with advanced or treatment-resistant disease,
                others are designed for earlier stages — including first-line
                treatment. In some cases, a trial offers access to a therapy
                that is not yet available through standard care and may
                represent the most scientifically informed treatment option
                available.
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
                  Clinical trial design is the final layer in the scientific
                  lineage behind daraxonrasib — the point where decades of
                  oncogene discovery, signaling biology, pancreatic disease
                  research, chemical biology, and medicinal chemistry converge
                  into a testable plan in human patients. The case page traces
                  the full discovery chain, showing how each layer of science
                  informs the phase 1&ndash;3 trials now underway.
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
              <Link href="/concept/medicinal-chemistry" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Medicinal chemistry</Link>
              <Link href="/concept/translational-oncology" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Translational oncology</Link>
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
