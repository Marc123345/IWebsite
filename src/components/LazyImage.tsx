import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  placeholderColor?: string;
  threshold?: number;
  blur?: boolean;
  fadeIn?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * LazyImage component with optimized loading and animations
 * 
 * Features:
 * - Intersection Observer for true lazy loading
 * - Blur-up effect for smooth loading
 * - Placeholder while loading
 * - Fade-in animation
 * - Error handling
 */
export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderColor = '#f3f4f6', // Light gray default
  threshold = 0.1,
  blur = true,
  fadeIn = true,
  onLoad,
  onError
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Set up intersection observer to detect when image is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [threshold]);
  
  // Image load handler
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };
  
  // Image error handler
  const handleError = () => {
    setHasError(true);
    if (onError) onError();
  };
  
  // Generate srcSet for responsive images
  const getSrcSet = () => {
    // Skip for SVGs and data URLs
    if (src.includes('.svg') || src.startsWith('data:')) {
      return undefined;
    }
    
    // For Unsplash images, use their built-in resizing
    if (src.includes('unsplash.com')) {
      const baseUrl = src.split('?')[0];
      return `${baseUrl}?w=480&auto=format&q=80 480w, 
              ${baseUrl}?w=800&auto=format&q=80 800w, 
              ${baseUrl}?w=1200&auto=format&q=80 1200w`;
    }
    
    // For Cloudinary images
    if (src.includes('cloudinary.com')) {
      return `${src.replace('/upload/', '/upload/w_480,q_auto,f_auto/')} 480w,
              ${src.replace('/upload/', '/upload/w_800,q_auto,f_auto/')} 800w,
              ${src.replace('/upload/', '/upload/w_1200,q_auto,f_auto/')} 1200w`;
    }
    
    return undefined;
  };
  
  // Generate sizes attribute
  const getSizes = () => {
    return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  };
  
  // Render error state
  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Image failed to load</span>
      </div>
    );
  }
  
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height, backgroundColor: placeholderColor }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-pulse-animation"
          style={{ backgroundColor: placeholderColor }}
        />
      )}
      
      {/* Actual image */}
      {isInView && (
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover ${
            blur && !isLoaded ? 'blur-sm scale-105' : ''
          } transition-all duration-500`}
          initial={fadeIn ? { opacity: 0 } : { opacity: 1 }}
          animate={isLoaded ? { opacity: 1, filter: 'blur(0px)', scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          srcSet={getSrcSet()}
          sizes={getSizes()}
        />
      )}
    </div>
  );
}