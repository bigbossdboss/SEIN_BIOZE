/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/boutique",
        destination: "/services",
        permanent: true
      },
      {
        source: "/boutique/:path*",
        destination: "/services",
        permanent: true
      },
      {
        source: "/reservation",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/reservation/:path*",
        destination: "/contact",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
