/** @type {import('next-sitemap').IConfig} */ module.exports = {
  siteUrl: process.env.SITE_URL || "https://example.com",
  generateRobotsTxt: true,
  exclude: ["/private-page"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/private-page" },
      { userAgent: "*", allow: "/" },
    ],
  },
};
