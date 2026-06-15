# Endpoint-First Architecture

## Core rule

Endpoint first. Repeatable treatment. Clusters emerge later.

## The repeatable unit

The repeatable unit of TrialLineage is a concrete clinical/FDA-type endpoint:

- A Phase 1 clinical trial
- A Phase 2 clinical trial
- A Phase 3 clinical trial
- An FDA approval
- An FDA advisory/regulatory milestone
- An approval-adjacent clinical milestone

The repeatable unit is NOT:

- A therapy cluster (e.g., "gene therapy")
- A disease domain (e.g., "oncology")
- A modality category (e.g., "checkpoint inhibitors")
- A scientific platform (e.g., "RNA medicine")

## Why this matters

The Production Room is designed to become a repeatable, semi-autonomous page-building system. The system can reliably:

- Search for trial information by NCT number, drug name, or regulatory record
- Extract structured fields (intervention, disease, phase, sponsor, endpoints)
- Summarize the clinical endpoint
- Apply the same reverse-lineage treatment to each endpoint

It cannot reliably do any of this if the main object is a broad category. "Gene therapy" is not searchable as a single endpoint. "Phase 3 trial of ION582 (NCT06914609)" is.

## Public presentation

The main public Lineage Library is a flat endpoint-first list. Each card shows:

- title
- endpoint_type
- endpoint_stage_or_status
- endpoint_summary
- disease_or_condition
- intervention_or_asset
- lineage_summary
- status
- tags

No therapy domains as section headers. No broad clusters as primary cards.

## Where domains belong

Scientific domains, therapy types, and modalities may appear as:

- Tags on endpoint cards
- Filters (when the library is large enough)
- Related concepts linked from lineage pages
- Cross-references between lineages that share upstream science
- An "emerging scientific patterns" section (later, when enough endpoints exist)

They should never define the main page structure or determine which lineages are built.

## How clusters emerge

When multiple endpoint lineages share upstream science (e.g., three different ASO trials all trace back through antisense chemistry), that shared pattern becomes visible naturally. At that point, a cross-reference or pattern page may be appropriate. But this emerges from accumulated endpoint pages — it does not precede them.

## Relationship to Production Room

The Production Room ingests signals anchored to specific trials and regulatory events. The news trigger pull finds trials associated with public-interest news. The topic pull searches ClinicalTrials.gov by query. All of these produce endpoint-level records. The public Lineage Library is the editorial output of this system — one endpoint, one lineage page.

## Implementation status

- Lineage Library (`/cases`) is endpoint-first with structured cards
- Homepage lineage section uses the same model
- No domain section headers exist on the public site
- Tags are secondary metadata
- Production Room feeds endpoint-level signals
