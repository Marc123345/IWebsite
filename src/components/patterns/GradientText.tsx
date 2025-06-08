import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  from?: string;
  via?: string;
  to?: string;
  className?: string;
  animate?: boolean;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  textShadow?: boolean;
  as?: React.ElementType;
  useBlackText?: boolean; // New prop to control text color
  enhancedContrast?: boolean; // New prop for better contrast
}

export default function GradientText({
  children,
  from = 'from-white',
  via = 'via-white/90',
  to = 'to-white/80',
  className = '',
  animate = true,
  direction = 'horizontal',
  textShadow = false,
  as: Component = 'span',
  useBlackText = false, // Default to gradient text
  enhancedContrast = false // Default to standard contrast
}: GradientTextProps) {
  // If using black text instead of gradient
  if (useBlackText) {
    return (
      <Component className={`text-black ${textShadow ? 'text-shadow' : ''} ${className}`}>
        {children}
      </Component>
    );
  }
  
  // If using enhanced contrast
  if (enhancedContrast) {
    return (
      <Component className={`text-white font-medium ${textShadow ? 'text-shadow-lg' : ''} ${className}`} 
        style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.9)' }}>
        {children}
      </Component>
    );
  }

  // Get direction class
  const getDirectionClass = () => {
    switch (direction) {
      case 'vertical':
        return 'bg-gradient-to-b';
      case 'diagonal':
        return 'bg-gradient-to-br';
      case 'horizontal':
      default:
        return 'bg-gradient-to-r';
    }
  };

  // If using gradient text
  return (
    <Component
      className={`bg-clip-text text-transparent ${getDirectionClass()} ${from} ${via} ${to} ${
        textShadow ? 'text-shadow' : ''
      } ${className}`}
    >
      {children}
    </Component>
  );
}