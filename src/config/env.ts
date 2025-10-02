interface Env {
	RESEND_API_KEY: string;
	EMAIL_SENDER: string;
	EMAIL_RECEIVER: string;
}

const env: Env = {
	RESEND_API_KEY: process.env.RESEND_API_KEY || '',
	EMAIL_SENDER: process.env.EMAIL_SENDER || '',
	EMAIL_RECEIVER: process.env.EMAIL_RECEIVER || '',
};

for (const [key, value] of Object.entries(env)) {
	if (!value) throw new Error(`Missing environment variable: ${key}`);
}

export default env;
