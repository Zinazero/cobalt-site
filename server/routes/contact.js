import express from 'express';
const router = express.Router();

import { sendContactEmail } from '../services/emailService.js';

router.post('/', async (req, res) => {
	const { subject, email, html, text, website } = req.body;

	if (website) {
		return res.status(400).json({ error: 'Spam detected' });
	}

	try {
		await sendContactEmail(subject, email, html, text);
		res.json({ success: true, message: 'Email sent' });
	} catch (error) {
		console.error('Email sending error:', error.stack || error);
		res.status(500).json({ error: 'Failed to send email' });
	}
});

export default router;
