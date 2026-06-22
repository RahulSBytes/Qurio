import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages : ["pino", "pino-pretty"],
  images: {
    domains: ["i.pravatar.cc"],
  },
};

export default nextConfig;
