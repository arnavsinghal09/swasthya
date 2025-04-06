import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mun-website-images.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;