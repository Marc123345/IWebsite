import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AnimationContextType {
  animationsEnabled: boolean;
  setAnimationsEnabled: (enabled: boolean) => void;
  animationLevel: 'high' | 'medium' | 'low' | 'none';
  setAnimationLevel: (level: 'high' | 'medium' | 'low' | 'none') => void;
  isLowPowerDevice: boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

interface AnimationControllerProps {
  children: ReactNode;
  defaultLevel?: 'high' | 'medium' | 'low' | 'none';
}

/**
 * Animation Controller component that:
 * - Detects device capabilities
 * - Provides context for animation settings
 * - Allows global control of animation intensity
 */
export function AnimationController({ 
  children, 
  defaultLevel = 'medium' 
}: AnimationControllerProps) {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [animationLevel, setAnimationLevel] = useState<'high' | 'medium' | 'low' | 'none'>(defaultLevel);
  const [isLowPowerDevice, setIsLowPowerDevice] = useState(false);

  useEffect(() => {
    // Detect device capabilities
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowPower = detectLowPowerDevice();
    
    // Set initial state based on device capabilities
    if (prefersReducedMotion) {
      setAnimationsEnabled(false);
      setAnimationLevel('none');
    } else if (isLowPower) {
      setIsLowPowerDevice(true);
      setAnimationLevel('low');
    }
    
    // Listen for changes in reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setAnimationsEnabled(!e.matches);
      if (e.matches) {
        setAnimationLevel('none');
      }
    };
    
    // Use the appropriate event listener based on browser support
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [defaultLevel]);

  // Helper function to detect low power devices
  const detectLowPowerDevice = (): boolean => {
    // Check for low-end devices based on available indicators
    const isLowEndDevice = 
      // Low CPU core count
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      // Mobile devices (which often have less GPU power)
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      // Low memory (if available)
      // @ts-ignore - deviceMemory is not in the standard navigator type
      (navigator.deviceMemory && navigator.deviceMemory <= 4);
      
    return isLowEndDevice;
  };

  return (
    <AnimationContext.Provider value={{
      animationsEnabled,
      setAnimationsEnabled,
      animationLevel,
      setAnimationLevel,
      isLowPowerDevice
    }}>
      {children}
    </AnimationContext.Provider>
  );
}

// Hook to use animation context
export function useAnimationContext() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimationContext must be used within an AnimationController');
  }
  return context;
}