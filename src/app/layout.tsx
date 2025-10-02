import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { SeoHead } from '@/components/seo/SeoHead';

export const metadata: Metadata = {
	title: 'Cobalt Software Solutions',
	description:
		'Ontario-based custom software solutions to streamline operations, boost productivity and provide actionable business data insights.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='antialiased'>
        <SeoHead />
				<JsonLd />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
