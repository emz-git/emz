/**
 * Favicon Generator Script
 *
 * This script uses the 'sharp' image processing library to generate all the
 * necessary favicon files from a single source SVG or high-resolution PNG.
 *
 * Usage:
 * 1. Install dependencies: npm install sharp
 * 2. Run: node scripts/generate-favicons.js
 *
 * Requirements:
 * - Place your source image (logo.svg or logo.png) in the scripts/assets folder
 * - The source image should be at least 512x512px
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
};

async function generateFavicons() {
  const faviconDir = path.join(__dirname, '../public/favicon');
  
  // Create favicon directory if it doesn't exist
  if (!fs.existsSync(faviconDir)) {
    fs.mkdirSync(faviconDir, { recursive: true });
  }

  // Generate PNG versions
  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(path.join(__dirname, '../public/favicon.svg'))
      .resize(size, size)
      .png()
      .toFile(path.join(faviconDir, filename));
  }

  // Generate Safari pinned tab version
  await sharp(path.join(__dirname, '../public/favicon.svg'))
    .resize(512, 512)
    .png()
    .toFile(path.join(faviconDir, 'safari-pinned-tab.svg'));

  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error);
