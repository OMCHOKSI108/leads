import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/_next/static/media/:path*",
        destination: "/static/media/:path*",
      },
      {
        source: "/_next/static/chunks/:path*",
        destination: "/static/chunks/:path*",
      },
    ];
  },
};

export default nextConfig;
