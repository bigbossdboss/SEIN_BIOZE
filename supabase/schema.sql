-- Supabase schema for SEIN'BIOZE By Kris Design (contact-focused)
create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  lead_type text not null check (lead_type in ('contact', 'qualification')),
  first_name text,
  last_name text,
  email text,
  phone text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  city text,
  service text,
  quote text not null,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists idx_leads_created_at on public.leads (created_at desc);

alter table public.leads enable row level security;
alter table public.testimonials enable row level security;

create policy "Public read published testimonials" on public.testimonials
for select to anon
using (published = true);
