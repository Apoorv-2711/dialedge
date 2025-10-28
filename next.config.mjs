/** @type {import('next').NextConfig} */

import { withContentlayer } from "next-contentlayer2";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "aiplacers.com", ".vercel.app"],
    },
  },
};

export default withContentlayer(nextConfig);
