import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import env from '@/config/env';
import { render, pretty, toPlainText } from '@react-email/render';
import ContactTemplate from '../../../emails/templates/ContactTemplate';
import type { Field } from '@/types';

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	try {
    console.log('receiving!')

		const {
			subject,
			email,
			fields,
		}: { subject: string; email: string; fields: Field[] } = await req.json();

		if (!env.EMAIL_SENDER || !env.EMAIL_RECEIVER) {
			return NextResponse.json(
				{ error: 'Missing EMAIL_SENDER or EMAIL_RECEIVER' },
				{ status: 500 }
			);
		}

		const html = await pretty(
			await render(<ContactTemplate fields={fields} />)
		);
		const text = toPlainText(html);

		await resend.emails.send({
			from: `Cobalt Contact <${env.EMAIL_SENDER}>`,
			to: env.EMAIL_RECEIVER,
			subject,
			html,
			text,
			replyTo: email,
		});

		return NextResponse.json({ success: true });
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ error: 'Failed to send email' },
			{ status: 500 }
		);
	}
}
