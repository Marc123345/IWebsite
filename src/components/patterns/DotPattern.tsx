import { memo } from 'react';
import { motion } from 'framer-motion';

interface DotPatternProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

function DotPattern({ 
  size = 'md',
  color = 'rgba(255,255,255,0.1)',
  className = ''
}: DotPatternProps) {
  const sizes = {
    sm: 'bg-dot-sm',
    md: 'bg-dot-md',
    lg: 'bg-dot-lg'
  };

  // Memoize style object to prevent recreation on each render
  const backgroundStyle = {
    backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
  };

  return (
    <motion.div
      className={`absolute inset-0 ${sizes[size]} pointer-events-none ${className}`}
      style={backgroundStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(DotPattern);