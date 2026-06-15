import Link from "next/link";

export default function HomePage() {
  // TrialLineage public lineage cards must be endpoint-first. Do not create cards for broad therapy
  // areas, modalities, domains, disease areas, or clusters. Each card should start from a verified
  // Phase 1-3 trial, FDA approval, regulatory milestone, or similar concrete clinical/FDA-type endpoint.
  // Scientific similarities may appear as secondary tags, related concepts, filters, or later interactive
  // exploration, but clusters/domains are not the main library organizing structure.
  const lineages = [
    {
      title: "Daraxonrasib in pancreatic cancer",
      endpoint: "Phase 2 trial",
      subtitle:
        "KRAS-directed therapy traced through oncogene discovery, structural biology, and medicinal chemistry.",
      status: "Live" as const,
      href: "/case/daraxonrasib-pancreatic-cancer",
    },
    {
      title: "Gene therapy for inherited retinal disease",
      endpoint: "Approved (Luxturna)",
      subtitle:
        "Gene therapy for inherited blindness traced through retinal biology, disease genetics, AAV vector engineering, and surgical delivery.",
      status: "Live" as const,
      href: "/case/gene-therapy-inherited-retinal-disease",
    },
    {
      title: "RNA