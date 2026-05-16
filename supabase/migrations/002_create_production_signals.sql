-- TrialLineage Production Room: production_signals table
-- Stores real trial-related signals manually seeded into the Production Room.
-- Signals are logged by default, then classified for handling.

create table production_signals (
  -- Required fields
  id               uuid        primary key default gen_random_uuid(),
  title            text        not null,
  disease_area     text        not null,
  source           text        not null,
  source_type      text        not null,
  date_detected    date        not null,
  priority         text        not null check (priority in ('High', 'Medium', 'Low')),
  candidate_type   text        not null check (candidate_type in ('New case candidate', 'Update existing case', 'Background / supporting', 'Ignore')),
  status           text        not null default 'New' check (status in ('New', 'Reviewed', 'In progress', 'Published', 'Ignored')),
  editorial_note   text        not null,
  created_at       timestamptz not null default now(),

  -- Optional fields
  related_case     text,
  related_concepts text[],
  external_link    text,
  brief_summary    text,
  trial_identifier text,
  confidence_flag  text
);

alter table production_signals enable row level security;
