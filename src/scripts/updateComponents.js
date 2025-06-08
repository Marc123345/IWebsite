#!/usr/bin/env node

/**
 * Component Update Script
 * 
 * This script updates specific components to ensure consistent
 * typography, spacing, and reduced copy density.
 */

const fs = require('fs');
const path = require('path');

// Components to update
const componentsToUpdate = [
  {
    path: 'src/components/SectionHeading.tsx',
    updates: [
      // Ensure consistent heading styles
      {
        pattern: /<h2 className={\`.*?\`}>{title}<\/h2>/g,
        replacement: '<h2 className={`${titleSizeClasses[titleSize]} ${textColor || \'text-black\'} font-bold font-serif leading-tight`}>{title}</h2>'
      },
      // Improve description readability
      {
        pattern: /className={\`.*?descriptionSizeClasses\[descriptionSize\].*?\`}/g,
        replacement: 'className={`${textColor || \'text-black\'} max-w-3xl ${descriptionSize ? descriptionSizeClasses[descriptionSize] : \'text-lg md:text-xl\'} ${align === \'center\' ? \'mx-auto\' : \'\'} leading-relaxed`}'
      }
    ]
  },
  {
    path: 'src/components/Card.tsx',
    updates: [
      // Increase padding for better spacing
      {
        pattern: /const paddingClasses = \{[^}]*\}/s,
        replacement: `const paddingClasses = {
    sm: 'p-5 sm:p-6',
    md: 'p-6 sm:p-8 md:p-10',
    lg: 'p-8 sm:p-10 md:p-12'
  }`
      }
    ]
  },
  {
    path: 'src/components/Button.tsx',
    updates: [
      // Improve button spacing
      {
        pattern: /const sizes = \{[^}]*\}/s,
        replacement: `const sizes = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-lg',
    xl: 'px-10 py-4 text-xl'
  }`
      }
    ]
  },
  {
    path: 'src/components/Hero.tsx',
    updates: [
      // Improve hero spacing and typography
      {
        pattern: /className="font-serif text-white text-shadow-lg text-\d+xl[^"]*"/g,
        replacement: 'className="font-serif text-white text-shadow-lg text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"'
      },
      {
        pattern: /className="text-\w+ text-white\/\d+ mb-\d+[^"]*"/g,
        replacement: 'className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"'
      }
    ]
  }
];

// Function to update a component
function updateComponent(componentConfig) {
  console.log(`Updating ${componentConfig.path}...`);
  
  try {
    // Check if file exists
    if (!fs.existsSync(componentConfig.path)) {
      console.warn(`  ✗ File not found: ${componentConfig.path}`);
      return;
    }
    
    // Read the component file
    let content = fs.readFileSync(componentConfig.path, 'utf8');
    let modified = false;
    
    // Apply each update
    for (const update of componentConfig.updates) {
      const newContent = content.replace(update.pattern, update.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Save changes if modified
    if (modified) {
      fs.writeFileSync(componentConfig.path, content, 'utf8');
      console.log(`  ✓ Updated ${componentConfig.path}`);
    } else {
      console.log(`  ✓ No changes needed for ${componentConfig.path}`);
    }
  } catch (error) {
    console.error(`  ✗ Error updating ${componentConfig.path}:`, error.message);
  }
}

// Main function
function main() {
  console.log('Starting component updates...');
  
  // Update each component
  for (const component of componentsToUpdate) {
    updateComponent(component);
  }
  
  console.log('\nComponent updates complete!');
}

// Run the script
main();