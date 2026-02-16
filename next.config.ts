import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/software-engineer",
        destination: "https://se.haikalhilmi.my.id",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
