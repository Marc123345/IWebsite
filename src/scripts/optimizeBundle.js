#!/usr/bin/env node

/**
 * Bundle Optimization Script
 * 
 * This script implements various optimizations to reduce bundle size
 * and improve application performance.
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
  
  // Optimization patterns
  optimizations: {
    // Convert regular imports to lazy imports for page components
    lazyLoading: {
      pattern: /import\s+(\w+)\s+from\s+['"]\.\.\/pages\/([^'"]+)['"]/g,
      replacement: "const $1 = lazy(() => import('../pages/$2'))"
    },
    
    // Add React.memo to components that don't have it
    memoization: {
      pattern: /export\s+default\s+function\s+(\w+)/g,
      replacement: (match, componentName) => {
        // Skip for page components which are usually top-level
        if (componentName.includes('Page')) {
          return match;
        }
        return `function ${componentName}`;
      },
      footer: {
        pattern: /export\s+default\s+(\w+);?\s*$/g,
        replacement: (match, componentName) => {
          // Skip for page components
          if (componentName.includes('Page')) {
            return match;
          }
          return `export default memo(${componentName});`;
        }
      }
    },
    
    // Add import for memo if not present
    addMemoImport: {
      pattern: /import\s+{([^}]*)}\s+from\s+['"]react['"];?/g,
      replacement: (match, imports) => {
        if (!imports.includes('memo')) {
          return match.replace('{', '{ memo, ');
        }
        return match;
      },
      fallback: {
        pattern: /import\s+React(\s*,\s*{\s*([^}]*)\s*})?\s+from\s+['"]react['"];?/g,
        replacement: (match, _, imports) => {
          if (!imports || !imports.includes('memo')) {
            return match.replace('React', 'React, { memo }');
          }
          return match;
        }
      },
      add: {
        pattern: /^(?!import.*?['"]react['"])(?!import.*?memo)/g,
        replacement: "import { memo } from 'react';\n"
      }
    },
    
    // Add useMemo for expensive calculations
    addUseMemo: {
      pattern: /const\s+(\w+)\s+=\s+(\[.*?\].filter\(|Array\.from\(|new\s+\w+\(|JSON\.parse\(|Object\.keys\(|Object\.values\()/g,
      replacement: (match, varName, calculation) => {
        return `const ${varName} = useMemo(() => ${calculation}`;
      },
      closing: {
        pattern: /(const\s+\w+\s+=\s+useMemo\(\(\)\s+=>\s+.*?)(\s*);/gs,
        replacement: "$1, []$2;"
      }
    },
    
    // Add useCallback for event handlers
    addUseCallback: {
      pattern: /const\s+(\w+)\s+=\s+\(\s*(\w+(\s*,\s*\w+)*)?\s*\)\s+=>\s+{/g,
      replacement: (match, fnName, params) => {
        // Skip if the function name includes "render" or is a component (starts with uppercase)
        if (fnName.includes('render') || fnName.match(/^[A-Z]/)) {
          return match;
        }
        return `const ${fnName} = useCallback((${params || ''}) => {`;
      },
      closing: {
        pattern: /(const\s+\w+\s+=\s+useCallback\(\(.*?\)\s+=>\s+{[\s\S]*?}\))/g,
        replacement: "$1, []"
      }
    },
    
    // Add import for useMemo/useCallback if not present
    addHooksImport: {
      pattern: /import\s+{([^}]*)}\s+from\s+['"]react['"];?/g,
      replacement: (match, imports) => {
        const hooksToAdd = [];
        if (!imports.includes('useMemo')) hooksToAdd.push('useMemo');
        if (!imports.includes('useCallback')) hooksToAdd.push('useCallback');
        
        if (hooksToAdd.length > 0) {
          return match.replace('{', `{ ${hooksToAdd.join(', ')}, `);
        }
        return match;
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
    
    // Skip files that are already optimized
    if (content.includes('// OPTIMIZED')) {
      console.log(`  ✓ File already optimized: ${filePath}`);
      return;
    }
    
    // Apply optimizations
    for (const [key, rule] of Object.entries(config.optimizations)) {
      // Apply main pattern
      if (rule.pattern) {
        const newContent = content.replace(rule.pattern, rule.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
          console.log(`  Applied optimization: ${key}`);
        }
      }
      
      // Apply additional patterns if they exist
      for (const [subKey, subRule] of Object.entries(rule)) {
        if (subKey !== 'pattern' && subKey !== 'replacement' && subRule.pattern) {
          const newContent = content.replace(subRule.pattern, subRule.replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
            console.log(`  Applied optimization: ${key}.${subKey}`);
          }
        }
      }
    }
    
    // Add optimization marker
    if (modified) {
      content = `// OPTIMIZED\n${content}`;
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
  console.log('Starting bundle optimization...');
  
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
  
  console.log('\nBundle optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Review the changes made to ensure they don\'t break functionality');
  console.log('2. Run the application to verify everything works correctly');
  console.log('3. Build the application again to see the impact on bundle size');
}

// Run the script
main();