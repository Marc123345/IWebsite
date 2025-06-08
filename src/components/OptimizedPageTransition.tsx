import { ReactNode, memo, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useAnimationContext } from './AnimationController';

interface OptimizedPageTransitionProps {
  children: ReactNode;
}

/**
 * Optimized page transition component with improved performance:
 * - Simpler animation
 * - Respects reduced motion preferences
 * - Adapts to device capabilities
 * - Memoized to prevent unnecessary re-renders
 * - Fixes scrolling issues by resetting scroll position
 */
function OptimizedPageTransition({ children }: OptimizedPageTransitionProps) {
  // Get animation context
  const { animationsEnabled, animationLevel } = useAnimationContext();
  
  // Respect user's motion preferences
  const prefersReducedMotion = useReducedMotion();
  
  // Disable animations if user prefers reduced motion or animations are disabled
  const shouldAnimate = !prefersReducedMotion && 
    animationsEnabled && 
    animationLevel !== 'none';
  
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // If animations are disabled, just render children
  if (!shouldAnimate) {
    return <>{children}</>;
  }
  
  // Adjust animation based on animation level
  const duration = animationLevel === 'low' ? 0.2 : 
                   animationLevel === 'medium' ? 0.3 : 
                   0.4;
  
  // Simpler animation for better performance
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(OptimizedPageTransition);