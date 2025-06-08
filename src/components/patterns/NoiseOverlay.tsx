import { motion } from 'framer-motion';

interface NoiseOverlayProps {
  opacity?: number;
  className?: string;
}

export default function NoiseOverlay({ 
  opacity = 0.05,
  className = ''
}: NoiseOverlayProps) {
  return (
    <motion.div
      className={`absolute inset-0 bg-gradient-noise mix-blend-overlay pointer-events-none ${className}`}
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1 }}
    />
  );
}