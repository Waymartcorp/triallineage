# FDA Pending Approvals Intake Path

Version: 1.0  
Status: Active  
Last updated: 2026-05-22

---

## 1. Purpose

This document describes the FDA pending approvals intake path for the TrialLineage Production Room. It fetches recent drug applications (NDA and BLA original submissions) from the openFDA Drugs@FDA API and logs them as production signals.

These represent drugs currently under FDA review — candidates that may be approved within the coming months. They are relevant to TrialLineage because an FDA approval is a major milestone in a drug's lineage and often triggers new case pages or updates to existing ones.

No AI, no summarization, no scoring.

---

## 2. What counts as "pending"

The openFDA API provides historical submission records. The script identifies likely-pending applications by:

1. Filtering for **original (ORIG) submissions** filed in the last 12 months
2. Excluding applications whose most recent submission already has status `AP` (approved)

This is a heuristic — openFDA does not expose a real-time "currently pending" status field. Some applications identified this way may have been withdrawn, received a Complete Response Letter, or been decided through channels not yet reflected in the data.

Human reviewers in the Production Room verify and classify each signal.

---

## 3. openFDA Drugs@FDA API

- **Endpoint:** `https://api.fda.gov/drug/drugsfda.json`
- **Authentication:** None required (public API, but optional API key raises rate limits)
- **Rate limit:** 40 requests per minute without key; 240 with key
- **Max results per request:** 100 (API enforced)
- **Pagination:** Offset-based (`skip` parameter)
- **Safety cap:** The script processes a maximum of 1,000 applications per run

---

## 4. Fields used from openFDA

| Drugs@FDA field | Purpose |
|---|---|
| `application_number` | Unique identifier (NDA or BLA number) |
| `sponsor_name` | Pharmaceutical company |
| `submissions[].submission_type` | Type: ORIG, SUPPL, etc. |
| `submissions[].submission_status` | Status code (AP = approved) |
| `submissions[].submission_status_date` | Date of most recent status |
| `submissions[].submission_class_code_description` | New molecular entity, etc. |
| `products[].brand_name` | Brand name of the product |
| `products[].active_ingredients[].name` | Active drug substance |
| `products[].dosage_form` | Tablet, injection, etc. |
| `products[].route` | Administration route |
| `openfda.pharm_class_epc` | Pharmacologic class |

---

## 5. Mapping into production_signals

| production_signals field | Source |
|---|---|
| `title` | Constructed: brand name + active ingredients + "FDA application" |
| `disease_area` | First `pharm_class_epc` value, or product route as fallback |
| `source` | Always `'FDA (Drugs@FDA)'` |
| `source_type` | Always `'Regulatory notice'` |
| `date_detected` | Most recent `submission_status_date` |
| `priority` | Always `'High'` (FDA decisions are editorially significant) |
| `candidate_type` | Always `'Background / supporting'` (human reviewer classifies) |
| `status` | Always `'New'` |
| `editorial_note` | Auto-generated: source attribution + application number + type + sponsor + dosage form + class |
| `external_link` | Link to FDA Drugs@FDA page for the application |
| `brief_summary` | Auto-generated: active ingredients, brand, sponsor, submission type, latest status |
| `trial_identifier` | `application_number` (e.g., NDA214122 or BLA761052) |

---

## 6. Duplicate handling

Three layers of protection prevent duplicate inserts:

**Layer 1 — Application-level (primary):** Before inserting, the script loads all existing `trial_identifier` values from `production_signals` into an in-memory Set. Any application whose number already exists is skipped.

**Layer 2 — Application-level (fallback):** For rows in the database that lack a `trial_identifier` (e.g. manually entered signals), the script loads composite keys (`title + source + date_detected`). A new record is skipped if its composite matches.

**Layer 3 — Database-level:** A partial unique index (`idx_production_signals_trial_identifier_unique`) on `trial_identifier WHERE trial_identifier IS NOT NULL` rejects duplicates at the PostgreSQL level. See migration `003_add_trial_identifier_unique_index.sql`.

Idempotent: running the script multiple times produces no duplicates.

---

## 7. Limitations

- **No PDUFA dates.** The openFDA API does not include PDUFA target action dates. These are disclosed by sponsors in SEC filings and press releases, not by FDA in structured data.
- **Retrospective data.** Some applications may already be decided by the time they appear in the openFDA data (data refreshes daily on weekdays).
- **No indication field.** The Drugs@FDA dataset does not include a structured "indication" field. Disease area is inferred from pharmacologic class or route.
- **Supplements excluded.** Only original (ORIG) submissions are captured — supplemental applications (new indications, new formulations) are excluded in v1.

Future versions may:
- Incorporate PDUFA dates from SEC 8-K filings or curated calendars
- Add supplemental BLA/NDA submissions
- Cross-reference with ClinicalTrials.gov NCT IDs

---

## 8. Running the script

```bash
npx tsx scripts/fetch-fda-pending-approvals.ts
```

Requires `.env.local` (or shell environment) with:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```
