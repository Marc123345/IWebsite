import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * OptimizedImage component for better performance
 * 
 * Features:
 * - Lazy loading with IntersectionObserver
 * - Automatic responsive images
 * - Blur-up loading effect
 * - Proper image dimensions
 * - Hardware-accelerated animations
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  objectFit = 'cover',
  priority = false,
  quality = 80,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };
  
  // Handle image error
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
      return `${baseUrl}?w=480&q=${quality}&auto=format 480w, 
              ${baseUrl}?w=800&q=${quality}&auto=format 800w, 
              ${baseUrl}?w=1200&q=${quality}&auto=format 1200w`;
    }
    
    // For Cloudinary images
    if (src.includes('cloudinary.com')) {
      return `${src.replace('/upload/', `/upload/w_480,q_${quality}/`)} 480w,
              ${src.replace('/upload/', `/upload/w_800,q_${quality}/`)} 800w,
              ${src.replace('/upload/', `/upload/w_1200,q_${quality}/`)} 1200w`;
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
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && placeholder === 'blur' && (
        <div 
          className="absolute inset-0 transform-gpu"
          style={{ 
            backgroundColor: '#f3f4f6',
            backgroundImage: blurDataURL ? `url(${blurDataURL})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
            transform: 'scale(1.2)'
          }}
        />
      )}
      
      {/* Actual image */}
      {(priority || isInView) && (
        <motion.img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full transform-gpu ${
            objectFit === 'cover' ? 'object-cover' :
            objectFit === 'contain' ? 'object-contain' :
            objectFit === 'fill' ? 'object-fill' :
            objectFit === 'none' ? 'object-none' :
            'object-scale-down'
          } ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
          srcSet={getSrcSet()}
          sizes={getSizes()}
        />
      )}
    </div>
  );
}