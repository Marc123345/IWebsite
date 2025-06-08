import { motion } from 'framer-motion';

interface BackgroundPatternProps {
  type?: 'dots' | 'lines' | 'noise';
  color?: string;
  opacity?: number;
  className?: string;
}

export default function BackgroundPattern({
  type = 'dots',
  color = 'rgba(255,255,255,0.1)',
  opacity = 0.1,
  className = ''
}: BackgroundPatternProps) {
  const getPattern = () => {
    switch (type) {
      case 'dots':
        return 'bg-dot-pattern bg-dot-md';
      case 'lines':
        return 'bg-line-pattern bg-line-md';
      case 'noise':
        return 'bg-gradient-noise';
      default:
        return '';
    }
  };

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${getPattern()} ${className}`}
      style={{ 
        opacity,
        backgroundImage: type === 'noise' ? undefined : `radial-gradient(${color} 1px, transparent 1px)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1 }}
    />
  );
}