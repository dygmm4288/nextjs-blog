/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  sassOptions: {
    includesPaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
