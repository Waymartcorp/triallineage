# ClinicalTrials.gov Intake Path

Version: 0.1  
Status: Active  
Last updated: 2026-05-22

---

## 1. Purpose

This document describes the first real automated intake path for the TrialLineage Production Room. It fetches trial records from ClinicalTrials.gov, maps them into the `production_signals` table in Supabase, and makes them available for human classification in the Production Room.

This is version 1. It is intentionally narrow: fetch, map, dedupe, store. No AI, no summarization, no scoring, no automatic case generation.

---

## 2. ClinicalTrials.gov as the first real automated source

ClinicalTrials.gov is the most structured, regulated, and publicly accessible registry of human clinical trials. It is the natural first source for TrialLineage because:

- Registration is legally required for most trials in the US.
- Records are structured with standardized fields (NCT ID, phase, status, conditions, interventions, sponsors).
- The v2 API returns JSON, supports pagination, and requires no authentication.
- Updates to trial status (recruiting → active → completed) are posted in the registry.

The intake script queries the v2 API for recently posted or updated studies matching TrialLineage's focus areas, then stores them as Production Room signals.

---

## 3. Fields fetched from ClinicalTrials.gov

The script requests these fields from each study record:

| ClinicalTrials.gov field | Path in API response |
|---|---|
| NCT ID | `protocolSection.identificationModule.nctId` |
| Brief title | `protocolSection.identificationModule.briefTitle` |
| Conditions | `protocolSection.conditionsModule.conditions` |
| Overall status | `protocolSection.statusModule.overallStatus` |
| Phases | `protocolSection.designModule.phases` |
| Brief summary | `protocolSection.descriptionModule.briefSummary` |
| Last update posted date | `protocolSection.statusModule.lastUpdatePostDate` |
| First posted date | `protocolSection.statusModule.studyFirstPostDate` |
| Lead sponsor | `protocolSection.sponsorCollaboratorsModule.leadSponsor.name` |
| Interventions | `protocolSection.armsInterventionsModule.interventions` |

---

## 4. Mapping into production_signals

| production_signals field | Source |
|---|---|
| `title` | `briefTitle` from the study record |
| `disease_area` | First entry in `conditions` array |
| `source` | Always `'ClinicalTrials.gov'` |
| `source_type` | Always `'Trial registration'` |
| `date_detected` | `lastUpdatePostDate` or `studyFirstPostDate`, whichever is more recent |
| `priority` | Always `'Medium'` (human reviewer can escalate) |
| `candidate_type` | Always `'Background / supporting'` (human reviewer classifies) |
| `status` | Always `'New'` |
| `editorial_note` | Always `'Imported automatically from ClinicalTrials.gov'` |
| `external_link` | `https://clinicaltrials.gov/study/{nctId}` |
| `brief_summary` | `briefSummary` from the study (truncated if very long) |
| `trial_identifier` | `nctId` |

---

## 5. Duplicate handling

Version 1 uses a simple deduplication strategy:

1. **Primary key: `trial_identifier`** — Before inserting a row, check if a row with the same `trial_identifier` (NCT number) already exists in `production_signals`. If it does, skip the insert.

2. **Fallback: title + date_detected** — If for any reason `trial_identifier` is missing (should not happen for ClinicalTrials.gov records, but as a safety check), check for an existing row with the same `title` and `date_detected`.

This prevents the same trial from being logged twice on repeated runs of the script.

---

## 6. Version 1 scope

This intake path is intentionally narrow:

- **No AI.** No summarization, scoring, or classification is performed. Signals are stored as-is with default handling values.
- **No scheduling.** The script is run manually. Cron or scheduled execution can be added later.
- **No filtering by editorial interest.** All matching records are stored. Human reviewers classify them.
- **Review-first.** Every imported signal enters the Production Room with status `'New'` and candidate_type `'Background / supporting'`. A human must review and reclassify before any editorial action occurs.

The script is a fetch-and-store tool. It builds the Production Room's memory. Classification and editorial decisions happen afterward, by humans, in the Production Room.
