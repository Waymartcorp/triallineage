# TrialLineage Lineage Library Principles

## Purpose

This file defines the public Lineage Library architecture and prevents drift into therapy-cluster, domain-first, or topic-first organization.

## Core principle

TrialLineage is endpoint-first.

A public lineage starts from a verified clinical/FDA-type endpoint and traces backward through the scientific and translational history that made that endpoint possible.

## Valid public lineage anchors

- Phase 1 clinical trial
- Phase 2 clinical trial
- Phase 3 clinical trial
- FDA approval
- FDA advisory/regulatory milestone
- Approval-adjacent clinical milestone

The repeatable unit is the endpoint, not a therapy cluster.

## Main rule

The public Lineage Library must not be organized around broad therapy domains, modalities, disease areas, or scientific clusters.

Do not use main library structures or section headings such as:

- Cancer Biology and Targeted Therapy
- Gene Therapy and Delivery
- Cancer immunotherapy / checkpoint inhibitors
- RNA medicines
- Rare disease
- Oncology
- Metabolic disease
- Targeted therapy

Those concepts may appear later as secondary tags, filters, related concepts, or an interactive connection/cluster explorer, but they are not the primary public lineage objects.

## Why this matters

The Production Room is designed to become a repeatable, semi-autonomous page-building system. It can reliably search for trial/FDA endpoint information, extract structured fields, summarize the endpoint, preserve source trails, flag uncertainty, and apply the same reverse-lineage treatment to each endpoint.

It cannot reliably do this if the primary object is a broad cluster like "gene therapy," "checkpoint inhibitors," "GLP-1 therapies," or "targeted oncology."

## Public Lineage Library structure

The main public Lineage Library should be a flat or lightly sortable endpoint-first grid/list.

Requirements:

- No domain section headers
- No therapy-cluster section headers
- No broad platform-lineage cards as main cards
- Each card must name or clearly identify a concrete endpoint
- Endpoint type/stage must be visible
- Endpoint summary must be visible
- Intervention/asset must be visible
- Disease/condition must be visible
- Reverse-lineage summary must be visible
- Tags must be visually secondary

## Where domains and clusters belong

Scientific domains, therapy types, and modalities may appear as:

- Tags on endpoint cards
- Filters (when the library is large enough to warrant them)
- Related concepts linked from lineage pages
- Cross-references between lineages that share upstream science
- A future interactive "cluster" or "connection" explorer

They must never define the main page structure or determine which lineages are built.

## Future feature: interactive cluster explorer

A later interactive explorer may allow users to search relationships, mechanisms, delivery systems, shared targets, or scientific clusters across endpoint lineages. That is a later interpretive layer, not the main Lineage Library structure. Do not implement it until a sufficient number of endpoint lineages exist to make cross-referencing meaningful.

## Core rule to preserve

Endpoint first. Repeatable treatment. Clusters later, if useful.
