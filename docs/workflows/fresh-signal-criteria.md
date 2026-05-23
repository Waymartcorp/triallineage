# Fresh-Signal Criteria

## Purpose

The Production Room fresh-signal feed is designed to surface timely, meaningful trial and regulatory movement. It is not a comprehensive index of all clinical activity. Its job is to flag what's new and potentially relevant — not to represent the full disease or institutional landscape.

## Core distinction

Two distinct modes of information retrieval serve different editorial needs:

- **Fresh signals** — time-bound detection of new or changing trial/regulatory events. Answers: "What just happened?"
- **Deeper topic/program investigation** — deliberate exploration of a disease area, sponsor portfolio, or institutional pipeline. Answers: "What's the full picture here?"

These should not be conflated. The fresh-signal feed handles the first. The second requires a separate pull mode.

## Fresh-signal source types

Fresh signals should be drawn from:

- **ClinicalTrials.gov** — new registrations, status updates, start dates
- **FDA / regulatory feeds** — pending approvals, advisory committee actions, label changes
- **Selected journal or press milestone sources** (future) — primary endpoint readouts, pivotal trial publications, breakthrough designations

All sources should be structured, machine-readable, and amenable to date-windowed queries.

## Fresh-signal criteria

A valid fresh signal is a discrete, time-stamped event such as:

- A newly posted Phase 1–3 interventional study
- A study newly starting (first patient enrolled, start date reached)
- A meaningful status change (e.g. suspended, terminated, completed)
- A phase transition within a development program
- Regulatory movement (submission accepted, priority review granted, PDUFA date set)
- Approval-adjacent events (advisory committee vote, complete response letter, accelerated approval)

The common thread: something happened recently that wasn't true before.

## What should not be expected from fresh signals

The fresh-signal feed does not attempt to:

- Represent every active trial for a given disease
- Capture the full portfolio of an institution or sponsor
- Surface historical or long-running studies that haven't changed
- Provide a complete competitive landscape analysis

These are legitimate editorial needs, but they belong to a different retrieval mode.

## Search implications

When a user or editor searches for a sponsor, institution, or disease area within the Production Room, results are limited to what the fresh-signal feed has captured. This means:

- A sponsor with 200 active trials may show only 3 signals (the ones posted recently)
- A disease area with deep ongoing research may surface only the newest registrations
- Comprehensive exploration requires a separate topic/program pull that queries beyond the date window

Future work should distinguish between "search fresh signals" and "explore full program" as separate actions.

## Ranking implications

Fresh-signal intake and candidate ranking are separate steps:

1. **Intake** surfaces timely signals that meet the criteria above. It does not judge significance.
2. **Ranking** (a later layer) evaluates which signals deserve full TrialLineage treatment based on factors like disease rarity, phase, therapeutic novelty, and public interest.

The feed should remain broad and fast. Ranking should be deliberate and editorial.

## Suggested next refinements

- **Configurable date windows** — allow editors to adjust the lookback period (e.g. last 7 days, last 30 days, last 90 days) without modifying scripts.
- **Capture of sponsor and intervention fields** — store these as searchable columns so editors can filter by company or drug name within the feed.
- **Stronger significance flags** — automatically flag late-stage trials (Phase 3), rare-disease indications, or first-in-class mechanisms as higher-priority signals at intake time.
- **Topic/program pull mode** — a separate retrieval path that queries a full disease or sponsor portfolio independent of date windows.
