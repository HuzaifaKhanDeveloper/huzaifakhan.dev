/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com']
  },
  async rewrites() {
    return [
      {
        source: '/services/:slug',
        destination: '/services/:slug',
      },
    ];
  },
};

module.exports = nextConfig;