# File Optimization Guide for iLight Platform

## Overview

This guide provides comprehensive strategies for optimizing file types, sizes, and loading patterns in the iLight mental health platform. Following these guidelines will improve application performance, reduce loading times, and enhance user experience across all devices.

## System Specifications

- **Frontend Framework**: React with TypeScript
- **Bundler**: Vite
- **CSS Framework**: Tailwind CSS
- **Animation Library**: Framer Motion
- **Icon Library**: Lucide React
- **Database**: Supabase
- **Storage Constraints**: Optimize for mobile devices with limited bandwidth
- **Primary Use Cases**: Mental health support platform with animations, interactive elements, and media content

## File Type Optimization Strategies

### JavaScript/TypeScript Files

#### Optimization Techniques
- **Code Splitting**: Use dynamic imports and React.lazy for route-based and component-based splitting
- **Tree Shaking**: Ensure exports are compatible with tree shaking
- **Memoization**: Use React.memo, useMemo, and useCallback for expensive operations
- **Bundle Analysis**: Regularly analyze bundle size with rollup-plugin-visualizer
- **Minification**: Use terser for production builds with aggressive settings

#### Implementation Guidelines
```typescript
// GOOD: Tree-shakable exports
export function utilityFunction() { /* ... */ }

// BAD: Not tree-shakable
export default { utilityFunction: () => { /* ... */ } };

// GOOD: Memoized component
const MemoizedComponent = React.memo(({ prop1, prop2 }) => {
  // Component implementation
});

// GOOD: Code splitting with React.lazy
const LazyComponent = React.lazy(() => import('./LazyComponent'));
```

#### Size Targets
- Critical JS bundle: < 100KB (gzipped)
- Initial JS payload: < 300KB (gzipped)
- Component chunks: < 50KB each (gzipped)

### CSS Files

#### Optimization Techniques
- **CSS-in-JS or CSS Modules**: Use scoped styles to avoid global conflicts
- **Critical CSS**: Inline critical styles for above-the-fold content
- **PurgeCSS**: Remove unused styles in production builds
- **Minification**: Minify CSS in production builds
- **Compression**: Enable gzip/brotli compression for CSS files

#### Implementation Guidelines
```css
/* GOOD: Use utility classes from Tailwind */
.my-component {
  @apply bg-white rounded-lg shadow-md p-4;
}

/* GOOD: Use CSS variables for theming */
:root {
  --primary-color: #3B5F8A;
}

.themed-element {
  color: var(--primary-color);
}
```

#### Size Targets
- Critical CSS: < 20KB (gzipped)
- Total CSS: < 50KB (gzipped)

### Image Files

#### Optimization Techniques
- **Format Selection**: Use WebP with JPEG/PNG fallbacks
- **Responsive Images**: Implement srcset and sizes attributes
- **Lazy Loading**: Use loading="lazy" for below-the-fold images
- **Image CDN**: Use Unsplash's built-in resizing parameters
- **Compression**: Optimize images without visible quality loss

#### Implementation Guidelines
```jsx
// GOOD: Responsive image with lazy loading
<img
  src="small.jpg"
  srcSet="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
  loading="lazy"
  alt="Description"
/>

// BETTER: Use optimized image component
<LazyImage
  src="https://images.unsplash.com/photo-123"
  alt="Description"
  width={800}
  height={600}
  threshold={0.1}
  blur={true}
/>
```

#### Size Targets
- Hero images: < 200KB
- Thumbnails: < 30KB
- Icons: < 5KB (preferably SVG)

### Font Files

#### Optimization Techniques
- **Font Display**: Use font-display: swap to prevent render blocking
- **Format Selection**: Use WOFF2 with WOFF fallbacks
- **Subsetting**: Include only needed character sets
- **Self-hosting**: Host fonts locally for better control
- **Preloading**: Preload critical fonts

#### Implementation Guidelines
```css
/* GOOD: Optimized font loading */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/inter-var.woff2') format('woff2');
}
```

#### Size Targets
- Each font file: < 50KB
- Total font payload: < 150KB

### Video Files

#### Optimization Techniques
- **Format Selection**: Use MP4 with WebM fallbacks
- **Lazy Loading**: Load videos only when needed
- **Preload Metadata**: Use preload="metadata" for faster initial display
- **Compression**: Use efficient codecs (H.264, VP9)
- **Responsive Videos**: Adjust quality based on network conditions

#### Implementation Guidelines
```jsx
// GOOD: Optimized video element
<video
  controls
  preload="metadata"
  poster="/path/to/poster.jpg"
  className="w-full h-auto"
>
  <source src="/path/to/video.webm" type="video/webm" />
  <source src="/path/to/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

#### Size Targets
- Short videos (< 30s): < 2MB
- Longer videos: Use streaming or external hosting

## Loading Strategy Optimization

### Critical Path Optimization

1. **Identify Critical Resources**:
   - Main CSS
   - Core JavaScript
   - Above-the-fold images
   - Primary fonts

2. **Loading Techniques**:
   - Inline critical CSS
   - Defer non-critical JavaScript
   - Preload critical resources
   - Use HTTP/2 for parallel loading

3. **Implementation Example**:
   ```html
   <!-- Preload critical resources -->
   <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
   <link rel="preload" href="/images/hero.webp" as="image">
   
   <!-- Inline critical CSS -->
   <style>
     /* Critical CSS here */
   </style>
   
   <!-- Defer non-critical JavaScript -->
   <script src="/js/non-critical.js" defer></script>
   ```

### Lazy Loading Strategy

1. **Candidates for Lazy Loading**:
   - Below-the-fold images
   - Off-screen components
   - Route-specific code
   - Large third-party libraries

2. **Implementation Techniques**:
   - Use Intersection Observer API
   - Implement React.lazy with Suspense
   - Use dynamic imports for code splitting
   - Defer third-party scripts

3. **Implementation Example**:
   ```jsx
   // Lazy load a component
   const LazyComponent = React.lazy(() => import('./LazyComponent'));
   
   // Use with Suspense
   <Suspense fallback={<LoadingSpinner />}>
     <LazyComponent />
   </Suspense>
   ```

### Preloading Strategy

1. **Candidates for Preloading**:
   - Resources needed for the next likely user action
   - Critical assets for common navigation paths
   - Fonts used throughout the application

2. **Implementation Techniques**:
   - Use `<link rel="preload">` for critical resources
   - Use `<link rel="prefetch">` for likely next-page resources
   - Implement predictive preloading based on user behavior

3. **Implementation Example**:
   ```jsx
   // In a component that links to the About page
   useEffect(() => {
     // Prefetch the About page when this component mounts
     const link = document.createElement('link');
     link.rel = 'prefetch';
     link.href = '/about';
     document.head.appendChild(link);
     
     return () => {
       document.head.removeChild(link);
     };
   }, []);
   ```

## Compression and Minification

### JavaScript Minification

- Use Terser with aggressive settings
- Enable dead code elimination
- Remove console logs in production
- Use modern syntax and transpile only as needed

### CSS Minification

- Remove whitespace and comments
- Combine media queries
- Shorten class names in production
- Remove unused styles with PurgeCSS

### Image Compression

- Use WebP for all raster images with fallbacks
- Optimize SVGs with SVGO
- Use responsive images with appropriate sizes
- Consider using image CDNs with automatic optimization

### Text-Based Asset Compression

- Enable Brotli compression (preferred) or Gzip
- Set appropriate cache headers
- Compress JSON data responses
- Minify HTML in production

## Automated Cleanup Procedures

### Unused Code Detection

- Configure ESLint to detect and remove unused imports
- Use ts-prune to identify unused exports
- Implement bundle analysis to identify dead code
- Run regular audits to find orphaned components

### Dependency Management

- Use npm-check or depcheck to find and remove duplicate dependencies
- Regularly update dependencies to benefit from optimizations
- Consider using pnpm for efficient node_modules
- Analyze and limit third-party dependencies

### Build Process Optimization

- Implement cache busting for static assets
- Use deterministic hashing for better caching
- Configure appropriate source map settings for production
- Optimize CI/CD pipeline for faster builds

## Backup and Archiving

### Version Control Strategy

- Use Git with a clear branching strategy
- Tag releases with semantic versioning
- Document major changes in commit messages
- Use .gitignore to exclude large generated files

### Backup Strategy

- Implement automated backups of source code
- Store backups in multiple locations
- Verify backup integrity regularly
- Document restoration procedures

### Archiving Strategy

- Archive old versions with clear labeling
- Store archives in cold storage for cost efficiency
- Maintain a catalog of archived versions
- Document the archiving and retrieval process

## Long-term Maintenance

### Regular Audits

- Conduct monthly performance audits
- Review file organization quarterly
- Check for unused code and assets
- Analyze bundle sizes and loading performance

### Documentation

- Maintain up-to-date documentation on file organization
- Document performance optimization strategies
- Create onboarding guides for new developers
- Keep a changelog of structural changes

### Performance Monitoring

- Implement real user monitoring (RUM)
- Track core web vitals
- Monitor JavaScript exceptions
- Set up alerts for performance regressions

### Continuous Improvement

- Regularly review and update optimization strategies
- Stay informed about new web performance techniques
- Implement A/B testing for performance improvements
- Gather user feedback on perceived performance

## Conclusion

Following this file optimization guide will ensure the iLight platform maintains optimal performance while remaining maintainable and scalable. Regular audits and updates to these practices will help the application stay current with evolving web standards and user expectations.