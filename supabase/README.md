# Webshop Orders in Supabase

## 1) Create the table
Run the SQL from `supabase/webshop_orders.sql` in Supabase SQL Editor.

## 2) Set environment variables
Add these to `.env.local` (and to Vercel Environment Variables for production):

```env
SUPABASE_URL=https://<your-project-ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<your-supabase-secret-key>
SUPABASE_ORDERS_TABLE=webshop_orders
```

Use a server-side secret key only (never expose it in browser/client code).

## 3) How it works
- Checkout submits order data to `POST /api/save-order`.
- The API route inserts the row into Supabase.
- If save fails, checkout shows an error and does not complete the order flow.
