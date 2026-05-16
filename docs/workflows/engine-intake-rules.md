# TrialLineage Engine: Intake Rules

Version: 0.1  
Status: Draft  
Last updated: 2026-05-16

---

## 1. What the Engine is

The TrialLineage Engine is the internal system responsible for detecting, evaluating, and routing candidate signals into the Production Room. It is not a content generator. It is an intake and triage layer that scans defined sources, applies structured rules to determine relevance, and outputs structured intake objects for human editorial review.

The Engine does not publish anything. It does not write case pages or concept pages. It surfaces candidates and updates, attaches context, and delivers them to the Production Room where editorial decisions are made by humans.

### Principles

- **Signal detection, not content creation.** The Engine identifies that something relevant has happened. It does not interpret, summarize for a public audience, or draft editorial content.
- **Structured output.** Every item the Engine surfaces must conform to a defined intake object schema so the Production Room can display, filter, and act on it consistently.
- **Conservative flagging.** It is better to surface a borderline signal for human review than to miss a relevant one. It is also better to mark confidence honestly than to overstate relevance.
- **Source transparency.** Every intake item must cite the specific source that triggered it, with enough information for a human reviewer to verify the signal independently.

---

## 2. Sources scanned first

The Engine scans sources in a defined priority order. Phase 1 sources are scanned at launch. Later phases add sources as the system matures.

### Phase 1 sources (launch)

| Source | What it provides | Scan frequency |
|---|---|---|
| ClinicalTrials.gov | New trial registrations, status updates, results postings for relevant disease areas and targets | Daily |
| PubMed / Medline | New publications matching defined keyword and MeSH term queries | Daily |
| FDA drug approval announcements | New approvals, accelerated approvals, breakthrough therapy designations | As published |
| bioRxiv / medRxiv preprints | Early-release research relevant to active cases or watched targets | Daily |

### Phase 2 sources (planned)

| Source | What it provides |
|---|---|
| ASCO, AACR, ESMO conference abstracts | Conference presentations with clinical data |
| EMA regulatory decisions | European regulatory milestones |
| Patent filings (USPTO, EPO) | New composition-of-matter or method-of-treatment patents for watched targets |
| Internal editorial flags | Manual signals from the editorial team entered directly into the Production Room |

### Source configuration

Each source has a query configuration that defines:

- **Target keywords:** gene names, drug names, mechanism classes (e.g., "KRAS", "daraxonrasib", "covalent inhibitor")
- **Disease area filters:** limited to active focus areas (see section 3)
- **Exclusion terms:** terms that indicate irrelevance (e.g., "veterinary", "plant biology", "in silico only" when scanning for clinical signals)

---

## 3. Disease areas focused on first

The Engine does not scan all of oncology. It focuses on disease areas where TrialLineage has active or planned cases.

### Phase 1 focus areas

| Disease area | Rationale |
|---|---|
| Pancreatic ductal adenocarcinoma | Active case (daraxonrasib). Primary disease area at launch. |
| KRAS-mutant cancers (all types) | The molecular target behind the first case. Signals in lung, colorectal, or other KRAS-mutant cancers may be relevant to existing concept pages or to future cases. |

### Phase 2 focus areas (planned expansion)

| Disease area | Rationale |
|---|---|
| Gastric / gastroesophageal cancer | Candidate case area under evaluation. |
| HER2-directed therapy across tumor types | Candidate lineage with reusable concept pages. |
| Additional targeted therapies in solid tumors | To be defined based on editorial priorities. |

### Rules for focus area changes

- Adding a new focus area requires an editorial decision documented in the Production Room.
- The Engine does not autonomously expand its scan scope.
- Removing a focus area requires confirming that no active cases or pending intake items depend on it.

---

## 4. What counts as a candidate case

A candidate case is a signal that could justify creating a new TrialLineage case page. Not every signal is a candidate case. The Engine applies the following criteria.

### Required criteria (all must be met)

1. **A specific drug or therapy is identifiable.** The signal must reference a named compound, biologic, or therapeutic modality — not a general research direction.
2. **The therapy is in or entering human clinical trials (phase 1, 2, or 3).** Preclinical-only findings are not candidate cases. They may be candidate updates (see section 5).
3. **The disease area is within the Engine's active focus areas** or is flagged as a planned expansion area.
4. **A plausible scientific lineage exists.** The therapy must have a traceable discovery history — basic science, enabling fields, translational work — that TrialLineage could explain in its layered format.

### Preferred but not required

- The therapy addresses an unmet medical need or represents a novel mechanism of action.
- The scientific lineage involves branch points, failed approaches, or convergent discoveries that make it editorially interesting.
- The lineage would reuse or extend existing TrialLineage concept pages rather than requiring an entirely new set.

### What does not count as a candidate case

- A general research publication with no connection to a specific therapy in trials.
- A therapy already covered by an existing TrialLineage case (this is a candidate update, not a new case).
- A biosimilar, reformulation, or combination regimen that does not introduce a meaningfully new scientific lineage.

---

## 5. What counts as an update to an existing case

An update is a signal that is relevant to a case page or concept page that already exists on TrialLineage.

### Types of updates

| Update type | Description | Example |
|---|---|---|
| **Trial milestone** | A change in the status of a clinical trial tracked by an existing case | Daraxonrasib trial advances from phase 1 to phase 2 |
| **New clinical data** | Published or presented results from a trial tracked by an existing case | Interim response data from the daraxonrasib phase 1 |
| **Regulatory event** | FDA or EMA action related to a therapy tracked by an existing case | Breakthrough therapy designation for daraxonrasib |
| **Scientific context update** | A publication or finding that affects the accuracy or completeness of an existing concept page | New structural data on KRAS switch-II pocket dynamics |
| **Lineage extension** | A finding that adds a new branch, side path, or historical connection to an existing case lineage | Discovery of a new resistance mechanism relevant to covalent KRAS inhibitors |
| **Factual correction** | Information that contradicts or refines a specific claim on an existing page | Updated attribution for a historical discovery cited in a timeline |

### Update priority

- **High:** Trial milestone, regulatory event, or factual correction. These should be reviewed within 48 hours of detection.
- **Medium:** New clinical data or lineage extension. Review within one week.
- **Low:** Scientific context update that does not affect accuracy. Review at next editorial cycle.

---

## 6. What should be ignored

The Engine should not surface signals that meet any of the following criteria.

### Ignore rules

1. **Duplicate of an already-surfaced signal.** If the same trial registration, publication, or event has already been delivered to the Production Room, do not surface it again. Deduplication is based on source ID (e.g., NCT number, PMID, DOI).
2. **Outside all active and planned focus areas** with no connection to existing cases or concept pages.
3. **Preclinical-only findings with no plausible near-term clinical relevance.** Basic science publications are not ignored categorically, but they are only surfaced if they directly affect the accuracy of an existing concept page or clearly enable a new clinical development.
4. **News articles, press releases, or opinion pieces** that do not contain primary data or verifiable clinical/regulatory information. The Engine scans primary sources, not secondary reporting.
5. **Conference abstracts that duplicate already-published journal articles** with the same data. Prefer the journal publication.
6. **Retracted publications.** If a previously surfaced publication is retracted, surface a factual correction signal rather than the original publication.
7. **Signals with confidence below the minimum threshold** (see section 7, confidence field). Items scored below "Low" confidence should be logged but not delivered to the Production Room.

---

## 7. Structured intake object

Every signal the Engine delivers to the Production Room must conform to this schema.

### Intake object fields

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Unique identifier for this intake item (generated by the Engine) |
| `title` | string | Yes | Short, descriptive title summarizing the signal |
| `category` | enum | Yes | One of: `new_trial_signal`, `potential_new_case`, `update`, `needs_review` |
| `status` | enum | Yes | Initial status, always `new` when first created by the Engine |
| `disease_area` | string | Yes | Primary disease area (e.g., "Pancreatic cancer") |
| `target_or_drug` | string | No | Named drug, compound, or molecular target if applicable |
| `trigger` | string | Yes | What source event triggered this signal (e.g., "Clinical trial registry update", "Journal publication") |
| `source_id` | string | Yes | Unique identifier from the source (NCT number, PMID, DOI, FDA application number) |
| `source_url` | string | Yes | Direct URL to the source record |
| `detected_at` | ISO 8601 date | Yes | When the Engine detected the signal |
| `confidence` | enum | Yes | One of: `high`, `medium`, `low` |
| `confidence_rationale` | string | Yes | One-sentence explanation of why this confidence level was assigned |
| `summary` | string | Yes | Plain-language summary of the signal (2–4 sentences, factual, no interpretation) |
| `why_flagged` | string | Yes | Why this signal is relevant to TrialLineage (1–2 sentences) |
| `suggested_action` | string | Yes | Recommended next step for the editorial team |
| `related_case` | string | No | Title of the existing TrialLineage case this relates to, if any |
| `related_concepts` | string[] | No | List of existing concept page titles this relates to, if any |
| `matched_keywords` | string[] | Yes | Which keywords or query terms matched this signal |
| `dedup_hash` | string | Yes | Hash used for deduplication (derived from source_id and source type) |

### Example intake object

```json
{
  "id": "int-20260514-001",
  "title": "New KRAS G12D inhibitor enters phase 1 in pancreatic cancer",
  "category": "new_trial_signal",
  "status": "new",
  "disease_area": "Pancreatic cancer",
  "target_or_drug": "KRAS G12D",
  "trigger": "Clinical trial registry update",
  "source_id": "NCT06XXXXXX",
  "source_url": "https://clinicaltrials.gov/study/NCT06XXXXXX",
  "detected_at": "2026-05-14T08:00:00Z",
  "confidence": "high",
  "confidence_rationale": "Phase 1 trial in primary focus area targeting the same mutation as the active daraxonrasib case.",
  "summary": "A second KRAS G12D-directed compound has entered a phase 1 dose-escalation trial in advanced pancreatic ductal adenocarcinoma. The trial is sponsored by a mid-size biotech and uses a non-covalent binding strategy.",
  "why_flagged": "New phase 1 trial targeting KRAS G12D in pancreatic cancer, directly relevant to the daraxonrasib case and to multiple concept pages.",
  "suggested_action": "Review trial registry entry, assess novelty relative to daraxonrasib case, decide whether to create a new case or add a note.",
  "related_case": "Daraxonrasib in pancreatic cancer",
  "related_concepts": ["Medicinal chemistry", "Clinical trial design", "Translational oncology"],
  "matched_keywords": ["KRAS", "G12D", "pancreatic cancer", "phase 1"],
  "dedup_hash": "sha256:abc123..."
}
```

### Schema versioning

This schema is version `0.1`. Changes to required fields or field semantics require a version increment and a corresponding update to the Production Room display logic.

---

## Appendix: Review and iteration

This document is a working specification. It will be revised as the Engine is built, tested, and refined based on the quality and relevance of the signals it surfaces. Editorial judgment remains the final authority on what TrialLineage publishes. The Engine supports that judgment; it does not replace it.
