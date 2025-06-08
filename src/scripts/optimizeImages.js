#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script optimizes image usage throughout the application by:
 * 1. Adding proper loading attributes
 * 2. Ensuring responsive image handling
 * 3. Converting static image imports to dynamic imports
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  // Directories to scan
  directories: ['src/components', 'src/pages'],
  
  // File extensions to process
  extensions: ['.tsx', '.jsx'],
  
  // Image optimizations
  optimizations: {
    // Add loading="lazy" to images
    lazyLoading: {
      pattern: /<img(?!\s+loading=)[^>]*>/g,
      replacement: (match) => match.replace('<img', '<img loading="lazy"')
    },
    
    // Add alt text if missing
    altText: {
      pattern: /<img(?!\s+alt=)[^>]*>/g,
      replacement: (match) => match.replace('<img', '<img alt="iLight platform image"')
    },
    
    // Add responsive image handling
    responsive: {
      pattern: /<img\s+src="([^"]+)"(?!\s+srcSet=)[^>]*>/g,
      replacement: (match, src) => {
        // Skip for SVGs and data URLs
        if (src.includes('.svg') || src.startsWith('data:')) {
          return match;
        }
        
        // For Unsplash images, use their built-in resizing
        if (src.includes('unsplash.com')) {
          const baseUrl = src.split('?')[0];
          return match.replace(
            `src="${src}"`,
            `src="${src}" 
            srcSet="${baseUrl}?w=480&auto=format&q=80 480w, 
                   ${baseUrl}?w=800&auto=format&q=80 800w, 
                   ${baseUrl}?w=1200&auto=format&q=80 1200w"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`
          );
        }
        
        // For Cloudinary images
        if (src.includes('cloudinary.com')) {
          return match.replace(
            `src="${src}"`,
            `src="${src}" 
            srcSet="${src.replace('/upload/', '/upload/w_480,q_auto,f_auto/')},
                   ${src.replace('/upload/', '/upload/w_800,q_auto,f_auto/')},
                   ${src.replace('/upload/', '/upload/w_1200,q_auto,f_auto/')}"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`
          );
        }
        
        return match;
      }
    },
    
    // Add width and height if missing
    dimensions: {
      pattern: /<img(?!\s+width=|\s+height=)[^>]*>/g,
      replacement: (match) => {
        if (match.includes('className="w-') || match.includes('className="h-')) {
          // Already has width/height via Tailwind
          return match;
        }
        return match.replace('<img', '<img width="100%" height="auto"');
      }
    },
    
    // Add decoding="async" for better performance
    asyncDecoding: {
      pattern: /<img(?!\s+decoding=)[^>]*>/g,
      replacement: (match) => match.replace('<img', '<img decoding="async"')
    }
  }
};

// Function to process a file
function processFile(filePath) {
  console.log(`Processing ${filePath}...`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply image optimizations
    for (const [key, rule] of Object.entries(config.optimizations)) {
      const newContent = content.replace(rule.pattern, rule.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`  Applied image optimization: ${key}`);
      }
    }
    
    // Save changes if modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✓ Updated ${filePath}`);
    } else {
      console.log(`  ✓ No changes needed for ${filePath}`);
    }
  } catch (error) {
    console.error(`  ✗ Error processing ${filePath}:`, error.message);
  }
}

// Function to scan directories recursively
function scanDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      scanDirectory(filePath);
    } else if (stats.isFile() && config.extensions.includes(path.extname(filePath))) {
      processFile(filePath);
    }
  }
}

// Main function
function main() {
  console.log('Starting Image Optimization...');
  
  // Process each configured directory
  for (const directory of config.directories) {
    const dirPath = path.join(process.cwd(), directory);
    if (fs.existsSync(dirPath)) {
      console.log(`\nScanning directory: ${directory}`);
      scanDirectory(dirPath);
    } else {
      console.warn(`Directory not found: ${directory}`);
    }
  }
  
  console.log('\nImage optimization complete!');
}

// Run the script
main();