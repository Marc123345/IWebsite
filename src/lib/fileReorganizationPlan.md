# File Reorganization Plan for iLight Platform

## Current System Analysis

The iLight platform currently has a relatively flat file structure with some organization but room for improvement. The current structure has these characteristics:

- Components are mostly in a flat structure within `src/components`
- Some feature-specific components are organized in subdirectories (e.g., `about`, `ai`, `community`)
- Hooks are well-organized in a dedicated `src/hooks` directory
- Utility functions are spread across multiple files in `src/lib`
- Pages are organized by feature in `src/pages` with subdirectories for sections

## Performance Bottlenecks Identified

1. **Large Bundle Size**: The current structure doesn't optimize for code splitting, leading to larger initial bundle sizes.
2. **Inefficient Imports**: Many components import from individual files rather than using barrel exports.
3. **Render Performance**: Lack of memoization for frequently re-rendered components.
4. **Animation Performance**: Complex animations running simultaneously on lower-end devices.
5. **Image Loading**: Images aren't optimized for responsive loading and different device capabilities.
6. **Unused Code**: Some components may be loaded but never used on certain pages.

## Recommended Folder Hierarchy

```
src/
├── assets/                  # Static assets
│   ├── images/              # Image files
│   ├── fonts/               # Font files
│   └── icons/               # Icon files (if not using Lucide)
│
├── components/              # Reusable UI components
│   ├── ui/                  # Basic UI components
│   ├── layout/              # Layout components
│   ├── forms/               # Form-related components
│   ├── animations/          # Animation components
│   ├── patterns/            # UI patterns and visual elements
│   ├── charts/              # Data visualization components
│   └── features/            # Feature-specific components
│       ├── ai/              # AI-related components
│       ├── community/       # Community-related components
│       ├── about/           # About-related components
│       ├── dashboard/       # Dashboard-related components
│       └── payments/        # Payment-related components
│
├── contexts/                # React context providers
│
├── hooks/                   # Custom React hooks
│
├── lib/                     # Utility functions and services
│   ├── api/                 # API-related functions
│   └── utils/               # Utility functions
│
├── pages/                   # Page components
│   ├── about/               # About pages
│   ├── community/           # Community pages
│   ├── how-it-works/        # How It Works pages
│   ├── mylight/             # MyLight pages
│   └── partners/            # Partners pages
│
├── styles/                  # Global styles
│
└── types/                   # TypeScript type definitions
```

## Naming Conventions

- **Components**: PascalCase.tsx (e.g., Button.tsx)
- **Hooks**: camelCase.ts prefixed with "use" (e.g., useAuth.ts)
- **Contexts**: PascalCase.tsx suffixed with "Context" or "Provider" (e.g., AuthContext.tsx)
- **Utility functions**: camelCase.ts (e.g., formatDate.ts)
- **Pages**: PascalCase.tsx suffixed with "Page" (e.g., HomePage.tsx)
- **Types**: PascalCase.ts (e.g., UserTypes.ts)
- **Constants**: UPPER_SNAKE_CASE or camelCase (e.g., API_ENDPOINTS.ts)

## File Storage Optimization

### Critical Files (Highest Priority)
- Store in the root of their respective directories
- Optimize for first load performance
- Examples: App.tsx, main.tsx, Navbar.tsx, Footer.tsx, HomePage.tsx

### Frequently Accessed Files
- Store in dedicated directories with barrel exports
- Implement code splitting but prioritize for quick access
- Examples: Button.tsx, Card.tsx, Section.tsx, Hero.tsx

### Occasionally Accessed Files
- Implement aggressive code splitting
- Lazy load when possible
- Examples: AboutPage.tsx, ContactPage.tsx, feature-specific components

### Rarely Accessed Files
- Load on demand only
- Consider dynamic imports with React.lazy
- Examples: DesignSystemPage.tsx, admin-related components

## Automated File Management Rules

1. **Barrel Exports**: Create index.ts files in each directory to simplify imports
2. **Code Splitting**: Use React.lazy for page components and large feature components
3. **Component Memoization**: Memoize pure components to prevent unnecessary re-renders
4. **Image Optimization**: Use responsive images with srcset and sizes attributes
5. **Font Optimization**: Use font-display: swap and preload critical fonts
6. **CSS Optimization**: Use CSS modules or styled-components to avoid global styles
7. **Dead Code Elimination**: Configure tree shaking and remove unused imports

## File Type Optimization

### JavaScript/TypeScript
- Use tree-shaking friendly exports
- Split large files into smaller, focused modules
- Use dynamic imports for code splitting
- Implement proper memoization for expensive computations

### CSS
- Use CSS modules or styled-components
- Extract critical CSS for faster initial load
- Use modern CSS features like custom properties
- Minimize unused styles with PurgeCSS

### Images
- Use next-gen formats (WebP, AVIF) with fallbacks
- Implement responsive images with srcset and sizes
- Lazy load images below the fold
- Optimize image dimensions for their display size

### Fonts
- Use font-display: swap for better perceived performance
- Subset fonts to include only needed characters
- Preload critical fonts
- Use system font fallbacks

## Backup and Archiving Protocols

1. **Source Control**: Use Git with a branching strategy like GitFlow or GitHub Flow
2. **Automated Backups**: Configure GitHub Actions for regular backups
3. **Version Tagging**: Use semantic versioning and tag releases
4. **Archiving**: Archive old versions and unused assets to separate storage
5. **Documentation**: Maintain a changelog and documentation for major changes

## Long-term Maintenance Guidelines

1. Review and update file categorizations quarterly
2. Run performance audits monthly to identify new optimization opportunities
3. Document component dependencies and update when changes occur
4. Implement automated tests to ensure components work after reorganization
5. Use code reviews to enforce file organization standards
6. Maintain a style guide for component development
7. Regularly analyze bundle size and implement code splitting where beneficial
8. Schedule regular cleanup sprints to address technical debt
9. Train team members on the file organization system
10. Update documentation when making structural changes

## Migration Plan

### Phase 1: Preparation
1. Create new directory structure without moving files
2. Update imports in index.ts files to point to current locations
3. Add performance monitoring tools

### Phase 2: Critical Files
1. Move critical files first
2. Update imports
3. Test thoroughly

### Phase 3: Frequent Files
1. Move frequently accessed files
2. Update imports
3. Test thoroughly

### Phase 4: Occasional Files
1. Move occasionally accessed files
2. Implement code splitting
3. Test thoroughly

### Phase 5: Rare Files
1. Move rarely accessed files
2. Implement aggressive lazy loading
3. Test thoroughly

### Phase 6: Cleanup
1. Remove unused files and directories
2. Optimize imports
3. Run performance tests to verify improvements

## Performance Metrics to Track

1. Bundle Size: Total size of JavaScript bundles
2. Initial Load Time: Time to first contentful paint
3. Time to Interactive: Time until the page becomes fully interactive
4. Memory Usage: Peak memory usage during page load and interaction
5. CPU Usage: CPU utilization during animations and interactions
6. Frame Rate: Frames per second during animations
7. Code Splitting Effectiveness: Size and number of chunks loaded on demand
8. Cache Hit Rate: Percentage of resources served from cache
9. Build Time: Time required to build the application
10. Developer Experience: Subjective measure of development efficiency