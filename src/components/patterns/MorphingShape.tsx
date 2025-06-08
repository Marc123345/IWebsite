import { motion } from 'framer-motion';

interface MorphingShapeProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
  complexity?: 'simple' | 'medium' | 'complex';
  speed?: number;
}

export default function MorphingShape({
  size = 'md',
  color = 'rgba(59, 95, 138, 0.2)',
  className = '',
  complexity = 'medium',
  speed = 1
}: MorphingShapeProps) {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96'
  };

  // Generate different path variants based on complexity
  const getPathVariants = () => {
    const duration = 10 / speed;
    
    switch (complexity) {
      case 'simple':
        return {
          initial: "M100,100 C100,100 100,100 100,100 C100,100 100,100 100,100 C100,100 100,100 100,100 C100,100 100,100 100,100 Z",
          animate: [
            "M100,100 C120,80 150,80 170,100 C190,120 190,150 170,170 C150,190 120,190 100,170 C80,150 80,120 100,100 Z",
            "M100,100 C130,70 170,70 200,100 C230,130 230,170 200,200 C170,230 130,230 100,200 C70,170 70,130 100,100 Z",
            "M100,100 C120,80 150,80 170,100 C190,120 190,150 170,170 C150,190 120,190 100,170 C80,150 80,120 100,100 Z"
          ],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut"
          }
        };
      case 'complex':
        return {
          initial: "M100,100 C100,100 100,100 100,100 C100,100 100,100 100,100 C100,100 100,100 100,100 C100,100 100,100 100,100 Z",
          animate: [
            "M100,100 C120,50 180,50 200,100 C250,120 250,180 200,200 C180,250 120,250 100,200 C50,180 50,120 100,100 Z",
            "M150,50 C200,50 250,100 250,150 C250,200 200,250 150,250 C100,250 50,200 50,150 C50,100 100,50 150,50 Z",
            "M100,50 C150,0 250,0 300,50 C350,100 350,200 300,250 C250,300 150,300 100,250 C50,200 50,100 100,50 Z",
            "M150,50 C200,50 250,100 250,150 C250,200 200,250 150,250 C100,250 50,200 50,150 C50,100 100,50 150,50 Z",
            "M100,100 C120,50 180,50 200,100 C250,120 250,180 200,200 C180,250 120,250 100,200 C50,180 50,120 100,100 Z"
          ],
          transition: {
            duration: duration * 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        };
      case 'medium':
      default:
        return {
          initial: "M100,100 C100,100 100,100 100,100 C100,100 100,100 100,100 C100,100 100,100 100,100 C100,100 100,100 100,100 Z",
          animate: [
            "M100,100 C120,80 150,80 170,100 C190,120 190,150 170,170 C150,190 120,190 100,170 C80,150 80,120 100,100 Z",
            "M80,80 C110,50 170,50 200,80 C230,110 230,170 200,200 C170,230 110,230 80,200 C50,170 50,110 80,80 Z",
            "M70,100 C90,60 170,60 190,100 C230,130 230,170 190,200 C170,240 90,240 70,200 C30,170 30,130 70,100 Z",
            "M80,80 C110,50 170,50 200,80 C230,110 230,170 200,200 C170,230 110,230 80,200 C50,170 50,110 80,80 Z",
            "M100,100 C120,80 150,80 170,100 C190,120 190,150 170,170 C150,190 120,190 100,170 C80,150 80,120 100,100 Z"
          ],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut"
          }
        };
    }
  };

  const pathVariants = getPathVariants();

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full"
        style={{ filter: 'blur(15px)' }}
      >
        <motion.path
          fill={color}
          d={pathVariants.initial}
          animate={{ d: pathVariants.animate }}
          transition={pathVariants.transition}
        />
      </svg>
    </div>
  );
}