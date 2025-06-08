#!/usr/bin/env node

/**
 * Global Styles Update Script
 * 
 * This script updates global CSS variables and styles to ensure
 * consistent typography and spacing throughout the application.
 */

const fs = require('fs');
const path = require('path');

// Path to index.css
const cssPath = path.join(process.cwd(), 'src/index.css');

// Global style updates
const styleUpdates = [
  // Typography updates
  {
    pattern: /--font-family: 'Inter', sans-serif;/g,
    replacement: `--font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;`
  },
  {
    pattern: /--font-family-serif: 'Playfair Display', serif;/g,
    replacement: `--font-family-serif: 'Playfair Display', Georgia, 'Times New Roman', serif;`
  },
  
  // Font size simplification
  {
    pattern: /--font-size-xs: 0\.75rem;.*?--font-size-7xl: 4\.5rem;/s,
    replacement: `--font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;   /* 14px */
    --font-size-base: 1rem;     /* 16px */
    --font-size-lg: 1.125rem;   /* 18px */
    --font-size-xl: 1.25rem;    /* 20px */
    --font-size-2xl: 1.5rem;    /* 24px */
    --font-size-3xl: 1.875rem;  /* 30px */
    --font-size-4xl: 2.25rem;   /* 36px */
    --font-size-5xl: 3rem;      /* 48px */`
  },
  
  // Line height simplification
  {
    pattern: /--line-height-none: 1;.*?--line-height-loose: 2;/s,
    replacement: `--line-height-none: 1;
    --line-height-tight: 1.25;
    --line-height-snug: 1.375;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.625;
    --line-height-loose: 1.8;`
  },
  
  // Spacing updates
  {
    pattern: /\.section-spacing \{.*?\}/s,
    replacement: `.section-spacing {
    @apply py-16 md:py-24 lg:py-32;
  }`
  },
  {
    pattern: /\.section-spacing-lg \{.*?\}/s,
    replacement: `.section-spacing-lg {
    @apply py-24 md:py-32 lg:py-40;
  }`
  },
  {
    pattern: /\.section-spacing-sm \{.*?\}/s,
    replacement: `.section-spacing-sm {
    @apply py-12 md:py-16 lg:py-20;
  }`
  },
  
  // Card spacing
  {
    pattern: /\.card-spacing \{.*?\}/s,
    replacement: `.card-spacing {
    @apply p-6 md:p-8 lg:p-10;
  }`
  },
  
  // Content spacing
  {
    pattern: /\.content-spacing \{.*?\}/s,
    replacement: `.content-spacing {
    @apply space-y-8 md:space-y-12 lg:space-y-16;
  }`
  },
  
  // Content readability
  {
    pattern: /\.content-readable \{.*?\}/s,
    replacement: `.content-readable {
    @apply max-w-3xl mx-auto;
  }`
  },
  
  // Content breathability
  {
    pattern: /\.content-breathable \{.*?\}/s,
    replacement: `.content-breathable {
    @apply space-y-8 leading-relaxed;
  }`
  },
  
  // Mobile optimizations
  {
    pattern: /\.mobile-section \{.*?\}/s,
    replacement: `.mobile-section {
    @apply py-12 sm:py-16 md:py-24 lg:py-32;
  }`
  },
  
  // Heading styles
  {
    pattern: /h1, \.h1 \{.*?\}/s,
    replacement: `h1, .h1 {
    font-size: var(--font-h1);
    @apply font-serif font-bold tracking-tight leading-[1.2] mb-8 text-ilight-800;
  }`
  },
  {
    pattern: /h2, \.h2 \{.*?\}/s,
    replacement: `h2, .h2 {
    font-size: var(--font-h2);
    @apply font-serif font-bold tracking-tight leading-[1.3] mb-6 text-ilight-800;
  }`
  },
  {
    pattern: /h3, \.h3 \{.*?\}/s,
    replacement: `h3, .h3 {
    font-size: var(--font-h3);
    @apply font-serif font-bold tracking-tight leading-[1.4] mb-4 text-ilight-800;
  }`
  },
  
  // Body text
  {
    pattern: /p, \.body \{.*?\}/s,
    replacement: `p, .body {
    font-size: var(--font-body-m);
    @apply leading-relaxed text-ilight-700 mb-6;
  }`
  }
];

// Main function
function main() {
  console.log('Updating global styles...');
  
  try {
    // Read the CSS file
    let cssContent = fs.readFileSync(cssPath, 'utf8');
    let modified = false;
    
    // Apply each update
    for (const update of styleUpdates) {
      const newContent = cssContent.replace(update.pattern, update.replacement);
      if (newContent !== cssContent) {
        cssContent = newContent;
        modified = true;
      }
    }
    
    // Save changes if modified
    if (modified) {
      fs.writeFileSync(cssPath, cssContent, 'utf8');
      console.log('✓ Global styles updated successfully!');
    } else {
      console.log('✓ No changes needed for global styles.');
    }
  } catch (error) {
    console.error('✗ Error updating global styles:', error.message);
  }
}

// Run the script
main();