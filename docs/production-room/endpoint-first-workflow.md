# Production Room Endpoint-First Workflow

## Purpose

This file defines how the Production Room supports TrialLineage's repeatable page-building strategy.

## Core principle

The Production Room does not build from topics, therapy clusters, or broad scientific domains. It builds from concrete clinical/FDA-type endpoints.

## Repeatable unit

- Phase 1 trial
- Phase 2 trial
- Phase 3 trial
- FDA approval
- FDA advisory/regulatory milestone
- Approval-adjacent clinical milestone

## Why endpoint-first matters

Endpoints are searchable, verifiable, structured objects. They allow the platform to apply the same criteria and process repeatedly. This supports the long-term goal of a semi-autonomous, criteria-driven public science system.

## Workflow

1. Ingest trial/FDA signal
2. Verify the endpoint
3. Extract structured fields:
   - Trial identifier or regulatory reference
   - Disease or condition
   - Intervention or asset
   - Sponsor/collaborators
   - Phase/stage
   - Endpoint date or detected date
   - Source links
4. Generate endpoint summary
5. Identify key scientific concepts
6. Build reverse-lineage scaffold
7. Search for enabling discoveries, methods, branch points, failed paths, and translational steps
8. Preserve source trail
9. Add confidence flags and uncertainty notes
10. Route for human review
11. Publish only when credible

## Important

The system may eventually surface similarities across lineages, but clusters emerge from endpoint lineages. Clusters do not define the initial page object.

## Future feature

A later interactive explorer may allow users to search relationships, mechanisms, delivery systems, shared targets, or scientific clusters across endpoint lineages. That is a later interpretive layer, not the main Lineage Library structure.

## Donor-facing implication

TrialLineage is building a repeatable, transparent public-science engine. The automation should be described as criteria-driven, source-tracked, confidence-labeled, and human-reviewable — not as unsupported AI-generated science.
