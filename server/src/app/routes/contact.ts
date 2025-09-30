import express from 'express';
import { sendContactEmail } from '../services/emailService';
import { Field } from '../types';

const router = express.Router();

interface ContactRequestBody {
	subject: string;
	email: string;
	fields: Field[];
	website?: string; // Honeypot
}

router.post(
	'/',
	async (req: express.Request<{}, {}, ContactRequestBody>, res: express.Response): Promise<void> => {
		const { subject, email, fields, website } = req.body;

		if (website) {
			res.status(400).json({ success: false, error: 'Spam detected' });
			return;
		}

		if (!subject || !email || !fields || fields.length < 1) {
			res.status(400).json({ success: false, error: 'Missing required fields' });
			return;
		}

		try {
			await sendContactEmail({ subject, email, fields });
			res.json({ success: true, message: 'Email sent' });
		} catch (error: any) {
			console.error('Email sending error:', error.stack || error);
			res.status(500).json({ success: false, error: 'Failed to send email' });
		}
	}
);

export default router;
