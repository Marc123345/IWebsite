import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wind, 
  Brain, 
  Heart, 
  Users, 
  Globe, 
  ArrowRight, 
  Shield, 
  Building,
  Zap,
  Sparkles,
  Lightbulb,
  Activity
} from 'lucide-react';

import TranslatedContent from '../../TranslatedContent';

export default function MissionJourneyVisualization() {
  const [activeSection, setActiveSection] = useState<'community' | 'platform' | 'providers'>('platform');
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useRef(window.innerWidth <= 768);
  
  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      isMobile.current = window.innerWidth <= 768;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <motion.h4
            className="text-base md:text-xl font-light mb-4 md:mb-6 leading-relaxed font-sans text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A Personalized Continuum of Care Empowered by Technology & Data
          </motion.h4>
          
          <div className="h-0.5 bg-gradient-to-r from-ilight-500/30 via-ilight-600 to-ilight-500/30 w-full max-w-4xl mx-auto mb-6"></div>

          {/* Headline - Improved for mobile */}
          <div className="relative overflow-hidden text-center py-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black font-serif px-2 leading-tight">
                THE RIGHT CARE TO THE RIGHT PERSON AT THE RIGHT TIME
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Main Visualization */}
        <div className="relative">
          {/* Central iLIGHT logo with pulsing effect */}
          <div className="flex justify-center mb-12">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-ilight-500 to-ilight-700 flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl relative z-10"
                animate={{
                  boxShadow: [
                    '0 0 20px 0px rgba(59, 95, 138, 0.3)',
                    '0 0 50px 10px rgba(59, 95, 138, 0.6)',
                    '0 0 20px 0px rgba(59, 95, 138, 0.3)'
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-shadow">iLIGHT</span>
              </motion.div>
              
              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-ilight-200/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-ilight-200/20"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </div>

          {/* Three Pillars with Hexagonal Design - Improved for mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Community Pillar */}
            <motion.div
              className={`relative ${activeSection === 'community' ? 'z-20' : 'z-10'} mb-6 md:mb-0`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseEnter={() => setActiveSection('community')}
              onMouseLeave={() => !isHovering && setActiveSection('platform')}
            >
              <motion.div
                className={`bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-ilight-100 transition-all duration-300 h-full ${
                  activeSection === 'community' ? 'shadow-xl border-ilight-300 scale-[1.02]' : ''
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center mb-4">
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-3 shadow-md"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Users className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-ilight-700 mb-1">COMMUNITY</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { icon: <Users className="w-4 h-4" />, label: "Social Network" },
                    { icon: <Building className="w-4 h-4" />, label: "Content / Education" },
                    { icon: <Heart className="w-4 h-4" />, label: "Care Champion" },
                    { icon: <Users className="w-4 h-4" />, label: "Family inclusion" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-blue-800 font-medium text-sm">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* iLIGHT Platform Pillar */}
            <motion.div
              className={`relative ${activeSection === 'platform' ? 'z-20' : 'z-10'} mb-6 md:mb-0`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onMouseEnter={() => setActiveSection('platform')}
              onMouseLeave={() => !isHovering && setActiveSection('platform')}
            >
              <motion.div
                className={`bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-ilight-100 transition-all duration-300 h-full ${
                  activeSection === 'platform' ? 'shadow-xl border-ilight-300 scale-[1.02]' : ''
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center mb-4">
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-3 shadow-md"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Brain className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-ilight-700 mb-1">iLIGHT PLATFORM</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { icon: <Activity className="w-4 h-4" />, label: "Data Science" },
                    { icon: <Brain className="w-4 h-4" />, label: "Machine Learning" },
                    { icon: <Sparkles className="w-4 h-4" />, label: "Artificial Intelligence" },
                    { icon: <Shield className="w-4 h-4" />, label: "Care Navigation" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-purple-800 font-medium text-sm">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Providers Pillar */}
            <motion.div
              className={`relative ${activeSection === 'providers' ? 'z-20' : 'z-10'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onMouseEnter={() => setActiveSection('providers')}
              onMouseLeave={() => !isHovering && setActiveSection('platform')}
            >
              <motion.div
                className={`bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-ilight-100 transition-all duration-300 h-full ${
                  activeSection === 'providers' ? 'shadow-xl border-ilight-300 scale-[1.02]' : ''
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center mb-4">
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-3 shadow-md"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Heart className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-ilight-700 mb-1">PROVIDERS</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { icon: <Heart className="w-4 h-4" />, label: "Therapy Providers" },
                    { icon: <Shield className="w-4 h-4" />, label: "Solution Providers" },
                    { icon: <Users className="w-4 h-4" />, label: "Enhanced Engagement" },
                    { icon: <Shield className="w-4 h-4" />, label: "Quality Control" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-green-800 font-medium text-sm">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Connection Lines (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 z-0 pointer-events-none">
            {/* Line from Community to Platform */}
            <motion.div
              className="absolute top-0 left-[25%] w-[25%] h-1 bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{ transformOrigin: 'left' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300"
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ opacity: 0.6 }}
              />
            </motion.div>

            {/* Line from Platform to Providers */}
            <motion.div
              className="absolute top-0 left-[50%] w-[25%] h-1 bg-gradient-to-r from-purple-400 to-green-400"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{ transformOrigin: 'left' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-300 to-green-300"
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                style={{ opacity: 0.6 }}
              />
            </motion.div>
          </div>

          {/* Tagline - Improved for mobile */}
          <motion.div
            className="mt-10 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.p
              className="text-lg sm:text-xl font-medium text-ilight-700 font-serif"
              animate={{
                color: ['#1F3A61', '#3B5F8A', '#1F3A61'],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              ILIGHT….the future of data driven, personalized, life care solutions.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}