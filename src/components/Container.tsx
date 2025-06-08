import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
}

export default function Container({
  children,
  className = '',
  size = 'xl',
  padding = true
}: ContainerProps) {
  // Size classes
  const sizeClasses = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  return (
    <div className={cn(
      sizeClasses[size],
      padding ? 'px-4 sm:px-6 lg:px-8' : '',
      'mx-auto',
      className
    )}>
      {children}
    </div>
  );
}