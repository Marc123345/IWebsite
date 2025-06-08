import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SmoothTransitionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function SmoothTransition({
  children,
  delay = 0,
  duration = 0.5,
  className = ''
}: SmoothTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay, 
        duration,
        ease: [0.25, 0.1, 0.25, 1.0] // Cubic bezier for smooth easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}