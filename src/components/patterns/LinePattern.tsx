import { motion } from 'framer-motion';

interface LinePatternProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  angle?: number;
  className?: string;
}

export default function LinePattern({ 
  size = 'md',
  color = 'rgba(255,255,255,0.1)',
  angle = 45,
  className = ''
}: LinePatternProps) {
  const sizes = {
    sm: 'bg-line-sm',
    md: 'bg-line-md',
    lg: 'bg-line-lg'
  };

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${sizes[size]} ${className}`}
      style={{ 
        backgroundImage: `repeating-linear-gradient(${angle}deg, ${color} 0, ${color} 1px, transparent 0, transparent 50%)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}