import Link from "next/link";

export default function AngelmanRnaCasePage() {
  const conceptLinks = [
    { label: "RNA biology", href: "/concept/rna-biology" },
    { label: "Gene expression", href: "/concept/gene-expression" },
    { label: "Antisense oligonucleotides", href: "/concept/antisense-oligonucleotides" },
    { label: "Angelman syndrome", href: "/concept/angelman-syndrome" },
    { label: "UBE3A", href: "/concept/ube3a" },
    { label: "Rare genetic disease", href: "/concept/rare-genetic-disease" },
    { label: "CNS drug delivery", href: "/concept/cns-drug-delivery" },
    { label: "Rare disease trials", href: "/concept/rare-disease-trials" },
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
            RNA-targeted therapy for Angelman syndrome
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">
            How UBE3A biology and antisense oligonucleotides led to a Phase 3 rare-disease trial
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            This lineage starts with an investigational antisense oligonucleotide
            in a Phase 3 clinical trial for Angelman syndrome, then traces
            backward through the scientific lineage that made it possible:
            UBE3A biology, maternal imprinting, antisense transcript regulation,
            RNA-targeted chemistry, CNS delivery, and rare-disease trial design.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://clinicaltrials.gov/study/NCT06914609"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              View trial record (NCT06914609)
            </a>
            <Link
              href="/cases"
              className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900"
            >
              All lineages
            </Link>
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            This case page is in development. Content is based on public trial
            records and published research. Trial outcomes are not yet available.
          </div>
        </div>
      </section>

      {/* ── Trial anchor ── */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Trial anchor
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            REVEAL: Phase 3 study of ION582 in Angelman syndrome
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-stone-500">Trial name</p>
              <p className="mt-2 text-sm font-medium text-stone-900">REVEAL</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-stone-500">NCT ID</p>
              <p className="mt-2 text-sm font-medium text-stone-900">NCT06914609</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-stone-500">Phase</p>
              <p className="mt-2 text-sm font-medium text-stone-900">Phase 3</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-stone-500">Disease</p>
              <p className="mt-2 text-sm font-medium text-stone-900">Angelman syndrome</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-stone-500">Intervention</p>
              <p className="mt-2 text-sm font-medium text-stone-900">ION582 (obudanersen)</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-stone-500">Modality</p>
              <p className="mt-2 text-sm font-medium text-stone-900">Antisense oligonucleotide (ASO)</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-stone-500">Sponsor</p>
              <p className="mt-2 text-sm font-medium text-stone-900">Ionis Pharmaceuticals</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-stone-500">Route</p>
              <p className="mt-2 text-sm font-medium text-stone-900">Intrathecal injection</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-stone-500">Source</p>
              <p className="mt-2 text-sm font-medium text-stone-900">ClinicalTrials.gov</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Plain-language summary ── */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Plain-language summary
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            What this trial is testing
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Angelman syndrome is a rare genetic condition that causes severe
            developmental delays, movement and balance problems, seizures, and
            limited speech. It is caused by loss of function of the maternal
            copy of the UBE3A gene. In most neurons, only the maternal copy of
            UBE3A is active — the paternal copy is silenced by a long antisense
            RNA transcript.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            ION582 (obudanersen) is an investigational antisense oligonucleotide
            designed to reduce the expression of the UBE3A antisense transcript
            (UBE3A-ATS) in neurons. If the antisense transcript is reduced, the
            hypothesis is that the intact paternal copy of UBE3A can become
            active, partially restoring UBE3A protein production in the brain.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            The REVEAL trial is a Phase 3 study evaluating whether ION582
            improves developmental outcomes in children with Angelman syndrome
            caused by a deletion of the maternal 15q11-q13 region. The drug is
            administered by intrathecal injection (into the spinal fluid) to
            reach the central nervous system.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            This trial has not yet reported results. Whether the approach
            produces clinically meaningful benefit remains to be determined.
          </p>
        </div>
      </section>

      {/* ── Disease problem ── */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            The disease problem
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Angelman syndrome
          </h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              Angelman syndrome affects approximately 1 in 12,000 to 20,000
              people. It is a neurodevelopmental disorder characterized by severe
              intellectual disability, minimal or absent speech, motor
              impairment (including ataxia and tremor), seizures, and a
              characteristic behavioral profile including frequent smiling and
              easily provoked laughter.
            </p>
            <p>
              The condition is caused by loss of functional UBE3A expression in
              neurons. In most cases (~70%), this results from a de novo
              deletion of the maternal 15q11.2-q13 chromosomal region. Other
              genetic mechanisms include UBE3A point mutations, paternal
              uniparental disomy, and imprinting defects.
            </p>
            <p>
              UBE3A encodes an E3 ubiquitin ligase involved in protein
              degradation and synaptic function. In most tissues, both parental
              copies are expressed. In neurons, however, UBE3A is subject to
              genomic imprinting: only the maternal allele is expressed, while
              the paternal allele is silenced by the UBE3A antisense transcript
              (UBE3A-ATS). When the maternal copy is lost or non-functional,
              neurons have no source of UBE3A protein.
            </p>
            <p>
              There are currently no approved treatments that address the
              underlying molecular cause of Angelman syndrome. Existing
              management is supportive — controlling seizures, managing
              behavioral symptoms, and providing physical and speech therapy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Scientific lineage ── */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Scientific lineage
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            The chain of discovery behind this trial
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            The path from basic biology to this Phase 3 trial spans multiple
            fields and several decades of work.
          </p>

          <div className="mt-10 space-y-8 max-w-3xl">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="text-sm font-medium uppercase tracking-wider text-stone-500">1965–1987</p>
              <h3 className="mt-2 text-lg font-semibold text-stone-900">Clinical recognition and chromosomal mapping</h3>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                Harry Angelman described the syndrome in 1965. By the late
                1980s, cytogenetic studies identified deletions in chromosome
                15q11-q13 as the common genetic cause. The observation that only
                maternal deletions caused the syndrome introduced the concept of
                genomic imprinting in this region.
              </p>
            </div>

            <div className="border-l-2 border-stone-200 pl-6">
              <p className="text-sm font-medium uppercase tracking-wider text-stone-500">1997</p>
              <h3 className="mt-2 text-lg font-semibold text-stone-900">UBE3A identified as the causative gene</h3>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                Multiple groups demonstrated that UBE3A mutations were sufficient
                to cause Angelman syndrome, and that the gene was subject to
                brain-specific maternal-only expression (imprinting). This
                established UBE3A as the molecular target.
              </p>
            </div>

            <div className="border-l-2 border-stone-200 pl-6">
              <p className="text-sm font-medium uppercase tracking-wider text-stone-500">2005–2012</p>
              <h3 className="mt-2 text-lg font-semibold text-stone-900">Antisense transcript biology</h3>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                Research revealed that paternal UBE3A silencing in neurons is
                mediated by a long non-coding antisense transcript
                (UBE3A-ATS) originating from the SNURF-SNRPN locus. This
                created a therapeutic hypothesis: reducing UBE3A-ATS might
                &ldquo;unsilence&rdquo; the paternal UBE3A allele.
              </p>
            </div>

            <div className="border-l-2 border-stone-200 pl-6">
              <p className="text-sm font-medium uppercase tracking-wider text-stone-500">2012–2015</p>
              <h3 className="mt-2 text-lg font-semibold text-stone-900">Preclinical proof of concept</h3>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                Studies in mouse models of Angelman syndrome demonstrated that
                antisense oligonucleotides targeting UBE3A-ATS could partially
                restore paternal UBE3A expression in neurons and improve some
                disease-related phenotypes. These findings established the
                biological rationale for ASO-mediated unsilencing.
              </p>
            </div>

            <div className="border-l-2 border-stone-200 pl-6">
              <p className="text-sm font-medium uppercase tracking-wider text-stone-500">Enabling platform</p>
              <h3 className="mt-2 text-lg font-semibold text-stone-900">Antisense oligonucleotide technology</h3>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                The broader ASO platform — developed over decades at Ionis
                Pharmaceuticals and elsewhere — provided the chemistry (modified
                nucleotides for stability and potency), pharmacology (CNS
                distribution after intrathecal delivery), and manufacturing
                infrastructure needed to advance a clinical candidate. Prior
                successes including nusinersen (Spinraza) for spinal muscular
                atrophy demonstrated that intrathecal ASOs could reach CNS
                targets in humans.
              </p>
            </div>

            <div className="border-l-2 border-stone-200 pl-6">
              <p className="text-sm font-medium uppercase tracking-wider text-stone-500">2020–present</p>
              <h3 className="mt-2 text-lg font-semibold text-stone-900">Clinical development</h3>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                ION582 (obudanersen) entered clinical testing. Earlier-phase
                studies assessed safety and tolerability in children with
                Angelman syndrome. Based on those findings, the REVEAL Phase 3
                trial (NCT06914609) was initiated to evaluate efficacy in a
                larger, controlled cohort.
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
                <li>Angelman syndrome is caused by loss of neuronal UBE3A expression</li>
                <li>The paternal UBE3A allele is silenced in neurons by UBE3A-ATS</li>
                <li>ASOs targeting UBE3A-ATS can restore paternal UBE3A expression in animal models</li>
                <li>Intrathecal ASO delivery to the CNS is technically feasible (demonstrated with nusinersen)</li>
                <li>ION582 has undergone earlier-phase clinical evaluation</li>
                <li>A Phase 3 trial (REVEAL) is active</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-700">Not yet known</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-700">
                <li>Whether ION582 produces clinically meaningful improvement in developmental outcomes</li>
                <li>Whether restored UBE3A expression is sufficient to reverse established neurodevelopmental deficits</li>
                <li>The optimal timing of intervention (age at treatment initiation)</li>
                <li>Long-term safety profile of chronic intrathecal ASO administration in children</li>
                <li>Whether benefit varies by genotype (deletion vs. other mechanisms)</li>
                <li>Whether partial UBE3A restoration translates to functional improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TrialLineage interpretation ── */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            TrialLineage interpretation
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            What this story shows
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-8 text-stone-700">
            <p className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-600 italic">
              The following is editorial interpretation by TrialLineage, not a
              statement of clinical fact.
            </p>
            <p>
              This case illustrates how understanding a gene-regulation mechanism
              can lead to a therapeutic hypothesis in a rare genetic disease. The
              logic is specific: the paternal UBE3A allele is intact but
              silenced; the silencing mechanism is a readable antisense
              transcript; ASO technology can target that transcript; therefore
              ASO-mediated unsilencing is a rationally designed intervention.
            </p>
            <p>
              The lineage also demonstrates the role of platform technology:
              ION582 exists because decades of prior work on antisense chemistry,
              CNS delivery, and manufacturing created a mature delivery
              infrastructure. The success of nusinersen in spinal muscular
              atrophy validated the intrathecal ASO approach and de-risked the
              delivery route for other CNS conditions.
            </p>
            <p>
              Whether this rational biological hypothesis translates into
              clinical benefit for patients with Angelman syndrome is the
              question the REVEAL trial is designed to answer.
            </p>
          </div>
        </div>
      </section>

      {/* ── Broader RNA medicine context ── */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Platform context
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            RNA medicine as a broader platform
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-8 text-stone-700">
            <p>
              ION582 / obudanersen is one of many RNA-targeted therapies in
              clinical development. The broader RNA medicine platform includes
              antisense oligonucleotides, small interfering RNAs (siRNAs), exon
              skipping approaches, and splicing modulators — each addressing
              different genetic mechanisms across different diseases.
            </p>
            <p>
              TrialLineage treats RNA medicine as a platform lineage, not a
              single case. This page focuses specifically on the Angelman
              syndrome trial. Other RNA-based rare-disease trials may become
              separate TrialLineage lineages as the platform expands.
            </p>
          </div>
        </div>
      </section>

      {/* ── Connected concepts ── */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Related concept pages
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Connected scientific fields
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            The following concept pages explain individual scientific fields
            that appear in the lineage behind this trial.
          </p>

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
            ClinicalTrials.gov — NCT06914609: REVEAL: A Phase 3 Study of ION582 in Angelman Syndrome.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">
            The scientific lineage on this page draws on published research in
            human genetics, molecular biology, and clinical neuroscience.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-wrap gap-6 text-xs text-stone-500">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <Link href="/cases" className="hover:text-stone-900">Lineages</Link>
            <Link href="/concepts" className="hover:text-stone-900">Concepts</Link>
            <Link href="/about" className="hover:text-stone-900">About</Link>
            <Link href="/support" className="hover:text-stone-900">Support</Link>
            <Link href="/disclaimer" className="hover:text-stone-900">Disclaimer</Link>
          </div>
          <p className="mt-4 text-xs text-stone-400">
            TrialLineage is a public science platform. Not medical advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
