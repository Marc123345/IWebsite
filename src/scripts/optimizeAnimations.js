#!/usr/bin/env node

/**
 * Animation Optimization Script
 * 
 * This script optimizes animations throughout the application by:
 * 1. Adding hardware acceleration
 * 2. Reducing animation complexity
 * 3. Implementing animation throttling
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  // Directories to scan
  directories: ['src/components', 'src/pages'],
  
  // File extensions to process
  extensions: ['.tsx', '.jsx'],
  
  // Animation optimizations
  optimizations: {
    // Add hardware acceleration
    hardwareAcceleration: {
      pattern: /<motion\.div(?!\s+className="[^"]*transform-gpu)[^>]*>/g,
      replacement: (match) => {
        if (match.includes('className="')) {
          return match.replace('className="', 'className="transform-gpu ');
        } else {
          return match.replace('<motion.div', '<motion.div className="transform-gpu"');
        }
      }
    },
    
    // Add will-change property
    willChange: {
      pattern: /<motion\.div[^>]*animate=\{[^}]*\}[^>]*>/g,
      replacement: (match) => {
        if (match.includes('style={')) {
          return match.replace('style={', 'style={{ willChange: "transform, opacity", ');
        } else {
          return match.replace('>', ' style={{ willChange: "transform, opacity" }}>');
        }
      }
    },
    
    // Simplify complex animations
    simplifyAnimations: {
      pattern: /animate=\{\{\s*([^}]*?scale:[^}]*?)[,\s]*([^}]*?rotate:[^}]*?)[,\s]*([^}]*?)\s*\}\}/g,
      replacement: (match, scale, rotate, rest) => {
        // Keep only the most important animation property
        if (scale.includes('[')) {
          return `animate={{ ${scale} }}`;
        } else if (rotate.includes('[')) {
          return `animate={{ ${rotate} }}`;
        } else {
          return `animate={{ ${rest} }}`;
        }
      }
    },
    
    // Add useAnimationContext hook
    addAnimationContext: {
      pattern: /function\s+(\w+)(?:\([^)]*\))?\s*\{(?!\s*const\s+\{\s*animationsEnabled)/g,
      replacement: (match, componentName) => {
        // Skip for certain components
        if (componentName.includes('Provider') || componentName.includes('Context')) {
          return match;
        }
        return `function ${componentName}(props) {
  // Get animation context
  const { animationsEnabled, animationLevel } = useAnimationContext();
  
  // Respect user's motion preferences
  const prefersReducedMotion = useReducedMotion();
  
  // Disable animations if user prefers reduced motion or animations are disabled
  const shouldAnimate = !prefersReducedMotion && 
    animationsEnabled && 
    animationLevel !== 'none';
    
  ${match.replace(`function ${componentName}`, '').trim()}`;
      }
    },
    
    // Add imports for animation context
    addAnimationImports: {
      pattern: /import\s+{([^}]*)}\s+from\s+['"]framer-motion['"];?/g,
      replacement: (match, imports) => {
        if (!imports.includes('useReducedMotion')) {
          return match.replace('{', '{ useReducedMotion, ');
        }
        return match;
      },
      addContext: {
        pattern: /^(?!import.*?AnimationController)/m,
        replacement: "import { useAnimationContext } from '../components/AnimationController';\n"
      }
    }
  }
};

// Function to process a file
function processFile(filePath) {
  console.log(`Processing ${filePath}...`);
  
  try {
    // Skip files that don't use framer-motion
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('framer-motion')) {
      console.log(`  ✓ Skipping (no animations): ${filePath}`);
      return;
    }
    
    let modifiedContent = content;
    let modified = false;
    
    // Apply animation optimizations
    for (const [key, rule] of Object.entries(config.optimizations)) {
      // Apply main pattern
      if (rule.pattern) {
        const newContent = modifiedContent.replace(rule.pattern, rule.replacement);
        if (newContent !== modifiedContent) {
          modifiedContent = newContent;
          modified = true;
          console.log(`  Applied optimization: ${key}`);
        }
      }
      
      // Apply additional patterns if they exist
      for (const [subKey, subRule] of Object.entries(rule)) {
        if (subKey !== 'pattern' && subKey !== 'replacement' && subRule.pattern) {
          const newContent = modifiedContent.replace(subRule.pattern, subRule.replacement);
          if (newContent !== modifiedContent) {
            modifiedContent = newContent;
            modified = true;
            console.log(`  Applied optimization: ${key}.${subKey}`);
          }
        }
      }
    }
    
    // Save changes if modified
    if (modified) {
      fs.writeFileSync(filePath, modifiedContent, 'utf8');
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
  console.log('Starting Animation Optimization...');
  
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
  
  console.log('\nAnimation optimization complete!');
}

// Run the script
main();