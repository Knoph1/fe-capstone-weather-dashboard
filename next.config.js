/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow Next.js to use environment variables securely
  env: {
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
  },

  // Enable image optimization for OpenWeather & other external APIs
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org", // for weather icons
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com", // optional (for UI icons)
      },
    ],
  },

  // Experimental optimizations for performance
  experimental: {
    serverActions: true,
    optimizePackageImports: ["lucide-react", "@/components/ui"],
  },

  // Allow static exports if needed later
  output: "standalone",
}

module.exports = nextConfig
