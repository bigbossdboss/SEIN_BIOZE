-- Supabase schema for SEIN'BIOZE By Kris Design MVP
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

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  service_slug text not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  preferred_date date not null,
  preferred_slot text not null,
  customer_note text,
  status text not null default 'requested' check (status in ('requested', 'pending_deposit', 'confirmed', 'cancelled')),
  deposit_amount numeric(10,2) not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references public.bookings(id) on delete set null,
  stripe_checkout_session_id text unique,
  stripe_payment_intent_id text,
  payment_type text not null check (payment_type in ('deposit', 'product')),
  amount numeric(10,2) not null,
  currency text not null default 'eur',
  status text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id text primary key,
  name text not null,
  description text not null,
  price numeric(10,2) not null,
  stripe_price_id text,
  is_active boolean not null default true,
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
create index if not exists idx_bookings_status on public.bookings (status);
create index if not exists idx_bookings_service on public.bookings (service_slug);
create index if not exists idx_payments_booking on public.payments (booking_id);

-- Enable RLS and add baseline policies for server-side service role workflows.
alter table public.leads enable row level security;
alter table public.bookings enable row level security;
alter table public.payments enable row level security;
alter table public.products enable row level security;
alter table public.testimonials enable row level security;

create policy "Public read active products" on public.products
for select to anon
using (is_active = true);

create policy "Public read published testimonials" on public.testimonials
for select to anon
using (published = true);
