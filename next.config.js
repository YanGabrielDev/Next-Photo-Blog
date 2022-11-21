/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/MyHome",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
