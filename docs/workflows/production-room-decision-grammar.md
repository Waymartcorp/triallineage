# TrialLineage Production Room Decision Grammar

## Purpose

Real trial-related signals are logged by default in the TrialLineage Production Room.

The job of the Production Room is not to decide whether trials are worthwhile in the abstract. A real human-disease trial signal has already crossed the threshold for notice.

The job of the Production Room is to decide how each logged signal should be handled inside TrialLineage.

The four handling categories are:

- New case candidate
- Update existing case
- Background / supporting
- Ignore

This document defines the first simple decision grammar for making those distinctions consistently.

---

## The four handling categories

### New case candidate
A logged signal that appears strong enough to deserve its own TrialLineage reverse-lineage treatment.

This means the signal likely has:
- a real human-disease trial milestone
- a discovery history worth tracing
- enough scientific depth to support a public-facing case page

### Update existing case
A logged signal that clearly belongs to a TrialLineage case already on the site.

This means the signal does not need a new standalone case, but it may justify:
- a page update
- a new timeline entry
- a revised status note
- a related concept or milestone addition

### Background / supporting
A logged signal that is worth keeping in view, but does not yet justify a full case or a direct update.

This category is for:
- supporting context
- weaker related developments
- possibly useful future signals
- material that may later strengthen a case or concept page

### Ignore
A logged signal that should not move forward inside TrialLineage.

This category is for items that are:
- duplicate
- empty
- clearly irrelevant
- not substantively tied to a real trial-related development

---

## How to recognize a new case candidate

A logged signal should be treated as a **new case candidate** when most of the following are true:

- it reflects a real human-disease trial milestone
- it is not already covered by an existing TrialLineage case
- it appears to have a meaningful discovery lineage behind it
- it could support a public-facing reverse-history page
- it likely has enough conceptual richness to connect to multiple fields, methods, or branch points
- it would help broaden or strengthen the TrialLineage library

Examples:
- a new phase 2 or phase 3 result in a disease area not yet represented
- a first-in-human milestone for a therapy class with deep basic-science roots
- a trial result that clearly reflects a major translational breakthrough

A new case candidate does not need to be a media sensation. It needs to be a real clinical signal with enough lineage depth to justify TrialLineage treatment.

---

## How to recognize an update to an existing case

A logged signal should be treated as an **update existing case** when it clearly belongs to a case already on the site.

This is the right category when:
- the drug, mechanism, trial, or disease area is already represented
- the signal adds new status information to an existing case
- the signal changes the public understanding of the case without requiring a whole new flagship page

Examples:
- a phase change
- a new publication tied to the same trial
- a top-line result for a case already covered
- a regulatory development tied to an existing case
- a meaningful new concept connection for a case already on the site

This category supports continuity. It prevents the platform from creating unnecessary duplicate cases.

---

## How to recognize background / supporting material

A logged signal should be treated as **background / supporting** when it is worth retaining, but not yet strong enough to justify either:
- a new standalone TrialLineage case, or
- a meaningful direct update to an existing case

This category is useful for:
- adjacent publications
- related translational developments
- weaker signals that may gain importance later
- context that may support a future case write-up
- concept-page support material

Examples:
- a publication that is relevant to a lineage but not itself a major milestone
- an early supporting development that may matter later
- an announcement that adds context but does not change the case materially yet

This category helps TrialLineage build memory without overreacting to every signal.

---

## How to recognize ignore

A logged signal should be treated as **ignore** when it should not move forward inside TrialLineage.

This includes items that are:
- duplicate of something already logged
- empty promotional material with no substantive trial content
- clearly irrelevant to the platform's scope
- not actually tied to a real human-disease trial or meaningful trial-related development
- too thin to support even background retention

Examples:
- repeated coverage of the same announcement with no new information
- corporate PR with no real trial milestone
- generic business or executive news
- vague science news that is not meaningfully trial-related

Ignore is a cleanup category, not an abstract judgment that the trial itself lacks worth.

---

## Quality note

The Production Room is not a prestige filter.

It is not there to ask whether trials are worthwhile in principle. If a real trial-related signal has appeared, it is already worth logging.

The question is narrower and more operational:

- does this become a new TrialLineage case?
- does it update an existing case?
- is it supporting context?
- or is it a duplicate or empty signal that should be ignored?

This distinction protects quality while still allowing TrialLineage to become a living, self-running platform over time.

The goal is:
- broad enough intake to notice real trial signals
- disciplined enough routing to avoid noise
- careful enough handling to preserve public trust
