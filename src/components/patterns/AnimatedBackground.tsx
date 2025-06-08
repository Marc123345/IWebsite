import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedBackgroundProps {
  children?: ReactNode;
  variant?: 'gradient' | 'particles' | 'waves' | 'noise';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export default function AnimatedBackground({
  children,
  variant = 'gradient',
  intensity = 'medium',
  className = '',
  primaryColor = 'rgba(59, 95, 138, 0.7)',
  secondaryColor = 'rgba(45, 77, 118, 0.7)'
}: AnimatedBackgroundProps) {
  // Intensity settings
  const intensitySettings = {
    low: {
      particles: 10,
      opacity: 0.3,
      scale: 0.8,
      speed: 0.7
    },
    medium: {
      particles: 20,
      opacity: 0.5,
      scale: 1,
      speed: 1
    },
    high: {
      particles: 30,
      opacity: 0.7,
      scale: 1.2,
      speed: 1.3
    }
  };

  const settings = intensitySettings[intensity];

  // Render different background variants
  const renderBackground = () => {
    switch (variant) {
      case 'particles':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: settings.particles }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  backgroundColor: i % 2 === 0 ? primaryColor : secondaryColor,
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`,
                  opacity: settings.opacity,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [
                    Math.random() * 100 - 50,
                    Math.random() * 100 - 50,
                    Math.random() * 100 - 50
                  ],
                  y: [
                    Math.random() * 100 - 50,
                    Math.random() * 100 - 50,
                    Math.random() * 100 - 50
                  ],
                  scale: [1, settings.scale, 1],
                  opacity: [settings.opacity * 0.7, settings.opacity, settings.opacity * 0.7]
                }}
                transition={{
                  duration: 10 / settings.speed,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        );
      
      case 'waves':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{
                  backgroundColor: i % 2 === 0 ? primaryColor : secondaryColor,
                  opacity: settings.opacity / (i * 0.8),
                  bottom: `${(i - 1) * 10}%`
                }}
                animate={{
                  y: [0, -10 * settings.scale, 0],
                }}
                transition={{
                  duration: 5 / settings.speed * i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="absolute top-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25"
                    fill="white"
                  ></path>
                  <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5"
                    fill="white"
                  ></path>
                  <path
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    fill="white"
                  ></path>
                </svg>
              </motion.div>
            ))}
          </div>
        );
      
      case 'noise':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-noise mix-blend-overlay" 
              style={{ opacity: settings.opacity }} />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br"
              style={{ 
                backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})`,
                opacity: settings.opacity * 0.7
              }}
              animate={{
                opacity: [settings.opacity * 0.5, settings.opacity * 0.7, settings.opacity * 0.5]
              }}
              transition={{
                duration: 4 / settings.speed,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        );
      
      case 'gradient':
      default:
        return (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br pointer-events-none"
            style={{ 
              backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})`,
              opacity: settings.opacity
            }}
            animate={{
              background: [
                `linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})`,
                `linear-gradient(to bottom left, ${primaryColor}, ${secondaryColor})`,
                `linear-gradient(to top right, ${primaryColor}, ${secondaryColor})`,
                `linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})`
              ]
            }}
            transition={{
              duration: 20 / settings.speed,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
    }
  };

  return (
    <div className={`relative ${className}`}>
      {renderBackground()}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}