import express from 'express';
import env from '../config/env';
import { applyMiddleware } from './middleware';
import apiRoutes from './routes/index';
import { serveClient } from './serveClient';

const app = express();

// MiddleWare
applyMiddleware(app);

// Routes
app.use('/api', apiRoutes);

if (env.NODE_ENV === 'production') {
	serveClient(app);
}

export default app;
