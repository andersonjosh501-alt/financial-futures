import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/simulator",
        destination: "/simulator.html",
      },
    ];
  },
};

export default nextConfig;
