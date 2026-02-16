import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "se.haikalhilmi.my.id",
      },
      {
        protocol: "https",
        hostname: "haikalhilmi.my.id",
      },
    ],
  },
};

export default nextConfig;
