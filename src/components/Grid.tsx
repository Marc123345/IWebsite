import React from 'react';
import { cn } from '../lib/utils';

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  mdCols?: number;
  lgCols?: number;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  cols = 1,
  mdCols,
  lgCols,
  gap = 'md',
  className
}) => {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };

  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  };

  const mdColClasses = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6'
  };

  const lgColClasses = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6'
  };

  return (
    <div
      className={cn(
        'grid',
        colClasses[cols as keyof typeof colClasses],
        mdCols && mdColClasses[mdCols as keyof typeof mdColClasses],
        lgCols && lgColClasses[lgCols as keyof typeof lgColClasses],
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;