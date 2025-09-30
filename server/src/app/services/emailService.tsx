import { Resend } from 'resend';
import env from '../../config/env';
import { Field } from '../types';
import { render, pretty, toPlainText } from '@react-email/render';
import ContactTemplate from '../../../emails/templates/ContactTemplate'
import { ReactNode } from 'react';

const resend = new Resend(env.RESEND_API_KEY);

interface ContactEmail {
	subject: string;
	email: string;
	fields: Field[];
}

const sendContactEmail = async ({ subject, email, fields }: ContactEmail) => {
	if (!env.EMAIL_SENDER || !env.EMAIL_RECEIVER) {
		throw new Error(
			'Missing EMAIL_SENDER or EMAIL_RECEIVER environment variables.'
		);
	};

		const html = await pretty(
			await render(<ContactTemplate fields={fields} />)
		);
		const text = toPlainText(html);

	return await resend.emails.send({
		from: `Cobalt Contact <${env.EMAIL_SENDER}>`,
		to: env.EMAIL_RECEIVER,
		subject: subject,
		html,
		text: text,
		replyTo: email,
	});
};

export { sendContactEmail };
