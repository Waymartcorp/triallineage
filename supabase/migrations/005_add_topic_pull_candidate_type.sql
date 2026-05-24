-- Allow "Topic pull" as a candidate_type value for topic-pull imported signals.

alter table production_signals
  drop constraint if exists production_signals_candidate_type_check;

alter table production_signals
  add constraint production_signals_candidate_type_check
  check (candidate_type in (
    'New case candidate',
    'Update existing case',
    'Background / supporting',
    'Ignore',
    'Topic pull'
  ));
