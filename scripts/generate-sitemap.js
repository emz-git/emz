/**
 * Sitemap Generator
 *
 * This script generates a sitemap.xml file for your website to improve search engine indexing.
 * It can be run manually or as part of your build process.
 *
 * Usage:
 * 1. Run: node scripts/generate-sitemap.js
 *
 * Requirements:
 * - Configure the routes array below with all your website's pages
 */

const fs = require("fs");
const path = require("path");

// Configuration
const SITE_URL = "https://elevatemodernzone.com";
const OUTPUT_PATH = path.join(__dirname, "..", "public", "sitemap.xml");

// Define all routes in your application
const routes = [
  { path: "/", priority: 1.0, changeFreq: "weekly" },
  { path: "/about", priority: 0.8, changeFreq: "monthly" },
  { path: "/services", priority: 0.9, changeFreq: "weekly" },
  { path: "/contact", priority: 0.7, changeFreq: "monthly" },
  { path: "/faq", priority: 0.6, changeFreq: "monthly" },
  { path: "/portfolio", priority: 0.8, changeFreq: "weekly" },
  { path: "/testimonials", priority: 0.7, changeFreq: "monthly" },
  // Add all your routes here
];

/**
 * Generate the sitemap.xml content
 * @returns {string} The XML content
 */
function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';

  for (const route of routes) {
    xml += "  <url>\n";
    xml += `    <loc>${SITE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changeFreq}</changefreq>\n`;
    xml += `    <priority>${route.priority.toFixed(1)}</priority>\n`;
    xml += "  </url>\n";
  }

  xml += "</urlset>";
  return xml;
}

/**
 * Write the sitemap to disk
 */
function writeSitemap() {
  const sitemap = generateSitemap();

  // Create directory if it doesn't exist
  const dir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write the sitemap
  fs.writeFileSync(OUTPUT_PATH, sitemap);

  console.log(`Sitemap generated successfully at: ${OUTPUT_PATH}`);
}

// Run the generator
writeSitemap();
