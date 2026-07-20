/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd28hgpri8am2if.cloudfront.net',

      },
    ],
  },
};

export default nextConfig;
