# TrialLineage Production Room: Source List

Version: 0.1  
Status: Draft  
Last updated: 2026-05-16

---

## 1. Purpose

This document defines the first source list for the TrialLineage Production Room. Its purpose is to give the Production Room a manageable, credible intake stream of real human-disease trial-related signals.

The source list is not an attempt to monitor all of biomedical research. It is a deliberately narrow starting set of source classes chosen because they reliably produce the kinds of signals TrialLineage needs: trial registrations, trial milestones, clinical results, regulatory actions, and publications directly tied to human trials.

---

## 2. Core principle

Trial-related signals should be logged by default once detected from a watched source. The Production Room does not decide whether trials are worthwhile in the abstract. A real trial signal that appears in a credible source has already crossed the threshold for notice.

The Production Room's role is classification: is this a new case candidate, an update to an existing case, background/supporting material, or something to ignore? The source list determines what enters the log. The decision grammar determines what happens next.

---

## 3. First source classes

The following source classes should be watched in version 1. They are listed in rough priority order based on signal reliability and relevance to TrialLineage's needs.

### Trial registries

- ClinicalTrials.gov
- EU Clinical Trials Register / CTIS
- WHO International Clinical Trials Registry Platform (ICTRP)

### Regulatory notices

- FDA press releases and approval announcements
- FDA breakthrough therapy, fast track, and accelerated approval designations
- EMA marketing authorization decisions (phase 2 addition)

### Company and sponsor announcements

- Press releases from pharmaceutical and biotech companies announcing trial milestones, top-line results, or regulatory submissions
- Limited to announcements that reference a specific trial, drug, or regulatory event — not general corporate news

### Academic medical center and research hospital announcements

- Institutional press releases from major research hospitals and academic medical centers when they announce trial results, first-patient-dosed milestones, or translational findings tied to a specific trial

### Major journals (when tied to trial milestones)

- Publications in journals such as the New England Journal of Medicine, The Lancet, The Lancet Oncology, Journal of Clinical Oncology, Nature Medicine, and JAMA Oncology — when the publication reports clinical trial results, translational findings directly tied to a trial, or regulatory-relevant data
- Not general basic science publications (those may be relevant as updates but should not be a primary intake source in version 1)

### Conference abstracts (phase 2 addition)

- ASCO, AACR, ESMO, ASH, and other major medical conferences — when abstracts or presentations report trial data
- To be added after the core source classes are operational

---

## 4. What each source class is good for

| Source class | Typical signal types |
|---|---|
| **Trial registries** | New trial registrations, status changes (recruiting → active → completed), results postings. The most reliable source for knowing that a trial exists and what stage it is at. |
| **Regulatory notices** | Approvals, designations, and submissions. High-confidence signals that a therapy has reached a specific regulatory milestone. |
| **Company announcements** | Top-line results, dosing milestones, regulatory submissions. Often the earliest public disclosure of trial outcomes. Requires care — announcements are self-reported and may be selectively positive. |
| **Academic/hospital announcements** | First-patient-dosed events, investigator-initiated trial milestones, translational findings tied to trials. Useful for catching signals from academic-sponsored trials that may not generate company press releases. |
| **Major journals** | Peer-reviewed clinical data, detailed trial results, translational publications. Higher confidence than press releases but typically appears later. The most credible source for substantive clinical evidence. |
| **Conference abstracts** | Early data presentations, interim analyses, expansion cohort results. Often the first venue for clinical data before journal publication. Time-sensitive but may lack full detail. |

---

## 5. What should not be watched first

Version 1 should not attempt to monitor the following. These source types introduce noise without proportionate signal value at this stage.

| Excluded source type | Why excluded |
|---|---|
| **Broad internet scraping** | Too much noise. Most web content about trials is derivative, incomplete, or speculative. |
| **Generic science news** | Science journalism covers trials inconsistently and often without the specificity TrialLineage needs (exact trial phase, drug name, molecular target). |
| **Executive and business news** | CEO interviews, earnings calls, and business strategy commentary rarely contain actionable trial signals. |
| **Fundraising announcements** | Series A/B/C funding rounds for biotech companies do not indicate that a trial has started, advanced, or produced results. |
| **Social media** | Too noisy, too unreliable, and too difficult to verify. May be added selectively in future versions for conference live-reporting. |
| **Patent filings** | Potentially useful as a future signal class but too removed from clinical milestones for version 1. |
| **Preprint servers (broad)** | bioRxiv and medRxiv contain valuable research but are not peer-reviewed and rarely report clinical trial results directly. May be added as a secondary source for translational signals in a later phase. |

---

## 6. Recommended scope discipline

Version 1 should stay narrow and credible. The goal is not comprehensive coverage of all biomedical trial activity. The goal is a clean, manageable intake stream that the Production Room can classify without being overwhelmed.

Practical guidelines:

- **Start with fewer sources, not more.** It is better to monitor five source classes well than to monitor twenty poorly.
- **Prioritize signal density over breadth.** Trial registries and regulatory notices produce high-density, structured signals. Company announcements produce moderate-density signals that require more judgment. Academic announcements and journals produce lower-density but higher-quality signals.
- **Expand by adding source classes, not by loosening filters.** When the Production Room is ready for more volume, add a new source class (e.g., conference abstracts) rather than broadening keyword filters on existing sources.
- **Do not chase completeness.** Missing a low-relevance signal is acceptable. Flooding the Production Room with noise is not.

---

## 7. Output expectation

The sources defined in this document are meant to produce a stream of logged trial-related signals that enter the Production Room for classification.

Each logged signal should be classifiable into one of the four handling categories defined in the decision grammar:

- **New case candidate** — the signal may justify a new TrialLineage case page
- **Update existing case** — the signal belongs to a case or concept page already on the site
- **Background / supporting** — the signal is worth retaining but does not require editorial action now
- **Ignore** — the signal is duplicate, empty, or not substantively trial-related

If a source class consistently produces signals that cannot be classified into any of these categories, it should be reviewed for removal or filter adjustment. The source list serves the Production Room, not the other way around.
