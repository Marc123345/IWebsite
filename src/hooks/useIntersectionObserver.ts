import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

/**
 * Hook for detecting when an element enters the viewport
 * 
 * @param options IntersectionObserver options
 * @returns [ref, isIntersecting] tuple
 */
export default function useIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  triggerOnce = false
}: IntersectionOptions = {}): [RefObject<T>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Save current element reference
    const element = elementRef.current;
    
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Create new observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);
        
        // Unobserve after first intersection if triggerOnce is true
        if (isElementIntersecting && triggerOnce && element) {
          observerRef.current?.unobserve(element);
        }
      },
      { root, rootMargin, threshold }
    );
    
    // Observe element if it exists
    if (element) {
      observerRef.current.observe(element);
    }
    
    // Clean up on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return [elementRef, isIntersecting];
}