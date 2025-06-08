import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Heart, Lightbulb, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MissionSliderReveal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Mission statements
  const missionTabs = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: <Lightbulb className="w-5 h-5" />,
      content: (
        <>
          <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-white">Our Mission</h3>
          <p className="text-white/90 mb-4 leading-relaxed">
            iLIGHT is a mission-driven organization dedicated to "Illuminating the Lives" of people impacted by personal challenges.
          </p>
          <p className="text-white/90 mb-4 leading-relaxed">
            Our comprehensive platform integrates multiple components to deliver a care continuum, emotional well-being, and development of inner resilience, while being part of the purpose of helping yourself while helping others.
          </p>
        </>
      )
    },
    {
      id: 'community',
      title: 'Community',
      icon: <Users className="w-5 h-5" />,
      content: (
        <>
          <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-white">Community</h3>
          <p className="text-white/90 mb-4 leading-relaxed">
            Connect with others to combine the power of sharing and caring with the purpose of helping others while being part of the purpose of helping yourself while helping others.
          </p>
          <p className="text-white/90 mb-4 leading-relaxed">
            iLight's fundamental imperative is to not only provide a safe environment for personalized enrichment but importantly stimulate a purpose driven setting to Help Us, Help You, Help Others.
          </p>
        </>
      )
    },
    {
      id: 'purpose',
      title: 'Purpose',
      icon: <Heart className="w-5 h-5" />,
      content: (
        <>
          <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-white">Our Purpose</h3>
          <p className="text-white/90 mb-4 leading-relaxed">
            HELP US, HELP YOU, HELP OTHERS and be part of the PRICELESS PURPOSE of enriching lives together through delivering the RIGHT CARE TO THE RIGHT PERSON AT THE RIGHT TIME.
          </p>
          <p className="text-white/90 mb-4 leading-relaxed">
            We believe in delivering better care outcomes by combining human compassion with advanced technology and data insights.
          </p>
        </>
      )
    }
  ];

  // Counter animation
  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        if (count < 100) {
          setCount(prev => Math.min(prev + 1, 100));
        } else {
          clearInterval(interval);
        }
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [isOpen, count]);

  // Reset counter when closed
  useEffect(() => {
    if (!isOpen) {
      setCount(0);
    }
  }, [isOpen]);

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only run this if the menu is open
      if (!isOpen) return;
      
      // Get the menu element
      const menuElement = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-toggle-button');
      
      // If the click is outside the menu and not on the toggle button, close the menu
      if (panelRef.current && 
          !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating tab button - moved up to avoid overlap with accessibility menu */}
      <motion.button
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="fixed bottom-36 right-4 z-40 bg-ilight-600 text-white px-4 py-3 rounded-full shadow-xl hover:bg-ilight-500 transition-colors duration-300 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Our Mission"
      >
        <Lightbulb className="w-5 h-5" />
        <span className="font-medium hidden sm:inline">Our Mission</span>
        <motion.div
          animate={isHovering ? { x: 5 } : { x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Slide-in panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Panel */}
            <motion.div
              ref={panelRef}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 w-full sm:w-[450px] h-full bg-ilight-600 shadow-2xl overflow-hidden z-50"
            >
              {/* Header with tabs */}
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                  {missionTabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(index)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                        activeTab === index 
                          ? 'bg-white text-ilight-600' 
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {tab.icon}
                      <span className="hidden sm:inline">{tab.title}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content area with glass effect */}
              <div className="relative p-5 sm:p-6 overflow-y-auto h-[calc(100%-64px)]">
                {/* Blurred background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-ilight-600/80 to-ilight-700/80 backdrop-blur-md"></div>
                
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Floating particles */}
                  {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute w-2 h-2 rounded-full bg-white/10"
                      initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        scale: 0
                      }}
                      animate={{
                        y: [
                          `${Math.random() * 100}%`,
                          `${Math.random() * 100}%`,
                          `${Math.random() * 100}%`
                        ],
                        opacity: [0, 0.7, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  
                  {/* Glowing orbs */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-white/5 blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-white/5 blur-3xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                </div>
                
                {/* Animated content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    {missionTabs[activeTab].content}
                    
                    {/* Counter section */}
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center font-serif">
                        HOW MANY LIVES DID YOU ILLUMINATE TODAY?
                      </h4>
                      <div className="relative h-8 bg-white/10 rounded-full overflow-hidden mb-3">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-white/30 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${count}%` }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white font-bold text-shadow text-lg">{count}</span>
                        </div>
                      </div>
                      <p className="text-white/80 text-sm text-center mb-6">
                        Join us in illuminating lives through purpose-driven community engagement
                      </p>
                    </div>
                    
                    {/* Global Impact */}
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="w-5 h-5 text-white/80" />
                        <h4 className="text-lg sm:text-xl font-bold text-white">Global Impact</h4>
                      </div>
                      <p className="text-white/80 mb-4 leading-relaxed">
                        iLIGHT is committed to making a global impact by providing personalized care and support to those who need it most, regardless of location or background.
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white/10 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-white">24/7</div>
                          <div className="text-xs text-white/70">Support</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-white">100+</div>
                          <div className="text-xs text-white/70">Countries</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-white">1000s</div>
                          <div className="text-xs text-white/70">Lives Impacted</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}