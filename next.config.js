/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['flowbite.s3.amazonaws.com', 'backend.reskue-art.com'],
  },
}
