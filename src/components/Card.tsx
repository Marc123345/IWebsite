import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  hover?: boolean;
  onClick?: () => void;
  animate?: boolean;
  variant?: 'default' | 'gradient' | 'glass' | 'outlined';
  gradientFrom?: string;
  gradientTo?: string;
  withShimmer?: boolean;
  textAlign?: 'left' | 'center' | 'right';
}

export default function Card({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  border = true,
  hover = true,
  onClick,
  animate = true,
  variant = 'default',
  gradientFrom = 'from-ilight-500',
  gradientTo = 'to-ilight-600',
  withShimmer = false,
  textAlign = 'left'
}: CardProps) {
  // Padding classes - INCREASED for better spacing
  const paddingClasses = {
    sm: 'p-5 sm:p-6',
    md: 'p-6 sm:p-8 md:p-10',
    lg: 'p-8 sm:p-10 md:p-12'
  };

  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-calm',
    lg: 'shadow-calm-lg'
  };

  // Text alignment classes
  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  // Variant classes
  const variantClasses = {
    default: 'bg-white text-black',
    gradient: `bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white`,
    glass: 'bg-white/80 backdrop-blur-sm text-black',
    outlined: 'bg-transparent text-black'
  };

  const content = (
    <div
      className={cn(
        'rounded-xl transition-all duration-300 relative overflow-hidden',
        paddingClasses[padding],
        shadowClasses[shadow],
        variantClasses[variant],
        textAlignClasses[textAlign],
        border && variant !== 'outlined' ? 'border border-ilight-100' : '',
        border && variant === 'outlined' ? 'border-ilight-200' : '',
        hover ? 'hover:shadow-calm-lg hover:border-ilight-200' : '',
        onClick ? 'cursor-pointer' : '',
        className
      )}
      onClick={onClick}
    >
      {withShimmer && (
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          animate={{
            background: [
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              'linear-gradient(90deg, transparent 100%, rgba(255,255,255,0.1) 50%, transparent 0%)'
            ],
            left: ['-100%', '100%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );

  if (!animate || !hover) {
    return content;
  }

  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      className="transform-gpu"
    >
      {content}
    </motion.div>
  );
}