# Internal vs Public Signal Layers

## Purpose

TrialLineage operates across three distinct layers of content:

1. **Internal signal intake** — broad, structured collection of trial-related events for editorial triage.
2. **Public-facing signal/watch layer** — a curated, readable surface where users can browse what's happening in clinical science right now.
3. **Lineage treatment layer** — deep, selective explainer pages that trace the full scientific history behind a breakthrough.

These layers serve different audiences, require different source material, and should be built and maintained separately.

## Internal Production Room

The internal Production Room is an operational workspace. It should continue to pull from:

- ClinicalTrials.gov (broad phase scans, new registrations)
- FDA (pending approvals, regulatory actions)
- Structured, official, machine-readable sources
- Any source that provides reliable trial-level metadata

Its purpose is breadth and completeness. Every relevant signal gets logged, triaged, and routed — regardless of whether it's interesting to a general audience. The Production Room is where editorial decisions begin, not where they're presented.

## Public-facing signal/watch layer

The public-facing signal layer serves a different function. It should be built from:

- Popular press coverage of clinical developments
- Mainstream science journalism (e.g. STAT, Nature news, NYT health)
- Selected public-facing stories that are already narratively legible
- Sources where language, framing, and context are already accessible

This layer is not a filtered view of the Production Room. It's a separately curated surface designed to be immediately understandable to someone without a clinical background.

## Why the layers should differ

Each layer has a different primary requirement:

| Layer | Primary requirement |
|-------|-------------------|
| Internal intake | Breadth and structure |
| Public watch layer | Readability, accessibility, and relevance |
| Lineage treatment | Depth and selectivity |

Conflating these creates problems. An internal layer optimised for readability would miss signals. A public layer built from raw ClinicalTrials.gov data would be impenetrable. A lineage page built from press coverage would lack scientific precision.

## Relationship to lineage treatment

The public-facing signal layer can function as an entry point into the deeper lineage layer. A user browsing current signals might see a development and want to understand:

- *Trace lineage* — what came before this trial?
- *See how we got here* — what's the full scientific path?
- *Run reverse history* — what foundational work made this possible?

The signal layer creates the moment of curiosity. The lineage layer answers it.

## Design principle

The public-facing layer should not be the internal Production Room made public. It is a distinct surface with its own:

- Source selection
- Editorial voice
- Visual design
- Level of detail

The Production Room is a workbench. The public signal layer is a reading surface. They share a pipeline but not a presentation.

## Next implications

Future work should separately define:

- **Internal intake sources** — what feeds the Production Room (APIs, registries, regulatory databases)
- **Public watch-layer sources** — what feeds the public signal surface (press, curated journalism, selected announcements)
- **Candidate ranking rules** — how a signal from either layer gets elevated to full TrialLineage treatment

These are three different editorial decisions and should be documented independently.
