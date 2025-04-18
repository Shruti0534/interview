import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode
  swcMinify: true, // Enable SWC-based minification (faster builds)
  images: {
    domains: ['example.com'], // Add allowed image domains (example.com should be replaced with actual image domains)
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during the build (if you want to bypass ESLint errors during production build)
  },
  typescript: {
    ignoreBuildErrors: false, // Set to true to ignore TypeScript errors during production build (optional)
  },
  env: {
    CUSTOM_ENV_VARIABLE: 'value', // Add custom environment variables (replace as needed)
  },
  webpack(config, { isServer }) {
    // Custom Webpack configuration can go here
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // Example for fixing issues with certain Node modules on the client side
    }
    return config;
  },
};

export default nextConfig;
