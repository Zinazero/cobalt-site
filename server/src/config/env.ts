import dotenv from 'dotenv';
import path from 'path';

const envFile = path.resolve(
	process.cwd(),
	process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
);
dotenv.config({ path: envFile });

interface Env {
	PORT: number;
	NODE_ENV: 'development' | 'production' | 'test';
	CORS_ORIGIN: string;
    RESEND_API_KEY: string;
    EMAIL_SENDER: string;
    EMAIL_RECEIVER: string;
}

const env: Env = {
	PORT: process.env.PORT ? parseInt(process.env.PORT) : 5002,
	NODE_ENV: (process.env.NODE_ENV as Env['NODE_ENV']) || 'development',
	CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',
    RESEND_API_KEY: process.env.RESEND_API_KEY || '',
    EMAIL_SENDER: process.env.EMAIL_SENDER || '',
    EMAIL_RECEIVER: process.env.EMAIL_RECEIVER || '',
};

for (const [key, value] of Object.entries(env)) {
	if (value === undefined || value === '') {
		throw new Error(`Missing environment variable: ${key}`);
	}
}

export default env;
