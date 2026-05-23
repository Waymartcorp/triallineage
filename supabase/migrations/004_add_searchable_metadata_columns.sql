-- Add searchable metadata columns for sponsor, interventions, and collaborators.
-- These enable direct search by company, drug/program name, or institution.

alter table production_signals
  add column if not exists sponsor_name text,
  add column if not exists intervention_names text,
  add column if not exists collaborator_names text;
