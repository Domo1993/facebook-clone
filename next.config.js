/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-looaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "scontent-cpt1-1.xx.fbcdn.net"
    ]
  }
}

module.exports = nextConfig
