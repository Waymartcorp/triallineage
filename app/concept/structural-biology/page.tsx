import Link from "next/link";

export default function StructuralBiologyPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            TrialLineage Concept
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Structural biology
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Before scientists can design a drug to fit a protein, they need to
            see the protein. Structural biology is the field that makes that
            possible — determining the three-dimensional shapes of biological
            molecules at atomic or near-atomic resolution. This page explains
            what structural biology is, why it matters to drug discovery, and
            how it became essential to the development of KRAS-directed
            therapies now entering clinical trials in pancreatic cancer.
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
              What is structural biology?
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Structural biology is the science of figuring out the physical
              shape of proteins, nucleic acids, and other large molecules
              inside living systems. Proteins are not flat. They fold into
              complex three-dimensional forms — with grooves, pockets, hinges,
              and surfaces — and those shapes determine what the protein can
              do. A protein&rsquo;s function depends on its structure: which
              molecules it can bind, how it changes shape when activated, and
              where a drug might be able to interfere.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              Structural biologists use specialized techniques to produce
              detailed maps of these shapes, typically at resolutions measured
              in angstroms (tenths of a nanometer). These maps are not
              photographs — they are computational reconstructions built from
              physical measurements. The result is a model that shows where
              every atom in a protein sits, how the protein moves, and what
              openings exist on its surface. For drug discovery, this
              information is foundational: it turns a protein from an abstract
              target into a physical object that chemists can design molecules
              to fit.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Key methods
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">X-ray crystallography:</span>{" "}
                the protein is crystallized and X-rays are passed through it;
                the diffraction pattern reveals its atomic structure — for
                decades the dominant method in the field
              </li>
              <li>
                <span className="font-medium text-stone-900">Cryo-electron microscopy (cryo-EM):</span>{" "}
                the protein is flash-frozen and imaged by an electron beam;
                computational averaging of many images produces a high-resolution
                structure without needing crystals
              </li>
              <li>
                <span className="font-medium text-stone-900">NMR spectroscopy:</span>{" "}
                uses magnetic fields to study the structure and dynamics of
                proteins in solution, particularly useful for small or flexible
                proteins
              </li>
              <li>
                <span className="font-medium text-stone-900">Computational structure prediction:</span>{" "}
                algorithms such as AlphaFold predict protein structures from
                amino acid sequences, increasingly complementing experimental
                methods
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why structural biology matters in biomedical discovery */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Why it matters
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Why structural biology matters in biomedical discovery
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It turns targets from names into objects
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                When geneticists identify a gene linked to disease, and cell
                biologists show that its protein product drives a pathological
                process, the target is still an abstraction for drug designers.
                Structural biology provides the physical map: where the
                protein&rsquo;s active sites are, how it interacts with other
                molecules, and what surfaces might be exploitable by a drug.
                Without this information, medicinal chemistry is largely
                guesswork.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It explains why some targets are hard to drug
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Structural data often reveals why a target resists chemical
                intervention. A protein with a smooth, featureless surface
                offers no pocket for a small molecule to bind. A protein that
                binds its natural partner with extreme affinity leaves little
                room for a competitor. These are structural problems, visible
                only when the protein&rsquo;s shape is known — and they define
                the strategic challenges that medicinal chemistry must solve.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It enables rational drug design
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                When chemists can see the exact shape of a binding pocket on
                a protein, they can design molecules to fit it — adjusting the
                molecule&rsquo;s shape, charge, and flexibility to complement
                the pocket&rsquo;s geometry. This is called structure-based or
                rational drug design, and it is substantially more efficient
                than testing compounds at random. Many of the most important
                drugs developed over the past three decades owe their existence
                to structural data that guided their design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How structural biology helps scientists understand what proteins are doing */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Understanding function through form
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How structural biology reveals what proteins are actually doing
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Proteins are not static. They switch between conformations, open
            and close binding sites, and change shape in response to signals.
            Structural biology captures these states and helps scientists
            understand how a protein&rsquo;s behavior connects to disease.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Active vs. inactive states
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Many disease-driving proteins, including KRAS, cycle between
                active and inactive conformations. Structural biology can
                resolve both states, revealing differences in surface shape and
                pocket availability. Understanding which state a drug needs to
                engage — and when that state is accessible — is critical to
                designing effective inhibitors.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Mutation effects
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                When a gene mutation changes a single amino acid in a protein,
                the structural consequences can be subtle or dramatic.
                Structural biology shows exactly how a mutation alters the
                protein&rsquo;s shape, its interactions with other molecules,
                and whether it creates or destroys potential drug-binding sites.
                For KRAS, different mutations (G12C, G12D, G12V) produce
                slightly different structural landscapes, which is why drugs
                designed for one variant may not work on others.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Protein-protein interactions
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Proteins rarely act alone. KRAS, for example, transmits signals
                by physically binding to downstream effectors like RAF. Structural
                biology can map the interface where two proteins meet, showing
                the contact surfaces, buried residues, and conformational
                changes that occur upon binding. This information is essential
                for understanding signaling and for evaluating whether a
                protein-protein interface could be disrupted by a drug.
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
            Why structural biology was decisive for KRAS drug development
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                The switch-II pocket changed everything
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                For decades, KRAS was considered structurally undruggable. Its
                surface appeared smooth, with no deep pocket suitable for a
                small molecule. The pivotal advance came when structural studies
                — including work from the Shokat lab at UCSF — revealed a
                previously unrecognized pocket near the switch-II region of
                KRAS G12C. This pocket is not visible in the protein&rsquo;s
                active state; it only opens in the inactive, GDP-bound
                conformation. Without structural biology, this vulnerability
                would not have been found.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Structure guided the design of covalent inhibitors
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Once the switch-II pocket was identified, medicinal chemists
                used structural data to design molecules that could fit into it
                and form a covalent bond with a specific cysteine residue
                (Cys12 in KRAS G12C). The shape, orientation, and chemical
                environment of the pocket — all determined by structural
                biology — dictated what the drug molecule had to look like. Each
                round of chemical optimization was guided by new co-crystal
                structures showing how the drug and protein interact at atomic
                resolution.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Extending to other KRAS mutations requires new structural work
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                The covalent strategy that works for KRAS G12C depends on the
                presence of a reactive cysteine at position 12 — a feature
                unique to that mutation. KRAS G12D and G12V, which are more
                prevalent in pancreatic cancer, have different amino acids at
                that position and different local geometries. Structural biology
                is now being used to identify alternative binding sites and
                inhibitor strategies for these variants. The structural
                landscape of each mutant form is distinct, and new drug designs
                must be guided by new structural data.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Daraxonrasib&rsquo;s binding mode is a structural story
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                The specific way daraxonrasib engages its target — which pocket
                it occupies, how it orients within that pocket, what contacts it
                makes with surrounding residues — is defined by structural
                biology. Co-crystal structures of the drug bound to its target
                are what allow scientists to understand why it is selective for
                one mutant form, how resistance might develop, and how future
                compounds could be improved. Structure is not merely background
                context for daraxonrasib; it is the basis of the drug&rsquo;s
                design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branch points in scientific thinking within structural biology */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Branch points in scientific thinking
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How structural biology thinking branched and evolved
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            The field has not followed a single methodological path. Several
            branching decisions in how structural biology is practiced have
            directly influenced the KRAS drug discovery story.
          </p>

          <div className="mt-10 space-y-5">
            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Crystallography vs. cryo-EM
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Grow crystals, or freeze individual molecules?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                X-ray crystallography dominated structural biology for decades
                and produced the foundational structures of KRAS. But
                crystallography requires the protein to form ordered crystals —
                a process that can be difficult, slow, or impossible for some
                conformational states. Cryo-EM, which advanced dramatically
                after the mid-2010s, can determine structures without crystals,
                opening up access to flexible proteins, transient conformations,
                and large complexes that crystallography struggles with. Both
                methods continue to be used, often complementarily.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Static snapshots vs. conformational dynamics
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                One structure, or many?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Early structural biology tended to treat a protein&rsquo;s
                structure as a single, fixed form. But proteins are dynamic:
                they breathe, flex, and shift between conformational states. A
                growing branch of the field focuses on capturing multiple
                conformations and understanding how the protein moves. For KRAS,
                this shift was important — the switch-II pocket is only present
                in certain conformational states, and a static view of the
                protein would not have revealed it. Techniques like
                time-resolved crystallography, molecular dynamics simulations,
                and cryo-EM classification of multiple states are now standard
                tools.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Experimental structures vs. computational prediction
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Measure in the lab, or predict from sequence?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                The emergence of highly accurate computational structure
                prediction — most prominently through AlphaFold — has created a
                new branch in how structural information is obtained. For
                well-studied proteins like KRAS, experimental structures remain
                the gold standard for drug design because they capture the
                fine detail of drug-binding pockets and conformational states.
                But computational methods are increasingly useful for related
                proteins, for generating hypotheses about mutant-specific
                structures, and for targets where experimental structures are
                not yet available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Failed, incomplete, or limited structural approaches */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Limitations and incomplete approaches
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Structural approaches that fell short — but still advanced
            understanding
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Structural biology has not always delivered the answers that drug
            discovery needed, when it needed them. Several limitations and
            partial successes shaped the KRAS story.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Early KRAS structures showed no druggable pocket
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                The first crystal structures of KRAS, solved in the 1980s and
                1990s, showed a relatively small, smooth protein with a tightly
                bound nucleotide and no obvious pocket for a drug. These
                structures were scientifically valuable — they revealed the
                protein&rsquo;s fold, GTPase mechanism, and interaction
                surfaces — but they reinforced the view that KRAS was
                structurally intractable. It took decades and new approaches to
                reveal the hidden pockets that eventually enabled drug design.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Crystal packing artifacts obscured flexible regions
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                In crystallography, the process of crystallization can lock a
                protein into one conformation and obscure regions that are
                flexible in solution. For KRAS, some of the most
                therapeutically relevant features — particularly the switch-II
                loop — are intrinsically flexible and can be poorly resolved or
                constrained in crystal structures. This meant that the binding
                pocket exploited by covalent inhibitors was not apparent in
                early crystal forms, even though it exists in the protein&rsquo;s
                natural conformational landscape.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Structures of GTP-bound (active) KRAS were less useful for
                drug design
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Much early structural work focused on the active, GTP-bound
                form of KRAS — the state that drives signaling. But the
                druggable switch-II pocket is accessible only in the inactive,
                GDP-bound state. This mismatch between the biologically
                interesting state and the chemically exploitable state delayed
                progress. The field eventually recognized that solving
                structures of multiple nucleotide-bound and mutant-specific
                states was necessary to find druggable opportunities.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Resolution limitations in early cryo-EM
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Before the hardware and software advances of the mid-2010s
                (sometimes called the &ldquo;resolution revolution&rdquo;),
                cryo-EM could not reliably resolve proteins as small as KRAS at
                the atomic detail needed for drug design. This meant that
                crystallography remained the only viable route for KRAS
                structures for many years. As cryo-EM resolution has improved,
                it has become increasingly applicable to small GTPases and
                their complexes, expanding the structural toolkit for
                KRAS-related programs.
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
              What the public usually does not hear about structural biology
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Structural biology is rarely mentioned in public accounts of drug
              discovery. When a new drug is announced, the structural work that
              made it possible is almost never explained — even though it is
              often the single most important enabling step.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Structures are not photographs
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                The colorful images of proteins that appear in scientific papers
                and news stories are not photographs. They are computational
                models built from diffraction patterns, electron micrographs,
                or NMR spectra. Producing them requires months or years of
                sample preparation, data collection, and computational
                refinement. The impression of simplicity that these images
                convey conceals enormous technical effort.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Solving a structure does not mean the problem is solved
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Knowing a protein&rsquo;s shape is necessary but not sufficient
                for designing a drug against it. The structure shows where a
                pocket is, but not whether a drug-like molecule can be built to
                fill it. Many proteins have been structurally characterized in
                great detail and remain undrugged — not because the structure
                is unknown, but because the chemistry to exploit it has not been
                achieved.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Drug design is an ongoing conversation with structure
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                In modern drug development, structural biology is not a
                one-time input. Medicinal chemists and structural biologists
                work in iterative cycles: chemists design a compound, structural
                biologists solve the structure of the compound bound to the
                protein, and the team uses the result to guide the next round
                of chemical design. This cycle — sometimes repeated dozens of
                times — is how drugs like KRAS inhibitors are optimized.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                The field has changed rapidly in the past decade
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Advances in cryo-EM hardware, computational structure
                prediction, and high-throughput crystallography have
                transformed what structural biology can deliver. Structures
                that once took years can now sometimes be obtained in weeks.
                This acceleration has direct implications for drug discovery —
                it means that new targets can be structurally characterized
                faster, and that drug design cycles can move more quickly from
                hypothesis to atomic-resolution feedback.
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
                  Structural biology sits at a critical junction in the
                  scientific lineage behind daraxonrasib. It provided the
                  three-dimensional insight that turned KRAS from a
                  biologically validated but chemically intractable target into
                  one that medicinal chemists could design drugs against. The
                  case page traces the full discovery chain — from oncogene
                  discovery through signaling biology, disease research,
                  structural insight, medicinal chemistry, and clinical
                  translation — showing how a phase 1&ndash;3 trial emerges
                  from decades of interrelated work.
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
