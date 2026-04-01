import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.digiexam.com",
        pathname: "/images/digiexam-logos/**",
      },
    ],
  },
};

export default nextConfig;
