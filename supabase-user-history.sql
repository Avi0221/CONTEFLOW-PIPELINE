alter table public.pipeline_runs
  add column if not exists user_id uuid references auth.users(id) on delete cascade,
  add column if not exists user_email text;

create index if not exists pipeline_runs_user_id_created_at_idx
  on public.pipeline_runs (user_id, created_at desc);

alter table public.pipeline_runs enable row level security;

drop policy if exists "Users can read their own pipeline runs" on public.pipeline_runs;
create policy "Users can read their own pipeline runs"
  on public.pipeline_runs
  for select
  using (auth.uid() = user_id);

drop policy if exists "Users can create their own pipeline runs" on public.pipeline_runs;
create policy "Users can create their own pipeline runs"
  on public.pipeline_runs
  for insert
  with check (auth.uid() = user_id);
