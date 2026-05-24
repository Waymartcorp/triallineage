import Link from "next/link";

export default function ViralVectorsAavConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Viral vectors / AAV
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Viral vectors are engineered viruses stripped of their ability to
            cause disease and repurposed to deliver therapeutic genes into human
            cells. Adeno-associated virus (AAV) has become one of the most
            widely used vectors in gene therapy because of its safety profile,
            ability to transduce non-dividing cells, and long-term gene
            expression without integrating into the host genome.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/case/gene-therapy-inherited-retinal-disease" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700">View the retinal gene therapy case</Link>
            <Link href="/concepts" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">All concepts</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">In plain language</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What is a viral vector?</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Viruses are naturally efficient at entering cells and delivering
            genetic material. Scientists realized they could harness this
            ability by removing the viral genes that cause disease and replacing
            them with a therapeutic gene. The result is a &ldquo;vector&rdquo;
            — a delivery vehicle that carries genetic cargo into cells without
            causing infection.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            AAV is a small, non-pathogenic virus that was first discovered as a
            contaminant in other virus preparations. It infects humans without
            causing known disease, which made it an attractive starting point
            for engineering. Different AAV serotypes (variants) target different
            cell types, allowing researchers to choose vectors suited to
            specific organs.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why viral vectors matter</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              Without a safe and effective delivery mechanism, gene therapy
              remains a theoretical concept. The development of AAV vectors
              solved a critical bottleneck: how to get genetic material into
              target cells reliably, with minimal immune response, and with
              durable expression.
            </p>
            <p>
              The choice of vector determines safety, tissue targeting,
              expression duration, manufacturing feasibility, and immune
              profile. AAV&rsquo;s advantages for the eye — stable expression
              in non-dividing photoreceptors, low immunogenicity in a
              relatively immune-privileged space — made it the vector of choice
              for retinal gene therapy.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to inherited retinal disease</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            AAV serotype 2 was used in the first successful retinal gene
            therapy trials and in the approved product voretigene neparvovec.
            The vector carries a functional RPE65 gene to retinal pigment
            epithelium cells via subretinal injection. The development path
            from laboratory AAV to clinical-grade vector required advances in
            manufacturing, purification, quality control, and regulatory
            science.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Related concepts</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Gene therapy", "Retinal biology", "Inherited retinal disease", "Translational medicine"].map((c) => (
              <span key={c} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-600">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-wrap gap-6 text-xs text-stone-500">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <Link href="/cases" className="hover:text-stone-900">Lineages</Link>
            <Link href="/concepts" className="hover:text-stone-900">Concepts</Link>
            <Link href="/about" className="hover:text-stone-900">About</Link>
            <Link href="/support" className="hover:text-stone-900">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
