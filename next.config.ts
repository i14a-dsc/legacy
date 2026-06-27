import type { NextConfig } from "next";

export default {
  output: "export",
  trailingSlash: false,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "count.getloli.com",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "*.i14a.dev",
      },
    ],
  },
  allowedDevOrigins: ["192.168.10.4"],
} as NextConfig;
