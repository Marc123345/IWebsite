import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface ContentCardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  hover?: boolean;
  onClick?: () => void;
}

export default function ContentCard({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  border = true,
  hover = true,
  onClick
}: ContentCardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-calm',
    lg: 'shadow-calm-lg'
  };

  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      className={cn(
        'bg-white text-black rounded-xl transition-all duration-300',
        paddingClasses[padding],
        shadowClasses[shadow],
        border ? 'border border-ilight-100' : '',
        hover ? 'hover:shadow-calm-lg hover:border-ilight-200' : '',
        onClick ? 'cursor-pointer' : '',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}