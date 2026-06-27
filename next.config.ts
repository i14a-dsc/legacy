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
  async redirects() {
    return [
      {
        source: "/tools",
        destination: "https://old.i14a.dev/tools",
        permanent: true,
      },
      {
        source: "/tools/unicode",
        destination: "https://old.i14a.dev/tools/unicode",
        permanent: true,
      },
      {
        source: "/tools/cn",
        destination: "https://old.i14a.dev/tools/cn",
        permanent: true,
      },
      {
        source: "/tools/aur",
        destination: "https://old.i14a.dev/aur",
        permanent: true,
      },
      {
        source: "/tools/passwd",
        destination: "https://old.i14a.dev/tools/passwd",
        permanent: true,
      },
      {
        source: "/tools/errorparse",
        destination: "https://old.i14a.dev/tools/errorparse",
        permanent: true,
      },
      {
        source: "/link",
        destination: "https://old.i14a.dev/link",
        permanent: true,
      },
      {
        source: "/useragent",
        destination: "https://old.i14a.dev/useragent",
        permanent: true,
      },
    ];
  },
  allowedDevOrigins: ["192.168.10.4"],
} as NextConfig;
