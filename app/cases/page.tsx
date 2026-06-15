import Link from "next/link";

interface LineageCard {
  slug?: string;
  title: string;
  endpoint_type: string;
  endpoint_stage_or_status: string;
  endpoint_summary: string;
  disease_or_condition: string;
  intervention_or_asset: string;
  lineage_summary: string;
  status: "published" | "under_investigation";
  tags: string[];
}

/**
 * TrialLineage public lineage cards must be endpoint-first. Do not create cards
 * for broad therapy areas, modalities, domains, disease areas, or clusters.
 * Each card should start from a verified Phase 1–3 trial, FDA approval,
 * regulatory milestone, or similar concrete clinical/FDA-type endpoint.
 * Scientific similarities may appear as secondary tags, related concepts,
 * filters, or later interactive exploration, but clusters/domains are not
 * the main library organizing structure.
 *
 * Schema: docs/editorial/lineage-card-schema.md
 * Principles: docs/editorial/lineage-library-principles.md
 */
const lineages: LineageCard[] = [
  {
    slug: "daraxonrasib-pancreatic-cancer",
    title: "Daraxonrasib for KRAS G12D-mutant pancreatic cancer",
    endpoint_type: "Clinical trial",
    endpoint_stage_or_status: "Phase 2",
    endpoint_summary: "First direct KRAS G12D inhibitor to reach efficacy testing in pancreatic ductal adenocarcinoma.",
    disease_or_condition: "Pancreatic ductal adenocarcinoma",
    intervention_or_asset: "Daraxonrasib (KRAS G12D inhibitor)",
    lineage_summary: "Traces backward through KRAS oncogene discovery, protein structural biology, covalent inhibitor chemistry, precursor lesion biology, and translational oncology.",
    status: "published",
    tags: ["KRAS", "pancreatic cancer", "targeted therapy", "structural biology", "medicinal chemistry"],
  },
  {
    slug: "gene-therapy-inherited-retinal-disease",
    title: "Luxturna for RPE65-mediated inherited retinal disease",
    endpoint_type: "FDA approval",
    endpoint_stage_or_status: "FDA Approved (2017)",
    endpoint_summary: "FDA approval of voretigene neparvovec-rzyl for patients with confirmed biallelic RPE65 mutation-associated retinal dystrophy.",
    disease_or_condition: "Leber congenital amaurosis type 2 (RPE65 mutation)",
    intervention_or_asset: "Voretigene neparvovec (AAV2-RPE65)",
    lineage_summary: "Traces backward through RPE65 biology, inherited retinal degeneration, AAV vector development, animal models, clinical translation, and subretinal delivery.",
    status: "published",
    tags: ["RPE65", "AAV", "inherited retinal disease", "gene therapy", "retinal biology"],
  },
  {
    slug: "rna-targeted-therapy-angelman-syndrome",
    title: "ION582 for Angelman syndrome",
    endpoint_type: "Clinical trial",
    endpoint_stage_or_status: "Phase 3",
    endpoint_summary: "REVEAL trial (NCT06914609) testing whether ASO-mediated UBE3A unsilencing improves developmental outcomes in children with Angelman syndrome.",
    disease_or_condition: "Angelman syndrome",
    intervention_or_asset: "ION582 (obudanersen), antisense oligonucleotide",
    lineage_summary: "Traces backward through UBE3A imprinting, antisense transcript biology, ASO chemistry, intrathecal CNS delivery, and rare-disease trial design.",
    status: "published",
    tags: ["UBE3A", "antisense oligonucleotide", "genomic imprinting", "Angelman syndrome", "CNS delivery"],
  },
  {
    slug: "fibrosis-signaling-idiopathic-pulmonary-fibrosis",
    title: "BMS-986278 for idiopathic pulmonary fibrosis",
    endpoint_type: "Clinical trial",
    endpoint_stage_or_status: "Phase 3",
    endpoint_summary: "Phase 3 trial (NCT06003426) testing whether selective LPA1 receptor blockade slows FVC decline in IPF patients.",
    disease_or_condition: "Idiopathic pulmonary fibrosis",
    intervention_or_asset: "BMS-986278, oral LPA1 receptor antagonist",
    lineage_summary: "Traces backward through fibrosis pathology, fibroblast biology, lysophosphatidic acid signaling, LPA1 receptor pharmacology, and antifibrotic drug development.",
    status: "published",
    tags: ["LPA1", "pulmonary fibrosis", "fibroblast", "lipid signaling", "antifibrotic"],
  },
  {
    slug: "semaglutide-cardiovascular-risk-obesity",
    title: "Semaglutide for cardiovascular risk reduction in obesity (Wegovy / SELECT)",
    endpoint_type: "FDA approval",
    endpoint_stage_or_status: "FDA Approved (2024)",
    endpoint_summary: "FDA expanded approval of semaglutide to reduce the risk of major adverse cardiovascular events in adults with established cardiovascular disease and obesity or overweight, based on the SELECT trial.",
    disease_or_condition: "Cardiovascular disease in adults with obesity or overweight",
    intervention_or_asset: "Semaglutide 2.4 mg (Wegovy), GLP-1 receptor agonist",
    lineage_summary: "Traces backward through GLP-1 discovery, incretin biology, peptide pharmacology, cardiovascular-metabolic physiology, and the SELECT cardiovascular outcomes trial.",
    status: "under_investigation",
    tags: ["GLP-1", "semaglutide", "cardiovascular", "obesity", "incretin", "SELECT trial"],
  },
  {
    slug: "pembrolizumab-msi-h-dmmr-solid-tumors",
    title: "Pembrolizumab for MSI-H/dMMR solid tumors",
    endpoint_type: "FDA approval",
    endpoint_stage_or_status: "FDA tissue-agnostic approval",
    endpoint_summary: "FDA approval of pembrolizumab for unresectable or metastatic MSI-H/dMMR solid tumors after prior treatment, a landmark tissue-agnostic cancer approval based on a shared molecular feature rather than tumor site.",
    disease_or_condition: "MSI-H/dMMR solid tumors (tissue-agnostic)",
    intervention_or_asset: "Pembrolizumab (anti-PD-1 monoclonal antibody)",
    lineage_summary: "Traces backward through PD-1 biology, T-cell regulation, mismatch repair deficiency, microsatellite instability, tumor neoantigens, basket trials, and tissue-agnostic regulatory logic.",
    status: "under_investigation",
    tags: ["pembrolizumab", "PD-1", "MSI-H", "dMMR", "tissue-agnostic approval", "immunotherapy"],
  },
];

export default function CasesPage() {
  const published = lineages.filter((l) => l.status === "published");
  const investigating = lineages.filter((l) => l.status === "under_investigation");

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm uppercase tracking-[0.18em] text-stone-500 transition hover:text-stone-900">
              TrialLineage
            </Link>
            <nav className="hidden gap-6 text-sm text-stone-600 md:flex">
              <Link href="/cases" className="font-medium text-stone-900">Lineages</Link>
              <Link href="/concepts" className="transition hover:text-stone-900">Concepts</Link>
              <Link href="/about" className="transition hover:text-stone-900">About</Link>
              <Link href="/support" className="transition hover:text-stone-900">Support</Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Lineage library
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Lineages from clinical milestones
          </h1>
          <p className="mt-6 text-base leading-8 text-stone-700">
            Each lineage starts from a verified clinical trial, FDA approval, or
            regulatory milestone, then traces backward through the discoveries,
            tools, failures, and branch points that made it possible.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="space-y-5">
            {published.map((l) => (
              <Link
                key={l.slug}
                href={`/case/${l.slug}`}
                className="block rounded-2xl border border-stone-200 bg-white px-6 py-6 transition hover:border-stone-400 hover:shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    {l.endpoint_stage_or_status}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                    Live
                  </span>
                </div>
                <p className="mt-2.5 text-base font-semibold text-stone-900">
                  {l.title}
                </p>
                <p className="mt-1 text-sm text-stone-600">
                  {l.intervention_or_asset} · {l.disease_or_condition}
                </p>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  {l.endpoint_summary}
                </p>
                <p className="mt-1.5 text-sm leading-7 text-stone-500 italic">
                  {l.lineage_summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {l.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stone-200 px-2 py-0.5 text-xs text-stone-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {investigating.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
            <h2 className="text-xl font-semibold tracking-tight">
              Under investigation
            </h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Anchored to specific endpoints. Published when complete.
            </p>
            <div className="mt-6 space-y-5">
              {investigating.map((l) => (
                <Link
                  key={l.title}
                  href={l.slug ? `/case/${l.slug}` : "#"}
                  className="block rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-6 py-6 transition hover:border-stone-400"
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                      {l.endpoint_stage_or_status}
                    </span>
                    <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                      Draft
                    </span>
                  </div>
                  <p className="mt-2.5 text-base font-medium text-stone-700">
                    {l.title}
                  </p>
                  <p className="mt-1 text-sm text-stone-600">
                    {l.intervention_or_asset} · {l.disease_or_condition}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {l.endpoint_summary}
                  </p>
                  <p className="mt-1.5 text-sm leading-7 text-stone-500 italic">
                    {l.lineage_summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {l.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-stone-200 px-2 py-0.5 text-xs text-stone-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-10">
          <div className="rounded-2xl border border-stone-200 bg-white px-6 py-6 text-center">
            <p className="text-sm text-stone-700">
              Want to suggest a trial or milestone for investigation?
            </p>
            <p className="mt-3 text-sm font-medium text-stone-900">
              lineages@triallineage.org
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-wrap gap-6 text-xs text-stone-500">
            <Link href="/about" className="hover:text-stone-900">About</Link>
            <Link href="/mission" className="hover:text-stone-900">Mission</Link>
            <Link href="/editorial-standards" className="hover:text-stone-900">Editorial Standards</Link>
            <Link href="/support" className="hover:text-stone-900">Support</Link>
            <Link href="/disclaimer" className="hover:text-stone-900">Disclaimer</Link>
            <Link href="/cases" className="hover:text-stone-900">Lineages</Link>
            <Link href="/concepts" className="hover:text-stone-900">Concepts</Link>
          </div>
          <p className="mt-4 text-xs text-stone-400">
            TrialLineage is a public science platform. Not medical advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
