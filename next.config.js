/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
    // serverActions: true, // Ya no son experimentales desde la versión 14
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailus.io'
      }
    ]
  }
}

module.exports = nextConfig
