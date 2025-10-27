import Head from 'next/head';

export const SeoHead = () => (
  <Head>
    {/* Open Graph */}
    <meta property="og:title" content="Cobalt Software Solutions" />
    <meta property="og:description" content="Custom software solutions to boost productivity." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://cobaltsoft.ca/" />
    <meta property="og:image" content="https://cobaltsoft.ca/cobalt-logo512.png" />
    <meta property="og:site_name" content="Cobalt Software Solutions" />

    {/* Twitter Cards */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Cobalt Software Solutions" />
    <meta name="twitter:description" content="Custom software solutions to boost productivity." />
    <meta name="twitter:image" content="https://cobaltsoft.ca/cobalt-logo512.png" />

    {/* Favicons */}
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="32x32" href="/cobalt-logo32.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/cobalt-logo192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/cobalt-logo512.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/cobalt-logo180.png" />
    <link rel="icon" href="/cobalt-logo.svg" type="image/svg+xml" />
  </Head>
);
