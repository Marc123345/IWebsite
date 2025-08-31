import { motion } from 'framer-motion';
import {
  Heart, Brain, Users, LineChart, Shield, ArrowRight,
  CheckCircle2, Award, Star, Gift, Target, Building,
  Clock, MessageSquare, Calendar, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { generateWebPageSchema, generateServiceSchema } from '../utils/seoUtils';

export default function PartnersPage() {
  const { t } = useTranslation();
  
  // Generate schema for this page
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateWebPageSchema(
        "For Emotional Well-being Providers - iLight Partners",
        "Transform your therapy solution with iLight's innovative platform that enhances client engagement, streamlines administration, and improves therapy outcomes.",
        "https://ilight.health/partners"
      ),
      generateServiceSchema(
        "iLight Provider Network",
        "A comprehensive platform for emotional well-being providers that enhances client engagement, streamlines administration, and improves therapy outcomes.",
        "https://ilight.health/partners"
      )
    ]
  };
  
  return (
    <>
      <SEO
        title="For Emotional Well-being Providers - iLight Partners"
        description="Transform your therapy solution with iLight's innovative platform that enhances client engagement, streamlines administration, and improves therapy outcomes."
        canonical="/partners"
        schema={schema}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-ilight-700 via-ilight-600 to-ilight-800"></div>
          
          {/* Animated particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                opacity: Math.random() * 0.5 + 0.1
              }}
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%'
              }}
              animate={{
                x: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`
                ],
                y: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`
                ]
              }}
              transition={{
                duration: 20 + Math.random() * 30,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
          
          {/* Glowing orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
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
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
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

          {/* 3D Perspective Container */}
          <div className="container mx-auto px-4 py-32 relative z-10 perspective-1000">
            <div className="max-w-6xl mx-auto">
              {/* 3D Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="transform-style-3d"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-2xl transform-gpu">
                  {/* Floating elements inside the card */}
                  <motion.div
                    className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-blue-500/30 blur-xl"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-purple-500/30 blur-xl"
                    animate={{
                      y: [0, 20, 0],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  
                  {/* Main content with 3D effect */}
                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-center mb-8"
                    >
                      {/* 3D Text with Depth */}
                      <div className="perspective-1000 mb-6">
                        <motion.h1 
                          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                          style={{ 
                            textShadow: "0 5px 15px rgba(0,0,0,0.3)",
                            transform: "translateZ(20px)"
                          }}
                          animate={{
                            textShadow: [
                              "0 5px 15px rgba(0,0,0,0.3)",
                              "0 8px 25px rgba(0,0,0,0.5)",
                              "0 5px 15px rgba(0,0,0,0.3)"
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <span className="block transform-gpu">A Network of</span>
                          <span className="block text-white transform-gpu">
                            Therapy Providers and Solutions
                          </span>
                        </motion.h1>
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="relative"
                      >
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                          as part of a personalized, data driven Care Continuum.
                        </p>
                        
                        {/* Animated underline */}
                        <motion.div
                          className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent w-0 mx-auto"
                          animate={{ width: ["0%", "80%", "0%"] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 1
                          }}
                        />
                      </motion.div>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-2xl md:text-3xl font-bold text-white mt-8 mb-12"
                      >
                        Together delivering the{" "}
                        <motion.span
                          className="inline-block"
                          animate={{
                            color: ["#ffffff", "#a3c9ff", "#ffffff"]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          RIGHT CARE
                        </motion.span>{" "}
                        TO THE{" "}
                        <motion.span
                          className="inline-block"
                          animate={{
                            color: ["#ffffff", "#a3c9ff", "#ffffff"]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        >
                          RIGHT PERSON
                        </motion.span>{" "}
                        AT THE{" "}
                        <motion.span
                          className="inline-block"
                          animate={{
                            color: ["#ffffff", "#a3c9ff", "#ffffff"]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                          }}
                        >
                          RIGHT TIME
                        </motion.span>
                        <motion.span
                          className="inline-block text-white"
                          animate={{
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 3
                          }}
                        >
                          .
                        </motion.span>
                      </motion.p>
                    </motion.div>
                    
                    {/* 3D Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="flex justify-center"
                    >
                      <div className="perspective-1000">
                        <motion.div
                          className="transform-style-3d"
                          whileHover={{ 
                            scale: 1.05,
                            rotateX: 5,
                            rotateY: 5,
                            z: 20
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to="/partners/join"
                            className="inline-flex items-center gap-3 bg-white text-ilight-600 px-8 py-4
                              rounded-full text-lg font-semibold shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.4)] 
                              transition-all duration-300 transform-gpu relative overflow-hidden group"
                            aria-label="Join our network of therapy providers"
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                            />
                            
                            <span className="relative z-10">Join Our Network</span>
                            <Heart className="w-5 h-5 relative z-10" />
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating 3D Icons */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { icon: <Heart />, x: "10%", y: "20%", size: 40, delay: 0 },
                  { icon: <Brain />, x: "85%", y: "15%", size: 48, delay: 0.5 },
                  { icon: <Shield />, x: "15%", y: "85%", size: 44, delay: 1 },
                  { icon: <Target />, x: "80%", y: "80%", size: 36, delay: 1.5 },
                  { icon: <Users />, x: "50%", y: "10%", size: 52, delay: 2 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-white/20"
                    style={{
                      left: item.x,
                      top: item.y,
                      width: item.size,
                      height: item.size
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="flex flex-col items-center">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-center justify-center mb-2">
                <motion.div
                  className="w-1.5 h-1.5 bg-white rounded-full"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </div>
              <span className="text-xs font-light">Scroll</span>
            </div>
          </motion.div>
        </section>

        {/* Common Challenges & iLight Solutions Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-lg border border-gray-200"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Common Provider Challenges</h2>
                <div className="space-y-6">
                  {[
                    { title: "Client Retention", description: "Difficulty maintaining consistent client engagement between sessions.", icon: <Users className="text-red-500" /> },
                    { title: "Progress Tracking", description: "Limited visibility into client progress and treatment effectiveness.", icon: <LineChart className="text-red-500" /> },
                    { title: "Administrative Burden", description: "Too much time spent on paperwork instead of client care.", icon: <Clock className="text-red-500" /> },
                    { title: "Client Communication", description: "Inefficient communication channels and response management.", icon: <MessageSquare className="text-red-500" /> }
                  ].map((challenge) => (
                    <div key={challenge.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 p-1.5 bg-red-100 rounded-full flex items-center justify-center">
                        {challenge.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-1">{challenge.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{challenge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-green-50 rounded-xl p-6 md:p-8 shadow-lg border border-green-200/50"
              >
                <h2 className="text-3xl font-bold mb-6 text-green-800">iLight Solutions</h2>
                <div className="space-y-6">
                  {[
                    { title: "AI-Enhanced Engagement", description: "24/7 therapy solutions keeps clients engaged and on track between sessions.", icon: <Brain className="text-green-600" /> },
                    { title: "Data-Driven Insights", description: "Real-time analytics and progress tracking for better outcomes.", icon: <Activity className="text-green-600" /> },
                    { title: "Automated Administration", description: "Streamlined workflows that reduce paperwork and save time.", icon: <CheckCircle2 className="text-green-600" /> },
                    { title: "Integrated Communication", description: "Secure, efficient client communication and therapy solutions tools.", icon: <Shield className="text-green-600" /> }
                  ].map((solution) => (
                    <div key={solution.title} className="flex items-start gap-4">
                       <div className="flex-shrink-0 w-8 h-8 p-1.5 bg-green-100 rounded-full flex items-center justify-center">
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-1">{solution.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platform Features - Comprehensive Tools */}
        <section className="py-16 md:py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Comprehensive Tools for Your Practice</h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Everything you need to enhance your practice, improve client outcomes, and grow your impact.
                </p>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: <Brain className="w-10 h-10 text-ilight-500" />, title: "AI-Powered Insights", description: "Advanced analytics and pattern recognition to enhance therapy outcomes." },
                { icon: <Activity className="w-10 h-10 text-ilight-500" />, title: "Progress Tracking", description: "Comprehensive monitoring and outcome measurement tools." },
                { icon: <Calendar className="w-10 h-10 text-ilight-500" />, title: "Smart Scheduling", description: "Automated appointment management and reminders." },
                { icon: <MessageSquare className="w-10 h-10 text-ilight-500" />, title: "Secure Communication", description: "HIPAA-compliant messaging and file sharing." },
                { icon: <Shield className="w-10 h-10 text-ilight-500" />, title: "Practice Management", description: "Streamlined administrative tools and workflows." },
                { icon: <Users className="w-10 h-10 text-ilight-500" />, title: "Client Portal", description: "Self-service tools and resources for clients." }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center"
                >
                  <div className="mb-5 p-3 bg-ilight-100 rounded-full inline-block">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-700">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-ilight-500 to-ilight-600 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Practice Today</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Join our network and experience the future of emotional well-being care delivery.
              </p>
              <Link
                to="/partners/join"
                className="inline-flex items-center gap-3 bg-white text-ilight-600 px-8 py-3
                  rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ilight-500"
                aria-label="Join our network of therapy providers"
              >
                Join Our Network <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}