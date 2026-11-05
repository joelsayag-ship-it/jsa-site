import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/simulateur-charges',
        destination: '/ressources/simulateur-sasu-eurl',
        permanent: true,
      },
      {
        source: '/blog/are-arce-acre-creation-societe-freelance',
        destination: '/devenir-freelance/are-ou-arce',
        permanent: true,
      },
      {
        source: '/blog/passer-salarie-freelance-guide-2026',
        destination: '/devenir-freelance',
        permanent: true,
      },
      {
        source: '/expert-comptable-freelance-paris',
        destination: '/expert-comptable-freelance-paris-12',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
