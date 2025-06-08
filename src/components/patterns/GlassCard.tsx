import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  blur?: 'sm' | 'md' | 'lg';
  border?: boolean;
  hover?: boolean;
  onClick?: () => void;
  opacity?: number;
  textShadow?: boolean;
  as?: React.ElementType;
  useBlackText?: boolean;
  enhancedContrast?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  padding = 'md',
  blur = 'md',
  border = true,
  hover = true,
  onClick,
  opacity = 0.15,
  textShadow = false,
  as: Component = 'div',
  useBlackText = false,
  enhancedContrast = false
}: GlassCardProps) {
  // Padding classes
  const paddingClasses = {
    sm: 'p-4 sm:p-5',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8'
  };

  // Blur classes
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg'
  };

  const textShadowClass = textShadow ? 'text-shadow' : '';
  const textColorClass = useBlackText ? 'text-black' : 'text-white';
  const bgOpacityStyle = { backgroundColor: `rgba(255, 255, 255, ${opacity})` };

  // Enhanced contrast styles
  const enhancedContrastStyle = enhancedContrast ? {
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.9)'
  } : {};

  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={cn(
        'rounded-xl transition-all duration-300',
        paddingClasses[padding],
        blurClasses[blur],
        border ? 'border border-white/40' : '',
        hover ? 'hover:shadow-calm-lg hover:border-white/50' : '',
        onClick ? 'cursor-pointer' : '',
        textShadowClass,
        textColorClass,
        className
      )}
      onClick={onClick}
      style={{
        ...bgOpacityStyle,
        ...enhancedContrastStyle
      }}
      as={Component}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}