import fs from 'fs';
import path from 'path';

const isDev = process.env.NODE_ENV !== 'production';
const clientDevUrl = process.env.CLIENT_DEV_URL;
const logoPath =
	process.env.LOGO_PATH || './emails/assets/cobalt-logo192.png';

export const getLogoSrc = (): string => {
	if (isDev && clientDevUrl) {
		return `${clientDevUrl}/images/cobalt-logo192.png`;
	}

	const filePath = path.resolve(__dirname, '../../', logoPath);
	const base64 = fs.readFileSync(filePath, 'base64');
	return `data:image/png;base64,${base64}`;
};
