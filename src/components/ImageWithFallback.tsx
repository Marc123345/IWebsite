import { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
}

/**
 * Image component with fallback for error handling
 * 
 * If the primary image fails to load, this component
 * will automatically display a fallback image instead.
 */
export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  className,
  objectFit = 'cover',
  priority = false
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  
  // Handle image error
  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };
  
  return (
    <OptimizedImage
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      objectFit={objectFit}
      priority={priority}
      onError={handleError}
    />
  );
}