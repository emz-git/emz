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

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Configuration
const SOURCE_FILE = path.join(__dirname, "assets", "logo.svg"); // or logo.png
const OUTPUT_DIR = path.join(__dirname, "..", "public", "favicon");
const THEME_COLOR = "#0f172a"; // Slate-900 from Tailwind

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Define all the icons to generate
const ICONS = [
  // Standard favicons
  { name: "favicon-16x16.png", width: 16, height: 16 },
  { name: "favicon-32x32.png", width: 32, height: 32 },
  { name: "favicon-48x48.png", width: 48, height: 48 },

  // Android icons
  { name: "android-chrome-192x192.png", width: 192, height: 192 },
  { name: "android-chrome-512x512.png", width: 512, height: 512 },
  { name: "maskable-icon-512x512.png", width: 512, height: 512, padding: 64 }, // Maskable icon needs padding

  // Apple icons
  { name: "apple-touch-icon.png", width: 180, height: 180 },
  { name: "apple-touch-icon-152x152.png", width: 152, height: 152 },
  { name: "apple-touch-icon-167x167.png", width: 167, height: 167 },

  // Microsoft tiles
  { name: "mstile-70x70.png", width: 70, height: 70 },
  { name: "mstile-150x150.png", width: 150, height: 150 },
  { name: "mstile-310x310.png", width: 310, height: 310 },
  { name: "mstile-310x150.png", width: 310, height: 150, aspectRatio: true },
];

// Check if source file exists
if (!fs.existsSync(SOURCE_FILE)) {
  console.error(`Source file ${SOURCE_FILE} not found!`);
  console.error(
    "Please place your logo.svg or logo.png in the scripts/assets folder.",
  );
  process.exit(1);
}

/**
 * Generate all favicon icons
 */
async function generateIcons() {
  try {
    let baseImage = sharp(SOURCE_FILE);

    // Get metadata to handle aspect ratio
    const metadata = await baseImage.metadata();

    // Generate each icon
    const promises = ICONS.map(async (icon) => {
      try {
        let image = sharp(SOURCE_FILE);

        // Apply padding for maskable icons
        if (icon.padding) {
          image = image
            .resize({
              width: icon.width - icon.padding * 2,
              height: icon.height - icon.padding * 2,
              fit: "contain",
              background: { r: 255, g: 255, b: 255, alpha: 0 },
            })
            .extend({
              top: icon.padding,
              bottom: icon.padding,
              left: icon.padding,
              right: icon.padding,
              background: { r: 255, g: 255, b: 255, alpha: 0 },
            });
        }
        // Handle special aspect ratio (like wide Microsoft tile)
        else if (icon.aspectRatio && metadata.width && metadata.height) {
          const originalAspect = metadata.width / metadata.height;
          const targetAspect = icon.width / icon.height;

          if (originalAspect > targetAspect) {
            // Image is wider than needed
            image = image.resize({
              height: icon.height,
              fit: "contain",
              background: { r: 255, g: 255, b: 255, alpha: 0 },
            });
          } else {
            // Image is taller than needed
            image = image.resize({
              width: icon.width,
              fit: "contain",
              background: { r: 255, g: 255, b: 255, alpha: 0 },
            });
          }
        }
        // Standard resize
        else {
          image = image.resize({
            width: icon.width,
            height: icon.height,
            fit: "contain",
            background: { r: 255, g: 255, b: 255, alpha: 0 },
          });
        }

        // Output as PNG
        await image.png().toFile(path.join(OUTPUT_DIR, icon.name));
        console.log(`Generated: ${icon.name}`);
      } catch (err) {
        console.error(`Error generating ${icon.name}:`, err);
      }
    });

    // Generate ICO file (contains multiple sizes)
    const icoPath = path.join(OUTPUT_DIR, "favicon.ico");
    try {
      // We use the existing PNGs to create an ICO
      // First generate a 16x16, 32x32, and 48x48 PNG
      await Promise.all(promises);

      // Use a library that can create ICO files if available
      // For this example, we'd just copy the 32x32 PNG since ICO creation requires additional libraries
      fs.copyFileSync(path.join(OUTPUT_DIR, "favicon-32x32.png"), icoPath);
      console.log("Generated: favicon.ico (copied from favicon-32x32.png)");
      console.log(
        "Note: For a proper multi-size ICO file, use a tool like https://convertico.com",
      );
    } catch (err) {
      console.error("Error generating favicon.ico:", err);
    }

    // For SVG favicon
    const svgFaviconPath = path.join(OUTPUT_DIR, "favicon.svg");
    try {
      if (SOURCE_FILE.endsWith(".svg")) {
        fs.copyFileSync(SOURCE_FILE, svgFaviconPath);
        console.log("Generated: favicon.svg (copied from source)");
      } else {
        // If source is not SVG, we can't create this
        console.log("Skipped favicon.svg (source is not SVG)");
      }
    } catch (err) {
      console.error("Error generating favicon.svg:", err);
    }

    console.log("\nAll favicons generated successfully!");
    console.log(`Output directory: ${OUTPUT_DIR}`);
    console.log("\nRemember to:");
    console.log(
      '1. Create a source SVG for "safari-pinned-tab.svg" (should be monochrome)',
    );
    console.log(
      "2. Ensure all the generated files are properly referenced in your HTML",
    );
  } catch (error) {
    console.error("Error generating favicons:", error);
  }
}

generateIcons();
