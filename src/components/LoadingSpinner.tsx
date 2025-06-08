import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'light' | 'dark';
  label?: string;
}

export default function LoadingSpinner({ 
  size = 'md',
  variant = 'primary',
  label = 'Loading...'
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  const variants = {
    primary: 'border-ilight-100 border-t-ilight-600',
    light: 'border-white/30 border-t-white',
    dark: 'border-ilight-700/30 border-t-ilight-700',
  };

  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 1
  };

  return (
    <div 
      className="flex flex-col items-center justify-center gap-3" 
      role="status"
      aria-label={label}
    >
      <div className="relative">
        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img 
            src="https://i.imgur.com/0n9PaCk.png" 
            alt="iLight Logo"
            className={`${size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-12 h-12' : 'w-16 h-16'} object-contain`}
            style={{ 
              filter: 'brightness(1.4) contrast(1.3) saturate(1.3)', 
              transform: 'scale(1.1)'
            }}
          />
        </div>
        
        {/* Spinning border */}
        <motion.div
          className={`${sizes[size]} border-4 rounded-full ${variants[variant]}`}
          animate={{ rotate: 360 }}
          transition={spinTransition}
        />
        
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 ${sizes[size]} rounded-full bg-gradient-to-r 
            from-ilight-500/10 to-ilight-700/10`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      {label && (
        <span className="sr-only">{label}</span>
      )}
    </div>
  );
}