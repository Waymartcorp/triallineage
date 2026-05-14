export default function DaraxonrasibCasePage() {
  const lineageSteps = [
    {
      era: "1980s onward",
      title: "Oncogene discovery",
      description:
        "Researchers learned that some cancers are driven by altered genes that push cells to grow abnormally. This helped establish KRAS as part of the modern molecular picture of cancer.",
    },
    {
      era: "Basic cell biology era",
      title: "Protein signaling biology",
      description:
        "Scientists mapped how cells receive and relay growth signals. KRAS emerged as a key signaling switch, helping explain how a mutation could keep growth pathways turned on.",
    },
    {
      era: "Pancreatic cancer research",
      title: "Pancreatic precursor lesion biology",
      description:
        "Work on early pancreatic lesions showed that KRAS is not just present in many pancreatic cancers, but often part of the disease process from the beginning.",
    },
    {
      era: "Long undruggable period",
      title: "Chemical biology and structural insight",
      description:
        "Researchers spent years learning why KRAS was difficult to target. Structural and chemical studies gradually revealed how the protein behaves and where a drug might eventually bind.",
    },
    {
      era: "Translational drug-discovery period",
      title: "Medicinal chemistry",
      description:
        "Chemists refined compounds that could better engage RAS-related targets, turning biological insight into actual therapeutic candidates.",
    },
    {
      era: "Clinical development",
      title: "Translational oncology and trial design",
      description:
        "The work moved from lab evidence into human studies, where dosing, safety, efficacy signals, and patient selection became central.",
    },
  ];

  const conceptLinks = [
    "Oncogene discovery",
    "Protein signaling biology",
    "Pancreatic precursor lesion biology",
    "Chemical biology",
    "Medicinal chemistry",
    "Structural biology",
    "Translational oncology",
    "Clinical trial design",
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
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
            scientific lineage that made it possible: oncogene discovery,
            signaling biology, pancreatic disease research, chemical biology,
            medicinal chemistry, translational oncology, and human trial logic.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#summary"
              className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Summary view
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

      <section id="summary" className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Summary view
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Why this case matters
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Daraxonrasib is important not just because it represents a new
              therapeutic effort in pancreatic cancer, but because it stands on
              decades of inquiry into how cancer genes work, how KRAS signals,
              why pancreatic tumors depend so heavily on KRAS-related biology,
              and how chemistry gradually found ways to intervene.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              In public language, this is not just a story about one drug. It
              is a story about how many layers of science had to accumulate
              before a treatment strategy could become plausible in humans.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              At a glance
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">Disease area:</span>{" "}
                pancreatic cancer
              </li>
              <li>
                <span className="font-medium text-stone-900">Biological focus:</span>{" "}
                KRAS / RAS signaling
              </li>
              <li>
                <span className="font-medium text-stone-900">Why it matters:</span>{" "}
                connects a difficult cancer problem to a deep lineage of
                molecular and translational science
              </li>
              <li>
                <span className="font-medium text-stone-900">Best use of this page:</span>{" "}
                understanding how a visible clinical development grows out of
                multiple earlier fields
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="deep-dive" className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Deep-dive view
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            The longer scientific lineage
          </h2>

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
                terms, it acts like part of the cell’s growth-control wiring.
                When mutated, that wiring can remain abnormally active. That
                helped explain why KRAS is not just associated with cancer, but
                functionally important to it.
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
              <h3 className="text-xl font-semibold">4. The “undruggable” era still produced useful knowledge</h3>
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

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Reverse-lineage timeline
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Key layers that led here
          </h2>

          <div className="mt-10 space-y-5">
            {lineageSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                  {step.era}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-8 text-stone-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-10">
          <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Why this mattered
            </p>
            <p className="mt-4 leading-8 text-stone-700">
              This case shows how human disease breakthroughs often depend on
              many layers of scientific work that do not look directly
              therapeutic at the time they are performed. The public usually
              sees the late-stage milestone. TrialLineage is designed to make
              the earlier layers visible.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Failed or indirect paths still mattered
            </p>
            <p className="mt-4 leading-8 text-stone-700">
              Not every line of inquiry produced a successful therapy. But many
              of those routes still clarified the biology, exposed weaknesses in
              old assumptions, and improved the field’s ability to design better
              strategies later.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Related concept pages
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Offshoot explanations this case connects to
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {conceptLinks.map((concept) => (
              <div
                key={concept}
                className="rounded-[1.25rem] border border-stone-200 bg-white px-5 py-4 text-sm font-medium text-stone-800 shadow-sm"
              >
                {concept}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Status
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-stone-700">
              This is the first TrialLineage case page prototype. It establishes
              the public format: summary, deeper explanation, lineage layers,
              connected concepts, and the idea that scientific advances in human
              disease are built from interrelated histories rather than isolated
              moments.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}