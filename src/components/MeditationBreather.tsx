import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Pause, Play } from 'lucide-react';

interface MeditationBreatherProps {
  onClose: () => void;
}

export default function MeditationBreather({ onClose }: MeditationBreatherProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('inhale');
  const [counter, setCounter] = useState(4);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCounter(prev => {
        if (prev <= 1) {
          // Move to next phase
          switch (breathPhase) {
            case 'inhale':
              setBreathPhase('hold');
              return 7; // Hold for 7 seconds
            case 'hold':
              setBreathPhase('exhale');
              return 8; // Exhale for 8 seconds
            case 'exhale':
              setBreathPhase('rest');
              return 4; // Rest for 4 seconds
            case 'rest':
              setBreathPhase('inhale');
              return 4; // Inhale for 4 seconds
            default:
              return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [breathPhase, isPaused]);

  const circleVariants = {
    inhale: {
      scale: 1.5,
      transition: { duration: 4, ease: "easeInOut" }
    },
    hold: {
      scale: 1.5,
      transition: { duration: 7, ease: "linear" }
    },
    exhale: {
      scale: 1,
      transition: { duration: 8, ease: "easeInOut" }
    },
    rest: {
      scale: 1,
      transition: { duration: 4, ease: "linear" }
    }
  };

  const getInstructions = () => {
    switch (breathPhase) {
      case 'inhale': return 'Breathe In';
      case 'hold': return 'Hold';
      case 'exhale': return 'Breathe Out';
      case 'rest': return 'Rest';
      default: return '';
    }
  };

  const getColor = () => {
    switch (breathPhase) {
      case 'inhale': return 'from-blue-400 to-blue-500';
      case 'hold': return 'from-purple-400 to-purple-500';
      case 'exhale': return 'from-green-400 to-green-500';
      case 'rest': return 'from-amber-400 to-amber-500';
      default: return 'from-blue-400 to-blue-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-calm-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-ilight-600 hover:text-ilight-700 transition-colors"
          aria-label="Close meditation breather"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-ilight-700 mb-2">Take a Moment</h2>
          <p className="text-ilight-700">
            Follow the circle to practice deep breathing and find calm
          </p>
        </div>
        
        {/* Fixed breathing circle container */}
        <div className="flex justify-center items-center mb-8">
          {/* Fixed size container with flex centering */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Fixed background circle */}
            <div className="absolute inset-0 rounded-full bg-ilight-50 shadow-calm"></div>
            
            {/* Animated breathing circle - properly centered */}
            <motion.div
              variants={circleVariants}
              animate={breathPhase}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-32 h-32 rounded-full bg-gradient-to-br ${getColor()} shadow-calm-lg`}
            />
            
            {/* Counter and instruction - properly centered with z-index */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <div className="text-3xl font-bold text-black">{counter}</div>
              <div className="text-sm text-black">{getInstructions()}</div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-6 py-2 bg-ilight-600 text-white rounded-lg 
              hover:bg-ilight-700 transition-colors shadow-calm hover:shadow-calm-lg"
          >
            {isPaused ? (
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                <span>Resume</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Pause className="w-5 h-5" />
                <span>Pause</span>
              </div>
            )}
          </button>
          
          <button
            onClick={onClose}
            className="px-6 py-2 bg-ilight-100 text-ilight-700 rounded-lg 
              hover:bg-ilight-200 transition-colors shadow-calm hover:shadow-calm-lg"
          >
            Done
          </button>
        </div>
      </div>
    </motion.div>
  );
}