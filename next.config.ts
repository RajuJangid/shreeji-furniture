import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // <--- REQUIRED for Unsplash
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",   // <--- REQUIRED for some Unsplash images
      },
      {
        protocol: "https",
        hostname: "drive.google.com",    // <--- For Google Drive
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",  // <--- For Cloudinary (Future proof)
      },
    ],
  },
};

export default nextConfig;