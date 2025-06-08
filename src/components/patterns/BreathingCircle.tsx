import { memo } from 'react';
import { OptimizedBreathingCircle } from './';

interface BreathingCircleProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  duration?: number;
}

function BreathingCircle(props: BreathingCircleProps) {
  // Use the optimized version for better performance
  return <OptimizedBreathingCircle {...props} />;
}

// Memoize the component to prevent unnecessary re-renders
export default memo(BreathingCircle);