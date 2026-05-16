# TrialLineage Production Signals Table

Version: 0.1  
Status: Draft  
Last updated: 2026-05-16

---

## 1. Purpose

This document defines the first database table for storing trial-related signals logged in the TrialLineage Production Room. In version 1, signals are manually seeded — entered by hand rather than ingested automatically from external sources. The table provides a consistent, queryable structure for these manually entered items so the Production Room page can display, filter, and act on them.

The table is designed to be simple enough for manual entry, complete enough to support triage and classification, and structured enough that future automation (Engine intake, source connectors) can write to the same schema without redesign.

---

## 2. Table name

```
production_signals
```

---

## 3. Required fields

| Field | Type | Constraints | Description |
|---|---|---|---|
| `id` | UUID | Primary key, auto-generated | Unique identifier for each signal. |
| `title` | Text | Not null, max 300 chars | Short, descriptive title summarizing the signal. |
| `disease_area` | Text | Not null | Primary disease area (e.g., "Pancreatic cancer"). |
| `source` | Text | Not null | Where the signal was detected (e.g., "ClinicalTrials.gov", "PubMed"). |
| `source_type` | Text | Not null | What kind of event produced the signal (e.g., "Trial registration", "Journal publication"). |
| `date_detected` | Date | Not null | When the signal was first detected or noticed. |
| `priority` | Text | Not null, one of: `high`, `medium`, `low` | How urgently the signal should be reviewed. |
| `candidate_type` | Text | Not null, one of: `new_case_candidate`, `update_existing_case`, `background_supporting`, `ignore` | The handling classification assigned during triage. |
| `status` | Text | Not null, default `new`, one of: `new`, `reviewed`, `in_progress`, `published`, `ignored` | Where the signal is in the Production Room workflow. |
| `editorial_note` | Text | Not null | Brief human-written note explaining relevance, context, or caution. |
| `created_at` | Timestamp | Not null, auto-generated, default now | When the record was created in the database. |

---

## 4. Optional fields

| Field | Type | Constraints | Description |
|---|---|---|---|
| `related_case` | Text | Nullable | Title of an existing TrialLineage case page this signal connects to. |
| `related_concepts` | Text[] | Nullable | Array of concept page titles this signal may be relevant to. |
| `external_link` | Text | Nullable | Direct URL to the primary source (registry, publication, press release). |
| `brief_summary` | Text | Nullable, max 1000 chars | Plain-language summary of the signal's content (2–4 sentences, factual). |
| `trial_identifier` | Text | Nullable | Registry identifier if known (e.g., NCT number, EudraCT number). |
| `confidence_flag` | Text | Nullable | Indicates that the signal may need cross-referencing. Can be a short note (e.g., "Source is company press release — verify against registry") or null if no caution is needed. |

---

## 5. Why each field exists

### Required fields

- **`id`** — Every signal needs a stable unique identifier for reference, linking, and deduplication.
- **`title`** — The primary label seen when scanning the signal log. Must be specific enough to distinguish signals at a glance.
- **`disease_area`** — Enables filtering by disease. The Production Room needs to route signals to the right editorial context.
- **`source`** — Identifies where the signal came from. Combined with the source-priority order, this shapes how much initial trust the signal carries.
- **`source_type`** — Distinguishes between different kinds of events from the same source. A trial registration and a results posting from ClinicalTrials.gov are different signal types.
- **`date_detected`** — Establishes chronology. Prevents old signals from being treated as new and supports time-based review.
- **`priority`** — Determines review urgency. High-priority signals should be reviewed first. Not a judgment about the trial's importance.
- **`candidate_type`** — The core classification output. This is the decision grammar applied: how should this signal be handled inside TrialLineage?
- **`status`** — Tracks workflow state. Prevents double-handling and identifies signals that have fallen through without action.
- **`editorial_note`** — Provides human context that structured fields cannot capture. Why this signal matters to TrialLineage specifically, what to check, what it connects to.
- **`created_at`** — Audit field. Records when the signal was entered into the system, distinct from when the underlying event was detected.

### Optional fields

- **`related_case`** — Links the signal to existing published content. Saves reviewers from having to remember which cases are live.
- **`related_concepts`** — Same function for concept pages. Stored as an array to support signals relevant to multiple concepts.
- **`external_link`** — One-click access to the primary source for verification. Especially important for signals that need cross-referencing.
- **`brief_summary`** — Enough context for a reviewer to make a classification decision without reading the full source document.
- **`trial_identifier`** — Supports deduplication. Two signals referencing the same NCT number are likely about the same trial and can be flagged.
- **`confidence_flag`** — Signals to reviewers that extra caution is warranted. Particularly useful for lower-priority sources where the information may be preliminary or selectively framed.

---

## 6. Version 1 simplicity note

This table is intentionally minimal. It stores the fields needed for manual signal entry, Production Room display, and triage workflow. It does not include:

- Automated ingestion metadata (batch IDs, pipeline timestamps, retry counts)
- Multi-user attribution (who entered the signal, who reviewed it, who approved it)
- Version history or edit tracking
- Full-text search indexes
- Relational foreign keys to case or concept tables

These may be added in future versions as the Production Room matures and the Engine begins automated intake. For now, the table should be easy to seed manually, easy to query for the Production Room page, and easy to extend later without breaking existing records.

If a field is added to the table but consistently left empty after the first month of use, it should be reconsidered.

---

## 7. How this table supports the Production Room workflow

The `production_signals` table is the single data source for the Production Room page. The workflow it supports:

1. **Signal entry.** A human reviewer manually creates a row when a trial-related signal is noticed. Required fields are filled in at creation time. Optional fields are added as available.

2. **Signal display.** The Production Room page queries the table and displays signals as a filterable list, sorted by date detected or priority. Filters use `candidate_type`, `status`, `priority`, and `disease_area`.

3. **Triage and classification.** A reviewer reads the signal, consults the decision grammar, and sets the `candidate_type` field. The `status` field is updated to reflect where the signal is in the workflow (reviewed, in progress, etc.).

4. **Editorial handling.** For signals classified as new case candidates or updates, the `editorial_note`, `related_case`, and `related_concepts` fields guide the next step. For background/supporting signals, the row is retained in the table for future reference. For ignored signals, `status` is set to `ignored` and the row is excluded from active views.

5. **Continuity.** Because every signal is stored with a consistent structure, the Production Room builds a running log of what TrialLineage has noticed, how it was classified, and what was done about it. This log is the platform's institutional memory for trial-related signals.
