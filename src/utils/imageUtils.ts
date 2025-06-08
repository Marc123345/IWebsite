/**
 * Utility functions for image optimization
 */

/**
 * Generate a responsive image URL for Unsplash
 * 
 * @param url Original Unsplash URL
 * @param width Desired width
 * @param quality Image quality (1-100)
 * @returns Optimized image URL
 */
export function getOptimizedUnsplashUrl(url: string, width: number, quality: number = 80): string {
  if (!url.includes('unsplash.com')) {
    return url;
  }
  
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?w=${width}&q=${quality}&auto=format`;
}

/**
 * Generate a responsive image URL for Cloudinary
 * 
 * @param url Original Cloudinary URL
 * @param width Desired width
 * @param quality Image quality (1-100)
 * @returns Optimized image URL
 */
export function getOptimizedCloudinaryUrl(url: string, width: number, quality: number = 80): string {
  if (!url.includes('cloudinary.com')) {
    return url;
  }
  
  return url.replace('/upload/', `/upload/w_${width},q_${quality},f_auto/`);
}

/**
 * Generate a responsive srcSet attribute
 * 
 * @param url Original image URL
 * @param widths Array of widths to include in srcSet
 * @param quality Image quality (1-100)
 * @returns srcSet attribute value
 */
export function generateSrcSet(url: string, widths: number[] = [480, 800, 1200], quality: number = 80): string {
  // Skip for SVGs and data URLs
  if (url.includes('.svg') || url.startsWith('data:')) {
    return '';
  }
  
  // For Unsplash images
  if (url.includes('unsplash.com')) {
    const baseUrl = url.split('?')[0];
    return widths
      .map(width => `${baseUrl}?w=${width}&q=${quality}&auto=format ${width}w`)
      .join(', ');
  }
  
  // For Cloudinary images
  if (url.includes('cloudinary.com')) {
    return widths
      .map(width => `${url.replace('/upload/', `/upload/w_${width},q_${quality}/`)} ${width}w`)
      .join(', ');
  }
  
  return '';
}

/**
 * Generate a low-quality image placeholder
 * 
 * @param url Original image URL
 * @returns Low-quality placeholder URL
 */
export function getLowQualityPlaceholder(url: string): string {
  // For Unsplash images
  if (url.includes('unsplash.com')) {
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?w=20&blur=10&q=20`;
  }
  
  // For Cloudinary images
  if (url.includes('cloudinary.com')) {
    return url.replace('/upload/', '/upload/w_20,e_blur:1000,q_20/');
  }
  
  return url;
}

/**
 * Check if an image exists
 * 
 * @param url Image URL to check
 * @returns Promise that resolves to boolean
 */
export function checkImageExists(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}