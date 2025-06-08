import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface FlexProps {
  children: ReactNode;
  className?: string;
  direction?: 'row' | 'col';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  mdDirection?: 'row' | 'col';
  lgDirection?: 'row' | 'col';
}

export default function Flex({
  children,
  className = '',
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = false,
  gap = 'md',
  mdDirection,
  lgDirection
}: FlexProps) {
  // Direction classes
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col'
  };

  // Align classes
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline'
  };

  // Justify classes
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  };

  // Gap classes
  const gapClasses = {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  // Medium breakpoint direction classes
  const mdDirectionClasses = {
    row: 'md:flex-row',
    col: 'md:flex-col'
  };

  // Large breakpoint direction classes
  const lgDirectionClasses = {
    row: 'lg:flex-row',
    col: 'lg:flex-col'
  };

  return (
    <div className={cn(
      'flex',
      directionClasses[direction],
      alignClasses[align],
      justifyClasses[justify],
      wrap ? 'flex-wrap' : 'flex-nowrap',
      gapClasses[gap],
      mdDirection ? mdDirectionClasses[mdDirection] : '',
      lgDirection ? lgDirectionClasses[lgDirection] : '',
      className
    )}>
      {children}
    </div>
  );
}