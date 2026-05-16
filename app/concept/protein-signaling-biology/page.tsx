export default function ProteinSignalingBiologyPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            TrialLineage Concept
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Protein signaling biology
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Cells do not act alone. They receive messages from their environment,
            relay those messages internally through chains of interacting
            proteins, and respond by growing, dividing, differentiating, or
            dying. The science of how those protein relay systems work — and what
            happens when they break — is called signaling biology. This page
            explains what protein signaling is, why it became essential to
            understanding cancer, and how it connects to the KRAS-directed
            therapies now entering clinical trials in pancreatic cancer.
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
              What is protein signaling?
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Think of a cell as a small factory that needs instructions. Those
              instructions do not come as written notes — they arrive as
              molecules that land on the cell&rsquo;s surface and trigger a chain
              reaction inside the cell. One protein activates the next, which
              activates the next, and so on, until the message reaches the
              part of the cell that needs to respond. This chain of
              protein-to-protein communication is called a signaling pathway.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              In a healthy cell, signaling pathways are tightly controlled. A
              growth signal arrives, the pathway activates, the cell divides, and
              then the pathway switches off. But when a protein in the chain
              becomes stuck in the &ldquo;on&rdquo; position — because the gene
              encoding it has been mutated — the cell keeps receiving a growth
              message that was never meant to be permanent. That is one of the
              core mechanisms behind cancer, and it is exactly what happens with
              mutant KRAS.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Core vocabulary
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">Ligand:</span>{" "}
                the molecule that arrives at the cell surface and starts the
                signaling process
              </li>
              <li>
                <span className="font-medium text-stone-900">Receptor:</span>{" "}
                the protein on the cell surface that detects the incoming signal
              </li>
              <li>
                <span className="font-medium text-stone-900">Signaling pathway:</span>{" "}
                the chain of proteins inside the cell that relay the message from
                receptor to response
              </li>
              <li>
                <span className="font-medium text-stone-900">Effector:</span>{" "}
                the downstream protein that carries out the final instruction,
                such as triggering cell division
              </li>
              <li>
                <span className="font-medium text-stone-900">GTPase switch:</span>{" "}
                a protein like KRAS that toggles between an active and inactive
                state, acting as a control point in the pathway
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why signaling biology changed how scientists understood disease */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Why it mattered
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How signaling biology changed the way scientists understand disease
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                Disease became explainable at the level of molecular logic
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Before signaling biology matured, many diseases were described by
                what went wrong at the tissue level — inflammation, abnormal
                growth, organ failure — without a detailed account of the
                molecular steps that led there. Signaling research gave
                scientists a way to trace disease backward through specific
                protein interactions. Instead of saying &ldquo;the cell grew out
                of control,&rdquo; researchers could say &ldquo;this receptor
                activated this pathway, which kept this effector turned on, which
                drove proliferation.&rdquo; That level of detail changed what was
                possible in both diagnosis and treatment.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It revealed that different diseases can share the same broken
                wiring
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Signaling pathways are not unique to one disease. The same
                pathway that drives one type of cancer may be dysregulated in
                another, or even in a non-cancer condition. This insight meant
                that understanding one signaling defect could have implications
                across multiple diseases — and that a drug designed to fix a
                signaling problem in one context might, in principle, be relevant
                elsewhere.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It gave drug designers specific points of intervention
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                A signaling pathway is a chain, and every link in that chain is a
                potential place to intervene with a drug. Signaling biology did
                not just explain disease — it created a map of possible drug
                targets. Once researchers understood which protein in a pathway
                was broken, they could begin asking whether it was possible to
                block or correct that specific protein. This logic now underlies
                the design of most molecularly targeted therapies in clinical
                trials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How signaling created a bridge between genes and cell behavior */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            The bridge
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How signaling connected genes to cell behavior
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Oncogene discovery told the field that certain genes could drive
            cancer. But knowing a gene is altered does not, by itself, explain
            how a cell changes. Signaling biology filled that gap. It provided
            the mechanistic story between a genetic mutation and its consequences
            in the living cell.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                What genetics alone could say
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                By the mid-1980s, researchers knew that mutations in genes like
                KRAS were found in many cancers. They knew these genes encoded
                proteins. But they could not yet explain how a single mutation in
                a single gene could cause a cell to change its entire behavior —
                growing faster, ignoring stop signals, evading normal controls.
                The gene was identified, but the mechanism connecting the
                mutation to the disease was still missing.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                What signaling biology added
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Signaling research showed that KRAS sits at a critical junction
                in the cell&rsquo;s growth-control wiring. When a growth signal
                arrives at the cell surface, KRAS is one of the first internal
                relays to be activated. It switches on, passes the message to
                downstream proteins, and then switches off. A KRAS mutation locks
                it in the on position — so the growth message never stops. That
                functional explanation is what signaling biology provided, and it
                turned an abstract genetic finding into a concrete understanding
                of how cancer cells actually behave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it mattered specifically to KRAS and pancreatic cancer */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Connection to KRAS and pancreatic cancer
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Why signaling biology was critical for KRAS-directed work
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                KRAS is a signaling protein, not just a gene
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                KRAS is often discussed as a cancer gene, but the actual
                therapeutic target is the protein it encodes — a small GTPase
                that acts as a molecular switch in the RAS-MAPK signaling
                pathway. Everything about how to drug KRAS — where to bind it,
                how to block its activity, how to disrupt its interactions —
                depends on understanding how the KRAS protein functions within
                its signaling context. That knowledge came from signaling
                biology, not from genetics alone.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Signaling explained why pancreatic cancer depends on KRAS
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                It is one thing to know that KRAS mutations appear in most
                pancreatic cancers. It is another to understand why the cancer
                depends on them. Signaling studies showed that in pancreatic
                tumors, mutant KRAS does not just contribute to growth — it
                sustains multiple downstream pathways that the tumor relies on
                for survival, metabolism, and immune evasion. This concept of
                oncogene dependence, revealed through signaling analysis, is what
                made KRAS a rational drug target rather than just a biological
                observation.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
            <p className="leading-8 text-stone-700">
              Without signaling biology, researchers would have known that KRAS
              was mutated in pancreatic cancer but would not have understood what
              that mutation actually does inside the cell, why the tumor depends
              on it, or where in the signaling chain a drug might intervene. The
              entire rationale for daraxonrasib — a drug designed to disrupt a
              specific signaling function of a specific protein — is built on
              this science.
            </p>
          </div>
        </div>
      </section>

      {/* Branch points in scientific thinking within signaling research */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Branch points in scientific thinking
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How signaling research split into different directions
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Signaling biology did not develop as a single unified program. It
            branched repeatedly as researchers discovered new pathways, debated
            which components mattered most, and disagreed about how to translate
            signaling knowledge into therapy.
          </p>

          <div className="mt-10 space-y-5">
            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Linear vs. network models
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Are signaling pathways simple chains or interconnected webs?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Early signaling research often described pathways as linear
                sequences: receptor activates protein A, which activates protein
                B, which activates protein C. But as the field matured, it became
                clear that pathways cross-talk with each other extensively. A
                single protein can participate in multiple pathways, and blocking
                one route may cause the signal to reroute through another. This
                branch in thinking — from linear chains to interconnected
                networks — had major implications for drug design, because it
                explained why blocking a single node in the pathway often failed
                to shut the system down completely.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Target the receptor or the interior?
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Where in the pathway should a drug intervene?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                A major branch point emerged over where to direct therapeutic
                effort. Some researchers focused on receptors at the cell
                surface, which were more accessible to drugs. Others argued that
                the real drivers were interior signaling proteins like KRAS,
                which sit deeper in the chain but closer to the actual growth
                decision. Both approaches produced important therapies, but the
                interior-targeting branch proved far more technically difficult —
                and KRAS became the defining example of that difficulty.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Pathway inhibition vs. synthetic lethality
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Block the broken part or exploit its dependencies?
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                When direct KRAS inhibition proved extraordinarily difficult, a
                divergent research branch explored whether it was possible to
                kill KRAS-mutant cells by targeting something else they depend on
                — a strategy called synthetic lethality. This approach did not
                require drugging KRAS directly, but it relied entirely on
                signaling knowledge to identify which other proteins became
                essential when KRAS was mutated. Both branches — direct
                inhibition and indirect vulnerability — remain active areas of
                clinical research today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Failed or incomplete approaches */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Failed and incomplete approaches
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Strategies that did not work — but still taught the field something
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            The path from signaling knowledge to effective therapy was not
            direct. Multiple strategies were pursued seriously, failed or
            stalled, and still contributed to the understanding that later made
            better approaches possible.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Farnesyltransferase inhibitors
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                One of the earliest attempts to target RAS signaling involved
                blocking the enzyme that helps attach the RAS protein to the cell
                membrane — a step required for RAS to function. These drugs,
                called farnesyltransferase inhibitors, were based on sound
                signaling logic but failed in clinical trials because RAS
                proteins could use alternative attachment mechanisms. The
                approach taught the field that RAS biology was more redundant
                than expected, and that blocking one step in the process was not
                enough if the protein could find another route.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Downstream-only inhibition
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Because KRAS itself seemed undruggable, many researchers focused
                on blocking proteins downstream in the signaling cascade — RAF,
                MEK, ERK. These drugs worked in some contexts, particularly in
                cancers driven by mutations in the downstream proteins
                themselves. But in KRAS-mutant cancers, blocking one downstream
                branch often triggered compensatory activation of parallel
                pathways, limiting effectiveness. This experience reinforced the
                network model of signaling and showed that the field needed
                either direct KRAS inhibition or smarter combination strategies.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Receptor-level strategies in KRAS-mutant tumors
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Drugs targeting receptors upstream of KRAS — particularly EGFR
                inhibitors — were tested in KRAS-mutant cancers and largely
                failed. The signaling logic was clear in retrospect: if the
                problem is a constitutively active switch inside the cell,
                blocking the signal arriving at the cell surface will not help,
                because the switch no longer depends on that external signal.
                This failure clarified why the field needed to reach KRAS
                directly or find genuinely novel indirect approaches.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Early combination strategies without signaling rationale
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Some clinical trials combined signaling-pathway inhibitors based
                on empirical logic — trying multiple drugs together without a
                clear mechanistic reason for the specific combination. Many of
                these produced unacceptable toxicity without meaningful
                improvement in efficacy. The experience showed that successful
                combinations would require precise signaling knowledge about
                which pathways to block simultaneously and why.
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
              What the public usually does not hear about signaling biology
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Signaling biology is one of the most important foundations of
              modern drug design, but it rarely appears in public explanations
              of how cancer drugs work. Several aspects of the field remain
              poorly understood outside of research.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Signaling is the layer between genes and symptoms
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Public discussions of cancer often jump from &ldquo;a gene is
                mutated&rdquo; to &ldquo;the patient has a tumor.&rdquo; The
                entire intermediate layer — how a mutated gene produces a
                defective protein that disrupts a signaling chain that alters
                cell behavior — is usually skipped. But this is precisely the
                layer where most targeted drugs are designed to act.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Pathways adapt, and that is why single drugs often fail
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                When a drug blocks one protein in a signaling pathway, the cell
                sometimes reroutes the signal through an alternative path. This
                is called pathway compensation or adaptive resistance. It is one
                of the main reasons cancer drugs that look promising in early
                testing can lose effectiveness over time, and it is why
                combination therapy — blocking multiple points at once — has
                become a central strategy in clinical development.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                The same pathway matters in diseases beyond cancer
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                RAS-MAPK signaling — the pathway KRAS belongs to — is not only
                relevant to cancer. Germline mutations in the same pathway cause
                a group of developmental conditions called RASopathies. The
                signaling knowledge that informs cancer drug design also
                informs understanding of these other conditions, though that
                connection is rarely mentioned in public reporting on cancer
                therapies.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                Much of this work predates and enables &ldquo;precision
                medicine&rdquo;
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                The phrase &ldquo;precision medicine&rdquo; is often presented as
                a recent innovation. In reality, the ability to match a drug to a
                molecular defect depends on decades of signaling research that
                mapped which proteins do what, how they interact, and what
                happens when they malfunction. Precision medicine is the clinical
                application; signaling biology is the scientific foundation it
                stands on.
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
                  Protein signaling biology is the second layer in the scientific
                  lineage behind daraxonrasib. It sits between oncogene discovery
                  — which identified KRAS as a cancer gene — and the disease-specific
                  research that established KRAS as central to pancreatic cancer.
                  The case page traces the full discovery chain, from basic
                  science through chemical biology, medicinal chemistry, and
                  clinical translation, showing how a phase 1&ndash;3 trial
                  emerges from decades of interrelated research.
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
