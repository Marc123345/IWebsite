import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useAnimationContext } from '../AnimationController';

interface ShimmerEffectProps {
  className?: string;
}

function ShimmerEffect({ className = '' }: ShimmerEffectProps) {
  // Get animation context
  const { animationsEnabled, animationLevel } = useAnimationContext();
  
  // Respect user's motion preferences
  const prefersReducedMotion = useReducedMotion();
  
  // Disable animations if user prefers reduced motion or animations are disabled
  const shouldAnimate = !prefersReducedMotion && 
    animationsEnabled && 
    animationLevel !== 'none';
  
  // Don't render anything if animations are disabled
  if (!shouldAnimate) {
    return null;
  }
  
  // Adjust animation speed based on animation level
  const duration = animationLevel === 'low' ? 3.5 : 
                   animationLevel === 'medium' ? 2.5 : 
                   1.5;
  
  // Adjust delay based on animation level
  const repeatDelay = animationLevel === 'low' ? 2 : 
                      animationLevel === 'medium' ? 1 : 
                      0.5;

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className} transform-gpu`}
    >
      <motion.div
        className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent 
          absolute top-0 -skew-x-12"
        animate={{
          x: ['-100%', '200%']
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatDelay
        }}
        style={{ willChange: 'transform' }}
      />
    </motion.div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(ShimmerEffect);