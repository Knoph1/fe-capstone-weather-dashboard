/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Secure access to environment variables
  env: {
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
  },

  // Allow images from OpenWeather and Unsplash
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Ignore ESLint errors during build (optional, for CI/CD)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Enable some experimental performance features
  experimental: {
    serverActions: true,
    optimizePackageImports: ["lucide-react", "@/components/ui"],
  },

  // Ensure production builds export correctly
  output: "standalone",
};

module.exports = nextConfig;
