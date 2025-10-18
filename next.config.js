/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org", // for weather icons
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com", // optional
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // optional backgrounds
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "@/components/ui"],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  output: "standalone",
};

module.exports = nextConfig;
