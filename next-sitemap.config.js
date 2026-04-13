/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.jsaexpertise.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
