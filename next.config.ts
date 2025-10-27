import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // catch potential React issues early
  experimental: {
    optimizeCss: true, // tree-shake unused CSS
    scrollRestoration: true, // restore scroll position on back/forward
  },
  images: {
    formats: ['image/avif', 'image/webp'], // modern compressed formats
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // strip console logs
  },
};

export default nextConfig;
