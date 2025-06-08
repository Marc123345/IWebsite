import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
  staggerChildren?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  textShadow?: boolean;
  fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
  splitWords?: boolean;
  enhancedContrast?: boolean; // New prop for better contrast
}

export default function TextReveal({
  children,
  direction = 'up',
  duration = 0.5,
  delay = 0,
  staggerChildren = 0.1,
  className = '',
  threshold = 0.1,
  once = true,
  textShadow = true,
  fontWeight = 'normal',
  splitWords = false,
  enhancedContrast = false
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, threshold });

  // Set initial and animate values based on direction
  const getVariants = () => {
    const distance = 20; // pixels to move
    
    switch (direction) {
      case 'up':
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'down':
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'left':
        return {
          hidden: { x: distance, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'right':
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      default:
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay
      }
    }
  };

  const itemVariants = getVariants();

  // Apply text shadow and font weight classes
  const getTextClasses = () => {
    let classes = className;
    
    if (textShadow) {
      classes += enhancedContrast ? ' text-shadow-lg' : ' text-shadow';
    }
    
    switch (fontWeight) {
      case 'medium':
        classes += ' font-medium';
        break;
      case 'semibold':
        classes += ' font-semibold';
        break;
      case 'bold':
        classes += ' font-bold';
        break;
      default:
        break;
    }
    
    if (enhancedContrast) {
      classes += ' text-contrast-enhanced-light';
    }
    
    return classes;
  };

  // Split text into words if children is a string and splitWords is true
  const renderContent = () => {
    if (typeof children === 'string' && splitWords) {
      const words = children.split(' ');
      
      return (
        <motion.div
          ref={ref}
          className={getTextClasses()}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={itemVariants}
              transition={{ duration }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </motion.div>
      );
    }
    
    // If children is not a string or splitWords is false, just animate the whole thing
    return (
      <motion.div
        ref={ref}
        className={getTextClasses()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    );
  };

  return renderContent();
}