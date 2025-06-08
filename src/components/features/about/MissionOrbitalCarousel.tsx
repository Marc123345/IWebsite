import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Heart, MessageSquare, Calendar, Shield, 
  ArrowRight, Brain, Target, Activity, Award,
  Lightbulb, Sparkles, Star
} from 'lucide-react';
import Card from '../../Card';

interface MissionStatement {
  id: number;
  text: string;
  icon: JSX.Element;
  color: string;
}

export default function MissionOrbitalCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  // Mission statements
  const missionStatements: MissionStatement[] = [
    {
      id: 1,
      text: "ILight delivers a unique personalized mental health support and care continuum solution through a human driven data science, machine learning and artificial intelligence platform.",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      text: "ILight's overarching Mission is to Illuminate People's Lives through the ripple effect of a multi faceted approach to Communication, Care, Connection and Illumination.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-amber-400 to-amber-600"
    },
    {
      id: 3,
      text: "To this end, ILight has a coordinated approach to develop a powerful community that collaborates through various interactions and shares data privately to help us, help them help others.",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-400 to-green-600"
    },
    {
      id: 4,
      text: "In parallel we are partnering a vetted network of therapy and solution providers to enhance their services and value proposition while engaging with participants in the ILight Community.",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 5,
      text: "The magic happens when we combine these efforts through tailored engagement, data science, machine learning and artificial intelligence to deliver a care continuum of THE RIGHT CARE TO THE RIGHT PERSON AT THE RIGHT TIME while Helping Us Help Them Help Others.",
      icon: <Star className="w-6 h-6" />,
      color: "from-red-400 to-red-600"
    },
    {
      id: 6,
      text: "ILight's fundamental imperative is to not only provide a safe environment for personalized enrichment but importantly stimulate a purpose driven setting to Help Us, Help You, Help Others.",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-400 to-pink-600"
    }
  ];

  // Auto-rotate through mission statements
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % missionStatements.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoRotate, missionStatements.length]);

  return (
    <div className="relative bg-gradient-to-b from-ilight-50 to-white rounded-3xl my-12 p-8">
      {/* Background with subtle stars */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-ilight-100/30 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Central orb */}
      <div className="flex justify-center mb-12 relative z-10">
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-br from-ilight-500 to-ilight-700 flex items-center justify-center text-white font-bold text-xl relative"
          animate={{
            boxShadow: [
              '0 0 20px 0px rgba(59, 95, 138, 0.3)',
              '0 0 50px 10px rgba(59, 95, 138, 0.6)',
              '0 0 20px 0px rgba(59, 95, 138, 0.3)'
            ],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-shadow">iLIGHT</span>
          
          {/* Orbiting sparkles */}
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              transformOrigin: 'center center'
            }}
          >
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-2 -left-2"
            animate={{
              rotate: -360
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              transformOrigin: 'center center'
            }}
          >
            <Sparkles className="w-6 h-6 text-blue-300" />
          </motion.div>
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
      </div>

      {/* Mission statement display */}
      <div className="max-w-3xl mx-auto">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Card
            variant="default"
            shadow="lg"
            padding="lg"
            className="relative overflow-hidden"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${missionStatements[activeIndex].color} text-white flex items-center justify-center flex-shrink-0`}>
                {missionStatements[activeIndex].icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-ilight-700">Mission Statement {missionStatements[activeIndex].id}</h3>
            </div>
            <p className="text-lg text-ilight-700 leading-relaxed">
              {missionStatements[activeIndex].text}
            </p>
            
            {/* Subtle background animation */}
            <motion.div
              className="absolute inset-0 opacity-10 pointer-events-none"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 30%, rgba(59, 95, 138, 0.3) 0%, transparent 70%)',
                  'radial-gradient(circle at 70% 70%, rgba(59, 95, 138, 0.3) 0%, transparent 70%)',
                  'radial-gradient(circle at 30% 70%, rgba(59, 95, 138, 0.3) 0%, transparent 70%)',
                  'radial-gradient(circle at 70% 30%, rgba(59, 95, 138, 0.3) 0%, transparent 70%)',
                  'radial-gradient(circle at 30% 30%, rgba(59, 95, 138, 0.3) 0%, transparent 70%)'
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </Card>
        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mb-8">
        {missionStatements.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-ilight-500' : 'bg-ilight-200'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setActiveIndex(index);
              setAutoRotate(false);
              setTimeout(() => setAutoRotate(true), 10000);
            }}
          />
        ))}
      </div>

      {/* Tagline at bottom */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.p
          className="text-2xl md:text-3xl font-bold text-ilight-700"
          animate={{
            color: ['#1F3A61', '#3B5F8A', '#1F3A61'],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          HOW MANY LIVES DID YOU ILLUMINATE TODAY?
        </motion.p>
      </motion.div>
    </div>
  );
}