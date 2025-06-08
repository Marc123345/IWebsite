import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import Breadcrumbs from './Breadcrumbs';

interface SectionHeadingProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  showBreadcrumbs?: boolean;
  breadcrumbItems?: {
    label: string;
    path: string;
  }[];
  align?: 'left' | 'center' | 'right';
  withGradient?: boolean;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  withAnimation?: boolean;
  subtitle?: string;
  withDivider?: boolean;
  dividerColor?: string;
  textColor?: string;
  titleSize?: 'sm' | 'md' | 'lg' | 'xl';
  descriptionSize?: 'sm' | 'md' | 'lg';
}

export default function SectionHeading({
  title,
  description,
  children,
  className = '',
  showBreadcrumbs = false,
  breadcrumbItems,
  align = 'left',
  withGradient = false,
  gradientFrom = 'from-ilight-700',
  gradientVia = 'via-ilight-600',
  gradientTo = 'to-ilight-700',
  withAnimation = true,
  subtitle,
  withDivider = false,
  dividerColor = 'bg-ilight-500',
  textColor,
  titleSize = 'lg',
  descriptionSize = 'md'
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  const titleSizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl'
  };

  const descriptionSizeClasses = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-xl md:text-2xl'
  };

  // Split text animation variants
  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
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

  const renderTitle = () => {
    // Use consistent font-serif for all headings to match "A network of therapy providers"
    return (
      <motion.div
        variants={titleContainer}
        initial="hidden"
        animate="visible"
        className="mb-4"
      >
        <h2 className={`${titleSizeClasses[titleSize]} ${textColor || 'text-black'} font-bold font-serif leading-tight`}>{title}</h2>
      </motion.div>
    );
  };

  const content = (
    <div className={cn('mb-12', alignClasses[align], className)}>
      {showBreadcrumbs && (
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      )}
      
      {subtitle && (
        <div className="mb-3">
          <span className="inline-block bg-ilight-500/10 text-ilight-500 px-3 py-1 rounded-full text-sm font-medium">
            {subtitle}
          </span>
        </div>
      )}
      
      {renderTitle()}
      
      {withDivider && (
        <div className={`h-1 ${dividerColor || 'bg-ilight-500'} rounded-full w-20 mb-6 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`} />
      )}
      
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`${textColor || 'text-black'} max-w-3xl ${descriptionSize ? descriptionSizeClasses[descriptionSize] : 'text-lg md:text-xl'} ${align === 'center' ? 'mx-auto' : ''} leading-relaxed`}
        >
          {description}
        </motion.p>
      )}
      
      {children}
    </div>
  );

  if (!withAnimation) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {content}
    </motion.div>
  );
}