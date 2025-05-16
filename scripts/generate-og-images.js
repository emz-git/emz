/**
 * Open Graph Image Generator Script
 *
 * This script uses the 'sharp' image processing library to generate
 * optimized Open Graph images for social media sharing.
 *
 * Usage:
 * 1. Install dependencies: npm install sharp
 * 2. Run: node scripts/generate-og-images.js
 *
 * Requirements:
 * - Place your base template image in the scripts/assets folder
 * - The template should be 1200x630px (Facebook/Twitter recommended size)
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Configuration
const TEMPLATE_FILE = path.join(__dirname, "assets", "og-template.png");
const LOGO_FILE = path.join(__dirname, "assets", "logo.png");
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Define the Open Graph images to generate
const OG_IMAGES = [
  {
    name: "og-image.jpg",
    title: "ElevateModernZone",
    subtitle: "Management Consulting & Data Analysis",
    outputFormat: "jpeg",
    quality: 85,
  },
  {
    name: "og-image-services.jpg",
    title: "Our Services",
    subtitle: "Management Consulting, Data Analysis & AI Solutions",
    outputFormat: "jpeg",
    quality: 85,
  },
  {
    name: "og-image-contact.jpg",
    title: "Get in Touch",
    subtitle: "Start your business transformation today",
    outputFormat: "jpeg",
    quality: 85,
  },
];

/**
 * Generate text overlay SVG
 */
function generateTextOverlay(title, subtitle) {
  return Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <style>
        @font-face {
          font-family: 'Inter';
          src: url('data:application/font-woff;charset=utf-8;base64,BASE64_FONT_DATA_HERE') format('woff');
          font-weight: bold;
        }
        .title { 
          font-family: 'Inter', sans-serif; 
          font-weight: bold; 
          font-size: 72px; 
          fill: white;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .subtitle { 
          font-family: 'Inter', sans-serif; 
          font-size: 36px; 
          fill: rgba(255, 255, 255, 0.9);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      </style>
      <text x="600" y="280" text-anchor="middle" class="title">${title}</text>
      <text x="600" y="360" text-anchor="middle" class="subtitle">${subtitle}</text>
    </svg>
  `);
}

/**
 * Generate Open Graph images with text and logo overlays
 */
async function generateOGImages() {
  try {
    // Check if template file exists
    if (!fs.existsSync(TEMPLATE_FILE)) {
      console.error(`Template file ${TEMPLATE_FILE} not found!`);
      console.error(
        "Please place your og-template.png in the scripts/assets folder.",
      );
      process.exit(1);
    }

    // Check if logo file exists
    const hasLogo = fs.existsSync(LOGO_FILE);

    // Generate each OG image
    for (const image of OG_IMAGES) {
      try {
        console.log(`Generating ${image.name}...`);

        // Start with the template
        let processedImage = sharp(TEMPLATE_FILE);

        // Add logo if available (positioned in top-right corner)
        if (hasLogo) {
          processedImage = await processedImage.composite([
            {
              input: await sharp(LOGO_FILE)
                .resize({ height: 80, withoutEnlargement: true })
                .toBuffer(),
              top: 40,
              left: 1080,
            },
          ]);
        }

        // Add text overlay
        const textOverlay = generateTextOverlay(image.title, image.subtitle);
        processedImage = await processedImage.composite([
          {
            input: textOverlay,
            top: 0,
            left: 0,
          },
        ]);

        // Output the final image
        if (image.outputFormat === "jpeg") {
          await processedImage
            .jpeg({ quality: image.quality || 85 })
            .toFile(path.join(OUTPUT_DIR, image.name));
        } else {
          await processedImage.png().toFile(path.join(OUTPUT_DIR, image.name));
        }

        console.log(`Generated: ${image.name}`);
      } catch (err) {
        console.error(`Error generating ${image.name}:`, err);
      }
    }

    console.log("\nOpen Graph images generated successfully!");
    console.log(`Output directory: ${OUTPUT_DIR}`);

    // Generate a simple placeholder if no template exists
    if (!fs.existsSync(TEMPLATE_FILE)) {
      console.log(
        "\nGenerating a placeholder OG image since no template was found...",
      );
      await sharp({
        create: {
          width: 1200,
          height: 630,
          channels: 4,
          background: { r: 15, g: 23, b: 42, alpha: 1 }, // Slate-900
        },
      })
        .composite([
          {
            input: Buffer.from(`
            <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="1200" height="630" fill="#0f172a"/>
              <text x="600" y="315" font-family="Arial" font-size="72" font-weight="bold" text-anchor="middle" fill="white">ElevateModernZone</text>
            </svg>
          `),
            top: 0,
            left: 0,
          },
        ])
        .jpeg({ quality: 90 })
        .toFile(path.join(OUTPUT_DIR, "og-image-placeholder.jpg"));

      console.log("Generated placeholder OG image: og-image-placeholder.jpg");
    }
  } catch (error) {
    console.error("Error generating Open Graph images:", error);
  }
}

generateOGImages();
