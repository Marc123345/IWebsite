#!/usr/bin/env node

/**
 * Complete Optimization Script
 * 
 * This script runs all optimization scripts to improve performance
 * across the entire application.
 */

const { execSync } = require('child_process');
const path = require('path');

// Scripts to run
const scripts = [
  'analyzeBundle.js',
  'optimizeBundle.js',
  'optimizeImages.js',
  'optimizeAnimations.js'
];

// Main function
function main() {
  console.log('Starting complete application optimization...\n');
  
  // Make scripts executable
  try {
    execSync('chmod +x src/scripts/*.js');
  } catch (error) {
    console.warn('Could not make scripts executable. You may need to run them manually.');
  }
  
  // Run each script
  for (const script of scripts) {
    const scriptPath = path.join(process.cwd(), 'src/scripts', script);
    console.log(`\n========== Running ${script} ==========\n`);
    
    try {
      execSync(`node ${scriptPath}`, { stdio: 'inherit' });
      console.log(`\n✓ ${script} completed successfully!`);
    } catch (error) {
      console.error(`\n✗ Error running ${script}:`, error.message);
    }
  }
  
  console.log('\n========== Optimization Complete ==========');
  console.log('\nThe application has been optimized for better performance.');
  console.log('Please review the changes and make any necessary adjustments.');
  console.log('\nNext steps:');
  console.log('1. Run the application to verify everything works correctly');
  console.log('2. Build the application to see the impact on bundle size');
  console.log('3. Deploy the optimized application');
}

// Run the script
main();