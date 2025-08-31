import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Bot, Brain, Shield, ArrowRight, CheckCircle2,
  Sparkles, Activity, Target, MessageSquare, Heart,
  Calendar, Clock, Star, Award, ChevronRight, Settings,
  Gift, Globe, Lock, Bell, Rocket, Zap, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AIChatDemo from '../components/AIChatDemo';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Card from '../components/Card';
import {
  GlassCard, 
  ParallaxEffect, 
  TextReveal, 
  MorphingShape,
  AnimatedBackground
} from '../components/patterns';
import FloatingCard from '../components/FloatingCard';
import useMediaQuery from '../hooks/useMediaQuery';

export default function AITechnologyPage() {
  const [cubeRotation, setCubeRotation] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  const [hoveredFace, setHoveredFace] = useState<number | null>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Auto-rotate the cube
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setCubeRotation(prev => ({
        x: prev.x,
        y: prev.y + 90
      }));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [autoRotate]);

  // Handle mouse down for dragging
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDraggingRef.current = true;
    setAutoRotate(false);
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  // Handle touch start for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      setAutoRotate(false);
      lastMousePosRef.current = { 
        x: e.touches[0].clientX, 
        y: e.touches[0].clientY 
      };
    }
  }, []);

  // Handle mouse move for dragging
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    
    const deltaX = e.clientX - lastMousePosRef.current.x;
    const deltaY = e.clientY - lastMousePosRef.current.y;
    
    setCubeRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y - deltaX * 0.5
    }));
    
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  // Handle touch move for mobile
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    
    const deltaX = e.touches[0].clientX - lastMousePosRef.current.x;
    const deltaY = e.touches[0].clientY - lastMousePosRef.current.y;
    
    setCubeRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y - deltaX * 0.5
    }));
    
    lastMousePosRef.current = { 
      x: e.touches[0].clientX, 
      y: e.touches[0].clientY 
    };
  }, []);

  // Handle mouse up to end dragging
  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Handle touch end for mobile
  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Handle mouse leave to end dragging
  const handleMouseLeave = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Split text animation variants
  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
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

  const keyFeaturesList = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Emotional Intelligence",
      description: "Advanced understanding of emotions and context"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Always available to listen and provide guidance"
    }
  ];

  // Cube face content
  const cubeFaces = [
    {
      title: "Advanced",
      icon: <Brain className="w-16 h-16 text-white" />,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "AI",
      icon: <Bot className="w-16 h-16 text-white" />,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Personal",
      icon: <Heart className="w-16 h-16 text-white" />,
      color: "from-red-500 to-red-700"
    },
    {
      title: "Wellness",
      icon: <Activity className="w-16 h-16 text-white" />,
      color: "from-green-500 to-green-700"
    },
    {
      title: "Support",
      icon: <Shield className="w-16 h-16 text-white" />,
      color: "from-amber-500 to-amber-700"
    },
    {
      title: "24/7",
      icon: <Clock className="w-16 h-16 text-white" />,
      color: "from-teal-500 to-teal-700"
    }
  ];

  return (
    <>
      <SEO
        title="AI Technology - iLight Personal Wellness Support"
        description="Experience our advanced AI-powered personal support features. Get personalized care and continuous support through innovative technology."
        canonical="/how-it-works/ai"
      />
      <div className="min-h-screen">
        <section
          className="enhanced-hero"
          style={{
            backgroundImage: 'url("https://i.imgur.com/ArIgLKf.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="enhanced-hero-overlay"></div>
          <AnimatedBackground
            variant="gradient"
            intensity="medium"
            primaryColor="rgba(0, 0, 0, 0.4)"
            secondaryColor="rgba(0, 0, 0, 0.2)"
            className="z-10"
          />

          <div className="enhanced-hero-content">
            <div className="max-w-4xl mx-auto">
              {/* Split text animation for title */}
              <motion.div
                variants={titleContainer}
                initial="hidden"
                animate="visible"
                className="mb-8"
              >
                <h1 className="sr-only">Advanced AI Personal Wellness Support</h1>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                  {["Advanced", "AI", "Personal", "Wellness", "Support"].map((word, i) => (
                    <motion.span
                      key={i}
                      variants={titleWord}
                      className="font-serif text-white text-shadow-lg text-4xl sm:text-5xl md:text-6xl font-bold inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <GlassCard className="max-w-3xl mx-auto mb-12" opacity={0.2} blur="md" textShadow>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-2xl text-white text-shadow font-medium leading-relaxed"
                >
                  <TranslatedContent dynamicContent={true}>
                    Experience our cutting-edge AI technology that provides personalized support
                    and insights 24/7, adapting to your unique needs.
                  </TranslatedContent>
                </motion.p>
              </GlassCard>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button
                  as={Link}
                  to="/contact"
                  variant="gradient"
                  size="lg"
                  rounded="full"
                  icon={<Bot className="w-5 h-5" />}
                  withShimmer
                  className="shadow-lg"
                >
                  Try AI Support
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3D Cube Section */}
        <Section
          background="white"
          padding="lg"
          className="-mt-20 relative z-10 pt-24 md:pt-28" /* Added extra top padding */
          withPattern
          patternType="dots"
        >
          <SectionHeading
            title="Key Features"
            description="Advanced AI technology designed to provide personalized support"
            align="center"
            withGradient
            withDivider
            textColor="text-black"
          />

          {/* 3D Cube */}
          <div className="max-w-5xl mx-auto mb-16 mt-12"> {/* Added top margin */}
            <div className="flex flex-col items-center justify-center">
              {/* 3D Cube Container */}
              <div 
                className="perspective relative w-full max-w-md h-[300px] md:h-[400px] mx-auto"
                onMouseEnter={() => setAutoRotate(false)}
                onMouseLeave={() => setAutoRotate(true)}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Cube */}
                <motion.div 
                  ref={cubeRef}
                  className="w-full h-full relative transform-style-3d"
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`
                  }}
                  animate={{ 
                    rotateX: cubeRotation.x,
                    rotateY: cubeRotation.y
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 50,
                    damping: 20
                  }}
                >
                  {/* Cube Faces */}
                  {cubeFaces.map((face, index) => {
                    // Calculate position for each face
                    let transform = "";
                    const translateZ = isMobile ? 120 : 150;
                    
                    switch(index) {
                      case 0: // front
                        transform = `rotateY(0deg) translateZ(${translateZ}px)`;
                        break;
                      case 1: // right
                        transform = `rotateY(90deg) translateZ(${translateZ}px)`;
                        break;
                      case 2: // back
                        transform = `rotateY(180deg) translateZ(${translateZ}px)`;
                        break;
                      case 3: // left
                        transform = `rotateY(-90deg) translateZ(${translateZ}px)`;
                        break;
                      case 4: // top
                        transform = `rotateX(90deg) translateZ(${translateZ}px)`;
                        break;
                      case 5: // bottom
                        transform = `rotateX(-90deg) translateZ(${translateZ}px)`;
                        break;
                    }
                    
                    const faceSize = isMobile ? 240 : 300;
                    
                    return (
                      <motion.div
                        key={index}
                        className={`absolute backface-hidden rounded-xl bg-gradient-to-br ${face.color} shadow-xl flex flex-col items-center justify-center p-6 text-white`}
                        style={{ 
                          transform,
                          transformStyle: "preserve-3d",
                          backfaceVisibility: "hidden",
                          width: `${faceSize}px`,
                          height: `${faceSize}px`,
                          left: `calc(50% - ${faceSize/2}px)`,
                          top: `calc(50% - ${faceSize/2}px)`
                        }}
                        whileHover={{ scale: 1.05 }}
                        onHoverStart={() => {
                          if (!isMobile) {
                            setHoveredFace(index);
                            setAutoRotate(false);
                            
                            // Set rotation to show this face
                            let newRotation = { x: 0, y: 0 };
                            switch(index) {
                              case 0: // front
                                newRotation = { x: 0, y: 0 };
                                break;
                              case 1: // right
                                newRotation = { x: 0, y: -90 };
                                break;
                              case 2: // back
                                newRotation = { x: 0, y: -180 };
                                break;
                              case 3: // left
                                newRotation = { x: 0, y: 90 };
                                break;
                              case 4: // top
                                newRotation = { x: -90, y: 0 };
                                break;
                              case 5: // bottom
                                newRotation = { x: 90, y: 0 };
                                break;
                            }
                            setCubeRotation(newRotation);
                          }
                        }}
                        onHoverEnd={() => {
                          if (!isMobile) {
                            setHoveredFace(null);
                          }
                        }}
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="mb-6"
                        >
                          {face.icon}
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white text-shadow">{face.title}</h3>
                        
                        {/* Pulsing glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl"
                          animate={{ 
                            boxShadow: [
                              '0 0 0 rgba(255,255,255,0.3)', 
                              '0 0 20px rgba(255,255,255,0.5)', 
                              '0 0 0 rgba(255,255,255,0.3)'
                            ]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
              
              {/* Cube Controls */}
              <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-4">
                {cubeFaces.map((face, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                      hoveredFace === index 
                        ? 'bg-ilight-500 text-white' 
                        : 'bg-ilight-50 text-ilight-600 hover:bg-ilight-100'
                    }`}
                    onClick={() => {
                      setAutoRotate(false);
                      
                      // Set rotation to show this face
                      let newRotation = { x: 0, y: 0 };
                      switch(index) {
                        case 0: // front
                          newRotation = { x: 0, y: 0 };
                          break;
                        case 1: // right
                          newRotation = { x: 0, y: -90 };
                          break;
                        case 2: // back
                          newRotation = { x: 0, y: -180 };
                          break;
                        case 3: // left
                          newRotation = { x: 0, y: 90 };
                          break;
                        case 4: // top
                          newRotation = { x: -90, y: 0 };
                          break;
                        case 5: // bottom
                          newRotation = { x: 90, y: 0 };
                          break;
                      }
                      setCubeRotation(newRotation);
                    }}
                  >
                    {face.title}
                  </button>
                ))}
                
                <button
                  className={`px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                    autoRotate 
                      ? 'bg-ilight-500 text-white' 
                      : 'bg-ilight-50 text-ilight-600 hover:bg-ilight-100'
                  }`}
                  onClick={() => setAutoRotate(!autoRotate)}
                >
                  {autoRotate ? 'Stop Rotation' : 'Auto Rotate'}
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {keyFeaturesList.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border border-gray-100"
              >
                <div className="mb-6 text-ilight-500 flex justify-center items-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-black">{feature.title}</h3>
                <p className="text-black">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-8 p-4 bg-ilight-50 rounded-lg border border-ilight-100 shadow-calm max-w-5xl mx-auto">
            <div className="flex items-start gap-3 text-sm text-black">
              <Info className="w-5 h-5 text-ilight-600 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Coming Soon:</strong> Our advanced AI support features are currently in development and will be available in the near future. Join our beta program to be among the first to experience these innovative capabilities.
              </p>
            </div>
          </div>
        </Section>

        {/* AI Demo Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Experience Our AI</h2>
                <p className="text-lg md:text-xl text-black mb-8">
                  Try our advanced AI companion that provides personalized support
                  through natural conversation and deep emotional understanding.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Brain className="w-6 h-6" />,
                      title: "Natural Understanding",
                      description: "Contextual awareness and emotional intelligence"
                    },
                    {
                      icon: <Shield className="w-6 h-6" />,
                      title: "Safe Space",
                      description: "Private and secure environment for sharing"
                    },
                    {
                      icon: <Activity className="w-6 h-6" />,
                      title: "Adaptive Support",
                      description: "Personalized guidance based on your needs"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-ilight-50 text-ilight-500
                        flex items-center justify-center flex-shrink-0 transform
                        group-hover:scale-110 transition-transform duration-300 shadow-md">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-600">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <AIChatDemo />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <Section background="white" padding="lg">
          <div className="max-w-4xl mx-auto text-center">
            <Card
              variant="gradient"
              shadow="lg"
              padding="lg"
              className="rounded-3xl"
              withShimmer
            >
              <div className="relative z-10 text-center">
                <h2 className="text-4xl font-bold mb-6 text-white">Start Your Journey Today</h2>
                <p className="text-xl text-white/90 mb-8">Take the first step towards better personal wellness with personalized support and guidance.</p>
                <div className="mt-6 inline-block">
                  <Button
                    as={Link}
                    to="/contact"
                    variant="calm"
                    size="lg"
                    rounded="full"
                    icon={<Rocket className="w-5 h-5" />}
                    className="shadow-lg"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      </div>
    </>
  );
}