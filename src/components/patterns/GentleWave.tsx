import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useAnimationContext } from '../AnimationController';

interface GentleWaveProps {
  color?: string;
  height?: number;
  width?: number;
  className?: string;
  position?: 'top' | 'bottom';
}

function GentleWave({
  color = 'rgba(255, 255, 255, 0.1)',
  height = 20,
  width = 1000,
  className = '',
  position = 'bottom'
}: GentleWaveProps) {
  // Get animation context
  const { animationsEnabled, animationLevel } = useAnimationContext();
  
  // Respect user's motion preferences
  const prefersReducedMotion = useReducedMotion();
  
  // Disable animations if user prefers reduced motion or animations are disabled
  const shouldAnimate = !prefersReducedMotion && 
    animationsEnabled && 
    animationLevel !== 'none';
  
  // Simpler path with fewer control points for better performance
  const simplePath = `M0,0 C250,${height * 0.5} 750,${height * 0.5} ${width},0 L${width},${height} L0,${height} Z`;
  
  // Animation props to apply conditionally
  const animationProps = shouldAnimate ? {
    animate: {
      d: [
        `M0,0 C250,${height * 0.5} 750,${height * 0.5} ${width},0 L${width},${height} L0,${height} Z`,
        `M0,0 C250,${height * 0.7} 750,${height * 0.3} ${width},0 L${width},${height} L0,${height} Z`,
        `M0,0 C250,${height * 0.3} 750,${height * 0.7} ${width},0 L${width},${height} L0,${height} Z`,
        `M0,0 C250,${height * 0.5} 750,${height * 0.5} ${width},0 L${width},${height} L0,${height} Z`
      ]
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
      times: [0, 0.33, 0.66, 1]
    }
  } : {};

  return (
    <div 
      className={`absolute ${position}-0 left-0 right-0 overflow-hidden pointer-events-none ${className}`}
      style={{ height: `${height}px` }}
    >
      <svg
        className="absolute w-full transform-gpu"
        style={{
          [position]: position === 'top' ? 'auto' : '0',
          top: position === 'top' ? '0' : 'auto',
        }}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <motion.path
          d={simplePath}
          fill={color}
          {...animationProps}
          style={{ willChange: shouldAnimate ? 'transform' : 'auto' }}
        />
      </svg>
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(GentleWave);