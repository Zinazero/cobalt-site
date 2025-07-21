import express from 'express';
const router = express.Router();

import { sendContactEmail } from '../services/emailService.js';

router.post('/', async (req, res) => {
    const { name, email, message, website } = req.body;

    if (website) {
        return res.status(400).json({ error: 'Spam detected' });
    }

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await sendContactEmail({ name, email, message });
        res.json({ success: true, message: 'Email sent' });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

export default router;
