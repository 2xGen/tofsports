import { NextResponse } from 'next/server';

const TOF_EMAIL = process.env.ORDER_NOTIFICATION_EMAIL || 'info@tofsports.nl';

function buildEmailBody(order) {
  const { orderNumber, orderDate, customer, items, subtotal, btw, total } = order;
  const lines = [
    `Nieuwe bestelling ontvangen: ${orderNumber}`,
    `Datum: ${orderDate}`,
    '',
    '--- Klantgegevens ---',
    `Naam: ${customer.naam || '-'}`,
    `E-mail: ${customer.email || '-'}`,
    `Telefoon: ${customer.telefoon || '-'}`,
    `Adres: ${customer.straat || ''} ${customer.huisnummer || ''}, ${customer.postcode || ''} ${customer.plaats || ''}`,
    '',
    '--- Bestelling ---',
  ];
  items.forEach((item) => {
    const extra = item.extraName && (item.extraQuantity ?? 0) > 0
      ? ` + ${item.extraName} x ${item.extraQuantity}`
      : item.extraName ? ` + ${item.extraName}` : '';
    const label = item.packageLabel + extra;
    lines.push(`${item.quantity}x ${item.productName} - ${item.formatName}: ${label} = €${(item.price * item.quantity).toFixed(2)}`);
  });
  lines.push('', '--- Totaal ---', `Subtotaal: €${subtotal.toFixed(2)}`, `BTW (21%): €${btw.toFixed(2)}`, `Totaal: €${total.toFixed(2)}`);
  return lines.join('\n');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY not set: order notification skipped. Order data:', body.orderNumber);
      return NextResponse.json({ ok: true, skipped: true });
    }
    let Resend;
    try {
      Resend = (await import('resend')).Resend;
    } catch (e) {
      console.warn('resend package not installed: order notification skipped.');
      return NextResponse.json({ ok: true, skipped: true });
    }
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'TOF Sports <onboarding@resend.dev>';
    const resendClient = new Resend(apiKey);
    const text = buildEmailBody(body);
    const { error } = await resendClient.emails.send({
      from: fromEmail,
      to: TOF_EMAIL,
      subject: `Nieuwe bestelling ${body.orderNumber} - TOF Sports`,
      text,
    });
    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Notify order error:', e);
    return NextResponse.json({ ok: false, error: String(e?.message || e) }, { status: 500 });
  }
}
