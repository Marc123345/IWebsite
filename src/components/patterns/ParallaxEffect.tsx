import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxEffectProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  speed?: number;
  className?: string;
  offset?: number;
}

export default function ParallaxEffect({
  children,
  direction = 'up',
  speed = 0.5,
  className = '',
  offset = 0
}: ParallaxEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${offset}`, 'end start']
  });

  // Calculate transform values based on direction
  const getTransformValues = () => {
    const multiplier = speed * 100; // Adjust for more dramatic effect
    
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], ['0%', `-${multiplier}%`]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], ['0%', `${multiplier}%`]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], ['0%', `-${multiplier}%`]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], ['0%', `${multiplier}%`]);
      default:
        return useTransform(scrollYProgress, [0, 1], ['0%', `-${multiplier}%`]);
    }
  };

  const transformValue = getTransformValues();
  
  // Apply the appropriate transform property based on direction
  const style = direction === 'up' || direction === 'down'
    ? { y: transformValue }
    : { x: transformValue };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={style} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}