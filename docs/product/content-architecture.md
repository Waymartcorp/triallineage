# TrialLineage content architecture

This document defines the page types used on the TrialLineage public site and how to decide which type applies to a given topic.

## Public terminology

Publicly, TrialLineage pages are called **lineages** — scientific lineages, lineage histories, or trial-anchored lineages.

- Navigation label: "Lineages"
- Page headings: "Published lineages," "Lineages in development"
- Body copy: "TrialLineage lineages," "scientific lineages," "lineage histories"

Internally (Production Room, workflow, documentation), "case" may still be used as a unit-of-work term. But all public-facing labels, headings, navigation, and copy should use "lineage" or "lineages."

The homepage presents lineages as a curated library grouped by scientific/medical domain — not as a blog feed or date-ordered list. Dates may appear quietly but are not the primary organization method.

## Why this matters

TrialLineage depends on public trust. Presenting a broad therapeutic platform as if it were a single trial undermines precision. Presenting a concept page as if it were a case investigation overstates completeness. Each page type has a different evidentiary standard and a different relationship to clinical data. Choosing the wrong type risks either shallow coverage or misleading specificity.

## Page types

### Trial case page

The default public case page. Anchored to a specific Phase 1, 2, or 3 clinical trial.

Required elements:
- Named trial (e.g., REVEAL)
- NCT ID if available
- Phase
- Disease
- Intervention
- Modality
- Sponsor / collaborators
- Public source record (ClinicalTrials.gov or equivalent)
- Clear scientific lineage traceable from basic biology to this trial

Example: "RNA-targeted therapy for Angelman syndrome" (anchored to ION582 / NCT06914609).

### Trial cluster page

Used when several related trials share the same disease, mechanism, or scientific history, and no single trial is the obvious anchor.

Characteristics:
- Multiple trials addressing the same condition through related mechanisms
- Shared scientific lineage
- No single trial dominates the narrative

Example: "RNA-targeted therapies for Angelman syndrome" (if multiple ASOs, gene therapies, or other RNA approaches were in trials for the same condition simultaneously).

Note: Trial cluster pages are not yet implemented. If a topic fits this pattern, evaluate whether one trial is prominent enough to anchor a standard case page first.

### Platform lineage page

Used when a therapeutic modality spans multiple diseases and cannot be reduced to one trial or one disease.

Characteristics:
- Broad technology platform (e.g., ASOs, siRNA, mRNA, CAR-T)
- Multiple independent programs across different diseases
- Shared enabling science but divergent clinical applications

Example: "RNA medicine for rare genetic disease" — covers ASOs, siRNA, exon skipping, splicing modulators across dozens of conditions.

Platform lineage pages should not be confused with trial case pages. They provide context for understanding how individual trial cases relate to a larger scientific effort.

### Concept page

Used when the topic is an enabling scientific idea, field, or method — not a specific clinical program.

Characteristics:
- Explains a scientific principle, method, or field
- Referenced by one or more case pages
- Does not claim to cover a specific trial or clinical program
- Educational, not investigational

Examples: "Antisense oligonucleotides," "Gene expression," "CNS drug delivery."

## Decision rule

When evaluating a topic for TrialLineage:

1. Can this page be anchored to one clearly named Phase 1, 2, or 3 trial?
   → **Trial case page.**

2. No — but several related trials share the same disease/mechanism/history?
   → **Trial cluster page.**

3. No — because it is a broad therapeutic modality spanning multiple diseases?
   → **Platform lineage page.**

4. No — because it is an enabling scientific idea, field, or method?
   → **Concept page.**

Apply this in order. Default to the most specific type that fits.

## Implications for trust

- Trial case pages carry the highest evidentiary standard. Every claim should be traceable to the trial record, published research, or clearly labeled as TrialLineage interpretation.
- Platform lineage pages should not imply that the platform has a single outcome or a single program worth following. They contextualize.
- Concept pages should not make clinical claims. They explain science.
- No page type should imply FDA approval, guaranteed benefit, or medical advice.

## Current inventory

Trial case pages:
- Daraxonrasib in pancreatic cancer (published)
- Gene therapy for inherited retinal disease (draft)
- RNA-targeted therapy for Angelman syndrome (draft)

Platform lineage pages:
- RNA medicine for rare genetic disease (in development, noted on /cases)

Trial cluster pages:
- None yet implemented.

Concept pages:
- 22 live concept pages across oncology, gene therapy, and RNA biology topics.
