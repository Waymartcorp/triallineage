# TrialLineage content architecture

## Core principle: the trial anchor

TrialLineage is not a science encyclopedia. It is a public platform that explains why specific clinical trials exist — what chain of science made them possible, what is known, what remains unknown, and what the trial is designed to test.

The **trial anchor** is the structural heart of every TrialLineage lineage. It is not decorative context. It is the reason the page exists, the reason a reader cares, and the reason the content is time-relevant rather than static.

A TrialLineage lineage answers a specific question that no one else is answering clearly for a public audience:

> "Why does this trial exist? What science had to happen first?"

This question matters to:
- **Patients and families** tracking a trial for their condition
- **Investors** doing due diligence on the science behind a biotech asset
- **Journalists** explaining a trial beyond the press release
- **Clinicians** who want the full lineage behind something they are enrolling patients into
- **Students and researchers** understanding how basic science becomes clinical reality

Without a trial anchor, the content becomes general science education — valuable but undifferentiated and hard to monetize.

## What the trial anchor provides

1. **Time-sensitivity.** A Phase 3 trial has an outcome coming. Readers have a reason to return.
2. **Specificity.** The page is about *this* drug, *this* mechanism, *this* trial — not a general topic.
3. **Verifiability.** The trial record is public (ClinicalTrials.gov). The anchor is checkable.
4. **Update cycle.** Trial results, FDA decisions, new phases — each creates a natural reason to revisit and update the lineage.
5. **Audience urgency.** People searching for a specific trial or drug have immediate need, not idle curiosity.

## Public terminology

Publicly, TrialLineage pages are called **lineages** — scientific lineages or trial-anchored lineages.

- Navigation label: "Lineages"
- Page headings: "Published lineages," "Lineages in development"
- Body copy: "TrialLineage lineages," "scientific lineages"
- Trial status should be visible and prominent (e.g., "Phase 3 · Active")

Internally (Production Room, workflow, documentation), "case" may still be used as a unit-of-work term.

The homepage presents lineages as a curated library grouped by scientific/medical domain — not as a blog feed or date-ordered list.

## Page types

### Trial-anchored lineage (default)

The primary TrialLineage page type. Anchored to a specific Phase 1, 2, or 3 clinical trial.

Required elements:
- Named trial (e.g., REVEAL)
- NCT ID
- Phase (prominently displayed as live status)
- Disease
- Intervention (drug name + generic name)
- Modality
- Sponsor / collaborators
- Public source record (ClinicalTrials.gov)
- Scientific lineage traceable from basic biology to this trial
- Known vs. unknown section
- TrialLineage interpretation (clearly labeled)

The trial phase should be treated as a **live status indicator**, not buried metadata. It signals: this is an active program with a pending outcome. It differentiates TrialLineage from static educational content.

Example: "RNA-targeted therapy for Angelman syndrome" (Phase 3 · ION582 / NCT06914609).

### Trial cluster page

Used when several related trials share the same disease, mechanism, or scientific history, and no single trial is the obvious anchor.

Characteristics:
- Multiple trials addressing the same condition through related mechanisms
- Shared scientific lineage
- Each trial listed with its own phase and NCT ID
- No single trial dominates the narrative

Note: Trial cluster pages are not yet implemented.

### Platform lineage page

Used when a therapeutic modality spans multiple diseases and cannot be reduced to one trial or one disease.

Characteristics:
- Broad technology platform (e.g., ASOs, siRNA, mRNA, CAR-T)
- Multiple independent programs across different diseases
- Shared enabling science but divergent clinical applications
- Links to specific trial-anchored lineages where they exist

Platform lineage pages contextualize. They do not replace trial-anchored lineages.

### Concept page

Used when the topic is an enabling scientific idea, field, or method.

Characteristics:
- Explains a scientific principle, method, or field
- Referenced by one or more lineage pages
- Does not claim to cover a specific trial or clinical program
- Educational, not investigational

## Decision rule

When evaluating a topic for TrialLineage:

1. Can this page be anchored to one clearly named Phase 1, 2, or 3 trial?
   → **Trial-anchored lineage.**

2. No — but several related trials share the same disease/mechanism/history?
   → **Trial cluster page.**

3. No — because it is a broad therapeutic modality spanning multiple diseases?
   → **Platform lineage page.**

4. No — because it is an enabling scientific idea, field, or method?
   → **Concept page.**

Default to the most specific type that fits. The trial-anchored lineage is always preferred when a suitable trial exists.

## Why this matters for monetization

Static science education (Wikipedia model) is hard to monetize because:
- No urgency — readers visit once
- No update cycle — content is evergreen but stale
- No audience specificity — too broad to serve anyone well

Trial-anchored lineages avoid these problems because:
- Urgency exists — trials have pending outcomes
- Updates are natural — phase transitions, results, approvals
- Audiences are specific — patients, investors, journalists, clinicians
- The question being answered ("why does this trial exist?") is unique to TrialLineage

## Implications for trust

- Trial-anchored lineages carry the highest evidentiary standard. Every claim should be traceable to the trial record, published research, or clearly labeled as TrialLineage interpretation.
- The trial anchor must be verifiable from public records.
- Platform lineage pages should not imply a single outcome or a single program worth following.
- Concept pages should not make clinical claims.
- No page type should imply FDA approval, guaranteed benefit, or medical advice.

## Current inventory

Trial-anchored lineages:
- Daraxonrasib in pancreatic cancer — Phase 2 (published)
- Gene therapy for inherited retinal disease — (draft, trial anchor TBD)
- RNA-targeted therapy for Angelman syndrome — Phase 3 / NCT06914609 (draft)

Platform lineage pages:
- RNA medicine for rare genetic disease (in development)

Trial cluster pages:
- None yet implemented.

Concept pages:
- 22 live concept pages across oncology, gene therapy, and RNA biology topics.
