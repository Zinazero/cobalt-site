import express from 'express';
const router = express.Router();

import { sendDemoRequest } from '../services/emailService.js';

router.post('/', async (req, res) => {
    const { firstName, lastName, email, phone, companyName, industry, message, website } = req.body;

    if (website) {
        return res.status(400).json({ error: 'Spam detected' });
    }

    if (!firstName || !lastName || !email || !companyName) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const name = `${firstName} ${lastName}`;

    try {
        await sendDemoRequest({ name, email, phone, companyName, industry, message });
        console.log(`Successfully sent email from ${email}. ${new Date().toISOString()}`)
        res.json({ success: true, message: 'Email sent' });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

export default router;
