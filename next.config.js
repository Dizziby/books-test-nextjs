/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.gutenberg.org", "encrypted-tbn0.gstatic.com"],
  },
}

module.exports = nextConfig
