import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Users, Brain, Book, Heart, Activity, Target, MessageSquare,
  ChevronRight, ChevronDown, Info, CheckCircle2, Sparkles, Plus, Minus
} from 'lucide-react';

export default function TherapySolutionsFeatures() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  // Feature categories data with more detailed information
  const features = [
    {
      id: "vetted-network",
      title: "Vetted Network of Therapy and Resilience Solutions",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-blue-500",
      description: "Our carefully selected network of licensed professionals provides expert care tailored to your specific needs.",
      details: [
        "Licensed therapists with specialized expertise",
        "Rigorous vetting process for all providers",
        "Ongoing quality monitoring",
        "Seamless referral process",
        "Personalized matching to your needs"
      ]
    },
    {
      id: "community",
      title: "Community Features",
      icon: <Users className="w-6 h-6" />,
      color: "bg-green-500",
      description: "Connect with others who understand your journey in a supportive and safe environment.",
      details: [
        "Moderated support groups",
        "Peer connection opportunities",
        "Shared experiences and insights",
        "Anonymous participation options",
        "Guided community discussions"
      ]
    },
    {
      id: "ai-technology",
      title: "AI Technology",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-500",
      description: "Our advanced AI provides personalized support and guidance whenever you need it.",
      details: [
        "24/7 emotional support",
        "Pattern recognition for personalized insights",
        "Adaptive learning from your interactions",
        "Privacy-focused design",
        "Seamless integration with human care"
      ]
    },
    {
      id: "resources",
      title: "Additional Resources",
      icon: <Book className="w-6 h-6" />,
      color: "bg-amber-500",
      description: "Access a comprehensive library of tools and resources to support your wellness journey.",
      details: [
        "Educational materials on various topics",
        "Self-help tools and exercises",
        "Guided meditation and mindfulness practices",
        "Crisis resources and hotlines",
        "Family support materials"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Therapy Solutions Features</h2>
          <div className="h-1 bg-ilight-500 rounded-full w-20 mb-6 mx-auto"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">Comprehensive tools and resources for your personal wellness journey.</p>
        </div>

        {/* Desktop View - Interactive Feature Cards */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8 mb-12">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg border border-gray-100 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                {/* Card Header */}
                <div 
                  className={`${feature.color} text-white p-6 cursor-pointer`}
                  onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${activeFeature === feature.id ? 'rotate-90' : ''}`} />
                  </div>
                </div>
                
                {/* Card Content */}
                <AnimatePresence>
                  {activeFeature === feature.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white">
                        <p className="text-gray-700 mb-4">{feature.description}</p>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {feature.details.map((detail, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${feature.id === 'vetted-network' ? 'text-blue-500' : 
                                feature.id === 'community' ? 'text-green-500' : 
                                feature.id === 'ai-technology' ? 'text-purple-500' : 
                                'text-amber-500'}`} />
                              <span className="text-gray-600">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View - Accordion Style */}
        <div className="md:hidden space-y-4">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full p-4 flex items-center justify-between text-left"
                onClick={() => setExpandedMobile(expandedMobile === feature.id ? null : feature.id)}
                aria-expanded={expandedMobile === feature.id}
                aria-controls={`content-${feature.id}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${feature.color} text-white flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <div className="bg-gray-100 rounded-full p-1">
                  {expandedMobile === feature.id ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {expandedMobile === feature.id && (
                  <motion.div
                    id={`content-${feature.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 mb-4">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.details.map((detail, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${feature.id === 'vetted-network' ? 'text-blue-500' : 
                              feature.id === 'community' ? 'text-green-500' : 
                              feature.id === 'ai-technology' ? 'text-purple-500' : 
                              'text-amber-500'}`} />
                            <span className="text-gray-600">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Development Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-4 bg-amber-50 rounded-lg border border-amber-200 shadow-sm flex items-start gap-3"
        >
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <strong>Important Notice:</strong> Some features shown here, including certain AI technology and gamification elements, are currently in development and will be rolled out progressively. We are continuously working to enhance and expand our platform's capabilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}