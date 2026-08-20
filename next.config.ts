import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep production builds from overwriting the live development server's module cache.
  distDir: process.env.NODE_ENV === "production" ? ".next-production" : ".next",
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
