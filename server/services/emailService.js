import dotenv from 'dotenv';
dotenv.config();

import { Resend } from 'resend';

import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async ({ name, email, message }) => {
	if (!process.env.EMAIL_SENDER || !process.env.EMAIL_RECEIVER) {
		throw new Error(
			'Missing EMAIL_SENDER or EMAIL_RECEIVER environment variables.'
		);
	}

	const htmlTemplatePath = path.join(
		process.cwd(),
		'server/emails/contact-template.html'
	);

	let html = fs.readFileSync(htmlTemplatePath, 'utf8');

	html = html
		.replaceAll('{{name}}', name)
		.replaceAll('{{email}}', email)
		.replaceAll('{{message}}', message);

	return await resend.emails.send({
		from: `Cobalt Contact <${process.env.EMAIL_SENDER}>`,
		to: process.env.EMAIL_RECEIVER,
		subject: 'Contact Request',
		html,
		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
		replyTo: email,
	});
};

const sendDemoRequest = async ({
	name,
	email,
	phone,
	companyName,
	industry,
	message,
}) => {
	if (!process.env.EMAIL_SENDER || !process.env.EMAIL_RECEIVER) {
		throw new Error(
			'Missing EMAIL_SENDER or EMAIL_RECEIVER environment variables.'
		);
	}

	const htmlTemplatePath = path.join(
		process.cwd(),
		'server/emails/demo-request-template.html'
	);

	let html = fs.readFileSync(htmlTemplatePath, 'utf8');

	html = html
		.replaceAll('{{name}}', name)
		.replaceAll('{{email}}', email)
		.replaceAll('{{phone}}', phone)
		.replaceAll('{{companyName}}', companyName)
		.replaceAll('{{industry}}', industry)
		.replaceAll('{{message}}', message);

	return await resend.emails.send({
		from: `Cobalt Demo Request <${process.env.EMAIL_SENDER}>`,
		to: process.env.EMAIL_RECEIVER,
		subject: 'Demo Request',
		html,
		text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${companyName}\nIndustry: ${industry}\nMessage: ${message}`,
		replyTo: email,
	});
};

export { sendContactEmail, sendDemoRequest };
