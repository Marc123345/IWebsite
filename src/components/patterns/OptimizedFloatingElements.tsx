import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useAnimationContext } from '../AnimationController';
import { Brain, Heart, Star, Sparkles, Shield } from 'lucide-react';

interface OptimizedFloatingElementsProps {
  variant?: 'light' | 'dark';
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

function OptimizedFloatingElements({ 
  variant = 'light',
  density = 'medium',
  speed = 'medium',
  className = ''
}: OptimizedFloatingElementsProps) {
  // Get animation context
  const { animationsEnabled, animationLevel } = useAnimationContext();
  
  // Respect user's motion preferences
  const prefersReducedMotion = useReducedMotion();
  
  // Disable animations if user prefers reduced motion or animations are disabled
  const shouldAnimate = !prefersReducedMotion && 
    animationsEnabled && 
    animationLevel !== 'none';
  
  // If animations are disabled, render nothing or a simplified version
  if (!shouldAnimate) {
    return null;
  }
  
  // Generate element count based on density and animation level
  const getElementCount = () => {
    const baseCounts = {
      low: 5,
      medium: 10,
      high: 15
    };
    
    // Reduce count for lower animation levels
    const multiplier = animationLevel === 'low' ? 0.5 : 
                      animationLevel === 'medium' ? 0.8 : 
                      1;
                      
    return Math.floor(baseCounts[density] * multiplier);
  };
  
  // Speed multiplier based on speed setting and animation level
  const getSpeedMultiplier = () => {
    const baseMultiplier = {
      slow: 1.5,
      medium: 1,
      fast: 0.75
    }[speed];
    
    // Slower animations for lower animation levels
    return animationLevel === 'low' ? baseMultiplier * 1.5 : 
           animationLevel === 'medium' ? baseMultiplier * 1.2 : 
           baseMultiplier;
  };

  // Available icons
  const icons = [Brain, Heart, Star, Sparkles, Shield];
  const elementCount = getElementCount();
  const speedMultiplier = getSpeedMultiplier();

  // Generate random elements
  const elements = Array.from({ length: elementCount }).map((_, i) => {
    const Icon = icons[Math.floor(Math.random() * icons.length)];
    return {
      id: i,
      Icon,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      size: Math.random() * 20 + 20, // Random size between 20-40px
      duration: (Math.random() * 5 + 5) * speedMultiplier // Random duration between 5-10s
    };
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${variant === 'light' ? 'text-white/20' : 'text-ilight-500/20'}`}
          style={{
            width: element.size,
            height: element.size,
            willChange: 'transform, opacity'
          }}
          initial={{
            x: `${element.initialX}%`,
            y: `${element.initialY}%`,
            scale: 0,
            opacity: 0,
            rotate: 0
          }}
          animate={{
            x: [
              `${element.initialX}%`,
              `${element.initialX + (Math.random() * 20 - 10)}%`,
              `${element.initialX}%`
            ],
            y: [
              `${element.initialY}%`,
              `${element.initialY + (Math.random() * 20 - 10)}%`,
              `${element.initialY}%`
            ],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <element.Icon className="w-full h-full" />
        </motion.div>
      ))}

      {/* Gradient Overlay */}
      <motion.div
        className={`absolute inset-0 ${
          variant === 'light'
            ? 'bg-gradient-radial from-white/5 to-transparent'
            : 'bg-gradient-radial from-ilight-500/5 to-transparent'
        }`}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(OptimizedFloatingElements);