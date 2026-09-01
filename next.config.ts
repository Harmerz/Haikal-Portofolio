import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep metadata in <head> for crawlers and audit tools instead of streaming it.
  htmlLimitedBots: /.*/,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "se.haikalhilmi.my.id",
      },
      {
        protocol: "https",
        hostname: "haikalhilmi.my.id",
      },
      {
        protocol: "https",
        hostname: "www.haikalhilmi.my.id",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
