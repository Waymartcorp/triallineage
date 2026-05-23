# ClinicalTrials.gov Intake Path

Version: 1.0  
Status: Active  
Last updated: 2026-05-22

---

## 1. Purpose

This document describes the automated ClinicalTrials.gov intake path for the TrialLineage Production Room. It fetches all recently posted and upcoming interventional clinical trials (Phase 1–3) from the ClinicalTrials.gov v2 API, maps them into the `production_signals` table in Supabase, and makes them available for human classification.

This is a broad scan. It is intentionally not filtered by disease area or therapeutic focus. The Production Room's job is to classify what comes in — the intake path's job is to capture everything relevant.

No AI, no summarization, no scoring, no automatic case generation.

---

## 2. Scope of the scan

The script runs two queries on each execution:

| Query | Filter logic | Purpose |
|---|---|---|
| Recently posted | Studies first posted in the last 30 days | Catch newly registered trials |
| Upcoming start | Studies with start dates within the next 6 months | Catch trials about to begin enrollment |

Both queries are additionally filtered to:
- **Interventional studies only** (excludes observational, expanded access, etc.)
- **Phase 1, Phase 2, Phase 3, or Early Phase 1** (excludes Phase 4 and non-phased studies)
- **Status:** Recruiting, Not Yet Recruiting, Active Not Recruiting, or Enrolling by Invitation

This produces a manageable volume while capturing the trials most relevant to TrialLineage's editorial mission.

---

## 3. ClinicalTrials.gov v2 API

- **Endpoint:** `https://clinicaltrials.gov/api/v2/studies`
- **Authentication:** None required (public API)
- **Rate limit:** ~50 requests per minute
- **Max page size:** 1000 records
- **Pagination:** Token-based (`nextPageToken` / `pageToken`)
- **Safety cap:** The script fetches a maximum of 10 pages per query (10,000 records)

---

## 4. Fields fetched

| ClinicalTrials.gov field | API path |
|---|---|
| NCT ID | `protocolSection.identificationModule.nctId` |
| Brief title | `protocolSection.identificationModule.briefTitle` |
| Official title | `protocolSection.identificationModule.officialTitle` |
| Conditions | `protocolSection.conditionsModule.conditions` |
| Keywords | `protocolSection.conditionsModule.keywords` |
| Overall status | `protocolSection.statusModule.overallStatus` |
| Phases | `protocolSection.designModule.phases` |
| Brief summary | `protocolSection.descriptionModule.briefSummary` |
| Last update posted date | `protocolSection.statusModule.lastUpdatePostDateStruct.date` |
| First posted date | `protocolSection.statusModule.studyFirstPostDateStruct.date` |
| Start date | `protocolSection.statusModule.startDateStruct.date` |
| Lead sponsor | `protocolSection.sponsorCollaboratorsModule.leadSponsor.name` |
| Collaborators | `protocolSection.sponsorCollaboratorsModule.collaborators[].name` |
| Interventions | `protocolSection.armsInterventionsModule.interventions` |

---

## 5. Mapping into production_signals

| production_signals field | Source |
|---|---|
| `title` | `briefTitle` from the study record |
| `disease_area` | First 5 entries in `conditions` array (or keywords fallback), joined with "; " |
| `source` | Always `'ClinicalTrials.gov'` |
| `source_type` | Always `'Trial registration'` |
| `date_detected` | `lastUpdatePostDate` or `studyFirstPostDate`, whichever is available |
| `priority` | Always `'Medium'` (human reviewer can escalate) |
| `candidate_type` | Always `'Background / supporting'` (human reviewer classifies) |
| `status` | Always `'New'` |
| `editorial_note` | Auto-generated: source attribution + phase + sponsor + collaborators + interventions |
| `external_link` | `https://clinicaltrials.gov/study/{nctId}` |
| `brief_summary` | Official title (if distinct) + `briefSummary` from the study (truncated to 1200 chars) |
| `trial_identifier` | `nctId` |
| `sponsor_name` | Lead sponsor name |
| `intervention_names` | Up to 5 intervention names, joined with "; " |
| `collaborator_names` | Collaborator institution names, joined with "; " |

---

## 6. Duplicate handling

Three layers of protection prevent duplicate inserts:

**Layer 1 — Application-level (primary):** Before inserting, the script loads all existing `trial_identifier` values from `production_signals` into an in-memory Set. Any study whose NCT ID already exists is skipped.

**Layer 2 — Application-level (fallback):** For rows in the database that lack a `trial_identifier` (e.g. manually entered signals), the script loads composite keys (`title + source + date_detected`). A new record is skipped if its composite matches.

**Layer 3 — Database-level:** A partial unique index (`idx_production_signals_trial_identifier_unique`) on `trial_identifier WHERE trial_identifier IS NOT NULL` rejects duplicates at the PostgreSQL level. See migration `003_add_trial_identifier_unique_index.sql`.

The in-memory sets are updated during a single run, so a study appearing in both queries (recently posted AND upcoming start) is only inserted once.

---

## 7. Operational notes

- **Batch inserts:** Records are inserted in batches of 200 to avoid Supabase payload limits.
- **Rate limiting:** 1.2 seconds between API pages to stay well under ClinicalTrials.gov's rate limit.
- **Idempotent:** Running the script multiple times is safe — duplicates are always skipped.
- **No scheduling yet:** Run manually with `npx tsx scripts/fetch-clinicaltrialsgov-signals.ts`. Cron or scheduled execution can be added later.
- **No filtering by editorial interest:** All matching records are stored. Human reviewers classify them in the Production Room.

---

## 8. Running the script

```bash
npx tsx scripts/fetch-clinicaltrialsgov-signals.ts
```

Requires `.env.local` (or shell environment) with:
```
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

---

## 9. Schema additions (migration 004)

Three nullable text columns were added to `production_signals` to support direct searchability:

| Column | Content |
|---|---|
| `sponsor_name` | Lead sponsor name (e.g. "Pfizer", "National Cancer Institute") |
| `intervention_names` | Drug/program names from the trial, semicolon-separated |
| `collaborator_names` | Collaborating institution names, semicolon-separated |

These are queried by the Production Room search alongside `title`, `disease_area`, `editorial_note`, etc.

Existing rows (inserted before this change) will have NULL in these columns. Re-running the intake script will not backfill them — only new inserts populate the new fields. A one-time backfill script can be written if needed.
