import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useAnimationContext } from '../AnimationController';

interface OptimizedGradientBlobProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

function OptimizedGradientBlob({ 
  variant = 'primary',
  size = 'md',
  className = ''
}: OptimizedGradientBlobProps) {
  // Get animation context
  const { animationsEnabled, animationLevel } = useAnimationContext();
  
  // Respect user's motion preferences
  const prefersReducedMotion = useReducedMotion();
  
  // Disable animations if user prefers reduced motion or animations are disabled
  const shouldAnimate = !prefersReducedMotion && 
    animationsEnabled && 
    animationLevel !== 'none';
  
  const variants = {
    primary: 'from-ilight-600/30 via-ilight-700/25 to-transparent',
    secondary: 'from-ilight-500/30 via-ilight-600/25 to-transparent',
    accent: 'from-white/25 via-white/20 to-transparent'
  };

  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]'
  };
  
  // Adjust animation based on animation level
  let scaleRange = [1, 1.1, 1];
  let opacityRange = [0.3, 0.5, 0.3];
  let duration = 8;
  
  if (animationLevel === 'low') {
    // Simpler animation for low power
    scaleRange = [1, 1.05, 1]; // Less scaling
    opacityRange = [0.3, 0.4, 0.3]; // Less opacity change
    duration = 10; // Slower
  } else if (animationLevel === 'medium') {
    // Medium animation
    scaleRange = [1, 1.08, 1];
    opacityRange = [0.3, 0.45, 0.3];
    duration = 9;
  }

  // Animation props to apply conditionally
  const animationProps = shouldAnimate ? {
    animate: {
      scale: scaleRange,
      opacity: opacityRange,
    },
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1]
    }
  } : {};

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-radial blur-3xl ${variants[variant]} ${sizes[size]} ${className} transform-gpu`}
      style={{ willChange: shouldAnimate ? 'transform, opacity' : 'auto' }}
      {...animationProps}
    />
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(OptimizedGradientBlob);