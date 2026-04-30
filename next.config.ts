import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/persadatek",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
