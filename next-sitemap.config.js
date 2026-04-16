const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.jsaexpertise.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  transform: async (config, url) => {
    if (url === '/') {
      return { loc: url, changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() };
    }
    if (url.startsWith('/expert-comptable-freelance')) {
      return { loc: url, changefreq: 'monthly', priority: 0.9, lastmod: new Date().toISOString() };
    }
    if (url === '/blog') {
      return { loc: url, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() };
    }
    if (url.startsWith('/blog/')) {
      return { loc: url, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
    }
    if (url === '/mentions-legales' || url === '/politique-confidentialite') {
      return { loc: url, changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() };
    }
    return { loc: url, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() };
  },
  additionalPaths: async (config) => {
    const contentDir = path.join(process.cwd(), 'src/content/blog');
    const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'));
    return files
      .map((f) => {
        const slug = f.replace(/\.mdx$/, '');
        const raw = fs.readFileSync(path.join(contentDir, f), 'utf-8');
        const { data } = matter(raw);
        if (data.published === false) return null;
        return {
          loc: `/blog/${slug}`,
          changefreq: 'monthly',
          priority: 0.8,
          lastmod: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        };
      })
      .filter(Boolean);
  },
};
