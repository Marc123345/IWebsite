import { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Default CTA icon if none provided
import { Link } from 'react-router-dom';
// LucideIcon was aliased to DivideIcon, changing to ReactNode for icons
// import { DivideIcon as LucideIcon } from 'lucide-react';
import {
  GradientBlob,
  NoiseOverlay,
  DotPattern,
  GlowEffect,
  FloatingElements,
  GentleWave,
  BreathingCircle,
  GlassCard
} from './patterns'; // Assuming patterns are in the same directory or adjust path

interface HeroProps {
  title: string;
  description: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaUserType?: 'careseeker' | 'caregiver';
  ctaIcon?: ReactNode; // UPDATED: Was LucideIcon (DivideIcon)
  secondaryAction?: {
    text: string;
    link: string;
    icon?: ReactNode; // UPDATED: Was LucideIcon (DivideIcon)
  };
  height?: 'full' | 'large' | 'medium' | 'xlarge';
  overlay?: 'dark' | 'light' | 'gradient' | 'none';
  theme?: 'light' | 'dark'; // Theme prop seems unused currently
  align?: 'center' | 'left';
  subtitle?: string;
  features?: {
    icon: React.ReactNode;
    text: string;
  }[];
  stats?: {
    value: string;
    label: string;
    icon: React.ReactNode;
  }[];
  video?: string;
  glassEffect?: boolean;
  enhancedTextContrast?: boolean; // New prop for better text contrast
}

export default function Hero({
  title,
  description,
  image,
  ctaText,
  ctaLink,
  ctaUserType,
  ctaIcon = <ArrowRight className="w-5 h-5" />, // Providing a default icon
  secondaryAction,
  height = 'large',
  overlay = 'gradient',
  theme = 'light', // Unused in current rendering logic below
  align = 'center',
  subtitle,
  features,
  stats,
  video,
  glassEffect = false,
  enhancedTextContrast = false
}: HeroProps) {
  const { scrollY } = useScroll();
  // Parallax effect for the content wrapper
  const contentOpacity = useTransform(scrollY, [0, 300, 400], [1, 0.8, 0]);
  const contentY = useTransform(scrollY, [0, 300], [0, 50]); // Content moves up slower

  const heightClasses = {
    full: 'min-h-screen',
    xlarge: 'min-h-[90vh]', // Approx 90% of viewport height
    large: 'min-h-[80vh]',  // Approx 80% of viewport height
    medium: 'min-h-[60vh]'  // Approx 60% of viewport height
  };

  const overlayClasses = {
    dark: 'bg-black/80', // Darker overlay
    light: 'bg-black/60', // Lighter overlay
    gradient: 'bg-gradient-to-b from-black/70 via-black/60 to-black/80', // Default gradient
    none: ''
  };

  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };

  const titleWord = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    // Using hero-section class from global CSS which includes navbar spacing (padding-top: 5rem)
    <motion.section
      className={`hero-section ${heightClasses[height]} flex items-center justify-center overflow-hidden bg-gradient-to-br from-ilight-600 to-ilight-700`}
    >
      {(image || video) && (
        <div className="absolute inset-0 z-0">
          {video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              preload="metadata" // Changed from auto to metadata for potentially faster initial load
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : image ? (
            <motion.img
              src={image}
              alt={title || "Hero background"} // Added alt text
              className="w-full h-full object-cover"
              initial={{ scale: 1.05, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          ) : null}
        </div>
      )}

      {/* Background Effects - Placed under media but above overlay */}
      <NoiseOverlay opacity={0.03} className="z-[1]" /> {/* Subtle noise */}
      <DotPattern size="lg" color="rgba(255,255,255,0.08)" className="z-[1]" /> {/* Subtle dots */}
      <FloatingElements variant="light" density="low" speed="slow" className="z-[1]" /> {/* Fewer floating elements */}
      <GradientBlob
        variant="accent"
        size="xl" // Can be 'lg' or 'xl'
        className="absolute top-0 left-0 -translate-x-2/3 -translate-y-1/3 opacity-20 z-[1]" // Adjusted position & opacity
      />
      {/* Commented out some "bubble" effects for a cleaner default */}
      {/*
      <GradientBlob
        variant="primary"
        size="xl"
        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-25 z-[1]"
      />
      <GlowEffect
        size="xl"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 z-[1]"
      />
      <BreathingCircle
        size="xl"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-30" // Behind other elements
        duration={10} // Slower breath
      />
      */}
      <GentleWave position="bottom" color="rgba(255, 255, 255, 0.05)" height={30} className="z-[1]" /> {/* More subtle wave */}


      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${overlayClasses[overlay]} z-[2]`} /> // Overlay above background effects
      )}

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-[3] w-full flex justify-center px-4 sm:px-6" // Content on top, added horizontal padding for mobile
      >
        <div className="container mx-auto flex justify-center">
          <div className={`max-w-5xl ${align === 'center' ? 'text-center' : 'text-left w-full'}`}> {/* Added w-full for text-left */}
            {subtitle && (
              <div className={`mb-4 ${align === 'center' ? 'mx-auto' : ''}`}>
                <motion.span
                  className="inline-block bg-white/10 backdrop-blur-sm text-white
                    px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-md text-shadow-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                >
                  {subtitle}
                </motion.span>
              </div>
            )}

            {glassEffect ? (
              <GlassCard 
                className={`max-w-4xl ${align === 'center' ? 'mx-auto' : ''} mb-8`} 
                padding="lg" 
                blur="md" 
                opacity={0.15} 
                textShadow
                enhancedContrast={enhancedTextContrast}
              >
                <motion.div
                  variants={titleContainer}
                  initial="hidden"
                  animate="visible"
                  className="mb-4 md:mb-6" // Adjusted margin
                >
                  <h1 className="sr-only">{title}</h1>
                  <div className={`flex flex-wrap ${align === 'center' ? 'justify-center' : 'justify-start'} gap-x-2 md:gap-x-3 gap-y-1 md:gap-y-2`}>
                    {title.split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        variants={titleWord}
                        className={`font-serif text-white ${enhancedTextContrast ? 'text-shadow-lg font-bold' : 'text-shadow'} text-3xl sm:text-4xl md:text-5xl font-bold inline-block`} // Reduced lg:text-6xl
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                <motion.p
                  className={`text-base sm:text-lg md:text-xl text-white mb-8 md:mb-12 max-w-3xl ${align === 'center' ? 'mx-auto' : ''}
                    leading-relaxed ${enhancedTextContrast ? 'text-shadow-lg font-medium' : 'text-shadow-sm'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {description}
                </motion.p>
              </GlassCard>
            ) : (
              <>
                <motion.div
                  variants={titleContainer}
                  initial="hidden"
                  animate="visible"
                  className="mb-4 md:mb-6"
                >
                  <h1 className="sr-only">{title}</h1>
                  <div className={`flex flex-wrap ${align === 'center' ? 'justify-center' : 'justify-start'} gap-x-3 gap-y-1`}>
                    {title.split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        variants={titleWord}
                        className={`font-serif text-white ${enhancedTextContrast ? 'text-shadow-lg font-bold' : 'text-shadow'} text-3xl sm:text-4xl md:text-5xl font-bold inline-block`}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                <motion.p
                  className={`text-base sm:text-lg md:text-xl text-white mb-8 md:mb-12 max-w-3xl ${align === 'center' ? 'mx-auto' : ''}
                    leading-relaxed ${enhancedTextContrast ? 'text-shadow-lg font-medium' : 'text-shadow-sm'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {description}
                </motion.p>
              </>
            )}

            {features && features.length > 0 && (
              <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12 max-w-4xl ${align === 'center' ? 'mx-auto' : ''}`}>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`flex items-center ${align === 'center' ? 'justify-center' : 'justify-start'} gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-3
                      hover:bg-white/30 transition-colors duration-300 shadow-sm hover:shadow-md transform hover:scale-105`}
                  >
                    <div className={`text-white ${enhancedTextContrast ? 'text-shadow-lg' : 'text-shadow-sm'} flex-shrink-0 w-5 h-5 md:w-6 md:h-6`}>{feature.icon}</div>
                    <span className={`text-white ${enhancedTextContrast ? 'text-shadow-lg font-medium' : 'text-shadow-sm'} text-xs sm:text-sm md:text-base`}>{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {stats && stats.length > 0 && (
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 max-w-4xl ${align === 'center' ? 'mx-auto' : ''}`}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg shadow-sm"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20
                        flex items-center justify-center text-white shadow-sm transform hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    <div className={`text-lg md:text-xl font-bold text-white mb-0.5 ${enhancedTextContrast ? 'text-shadow-lg' : 'text-shadow'}`}>{stat.value}</div>
                    <div className={`text-xs md:text-sm text-white/80 ${enhancedTextContrast ? 'text-shadow-sm font-medium' : 'text-shadow-sm'}`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            )}

            <motion.div
              className={`flex flex-col sm:flex-row ${align === 'center' ? 'justify-center' : 'justify-start'} items-center gap-4 md:gap-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {ctaText && ctaLink && (
                <Link
                  to={ctaLink + (ctaUserType ? `?type=${ctaUserType}` : '')}
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3
                    sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-md
                    transform hover:scale-105 hover:shadow-lg active:scale-95 duration-300 w-full sm:w-auto"
                >
                  {ctaText}
                  {ctaIcon && <span className="ml-1">{ctaIcon}</span>}
                </Link>
              )}

              {secondaryAction && (
                <Link
                  to={secondaryAction.link}
                  className="inline-flex items-center justify-center gap-2 text-white border-2 border-white/40
                    px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white/10 transition-colors text-shadow-sm
                    transform hover:scale-105 active:scale-95 duration-300 w-full sm:w-auto"
                >
                  {secondaryAction.text}
                  {secondaryAction.icon && <span className="ml-1">{secondaryAction.icon}</span>}
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator only if height is large enough to imply scrolling */}
      {(height === 'full' || height === 'xlarge' || height === 'large') && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] hidden md:block" // Ensure it's above wave but below content if needed
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: {delay: 1, duration: 0.5}, y: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay:1 } }}
        >
          <div className="w-6 h-10 sm:w-8 sm:h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
            <motion.div
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }} // Adjusted travel distance for smaller indicator
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}