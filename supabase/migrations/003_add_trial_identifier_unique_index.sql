-- TrialLineage: Add partial unique index on trial_identifier
--
-- This enforces uniqueness at the database level for rows that have a
-- trial_identifier value. It prevents duplicate inserts even if two
-- script runs overlap or race conditions occur.
--
-- The index is PARTIAL (WHERE trial_identifier IS NOT NULL) because:
--   - Manual Production Room entries may not have a trial_identifier
--   - Multiple NULL values should be allowed (they use fallback dedupe)
--
-- Safe to run on existing data: if duplicates already exist, this
-- migration will FAIL. In that case, deduplicate first:
--
--   DELETE FROM production_signals a
--   USING production_signals b
--   WHERE a.id > b.id
--     AND a.trial_identifier = b.trial_identifier
--     AND a.trial_identifier IS NOT NULL;
--
-- Then re-run this migration.

create unique index if not exists
  idx_production_signals_trial_identifier_unique
  on production_signals (trial_identifier)
  where trial_identifier is not null;
