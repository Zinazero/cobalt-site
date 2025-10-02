import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import env from '@/config/env';
import { render, pretty, toPlainText } from '@react-email/render';
import ContactTemplate from '../../../emails/templates/ContactTemplate';
import type { Field } from '@/types';

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    console.log('receiving request');
    console.log({ EMAIL_SENDER: env.EMAIL_SENDER, EMAIL_RECEIVER: env.EMAIL_RECEIVER });


    const { subject, email, fields, website }: { subject: string; email: string; fields: Field[]; website?: string } = await req.json();

    // Honeypot check
    if (website) {
      console.log('Honeypot triggered');
      return NextResponse.json({ success: false, error: 'Spam detected' }, { status: 400 });
    }

    if (!env.EMAIL_SENDER || !env.EMAIL_RECEIVER) {
      return NextResponse.json(
        { error: 'Missing EMAIL_SENDER or EMAIL_RECEIVER' },
        { status: 500 }
      );
    }

    // Render email HTML and text
    let html: string, text: string;
    try {
      html = await pretty(await render(<ContactTemplate fields={fields} />));
      text = toPlainText(html);
    } catch (err) {
      console.error('Email render failed', err);
      return NextResponse.json({ success: false, error: 'Email render failed' }, { status: 500 });
    }

    // Send email
    try {
      await resend.emails.send({
        from: `Cobalt Contact <${env.EMAIL_SENDER}>`,
        to: env.EMAIL_RECEIVER,
        subject,
        html,
        text,
        replyTo: email,
      });
    } catch (err) {
      console.error('Resend send failed', err);
      return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Unexpected error', err);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
