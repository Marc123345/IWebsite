import { memo } from 'react';
import { OptimizedGradientBlob } from './';

interface GradientBlobProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

function GradientBlob(props: GradientBlobProps) {
  // Use the optimized version for better performance
  return <OptimizedGradientBlob {...props} />;
}

// Memoize the component to prevent unnecessary re-renders
export default memo(GradientBlob);