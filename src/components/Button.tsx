import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'calm' | 'gradient';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  iconPosition?: 'left' | 'right';
  rounded?: 'default' | 'full';
  gradientFrom?: string;
  gradientTo?: string;
  withShimmer?: boolean;
  as?: React.ElementType;
  to?: string;
  href?: string;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  rounded = 'default',
  gradientFrom = 'from-ilight-600',
  gradientTo = 'to-ilight-700',
  withShimmer = false,
  className = '',
  disabled,
  as,
  to,
  href,
  shadow = 'md',
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-ilight-600 text-white hover:bg-ilight-700 focus:ring-ilight-600/20 shadow-calm hover:shadow-calm-lg transform hover:translate-y-[-2px] active:translate-y-[1px]",
    secondary: "bg-ilight-100 text-black hover:bg-ilight-200 focus:ring-ilight-600/20 shadow-calm hover:shadow-calm-lg transform hover:translate-y-[-2px] active:translate-y-[1px]",
    outline: "border-2 border-ilight-600 text-black hover:bg-ilight-50 focus:ring-ilight-600/20 shadow-calm hover:shadow-calm-lg transform hover:translate-y-[-2px] active:translate-y-[1px]",
    ghost: "text-black hover:bg-ilight-50 focus:ring-ilight-600/20 transform hover:translate-y-[-2px] active:translate-y-[1px]",
    calm: "bg-white/90 backdrop-blur-sm text-black hover:bg-white shadow-calm hover:shadow-calm-lg focus:ring-ilight-600/20 transform hover:translate-y-[-2px] active:translate-y-[1px]",
    gradient: `bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white hover:opacity-90 focus:ring-ilight-600/20 shadow-calm hover:shadow-calm-lg transform hover:translate-y-[-2px] active:translate-y-[1px]`
  };

  const sizes = {
    xs: "px-3 py-1.5 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3.5 text-lg",
    xl: "px-10 py-4 text-xl"
  };

  const roundedStyles = {
    default: "rounded-lg",
    full: "rounded-full"
  };
  
  const shadowStyles = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  };

  const Component = as || 'button';
  const isLink = as === Link || as === 'a';
  const linkProps = isLink ? (to ? { to } : { href }) : {};

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
        </>
      )}
    </span>
  );

  if (isLink) {
    return (
      <Component
        {...linkProps}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          roundedStyles[rounded],
          shadowStyles[shadow],
          fullWidth ? 'w-full' : '',
          disabled || loading ? 'opacity-70 cursor-not-allowed pointer-events-none' : '',
          'relative overflow-hidden transform-gpu',
          className
        )}
      >
        {withShimmer && (
          <motion.div
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "linear"
            }}
          />
        )}
        
        {content}
      </Component>
    );
  }

  return (
    <motion.button
      ref={ref}
      disabled={disabled || loading}
      {...props}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        roundedStyles[rounded],
        shadowStyles[shadow],
        fullWidth ? 'w-full' : '',
        disabled || loading ? 'opacity-70 cursor-not-allowed' : '',
        'relative overflow-hidden transform-gpu',
        className
      )}
      whileHover={!disabled && !loading ? { scale: 1.02 } : undefined}
      whileTap={!disabled && !loading ? { scale: 0.98 } : undefined}
    >
      {withShimmer && (
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "linear"
          }}
        />
      )}
      
      {content}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;