import Link from "next/link";

export default function FibroblastsConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">TrialLineage Concept</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Fibroblasts
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Fibroblasts are the cells responsible for producing and maintaining
            the structural framework of tissues. In normal wound healing, they
            deposit collagen to repair damage. In fibrotic diseases, fibroblasts
            become persistently activated and overproduce extracellular matrix,
            driving progressive tissue scarring.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/case/fibrosis-signaling-idiopathic-pulmonary-fibrosis" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700">View the IPF lineage</Link>
            <Link href="/concepts" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">All concepts</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">What are fibroblasts?</h2>
          <div className="mt-6 space-y-4 max-w-3xl text-base leading-8 text-stone-700">
            <p>
              Fibroblasts are connective tissue cells found throughout the body.
              Their primary role is synthesizing the extracellular matrix —
              the structural scaffold of proteins (mainly collagens) and
              glycoproteins that gives tissues their shape and mechanical
              properties.
            </p>
            <p>
              When tissue is damaged, fibroblasts are recruited to the injury
              site and activated. Activated fibroblasts (sometimes called
              myofibroblasts) produce large amounts of collagen and contract
              the wound. In healthy repair, these cells undergo apoptosis
              (programmed cell death) once the wound closes. In fibrotic
              disease, they resist apoptosis and continue producing matrix
              indefinitely.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connection to the IPF lineage</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Fibroblasts are the primary effector cells in IPF. The entire
            therapeutic hypothesis behind BMS-986278 is that blocking LPA1
            receptor signaling will reduce fibroblast activation, recruitment,
            and survival in the lung — thereby slowing the progressive
            scarring that characterizes the disease.
          </p>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-wrap gap-6 text-xs text-stone-500">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <Link href="/cases" className="hover:text-stone-900">Lineages</Link>
            <Link href="/concepts" className="hover:text-stone-900">Concepts</Link>
            <Link href="/about" className="hover:text-stone-900">About</Link>
          </div>
          <p className="mt-4 text-xs text-stone-400">TrialLineage is a public science platform. Not medical advice.</p>
        </div>
      </footer>
    </main>
  );
}
