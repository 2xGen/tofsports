import { NextResponse } from 'next/server';

const TEST_TO = 'info@tofsports.nl';

export async function GET() {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: 'RESEND_API_KEY not set' }, { status: 500 });
    }
    const { Resend } = await import('resend');
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'TOF Sports <onboarding@resend.dev>';
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: TEST_TO,
      subject: 'TOF Sports – Resend test',
      text: 'Resend API werkt. Deze testmail is verzonden vanaf de TOF Sports website.',
    });
    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true, message: `Test email sent to ${TEST_TO}` });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e?.message || e) }, { status: 500 });
  }
}
