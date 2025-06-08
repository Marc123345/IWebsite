import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind } from 'lucide-react';
import MeditationBreather from './MeditationBreather';

export default function QuickBreather() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-52 right-4 z-40 w-12 h-12 rounded-full bg-white text-ilight-600 
          shadow-calm hover:shadow-calm-lg flex items-center justify-center"
        aria-label="Quick breathing exercise"
      >
        <Wind className="w-6 h-6" />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && <MeditationBreather onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}