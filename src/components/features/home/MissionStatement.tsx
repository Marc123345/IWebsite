import { motion } from 'framer-motion';

export default function MissionStatement() {
  return (
    <div className="relative z-30 -mt-20 sm:-mt-24 md:-mt-32 px-4 sm:px-6 md:px-8">
      <motion.div 
        className="bg-ilight-600 rounded-xl shadow-xl max-w-6xl mx-auto overflow-hidden"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-6 sm:p-8 md:p-12 relative">
          {/* Background effects */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </motion.div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="font-serif text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <div className="h-1 bg-white/30 w-24 mx-auto"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Left column - Tagline */}
              <div className="flex flex-col justify-center md:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20">
                  <p className="text-lg sm:text-xl md:text-2xl text-white font-serif font-semibold leading-relaxed mb-4">
                    iLIGHT is a mission-driven organization dedicated to "Illuminating the Lives" of people impacted by personal challenges.
                  </p>
                  
                  <div className="text-center mt-4 md:mt-6">
                    <motion.p
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight"
                      animate={{
                        color: ['#FFFFFF', '#E9EEF5', '#FFFFFF'],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      HOW MANY LIVES<br />
                      DID YOU ILLUMINATE<br />
                      TODAY?
                    </motion.p>
                  </div>
                </div>
              </div>
              
              {/* Right column - Mission details */}
              <div className="space-y-4 md:w-1/2">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  Our comprehensive platform integrates multiple components to deliver a care continuum, emotional well-being, and development of inner resilience.
                </p>
                
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  We combine purpose-driven community engagement, peer support, and innovative data-driven technology for holistic support.
                </p>
                
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  iLIGHT's fundamental imperative is to provide a safe environment for personalized enrichment while stimulating a purpose-driven setting to Help Us, Help You, Help Others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}