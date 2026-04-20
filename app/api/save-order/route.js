import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SUPABASE_ORDERS_TABLE = process.env.SUPABASE_ORDERS_TABLE || 'webshop_orders';

function mapOrderToRow(order) {
  return {
    order_number: order.orderNumber,
    order_date: order.orderDate,
    customer_name: order.customer?.naam || null,
    customer_email: order.customer?.email || null,
    customer_phone: order.customer?.telefoon || null,
    customer_street: order.customer?.straat || null,
    customer_house_number: order.customer?.huisnummer || null,
    customer_postcode: order.customer?.postcode || null,
    customer_city: order.customer?.plaats || null,
    customer_club: order.customer?.tennisclub || null,
    items: order.items || [],
    subtotal: Number(order.subtotal || 0),
    btw: Number(order.btw || 0),
    total: Number(order.total || 0),
    include_whiteboard: Boolean(order.includeWhiteboard),
  };
}

export async function POST(request) {
  try {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { ok: false, error: 'SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing' },
        { status: 500 },
      );
    }

    const order = await request.json();
    if (!order?.orderNumber || !Array.isArray(order?.items) || !order?.customer?.email) {
      return NextResponse.json({ ok: false, error: 'Invalid order payload' }, { status: 400 });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const { data, error } = await supabase
      .from(SUPABASE_ORDERS_TABLE)
      .insert(mapOrderToRow(order))
      .select('id')
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id || null });
  } catch (error) {
    console.error('Save order error:', error);
    return NextResponse.json({ ok: false, error: String(error?.message || error) }, { status: 500 });
  }
}
