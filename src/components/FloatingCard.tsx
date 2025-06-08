import { motion } from 'framer-motion';
import { ShimmerEffect } from './patterns';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
  floatAnimation?: boolean;
  glowEffect?: boolean;
  glowColor?: string;
  withShimmer?: boolean;
  variant?: 'default' | 'gradient' | 'glass';
  gradientFrom?: string;
  gradientTo?: string;
}

export default function FloatingCard({ 
  children, 
  className = '',
  delay = 0,
  hoverEffect = true,
  floatAnimation = true,
  glowEffect = false,
  glowColor = 'rgba(59, 95, 138, 0.2)',
  withShimmer = false,
  variant = 'default',
  gradientFrom = 'from-ilight-500',
  gradientTo = 'to-ilight-600'
}: FloatingCardProps) {
  // Variant classes
  const variantClasses = {
    default: 'bg-white text-black',
    gradient: `bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white`,
    glass: 'bg-white/80 backdrop-blur-sm text-black'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`group relative ${className}`}
    >
      {/* Floating Animation */}
      <motion.div
        animate={floatAnimation ? {
          y: [0, -8, 0]
        } : undefined}
        transition={floatAnimation ? {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        } : undefined}
        className="relative transform-gpu"
      >
        {/* Background Glow */}
        {hoverEffect && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-ilight-500/20 to-ilight-600/20 
              rounded-2xl transform rotate-1 scale-[0.98] opacity-0 group-hover:opacity-100 
              transition-all duration-300"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {/* Glow Effect */}
        {glowEffect && (
          <motion.div
            className="absolute inset-0 rounded-2xl blur-xl"
            style={{ backgroundColor: glowColor }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {/* Card Content */}
        <div className={`${variantClasses[variant]} rounded-2xl p-8 shadow-calm hover:shadow-calm-lg 
          transition-all duration-500 border border-ilight-100 hover:border-ilight-200
          relative overflow-hidden transform group-hover:scale-[1.02]`}>
          
          {/* Shimmer Effect */}
          {withShimmer && <ShimmerEffect />}

          {/* Content */}
          <div className="relative">
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}