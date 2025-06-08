import { motion } from 'framer-motion';

interface GlowEffectProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function GlowEffect({ 
  color = 'rgba(45, 77, 118, 0.3)', 
  size = 'md',
  className = ''
}: GlowEffectProps) {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96'
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${sizes[size]} ${className}`}
      style={{ background: color }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}