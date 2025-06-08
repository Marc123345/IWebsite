import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FloatingIconProps {
  icon: LucideIcon;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function FloatingIcon({
  icon: Icon,
  color = 'text-ilight-500',
  size = 'md',
  className = ''
}: FloatingIconProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-ilight-50 to-ilight-100
        ${color} flex items-center justify-center mb-6 shadow-lg ${className}`}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Icon className={sizes[size]} />
    </motion.div>
  );
}