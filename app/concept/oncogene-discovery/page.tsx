import Link from "next/link";

export default function OncogeneDiscoveryPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            TrialLineage Concept
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Oncogene discovery
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            The finding that certain genes, when altered, can drive normal cells
            toward cancer was one of the most consequential shifts in biomedical
            history. It changed how researchers think about cancer, how they
            classify tumors, and how they design drugs. This page explains what
            oncogenes are, why their discovery created an entirely new branch of
            scientific thinking, and how that branch eventually led to
            KRAS-directed therapies now entering human trials in pancreatic
            cancer.
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
              What is an oncogene?
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Every cell in your body contains genes that regulate growth. Some
              of these genes act like accelerators, telling cells when to divide.
              Under normal conditions they are tightly controlled. But when one
              of these growth-promoting genes becomes permanently altered —
              through mutation, rearrangement, or overactivation — it can push
              the cell to keep growing when it should stop. That altered gene is
              called an oncogene.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              The word comes from the Greek <em>onkos</em>, meaning mass or
              tumor. An oncogene is not a foreign invader. It is a normal part of
              the cell&rsquo;s own machinery that has been changed in a way that
              contributes to cancer. The normal, unaltered version is called a
              proto-oncogene — it does essential work in a healthy cell, but
              carries the potential to become dangerous if disrupted.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Key distinction
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <li>
                <span className="font-medium text-stone-900">Proto-oncogene:</span>{" "}
                a normal gene that helps regulate cell growth and division
              </li>
              <li>
                <span className="font-medium text-stone-900">Oncogene:</span>{" "}
                the same gene after it has been altered in a way that promotes
                uncontrolled growth
              </li>
              <li>
                <span className="font-medium text-stone-900">The change:</span>{" "}
                a mutation, amplification, or rearrangement that locks the gene
                into an always-on state
              </li>
              <li>
                <span className="font-medium text-stone-900">The consequence:</span>{" "}
                the cell receives a persistent growth signal it was never meant
                to have
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why oncogene discovery changed cancer research */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Why it mattered
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How oncogene discovery changed cancer research
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                Cancer became a disease with identifiable molecular drivers
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Before oncogenes were understood, cancer was largely described in
                terms of tissue behavior — cells growing too fast, invading where
                they should not. Oncogene research gave the field a mechanistic
                explanation. It showed that specific genetic changes could be
                identified, studied, and potentially targeted. That transformed
                cancer from a condition you could only describe into one you
                could begin to decode at the molecular level.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It made targeted therapy conceivable
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Once researchers knew that certain genes were actively driving a
                tumor, the idea of blocking those specific genes or their protein
                products became a plausible research direction. This was a
                radical departure from earlier strategies that relied on broadly
                toxic chemotherapy. The concept of targeted therapy — designing a
                drug to interfere with a defined molecular defect — grew directly
                out of oncogene science, and it is the intellectual foundation
                for every oncogene-directed drug now in phase 1 through 3
                trials.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-semibold">
                It reshaped how cancers are classified
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Historically, cancers were classified by where they started in
                the body — lung, breast, colon, pancreas. Oncogene discovery
                introduced a parallel system based on molecular features. Two
                patients with the same organ-based diagnosis might carry very
                different oncogene mutations, and therefore respond very
                differently to treatment. This insight is now central to
                precision oncology and to how clinical trials select patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it created a new branch in scientific thinking */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Branch point in scientific thinking
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How oncogene discovery created a new direction in research
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Scientific progress is not a single straight line. It branches.
            Oncogene discovery was one of the most important branch points in
            cancer research because it split the field into fundamentally new
            directions that had not existed before.
          </p>

          <div className="mt-10 space-y-5">
            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Before the branch
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                Cancer research was organized around tissues and organs
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                The dominant logic was anatomical: cancers were defined and
                studied based on where they grew. Treatment strategies were
                broad. Researchers could observe that cancer cells behaved
                abnormally, but they did not have a molecular framework to
                explain why individual tumors behaved differently from one
                another. There was no widely accepted theory of internal genetic
                drivers.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                The branch itself
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                A gene-centered view of cancer became possible
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                Oncogene discovery opened a new axis. Researchers could now ask:
                which specific gene is altered in this tumor? What protein does
                that gene encode? What signaling pathway does that protein
                control? Is the mutation the cause of the cancer or a
                bystander? These questions launched entirely new subfields —
                cancer genomics, signal transduction biology, and eventually
                molecularly targeted drug design — none of which existed as
                coherent research programs before oncogenes were identified.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                What the branch produced
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                A generation of targeted research that was not previously
                possible
              </h3>
              <p className="mt-3 leading-8 text-stone-700">
                From this branch, researchers began mapping which oncogenes
                appeared in which cancers, studying how their protein products
                behaved, and looking for ways to intervene at the molecular
                level. This is the research trajectory that eventually reached
                KRAS, identified its role in pancreatic cancer, spent decades
                trying to drug it, and produced candidates like daraxonrasib now
                being tested in human trials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it mattered to later KRAS and pancreatic cancer work */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Connection to KRAS and pancreatic cancer
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Why this concept matters for later KRAS-directed work
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                KRAS exists as a target because of oncogene science
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                KRAS was among the first human oncogenes identified. It was found
                by studying retroviruses that caused tumors in animals, then
                tracing the responsible genes back to their normal cellular
                counterparts. Without the conceptual framework provided by
                oncogene discovery — the idea that a cell&rsquo;s own genes
                could become cancer drivers — KRAS would never have been
                recognized as a therapeutic target in the first place.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
                Pancreatic cancer turned out to be deeply KRAS-dependent
              </p>
              <p className="mt-4 leading-8 text-stone-700">
                Later research showed that KRAS mutations appear in the vast
                majority of pancreatic cancers and are present from the earliest
                precursor lesions. This made KRAS not merely one of many targets
                in pancreatic cancer, but arguably the most biologically central
                one. The entire rationale for pursuing a KRAS-directed drug in
                this disease is built on the foundation that oncogene discovery
                established.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
            <p className="leading-8 text-stone-700">
              The connection is not abstract. Without oncogene science, there
              would be no molecular reason to study KRAS in pancreatic cancer, no
              rationale for building a drug against it, and no framework for
              designing the clinical trials now testing daraxonrasib in human
              patients. Every step in the discovery chain behind this drug passes
              through oncogene biology.
            </p>
          </div>
        </div>
      </section>

      {/* What earlier or alternate ideas it displaced or complicated */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Displaced and complicated ideas
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            What oncogene discovery replaced — and what it left unresolved
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Scientific breakthroughs do not arrive in a vacuum. Oncogene
            discovery did not simply add new knowledge — it displaced older
            frameworks, complicated competing hypotheses, and introduced
            tensions that the field is still working through.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                It complicated the viral theory of cancer
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                For decades, a significant branch of cancer research was built
                around the idea that viruses cause cancer. Oncogene discovery
                grew partly out of that tradition — retroviruses did carry
                oncogenes — but it ultimately showed that the critical genes were
                cellular in origin, not viral. Viruses had merely co-opted them.
                This did not invalidate virus research, but it fundamentally
                reframed it: viruses were no longer seen as the primary cause of
                most cancers, but as a tool that accidentally revealed the
                cell&rsquo;s own vulnerabilities.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                It displaced purely environmental explanations
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Another prominent theory held that cancer was primarily caused by
                environmental exposure — chemicals, radiation, lifestyle factors.
                Oncogene discovery did not disprove this, but it changed the
                framing. Environmental agents came to be understood not as
                direct causes but as mutagens: substances that increase the
                chance that a proto-oncogene or tumor suppressor gene gets
                damaged. The gene, not the carcinogen alone, became the
                explanatory center.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                It raised the &ldquo;one gene or many?&rdquo; problem
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Early oncogene work sometimes gave the impression that a single
                mutated gene could explain a cancer. Over time, it became clear
                that most cancers involve multiple genetic alterations — not just
                activated oncogenes but also disabled tumor suppressor genes,
                chromosomal instability, and epigenetic changes. Oncogene
                discovery was essential, but it was only one piece of a more
                complex picture that the field is still assembling.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7">
              <h3 className="font-semibold text-stone-900">
                The &ldquo;undruggable&rdquo; era showed limits of early optimism
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Identifying an oncogene and successfully targeting it with a drug
                turned out to be vastly different problems. KRAS was identified
                as an oncogene in the early 1980s, but it resisted every
                therapeutic approach for roughly four decades. Some oncogenes
                proved more tractable than others, and the field had to develop
                entirely new disciplines — structural biology, chemical biology,
                covalent drug design — to close the gap between knowing a target
                and reaching it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the public usually misses */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              What often gets missed
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              What the public usually does not hear about oncogene science
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Public coverage of cancer tends to focus on trial results, drug
              approvals, and survival data. The foundational science that makes
              those developments possible is rarely explained, and several
              important aspects of oncogene research remain poorly understood
              outside the field.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Oncogenes are your own genes, altered
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Many people assume oncogenes are inherently harmful or foreign.
                In fact, every oncogene has a normal counterpart — a
                proto-oncogene — that performs essential functions in healthy
                cells. Cancer arises not from the presence of these genes, but
                from specific alterations that change their behavior. You carry
                proto-oncogenes right now; they are part of how your cells
                function.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Knowing the gene is not the same as having a drug
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Identifying an oncogene does not mean it can be targeted with a
                drug. KRAS was identified in the early 1980s. It took roughly
                four decades before credible direct-targeting strategies emerged.
                The gap between genetic discovery and druggability is one of the
                least appreciated aspects of cancer research — and one of the
                reasons TrialLineage exists as a platform: to make that long
                interval visible and understandable.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                The same oncogene can behave differently across cancers
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                KRAS mutations dominate in pancreatic cancer, but they also
                appear in lung and colorectal cancers — where they play somewhat
                different biological roles and respond differently to
                intervention. A drug that works against KRAS in one tissue
                context may not work the same way in another. The biology is
                specific to both the gene and the organ.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7">
              <h3 className="font-semibold text-stone-900">
                Virology was unexpectedly part of the origin story
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Oncogene discovery emerged partly from virus research — a
                connection that surprises many people. The study of
                cancer-causing retroviruses in animals is what first revealed
                that cellular genes could become oncogenic. That unexpected link
                between virology and cancer genetics is an important part of the
                history, and an example of how scientific breakthroughs often
                come from unexpected directions.
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
                  Oncogene discovery is the first layer in the scientific lineage
                  behind daraxonrasib, a KRAS-directed therapy now in clinical
                  trials for pancreatic cancer. The case page traces the full
                  discovery chain — from oncogene science through protein
                  signaling, pancreatic disease biology, chemical and structural
                  biology, medicinal chemistry, and clinical translation — to
                  show how a phase 1&ndash;3 trial emerges from decades of
                  interrelated research.
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
              <Link href="/concept/protein-signaling-biology" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Protein signaling biology</Link>
              <Link href="/concept/medicinal-chemistry" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Medicinal chemistry</Link>
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
