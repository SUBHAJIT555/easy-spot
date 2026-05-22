const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  turbopack: {
    root: path.join(__dirname),
  },
  // reactStrictMode: true,
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
  async rewrites() {
    if (process.env.NODE_ENV !== 'development') {
      return { beforeFiles: [], afterFiles: [], fallback: [] }
    }

    return {
      beforeFiles: [
        {
          source: '/api/submit.php',
          destination: 'http://localhost/ecom/api/submit.php',
        },
      ],
      afterFiles: [],
      fallback: [],
    }
  },
}

module.exports = nextConfig