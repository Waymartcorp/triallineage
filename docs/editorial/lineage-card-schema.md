# TrialLineage Public Lineage Card Schema

## Purpose

This file defines what every public Lineage Library card must contain.

Every public lineage card must be anchored to a concrete clinical/FDA-type endpoint.

## Required fields

- `title`
- `endpoint_type`
- `endpoint_stage_or_status`
- `endpoint_summary`
- `disease_or_condition`
- `intervention_or_asset`
- `lineage_summary`
- `status`
- `tags`
- `source_links`
- `confidence_flag`

## Field definitions

### `title`

Specific intervention/asset plus disease or clinical context. Avoid broad therapy categories.

### `endpoint_type`

The type of endpoint being traced. Examples:

- Phase 1 trial
- Phase 2 trial
- Phase 3 trial
- FDA approval
- FDA regulatory milestone
- Approval-adjacent clinical milestone

### `endpoint_stage_or_status`

The current stage or regulatory status of the endpoint (e.g., "Phase 3", "FDA Approved (2017)").

### `endpoint_summary`

A concise summary of the actual trial, approval, or clinical/FDA-type milestone.

### `disease_or_condition`

The specific disease or clinical condition the endpoint addresses.

### `intervention_or_asset`

The specific drug, therapy, or clinical asset being evaluated or approved.

### `lineage_summary`

A concise sentence describing what the page traces backward through.

### `status`

The editorial status of the lineage page: published, under_investigation, or planned.

### `tags`

Secondary metadata only. Tags may include mechanisms, modalities, diseases, delivery systems, targets, or scientific concepts. Tags do not define the main library structure.

### `source_links`

Links to verifiable public records (e.g., ClinicalTrials.gov NCT number, FDA approval letter, regulatory filing).

### `confidence_flag`

An indicator of the editorial confidence level. Examples: "High — based on FDA approval record", "Moderate — based on active Phase 3 trial record", "Lower — early-phase, limited public data."

## Valid example

**Title:**
Luxturna for RPE65-mediated inherited retinal disease

**Endpoint type:**
FDA approval

**Endpoint stage or status:**
FDA Approved (2017)

**Endpoint summary:**
FDA approval of voretigene neparvovec-rzyl for patients with confirmed biallelic RPE65 mutation-associated retinal dystrophy.

**Disease or condition:**
Leber congenital amaurosis type 2 (RPE65 mutation)

**Intervention or asset:**
Voretigene neparvovec (AAV2-RPE65)

**Lineage summary:**
Traces backward through RPE65 biology, inherited retinal degeneration, AAV vector development, animal models, clinical translation, and subretinal delivery.

**Tags:**
RPE65, AAV, inherited retinal disease, gene therapy, retinal biology

**Source links:**
FDA BLA 761036; ClinicalTrials.gov NCT00999609

**Confidence flag:**
High — based on FDA approval record

## Invalid example 1

**Title:**
Gene therapy for inherited retinal disease

**Reason invalid:**
This is a therapy/disease cluster, not a concrete endpoint.

## Invalid example 2

**Title:**
Cancer immunotherapy / checkpoint inhibitors

**Reason invalid:**
This is a broad treatment cluster. It may become a concept page or later interactive cluster, but it should not be a public lineage card unless anchored to a specific trial, approval, or regulatory milestone.

## Core rule

No endpoint, no public lineage card.
