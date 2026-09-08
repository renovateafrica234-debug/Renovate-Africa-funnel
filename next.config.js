/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep SSR enabled for IP-based currency detection
  // If you ever need static export, comment this out:
  // output: 'export',

  images: {
    domains: [],
    // For external images if needed later
    // domains: ['your-cdn.com', 'images.unsplash.com'],
  },

  // Enable React Strict Mode for better dev experience
  reactStrictMode: true,

  // Optional: Configure trailing slashes
  // trailingSlash: true,
}

module.exports = nextConfig
