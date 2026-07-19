import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Suppress cross-origin dev warning (preview environment)
  allowedDevOrigins: ["*.space-z.ai"],
  // Allow the Yusafir logo image domain (none external yet, but easy to extend)
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
