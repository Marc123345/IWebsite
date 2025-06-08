import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useAnimationContext } from '../AnimationController';

interface OptimizedBreathingCircleProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  duration?: number;
}

function OptimizedBreathingCircle({
  size = 'md',
  color = 'rgba(59, 95, 138, 0.1)',
  className = '',
  duration = 6
}: OptimizedBreathingCircleProps) {
  // Get animation context
  const { animationsEnabled, animationLevel } = useAnimationContext();
  
  // Respect user's motion preferences
  const prefersReducedMotion = useReducedMotion();
  
  // Disable animations if user prefers reduced motion or animations are disabled
  const shouldAnimate = !prefersReducedMotion && 
    animationsEnabled && 
    animationLevel !== 'none';
  
  // Adjust animation based on animation level
  let adjustedDuration = duration;
  let scaleRange = [1, 1.2, 1];
  let opacityRange = [0.3, 0.6, 0.3];
  
  if (animationLevel === 'low') {
    // Simpler animation for low power
    adjustedDuration = duration * 1.5; // Slower
    scaleRange = [1, 1.1, 1]; // Less scaling
    opacityRange = [0.3, 0.5, 0.3]; // Less opacity change
  }

  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]'
  };

  // Animation props to apply conditionally
  const animationProps = shouldAnimate ? {
    animate: {
      scale: scaleRange,
      opacity: opacityRange,
    },
    transition: {
      duration: adjustedDuration,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1]
    }
  } : {};

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className={`rounded-full ${sizes[size]} transform-gpu`}
        style={{ 
          backgroundColor: color,
          willChange: shouldAnimate ? 'transform, opacity' : 'auto'
        }}
        {...animationProps}
      />
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(OptimizedBreathingCircle);