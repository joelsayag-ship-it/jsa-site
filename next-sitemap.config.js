/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.jsaexpertise.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  transform: async (config, path) => {
    // Pages locales et home : priorité haute
    if (path === '/') {
      return { loc: path, changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() };
    }
    if (path.startsWith('/expert-comptable-freelance')) {
      return { loc: path, changefreq: 'monthly', priority: 0.9, lastmod: new Date().toISOString() };
    }
    if (path === '/blog') {
      return { loc: path, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() };
    }
    if (path.startsWith('/blog/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
    }
    if (path === '/mentions-legales' || path === '/politique-confidentialite') {
      return { loc: path, changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() };
    }
    return { loc: path, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() };
  },
};
