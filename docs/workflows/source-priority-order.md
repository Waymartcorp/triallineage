# TrialLineage Production Room: Source Priority Order

Version: 0.1  
Status: Draft  
Last updated: 2026-05-16

---

## 1. Purpose

TrialLineage logs real trial-related signals by default. But not all sources that produce those signals are equally reliable, equally detailed, or equally free of selection bias.

A trial registration on ClinicalTrials.gov is a structured, regulated record. A company press release announcing top-line results is a self-reported, selectively framed communication. Both may describe the same trial milestone, but they carry different levels of inherent credibility.

The source-priority order exists to give the Production Room — and eventually the Engine — a way to weight signals appropriately. It does not determine whether a signal is logged. It determines how much initial trust the signal receives and whether additional verification is warranted before editorial action.

---

## 2. Core principle

The source-priority order is about trust, weight, and caution. It is not a gatekeeping filter.

All real trial-related signals from watched sources are logged regardless of source priority. A company press release is logged the same way a registry update is logged. The difference is in how the Production Room treats the signal after it arrives:

- Higher-priority sources produce signals that can be acted on with less additional verification.
- Lower-priority sources produce signals that may require cross-referencing, a caution flag, or a waiting period before editorial work begins.

Priority is not a judgment about whether a source is legitimate. It is a practical assessment of how much independent verification the signal is likely to need.

---

## 3. Recommended source-priority order

Listed from highest to lowest initial trust.

1. **Trial registries**
2. **Major journals tied to human trial milestones**
3. **FDA and regulatory notices**
4. **Academic medical center and research hospital announcements**
5. **Company press releases**

---

## 4. Why each source class ranks where it does

### 1. Trial registries

**Rank: Highest**

Trial registries (ClinicalTrials.gov, EU Clinical Trials Register, ICTRP) are structured, regulated databases. Registration is typically required by law or by journal policy. The information — trial phase, sponsor, intervention, enrollment status, results — is standardized and verifiable. Registry data is the closest thing to a neutral factual record of what trials exist and what stage they are at.

**Strength:** Structured, regulated, verifiable, minimal editorial bias.  
**Limitation:** Registry entries can be incomplete, delayed, or poorly updated. Results postings vary in detail and timeliness.

### 2. Major journals tied to human trial milestones

**Rank: High**

Peer-reviewed publications in major medical journals (NEJM, Lancet, JCO, Nature Medicine, JAMA Oncology) undergo editorial and peer review before publication. When a journal reports trial results, the data has been scrutinized by independent reviewers. This makes journal publications among the most credible sources for detailed clinical evidence.

**Strength:** Peer-reviewed, detailed, independently scrutinized.  
**Limitation:** Publication lag — journal articles often appear months or years after the data is first available. Journals also have selection bias toward positive or novel results.

### 3. FDA and regulatory notices

**Rank: High**

FDA press releases, approval letters, and designation notices are official government communications. They confirm that a regulatory milestone has been reached — approval, breakthrough designation, fast track status, clinical hold. The information is definitive for the specific regulatory event described.

**Strength:** Authoritative, definitive for the event described, publicly verifiable.  
**Limitation:** Regulatory notices describe regulatory decisions, not clinical evidence. An FDA approval confirms that the agency found the evidence sufficient, but the Production Room should still refer to the underlying trial data for editorial accuracy.

### 4. Academic medical center and research hospital announcements

**Rank: Moderate**

Institutional press releases from academic medical centers and research hospitals (e.g., MD Anderson, Memorial Sloan Kettering, Johns Hopkins, Dana-Farber) often announce trial milestones, first-patient-dosed events, or translational findings. These institutions have reputational incentives to be accurate, but their communications are not peer-reviewed and may emphasize institutional achievements.

**Strength:** Reputational credibility, often the first source for investigator-initiated trial milestones.  
**Limitation:** Not independently reviewed. May overstate significance or omit context. Should be cross-referenced with registry data or publications when possible.

### 5. Company press releases

**Rank: Lowest among watched sources**

Pharmaceutical and biotech company press releases are the most common source for early disclosure of top-line trial results, dosing milestones, and regulatory submissions. They are also the most selectively framed. Companies choose what to disclose, when, and how to characterize results. Positive results are announced promptly; negative results may be disclosed with less visibility or different framing.

**Strength:** Often the earliest public disclosure of trial outcomes. Directly from the sponsor.  
**Limitation:** Self-reported, selectively framed, not independently verified. Response rates, survival data, and safety information in press releases should be treated as preliminary until confirmed by a registry posting, regulatory filing, or peer-reviewed publication.

---

## 5. How lower-priority sources should still be used

Lower-priority sources — particularly company press releases — still matter. They often provide the earliest indication that a trial has reached a milestone. Excluding them would mean missing time-sensitive signals.

The correct approach is not exclusion but calibrated trust:

- **Log the signal.** A company press release announcing top-line results is a real trial-related signal and should be logged like any other.
- **Flag the source priority.** The Production Room should display the source class so reviewers know how much inherent credibility the signal carries.
- **Cross-reference when acting.** Before drafting editorial content based on a company press release, check whether the same milestone is confirmed by a registry update, a regulatory notice, or a journal publication.
- **Use caution language when needed.** If editorial content is based primarily on a lower-priority source, note that the information is preliminary or awaiting independent confirmation.

The goal is not to distrust lower-priority sources. It is to avoid treating all sources as though they carry the same evidentiary weight.

---

## 6. How this affects the Production Room

Source priority should shape how the Production Room presents and handles signals in three ways.

### Presentation

- Each logged signal should display its source class visibly.
- Higher-priority signals (registry, journal, regulatory) may be presented with less visual caution.
- Lower-priority signals (company press releases) may benefit from a subtle indicator that cross-referencing is recommended.

### Initial trust

- Signals from trial registries and regulatory notices can generally be acted on editorially without waiting for a second source.
- Signals from company press releases should ideally be confirmed by at least one other source class before substantive editorial content is drafted. For time-sensitive signals, editorial work may begin with an explicit note that the source is preliminary.

### Caution flags

- The Production Room should support a simple caution flag or note field where a reviewer can mark that a signal is based on a lower-priority source and may need verification.
- This flag is informational, not blocking. It does not prevent classification or editorial work. It signals to the next reviewer that additional checking is warranted.

---

## 7. Quality note

TrialLineage aims to be broad enough to notice real trial-related signals from any credible source class, but disciplined enough not to flatten all sources into equal credibility.

A trial registration and a company press release may describe the same event. They do not carry the same weight. Treating them identically would erode the platform's credibility over time. Treating company press releases as unreliable would cause the platform to miss time-sensitive signals.

The source-priority order is the mechanism for navigating this tension. It allows everything in, but it marks how much trust each signal carries — so that editorial decisions are made with the right level of caution.
