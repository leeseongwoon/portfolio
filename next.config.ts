import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'job-counseling-chatbot.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'tosspaments-cafe.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'memo-app-bfad2.web.app',
      },
      {
        protocol: 'http',
        hostname: 'df00.dothome.co.kr',
      }
    ],
  }
};

export default nextConfig;
