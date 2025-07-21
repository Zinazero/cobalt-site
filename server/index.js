import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import contactRoutes from './routes/contact.js';
import demoRequestRoutes from  './routes/requestDemo.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/request-demo', demoRequestRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
