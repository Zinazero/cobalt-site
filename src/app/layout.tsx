import './globals.css';
import type { Metadata } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { JsonLd } from '@/components/seo/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-source',
});

export const metadata: Metadata = {
  title: 'Cobalt Software Solutions: Tailored Software for Ontario',
  description:
    'Ontario-based custom software solutions to streamline operations, boost productivity and provide actionable business data insights.',
  openGraph: {
    title: 'Cobalt Software Solutions',
    description: 'Custom software solutions to boost productivity.',
    url: 'https://www.cobaltsoft.ca/',
    siteName: 'Cobalt Software Solutions',
    images: [
      {
        url: 'https://www.cobaltsoft.ca/images/cobalt-preview.png',
        width: 1200,
        height: 630,
        alt: 'Cobalt Software Solutions preview',
      },
    ],
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobalt Software Solutions',
    description: 'Custom software solutions to boost productivity.',
    images: ['https://www.cobaltsoft.ca/images/cobalt-preview.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/cobalt-logo32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/cobalt-logo192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/cobalt-logo512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/images/cobalt-logo180.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.cobaltsoft.ca/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="antialiased">
        <JsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
