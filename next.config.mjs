/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",

        hostname: "adnic-demo.netlify.app",

        pathname: "/img/**",
      },
    ],
  },

  reactStrictMode: false,
};

export default nextConfig;
