module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/categories/CHARTS',
        permanent: true,
      },
      {
        source: '/charts',
        destination: '/categories/CHARTS',
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      'links.papareact.com',
      'image.tmdb.org',
      'rebrand.ly',
      'drive.google.com',
      'i.scdn.co',
    ],
  },
};
