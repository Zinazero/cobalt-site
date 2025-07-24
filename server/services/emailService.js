import dotenv from 'dotenv';
dotenv.config();

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async (subject, email, html, text) => {
	if (!process.env.EMAIL_SENDER || !process.env.EMAIL_RECEIVER) {
		throw new Error(
			'Missing EMAIL_SENDER or EMAIL_RECEIVER environment variables.'
		);
	}

	return await resend.emails.send({
		from: `Cobalt Contact <${process.env.EMAIL_SENDER}>`,
		to: process.env.EMAIL_RECEIVER,
		subject: subject,
		html,
		text: text,
		replyTo: email,
	});
};

export { sendContactEmail };
