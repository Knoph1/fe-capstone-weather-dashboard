// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // ignore TypeScript errors during build
  },
  images: {
    unoptimized: true, // disables image optimization (useful for Vercel deploy)
  },
  experimental: {
    appDir: true, // enables app directory support
  },
};

export default nextConfig;
