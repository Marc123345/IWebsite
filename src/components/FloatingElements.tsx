import { motion } from 'framer-motion';
import { Brain, Heart, Star, Sparkles, Shield } from 'lucide-react';
import { OptimizedFloatingElements } from './patterns';

interface FloatingElementsProps {
  variant?: 'light' | 'dark';
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

export default function FloatingElements(props: FloatingElementsProps) {
  // Use the optimized version for better performance
  return <OptimizedFloatingElements {...props} />;
}