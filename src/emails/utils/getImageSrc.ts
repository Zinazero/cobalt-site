import fs from 'fs';
import path from 'path';

const isDev = process.env.NODE_ENV !== 'production';
const clientDevUrl = process.env.CLIENT_DEV_URL;

export const getLogoSrc = (): string => {
	if (isDev && clientDevUrl) {
		return `${clientDevUrl}/images/cobalt-logo192.png`;
	}

	const filePath = path.join(
		process.cwd(),
		'src',
		'emails',
		'assets',
		'cobalt-logo192.png'
	);
	const base64 = fs.readFileSync(filePath, 'base64');
	return `data:image/png;base64,${base64}`;
};
