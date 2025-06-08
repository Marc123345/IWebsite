#!/usr/bin/env node

/**
 * Bundle Analysis Script
 * 
 * This script analyzes the application bundle size and identifies
 * opportunities for optimization.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Main function
async function main() {
  console.log('Starting bundle analysis...');
  
  try {
    // Run build with analyze mode
    console.log('\nBuilding application in analyze mode...');
    execSync('npm run analyze', { stdio: 'inherit' });
    
    console.log('\nBundle analysis complete!');
    console.log('\nRecommendations for optimization:');
    console.log('1. Review the stats.html file in the dist directory');
    console.log('2. Look for large dependencies that could be code-split or lazy-loaded');
    console.log('3. Consider implementing dynamic imports for route components');
    console.log('4. Check for duplicate dependencies or unnecessary imports');
    
    // Check if stats.html was generated
    const statsPath = path.join(process.cwd(), 'dist', 'stats.html');
    if (fs.existsSync(statsPath)) {
      console.log('\nStats file generated successfully at: dist/stats.html');
      console.log('Open this file in your browser to visualize your bundle composition.');
    } else {
      console.warn('\nStats file was not generated. Make sure rollup-plugin-visualizer is configured correctly.');
    }
  } catch (error) {
    console.error('\nError during bundle analysis:', error.message);
    process.exit(1);
  }
}

// Run the script
main();