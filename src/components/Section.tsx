import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'gradient' | 'primary' | 'none' | 'glass' | 'blue-600';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  animate?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  withPattern?: boolean;
  patternType?: 'dots' | 'lines' | 'noise';
  patternOpacity?: number;
  textAlign?: 'left' | 'center' | 'right';
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'md',
  maxWidth = 'xl',
  animate = true,
  gradientFrom = 'from-ilight-500',
  gradientTo = 'to-ilight-600',
  withPattern = false,
  patternType = 'dots',
  patternOpacity = 0.05,
  textAlign = 'left'
}: SectionProps) {
  // Background classes
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-ilight-50',
    gradient: `bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white`,
    primary: `bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white`,
    glass: 'bg-white/80 backdrop-blur-md',
    'blue-600': 'bg-blue-600 text-white',
    none: ''
  };

  // Padding classes - Updated with more consistent responsive padding
  const paddingClasses = {
    none: '',
    sm: 'py-8 sm:py-12 lg:py-16',
    md: 'py-12 sm:py-16 lg:py-24',
    lg: 'py-16 sm:py-24 lg:py-32'
  };

  // Max width classes
  const maxWidthClasses = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  // Text alignment classes
  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  // Pattern classes
  const getPatternClass = () => {
    if (!withPattern) return '';
    
    switch (patternType) {
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

  const content = (
    <section 
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        'px-4 sm:px-6 lg:px-8 relative content-visibility-auto',
        className
      )}
    >
      {withPattern && (
        <div 
          className={`absolute inset-0 pointer-events-none ${getPatternClass()}`}
          style={{ opacity: patternOpacity }}
        />
      )}
      <div className={cn(
        `mx-auto ${maxWidthClasses[maxWidth]} relative z-10`,
        textAlignClasses[textAlign]
      )}>
        {children}
      </div>
    </section>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5 }}
      className="hardware-accelerated"
    >
      {content}
    </motion.div>
  );
}