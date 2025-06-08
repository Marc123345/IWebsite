#!/usr/bin/env node

/**
 * Typography and Copy Density Optimization Script
 * 
 * This script scans all files in the src directory and applies consistent
 * typography and spacing rules to improve readability and reduce copy density.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  // Directories to scan
  directories: ['src/components', 'src/pages'],
  
  // File extensions to process
  extensions: ['.tsx', '.jsx', '.ts', '.js'],
  
  // Typography replacements
  typography: {
    // Convert gradient text to solid text
    gradientText: {
      pattern: /bg-gradient-to-[br].*?bg-clip-text text-transparent/g,
      replacement: 'text-ilight-800'
    },
    
    // Ensure headings use serif font
    headings: {
      pattern: /<h[1-6][^>]*>(?!.*?font-serif)/g,
      replacement: (match) => match.replace('<h', '<h').replace('>', ' className="font-serif">'),
    },
    
    // Ensure consistent font sizes
    fontSizes: {
      // Reduce excessive text sizes
      pattern: /text-\d?xl/g,
      replacement: (match) => {
        if (match === 'text-6xl' || match === 'text-7xl') return 'text-5xl';
        if (match === 'text-5xl') return 'text-4xl';
        return match;
      }
    }
  },
  
  // Copy density improvements
  copyDensity: {
    // Increase padding
    padding: {
      pattern: /p-[1-4] /g,
      replacement: (match) => {
        const num = parseInt(match.replace('p-', ''));
        return `p-${num + 2} `;
      }
    },
    
    // Increase margins
    margins: {
      pattern: /m[tbrlxy]-[1-4] /g,
      replacement: (match) => {
        const [type, num] = match.split('-');
        return `${type}-${parseInt(num) + 1} `;
      }
    },
    
    // Increase line height
    lineHeight: {
      pattern: /leading-(?!relaxed|loose)/g,
      replacement: 'leading-relaxed'
    },
    
    // Increase gap between elements
    gap: {
      pattern: /gap-[1-4] /g,
      replacement: (match) => {
        const num = parseInt(match.replace('gap-', ''));
        return `gap-${num + 2} `;
      }
    }
  }
};

// Function to process a file
function processFile(filePath) {
  console.log(`Processing ${filePath}...`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply typography replacements
    for (const [key, rule] of Object.entries(config.typography)) {
      const newContent = content.replace(rule.pattern, rule.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`  Applied typography rule: ${key}`);
      }
    }
    
    // Apply copy density improvements
    for (const [key, rule] of Object.entries(config.copyDensity)) {
      const newContent = content.replace(rule.pattern, rule.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`  Applied density rule: ${key}`);
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
  console.log('Starting Typography and Copy Density Optimization...');
  
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
  
  console.log('\nOptimization complete!');
}

// Run the script
main();