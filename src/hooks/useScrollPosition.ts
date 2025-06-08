import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Custom hook to track scroll position
 * @returns Current scroll position {x, y}
 */
export default function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY
      });
    };

    // Set initial position
    updatePosition();

    // Add scroll event listener
    window.addEventListener('scroll', updatePosition, { passive: true });

    // Clean up
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}