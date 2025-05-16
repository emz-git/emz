# Icon & Open Graph Image Management

This directory contains scripts that can be used to generate favicon and Open Graph image files for your website.

## Favicon Generation

### Prerequisites

- Place your logo/icon source in `scripts/assets/logo.svg` (SVG preferred) or `scripts/assets/logo.png`
- The source image should be at least 512x512px and preferably square
- Install dependencies: `npm install sharp`

### Usage

```bash
# Install dependencies
npm install sharp

# Run the favicon generator
node scripts/generate-favicons.js
```

This will generate all the following favicon files in the `public/favicon` directory:

- `favicon.ico` - Standard favicon
- `favicon.svg` - SVG favicon for modern browsers
- `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png` - Standard PNG favicons
- `apple-touch-icon.png` and variants - For iOS devices
- `android-chrome-192x192.png`, `android-chrome-512x512.png` - For Android devices
- `maskable-icon-512x512.png` - For PWA maskable icons
- `mstile-*` variants - For Microsoft Windows tiles

### Manual Steps Required

After generating the favicons:

1. Create a monochrome SVG file for Safari pinned tabs named `safari-pinned-tab.svg` and place it in `public/favicon/`
2. Test your favicon implementation on [realfavicongenerator.net](https://realfavicongenerator.net/favicon_checker)

## Open Graph Image Generation

### Prerequisites

- Place your OG template in `scripts/assets/og-template.png`
- The template should be 1200x630px (Facebook/Twitter recommended size)
- Install dependencies: `npm install sharp`

### Usage

```bash
# Run the OG image generator
node scripts/generate-og-images.js
```

This will generate the following Open Graph images in the `public/images` directory:

- `og-image.jpg` - Main OG image for the site
- `og-image-services.jpg` - OG image for services page
- `og-image-contact.jpg` - OG image for contact page

### Customization

To customize the generated OG images:

1. Edit the `OG_IMAGES` array in `scripts/generate-og-images.js`
2. Adjust the template design in `scripts/assets/og-template.png`
3. Run the script again

## Implementation

The favicons and OG images are automatically used by the following components:

- `src/components/common/Favicon.tsx` - Implements all favicon links
- `src/components/common/MetaData.tsx` - Comprehensive metadata with OG tags
- `src/components/common/SEO.tsx` - Simplified SEO component

## Testing

After implementation, test your meta tags with these tools:

1. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. [Twitter Card Validator](https://cards-dev.twitter.com/validator)
3. [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
4. [Open Graph Check](https://www.opengraph.xyz/)

## Best Practices

- Keep OG images under 200KB for faster loading
- Use clear, high-contrast text that's readable at small sizes
- Include your logo on OG images for brand recognition
- Use JPG format with 80-90% quality for OG images (best size/quality ratio)
- Test how your images appear on different social platforms
