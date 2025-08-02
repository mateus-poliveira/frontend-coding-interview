const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/photos",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
