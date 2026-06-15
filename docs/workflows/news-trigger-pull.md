# News Trigger Pull

This document defines the "News Trigger Pull" workflow — an internal editorial tool for reconciling public-interest news articles to likely clinical trial anchors in the Production Room.

## Why this is needed

The TrialLineage Production Room currently ingests signals from two primary sources:

1. **Fresh-signal feed** — newly posted/starting ClinicalTrials.gov studies (last 30 days / next 6 months)
2. **Topic Pull Mode** — manual broad queries against ClinicalTrials.gov without date limits

Both rely on ClinicalTrials.gov terminology. But TrialLineage also needs to respond to **public-interest events** — news articles, media coverage, social media attention — that signal strong audience interest in a medical advance.

News articles use different language than trial records:
- "one and done" → single-course treatment
- "gene therapy" → gene editing / base editing
- "high cholesterol" → hypercholesterolemia / HeFH
- "heart disease" → ASCVD / coronary artery disease
- Company names → specific drug codes or NCT IDs

A news article may describe a Phase 3 result, an FDA milestone, or a promising early trial — but the Production Room won't surface it unless the underlying ClinicalTrials.gov record was already captured.

## How News Trigger Pull works

1. Editor encounters a news article about a medical advance
2. Editor runs `news-trigger-pull` with article metadata and keywords
3. The script expands keywords using built-in synonym mapping
4. The script searches:
   - Existing `production_signals` in Supabase
   - ClinicalTrials.gov API for matching trial records
5. Results are displayed with lineage candidate scoring
6. If a match is found, the editor can import the trial record into `production_signals` labeled as news-triggered

## Labeling convention

News-triggered records use:
- `source_type = "News trigger"`
- `candidate_type = "Lineage candidate"`
- `status = "New"`
- `priority = "High"` (public interest is implied)
- `editorial_note` includes: article URL/title, trigger keywords, matched trial, reconciliation notes

## How this supports lineage selection

News triggers indicate **public interest** — a necessary condition for a donation-ready TrialLineage page. If a news article generates broad attention, the underlying trial likely has:
- Strong audience interest
- Available citation material (the article itself, the trial record, the underlying biology)
- Time-sensitive relevance

This makes news-triggered signals strong lineage candidates.

## Relationship to other intake modes

| Mode | Question it answers | Date constraint | Trigger |
|------|-------------------|----------------|---------|
| Fresh-signal feed | What is newly happening? | Last 30 days / next 6 months | Automatic |
| Topic Pull | What is the full trial footprint for this topic? | None | Manual query |
| News Trigger Pull | What trial does this public-interest article refer to? | None | News article |

## Query expansion principles

News language → trial-record language mappings should cover:
- Disease common names → medical terms
- Drug trade names → program codes
- Company names → sponsor/collaborator fields
- Mechanism plain language → scientific terminology
- Outcome descriptions → endpoint language

The expansion is not exhaustive. It provides a starting set of queries that an editor can refine.

## What this is NOT

- Not a web scraper (does not access paywalled content)
- Not an automatic ingestion pipeline
- Not a public-facing feature
- Not a replacement for editorial judgment about lineage quality
