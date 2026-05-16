# TrialLineage Case Schema

Canonical schema for a TrialLineage case page. Each case traces a human-disease phase 1–3 trial backward through the scientific lineage that made it possible.

This schema defines the major modules, their fields, and production considerations. It is intended as an internal specification for building and reviewing future case pages.

---

## 1. Case Identity

**What it is:** The top-level metadata that uniquely identifies a case and determines how it appears in navigation, search, and cross-references.

**Why it matters:** Every case needs a stable identity independent of its content. This is the layer that other pages (concept pages, the homepage, future indexes) reference when linking to a case.

### Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `slug` | string | yes | URL-safe identifier, e.g. `daraxonrasib-pancreatic-cancer` |
| `title` | string | yes | Display title, e.g. "Daraxonrasib in pancreatic cancer" |
| `drug_name` | string | yes | Name of the therapeutic candidate |
| `disease_area` | string | yes | Primary disease, e.g. "pancreatic cancer" |
| `target` | string | yes | Molecular target, e.g. "KRAS" |
| `trial_phase` | string | yes | Current highest phase, e.g. "Phase 2" |
| `lineage_fields` | string[] | yes | Ordered list of scientific fields in the lineage chain |
| `status` | enum | yes | `draft`, `review`, `published`, `archived` |
| `created_at` | date | yes | Date the case was first created |
| `last_reviewed` | date | yes | Date of most recent editorial review |

### Automation potential

- `slug` can be auto-generated from `drug_name` + `disease_area`.
- `trial_phase` can be monitored from clinical trial registries (ClinicalTrials.gov), but changes should be flagged for human review before updating the published page.
- `lineage_fields` requires human judgment to define the ordering and inclusion of fields.

### Human review required

- `title` wording — must be accurate and editorially appropriate.
- `lineage_fields` — the selection and ordering of scientific fields is an editorial decision, not derivable from structured data.
- `status` transitions — publishing and archiving decisions are human-owned.

---

## 2. Plain-Language Layer

**What it is:** The topmost content layer on the case page. Written for a general public audience, including readers with no scientific background (target: readable by a 15–18 year old).

**Why it matters:** This is the entry point for most readers. If this layer is unclear, most visitors will leave. It must explain the drug, the disease, the target, and why the scientific lineage matters — all without jargon.

### Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `summary_paragraphs` | string[] | yes | 2–4 paragraphs explaining the case in plain language |
| `at_a_glance` | object[] | yes | Key-value pairs for the sidebar card (drug, disease, target, timeline, difficulty) |
| `what_had_to_happen` | object[] | yes | Ordered list of simplified historical steps (typically 4–6), each with a `number`, `title`, and `text` |

### Field detail: `at_a_glance`

Each entry:

| Field | Type | Description |
|---|---|---|
| `label` | string | Bold label, e.g. "The drug" |
| `value` | string | Plain-language description |

### Field detail: `what_had_to_happen`

Each entry:

| Field | Type | Description |
|---|---|---|
| `number` | number | Step number (display order) |
| `title` | string | Short title, e.g. "Find the gene" |
| `text` | string | 1–2 sentence explanation |

### Automation potential

- Draft summaries can be generated from structured case data, but the plain-language quality and accuracy require human editing.
- `at_a_glance` values can be pre-populated from Case Identity fields.

### Human review required

- All `summary_paragraphs` — tone, accuracy, and readability must be verified by a human editor.
- `what_had_to_happen` ordering and phrasing — this is a simplification of complex history and requires editorial judgment about what to include and how to compress it.

---

## 3. Reverse-Lineage Map

**What it is:** A visual component that shows the main chain of scientific fields connecting the trial back to basic science, plus side branches for failed approaches, branch points in thinking, and enabling methods.

**Why it matters:** This is the most distinctive element of the TrialLineage format. It makes the lineage concept immediately visible and scannable without requiring the reader to process longform text.

### Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `spine_nodes` | object[] | yes | Ordered list of nodes on the main vertical chain (top = trial, bottom = basic science) |
| `side_branches` | object[] | yes | List of side-branch cards connected to specific spine positions |

### Field detail: `spine_nodes`

Each entry:

| Field | Type | Description |
|---|---|---|
| `label` | string | Category label, e.g. "Clinical trial", "Cell biology", "Basic science" |
| `title` | string | Display name, e.g. "Daraxonrasib in human patients" |
| `accent` | boolean | Whether this node should be visually emphasized (typically the trial node only) |

### Field detail: `side_branches`

Each entry:

| Field | Type | Description |
|---|---|---|
| `type` | enum | `branch_point`, `failed_approach`, `enabling_method` |
| `title` | string | Short descriptive title |
| `text` | string | 1–2 sentence explanation |
| `side` | enum | `left` or `right` (visual placement on desktop) |
| `approximate_position` | number | Index of the spine node this branch is closest to (0-indexed from top) |

### Automation potential

- `spine_nodes` can be generated from `lineage_fields` in Case Identity, but titles and labels require human refinement.
- `side_branches` cannot be reliably automated. They require editorial knowledge of the specific case history.

### Human review required

- All `side_branches` — the selection, typing, and placement of branches is the core editorial work of a TrialLineage case.
- Visual coherence — the map must be reviewed in rendered form to ensure it reads clearly at different screen sizes.

---

## 4. Discovery Timeline

**What it is:** A chronological sequence of entries tracing the key moments in the scientific path behind the case. Each entry is typed (Milestone, Branch point, Detour, Convergence) and includes an era, title, and plain-language explanation.

**Why it matters:** The timeline provides historical depth that the lineage map cannot. It shows ordering, duration, and the interleaving of successes, failures, and debates. It is also where specific people, labs, and institutions can be named to ground the history in real attributions.

### Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | object[] | yes | Ordered list of timeline entries |

### Field detail: `entries`

Each entry:

| Field | Type | Description |
|---|---|---|
| `type` | enum | `milestone`, `branch_point`, `detour`, `convergence` |
| `era` | string | Historical label, e.g. "1982–1983", "Late 1990s–2000s", "Current" |
| `title` | string | Short descriptive title |
| `text` | string | 2–4 sentence plain-language explanation |
| `people` | string[] | Optional. Names of key researchers or groups, included only where they genuinely clarify the history |
| `institutions` | string[] | Optional. Names of labs, institutes, or companies |

### Guidance on `people` and `institutions`

- Include only where the attribution is well-established and non-controversial.
- Do not include names for the sake of completeness — include them where they help a public reader understand who drove a specific advance.
- Detour entries may name companies or drug programs (e.g. "tipifarnib, developed by Johnson & Johnson") where this clarifies what was attempted.
- Do not turn the timeline into a biography or credit-assignment exercise.

### Automation potential

- Timeline entries cannot be reliably auto-generated. The selection of events, their typing, their compression into plain language, and the decision about which people to name all require human judgment.
- Era labels could be cross-referenced against publication databases for approximate date validation.
- Factual claims (Nobel Prizes, drug names, institutional affiliations) can be partially validated against structured databases.

### Human review required

- All entries — every timeline entry must be reviewed for factual accuracy, appropriate attribution, and tone.
- `people` and `institutions` fields require particular care. Errors in attribution will damage credibility.
- `type` assignments — whether an event is a milestone, branch point, detour, or convergence is an editorial judgment.

---

## 5. Deep Explainer

**What it is:** The longform content layer that expands on the lineage in full prose. Each section corresponds roughly to one layer of the lineage chain, but is written as a connected narrative rather than a data card.

**Why it matters:** This is the layer for readers who want the fuller scientific story. It carries the most detailed explanations and is where the case makes its strongest claim to seriousness and depth.

### Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `intro_text` | string | yes | 1–2 sentences framing the deep-dive section |
| `sections` | object[] | yes | Ordered list of explainer sections |

### Field detail: `sections`

Each entry:

| Field | Type | Description |
|---|---|---|
| `number` | number | Display order |
| `title` | string | Section heading, e.g. "Cancer had to become molecular" |
| `body` | string | 1–3 paragraphs of plain-language scientific explanation |

### Supplementary cards (optional)

| Field | Type | Description |
|---|---|---|
| `why_it_matters` | string | Standalone card explaining the broader significance of the case |
| `failed_paths` | string | Standalone card on why indirect or failed approaches still contributed |

### Automation potential

- Draft section bodies can be generated from structured lineage data and timeline entries, but the prose quality, scientific accuracy, and editorial voice require human work.
- Section ordering follows `lineage_fields` and should be consistent with the lineage map.

### Human review required

- All `body` content — this is the most substantive writing on the page and must be accurate, readable, and editorially consistent.
- `title` phrasing — titles should be informative and non-jargon, which is harder than it sounds.

---

## 6. Related Concepts

**What it is:** A grid of linked concept pages that connect to this case. Some concepts have live pages; others are placeholders.

**Why it matters:** This section makes the cross-referencing structure of TrialLineage visible. It shows readers that each case connects to a network of background fields, and it provides navigation to concept explainer pages.

### Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `intro_text` | string | yes | 1–2 sentences explaining the grid |
| `concepts` | object[] | yes | List of related concept references |

### Field detail: `concepts`

Each entry:

| Field | Type | Description |
|---|---|---|
| `label` | string | Display name, e.g. "Oncogene discovery" |
| `href` | string or null | URL path to the concept page, or null if not yet live |

### Automation potential

- `concepts` list can be derived from `lineage_fields` in Case Identity.
- `href` can be auto-populated by checking which concept page slugs exist in the filesystem or CMS.
- Status (live vs. coming soon) can be automatically determined.

### Human review required

- The selection of which concepts to include may differ from `lineage_fields` — some cases may want to reference concepts not in the main lineage chain (e.g. an enabling technology).
- `label` wording should be consistent across all cases that reference the same concept.

---

## 7. Update Layer

**What it is:** A structured system for recording updates to the case over time, such as new trial results, phase transitions, regulatory events, or scientific developments that affect the lineage.

**Why it matters:** TrialLineage cases are not static. Trials progress, fail, or produce new data. The update layer ensures the page can evolve without losing its original structure, and that readers can see when and why content has changed.

### Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `updates` | object[] | no (empty at initial publish) | Ordered list of update entries, newest first |

### Field detail: `updates`

Each entry:

| Field | Type | Description |
|---|---|---|
| `date` | date | Date the update was added |
| `type` | enum | `trial_update`, `phase_change`, `regulatory`, `scientific`, `correction` |
| `title` | string | Short description of the update |
| `body` | string | 1–3 sentence explanation |
| `affects_sections` | string[] | Which page sections were modified (e.g. "plain_language", "timeline") |
| `reviewed_by` | string | Identifier or name of the reviewer who approved the update |

### Automation potential

- `trial_update` and `phase_change` entries can be partially auto-generated by monitoring ClinicalTrials.gov and regulatory feeds for changes to the relevant trial.
- Alerts can be triggered when a monitored trial posts new results, changes status, or receives regulatory action.
- Auto-generated updates should be held in `draft` status until human-reviewed.

### Human review required

- All updates must be reviewed before publishing. Automated alerts are triggers, not publishable content.
- `correction` type updates require particular editorial care.
- `affects_sections` should be verified — an update may require changes to multiple layers (e.g. a phase change may affect the plain-language summary, the timeline, and the case identity).

---

## 8. Internal Production Metadata

**What it is:** Fields that are not displayed on the public page but are used for editorial workflow, quality control, and production management.

**Why it matters:** TrialLineage cases involve substantial factual claims, named individuals, and scientific attributions. Production metadata tracks the editorial process, review state, and any known issues.

### Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `case_id` | string | yes | Internal unique identifier |
| `author` | string | yes | Primary author or assembler of the case |
| `reviewers` | string[] | yes | List of people who reviewed the case before publication |
| `review_notes` | string | no | Free-text notes from the review process |
| `factual_confidence` | enum | yes | `high`, `medium`, `needs_review` — overall assessment of factual accuracy |
| `attribution_flags` | object[] | no | List of specific factual claims or people-attributions that were flagged during review |
| `source_notes` | string | no | Internal notes on key sources consulted (not displayed publicly, not formal citations) |
| `last_full_review` | date | yes | Date of the most recent full editorial review (distinct from incremental updates) |
| `next_review_due` | date | no | Scheduled date for the next review cycle |
| `known_gaps` | string[] | no | List of areas where the case is known to be incomplete or where future work is needed |

### Field detail: `attribution_flags`

Each entry:

| Field | Type | Description |
|---|---|---|
| `claim` | string | The specific factual claim or attribution |
| `confidence` | enum | `verified`, `likely_accurate`, `needs_verification` |
| `notes` | string | Why it was flagged, what source was checked, or what remains uncertain |

### Automation potential

- `next_review_due` can be auto-calculated from `last_full_review` based on a review cadence policy.
- `attribution_flags` with `needs_verification` status can be surfaced in a production dashboard.
- Automated monitoring can flag when external data (trial status, regulatory events) suggests the case may be out of date.

### Human review required

- `factual_confidence` assessment is a human judgment.
- `attribution_flags` must be maintained manually as claims are verified or updated.
- `known_gaps` should be updated after each review cycle.

---

## Schema Versioning

| Field | Value |
|---|---|
| `schema_version` | `0.1.0` |
| `last_updated` | 2026-05-15 |
| `status` | Draft — used for the first TrialLineage case (daraxonrasib). Expected to evolve as additional cases are built. |

---

## Usage Notes

- This schema describes the logical structure of a case page, not a specific data format. It can be implemented as a JSON document, a CMS content model, or hardcoded page data depending on the production stage.
- At the current stage (static Next.js pages), the schema serves as an editorial checklist and structural reference for building new cases.
- As the platform matures, this schema should be formalized into a typed data model that drives page rendering from structured data rather than hand-coded JSX.
- The schema does not prescribe visual design. Visual decisions (card radius, color palette, spacing) are handled at the component level and documented separately.
