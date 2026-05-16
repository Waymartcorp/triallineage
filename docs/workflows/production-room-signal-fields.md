# TrialLineage Production Room: Signal Fields

Version: 0.1  
Status: Draft  
Last updated: 2026-05-16

---

## 1. Purpose

Every trial-related signal that enters the Production Room needs a consistent structure. Without one, signals arrive in different shapes — some with titles but no source, some with a date but no disease area, some with a link but no context — and the Production Room becomes difficult to triage, review, or act on reliably.

This document defines the standard fields that every logged signal should carry. The goal is a structure simple enough to fill out quickly, complete enough to support classification and editorial handling, and consistent enough to allow filtering, sorting, and future automation.

---

## 2. Core principle

All real trial-related signals should be logged in a consistent format. The format is not a quality judgment — it does not determine whether a signal is important. It ensures that every signal, regardless of source or type, carries the minimum information needed for the Production Room to do its job: triage, classify, and route.

Consistency in signal structure is what makes the difference between a usable intake system and an unstructured pile of links and notes.

---

## 3. Required fields

Every signal logged in the Production Room must include the following fields.

| Field | Type | Description |
|---|---|---|
| **Title** | Short text | A clear, descriptive title summarizing the signal. Should be specific enough to distinguish it from other signals at a glance. |
| **Disease area** | Short text | The primary disease area the signal relates to (e.g., "Pancreatic cancer", "Gastric cancer", "Sickle cell disease"). |
| **Source** | Short text | Where the signal was detected (e.g., "ClinicalTrials.gov", "PubMed", "FDA press release", "Company press release"). |
| **Source type** | Short text | What kind of source event produced the signal (e.g., "Trial registration", "Journal publication", "Regulatory milestone", "Results announcement"). |
| **Date detected** | Date | When the signal was first detected or logged. |
| **Priority** | Enum | One of: `High`, `Medium`, `Low`. Indicates how urgently the signal should be reviewed, not how important the trial is in the abstract. |
| **Candidate type** | Enum | One of: `New case candidate`, `Update existing case`, `Background / supporting`, `Ignore`. The handling classification assigned during triage. |
| **Status** | Enum | One of: `New`, `Reviewed`, `In progress`, `Published`, `Ignored`. Tracks where the signal is in the Production Room workflow. |
| **Short editorial note** | Short text | A brief human-written note explaining the signal's relevance, context, or any caution needed. One to two sentences. |

---

## 4. Optional fields

The following fields are not required for every signal but should be filled in when the information is available. They improve the Production Room's ability to connect signals to existing content and to support future editorial work.

| Field | Type | Description |
|---|---|---|
| **Related case** | Short text | The title of an existing TrialLineage case page this signal connects to, if any (e.g., "Daraxonrasib in pancreatic cancer"). |
| **Related concepts** | List of short text | Existing concept page titles this signal may be relevant to (e.g., "Medicinal chemistry", "Structural biology"). |
| **Brief summary** | Text (2–4 sentences) | A plain-language summary of the signal's content. Factual, not interpretive. |
| **External link** | URL | A direct link to the primary source (registry entry, publication, press release, regulatory notice). |
| **Trial identifier** | Short text | The trial's registry identifier if known (e.g., NCT number, EudraCT number). |
| **Caution flag** | Boolean or short text | Indicates that the signal is based on a lower-priority source or that cross-referencing is recommended before editorial action. Can be a simple true/false or a short explanatory note. |

---

## 5. Why each field matters

### Required fields

- **Title** — Allows reviewers to scan the signal log quickly and identify what each item is about without opening it.
- **Disease area** — Enables filtering by disease. Essential for routing signals to the right editorial context.
- **Source** — Tells the reviewer where the signal came from. Combined with the source-priority order, this shapes how much initial trust the signal carries.
- **Source type** — Distinguishes between different kinds of events from the same source (e.g., ClinicalTrials.gov can produce both a new registration and a results posting — these are different signal types).
- **Date detected** — Establishes when the signal entered the system. Supports chronological review and prevents old signals from being treated as new.
- **Priority** — Determines review urgency. High-priority signals should be reviewed within 48 hours. Low-priority signals can wait for the next editorial cycle.
- **Candidate type** — The core classification decision. This is the output of the decision grammar: how should this signal be handled?
- **Status** — Tracks workflow progress. Prevents signals from being reviewed twice or falling through without action.
- **Short editorial note** — Provides human context that structured fields cannot capture. Why this signal matters to TrialLineage specifically, what to watch out for, what it connects to.

### Optional fields

- **Related case** — Connects the signal to existing content. Saves reviewers from having to remember which cases are live.
- **Related concepts** — Same function for concept pages. Helps identify which pages might need updating.
- **Brief summary** — Provides enough context that a reviewer can make a classification decision without reading the full source. Especially useful when the source is a long journal article or a dense registry entry.
- **External link** — Allows one-click access to the primary source for verification or deeper review.
- **Trial identifier** — Supports deduplication. Two signals referencing the same NCT number are likely about the same trial.
- **Caution flag** — Signals to the reviewer that extra verification may be needed. Particularly useful for signals sourced from company press releases or preliminary conference abstracts.

---

## 6. Version 1 scope note

Version 1 of the signal structure should stay simple and usable. The nine required fields and six optional fields defined here are sufficient for intake, triage, and light editorial handling.

Resist the temptation to add fields for:
- Detailed classification taxonomies
- Multi-level approval workflows
- Automated scoring or ranking systems
- Full bibliographic metadata

These may be useful in future versions. In version 1, they would add complexity without proportionate value. The Production Room needs to be fast to use, easy to scan, and reliable enough to prevent signals from being lost. The signal structure should support that — nothing more.

If a field is not being used consistently after the first month of operation, it should be reviewed for removal or conversion to optional.

---

## 7. Quality note

The signal structure is infrastructure, not editorial judgment. It does not determine whether a trial is important or whether a signal deserves attention. It ensures that every signal, once logged, carries enough information for a human reviewer to classify it correctly and act on it appropriately.

Consistency in signal structure is what allows the Production Room to function as a reliable routing system rather than an ad hoc collection of notes. It also lays the groundwork for future automation: if every signal has the same fields, the Engine can eventually assist with pre-classification, deduplication, and priority assignment — without requiring the signal structure to be redesigned.

The standard is: simple enough to fill in without friction, complete enough to support good decisions, and consistent enough to scale.
