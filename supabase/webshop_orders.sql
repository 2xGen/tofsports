create table if not exists public.webshop_orders (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  order_number text not null unique,
  order_date text,
  customer_name text,
  customer_email text,
  customer_phone text,
  customer_street text,
  customer_house_number text,
  customer_postcode text,
  customer_city text,
  customer_club text,
  items jsonb not null default '[]'::jsonb,
  subtotal numeric(10,2) not null default 0,
  btw numeric(10,2) not null default 0,
  total numeric(10,2) not null default 0,
  include_whiteboard boolean not null default false
);

create index if not exists webshop_orders_created_at_idx
  on public.webshop_orders (created_at desc);

create index if not exists webshop_orders_customer_email_idx
  on public.webshop_orders (customer_email);
