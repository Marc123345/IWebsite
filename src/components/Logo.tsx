import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  showText?: boolean;
}

export default function Logo({ 
  variant = 'default', 
  size = 'md',
  showText = false
}: LogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
    '2xl': 'h-28',
    '3xl': 'h-36'
  };

  const textColors = {
    default: 'text-ilight-600',
    light: 'text-white',
    dark: 'text-ilight-700'
  };

  return (
    <Link to="/" className="group relative inline-flex items-center">
      <div className={`flex items-center ${sizes[size]} relative`}>
        {/* Logo Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://i.imgur.com/0n9PaCk.png" 
              alt="iLight Logo"
              className={`${sizes[size]} w-auto object-contain`}
              style={{ 
                filter: 'brightness(1.4) contrast(1.3) saturate(1.3)', 
                transform: 'scale(1.1)'
              }}
            />
            {/* Shine Effect */}
            <motion.div
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
                rounded-full blur-md"
            />
            {/* Dynamic Glow */}
            <motion.div
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute inset-0 rounded-full blur-lg ${
                variant === 'light' 
                  ? 'bg-white/50' 
                  : 'bg-ilight-500/50'
              }`}
            />
          </motion.div>
        </motion.div>
        
        {/* Logo Text (optional) */}
        {showText && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`ml-3 font-bold text-2xl ${textColors[variant]}`}
          >
            iLight
          </motion.div>
        )}
      </div>
    </Link>
  );
}