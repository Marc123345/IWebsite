import { motion } from 'framer-motion';
import { 
  Bot, Brain, Shield, ArrowRight, CheckCircle2, 
  Sparkles, Activity, Target, MessageSquare, Heart,
  Calendar, Clock, Star, Award, ChevronRight, Settings,
  Gift, Globe, Lock, Bell, Rocket, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AIChatDemo from '../components/AIChatDemo';
import AIFeatureDemo from '../components/ai/AIFeatureDemo';
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

export default function ILightPlusPage() {
  
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

  return (
    <>
      <SEO 
        title="iLight+ - Advanced AI Personal Wellness Therapy Solutions"
        description="Experience our most advanced AI-powered personal wellness therapy solutions features. Get personalized care and continuous therapy solutions."
        canonical="/ilight-plus"
      />
      <div className="min-h-screen">
        <section 
          className="enhanced-hero"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/dadgglcaq/image/upload/v1746365703/envato-labs-ai-b498f02d-355e-4e74-bdd7-75616aee851f_lwl0hr.webp")',
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard className="inline-block mb-6" padding="sm" textShadow enhancedContrast={true}>
                  <span className="text-lg sm:text-xl font-medium text-white text-shadow">
                    Premium Features
                  </span>
                </GlassCard>
                
                {/* Split text animation for title */}
                <motion.div
                  variants={titleContainer}
                  initial="hidden"
                  animate="visible"
                  className="mb-6"
                >
                  <h1 className="sr-only">Advanced Personalized Engagement and Care Continuum Solution</h1>
                  <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                    {["Advanced", "Personalized", "Engagement", "and", "Care", "Continuum", "Solution"].map((word, i) => (
                      <motion.span
                        key={i}
                        variants={titleWord}
                        className="font-serif text-white text-shadow-lg text-3xl sm:text-4xl md:text-5xl font-bold inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                
                <GlassCard className="max-w-3xl mx-auto mb-8 sm:mb-12" opacity={0.3} blur="md" textShadow enhancedContrast={true} padding="md">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg sm:text-xl md:text-2xl text-white text-shadow-lg font-medium leading-relaxed"
                  >
                    The iLIGHT+ platform combines various elements of iLIGHT, harnessing the power of data science, machine learning, and AI to deliver personalized care with measurable outcomes.
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
                    icon={<Rocket className="w-5 h-5" />}
                    withShimmer
                    className="shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <Section 
          background="white" 
          padding="lg"
          withPattern
          patternType="dots"
          className="-mt-20 relative z-10 pt-24 md:pt-28"
        >
          <SectionHeading
            title="Premium Features"
            description="Access our most advanced personal wellness therapy solutions features powered by cutting-edge AI technology."
            align="center"
            withDivider
            textColor="text-black"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Brain className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Advanced AI Analysis",
                description: "Deep emotional pattern recognition and personalized insights"
              },
              {
                icon: <Bot className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "24/7 AI Companion",
                description: "Enhanced emotional therapy solutions and guidance anytime you need it"
              },
              {
                icon: <Activity className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Smart Monitoring",
                description: "Real-time mood tracking and behavioral pattern analysis"
              },
              {
                icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Personalized Support",
                description: "Advanced support system and personalized strategies"
              },
              {
                icon: <Target className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Goal Achievement",
                description: "AI-driven goal setting and progress optimization"
              },
              {
                icon: <Sparkles className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Premium Insights",
                description: "Advanced analytics and personalized recommendations"
              }
            ].map((feature, index) => (
              <FloatingCard
                key={feature.title}
                delay={index * 0.1}
                glowEffect
                glowColor="rgba(59, 95, 138, 0.1)"
              >
                <div className="mb-6 text-ilight-500 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-ilight-700 text-center">{feature.title}</h3>
                <p className="text-ilight-600 text-center">{feature.description}</p>
              </FloatingCard>
            ))}
          </div>
        </Section>

        {/* AI Demo Section */}
        <Section 
          background="gradient" 
          padding="lg"
          gradientFrom="from-ilight-500"
          gradientTo="to-ilight-600"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Experience Our AI</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6">
                  We are developing a unique and comprehensive platform driven by data science, machine learning and AI to provide a personalized care continuum solution.
                </p>
              </div>
              
              <div className="space-y-6 relative">
                {[
                  {
                    icon: <Brain className="w-6 h-6" />,
                    title: "Emotional Intelligence",
                    description: "Advanced understanding of emotions and context"
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Personalized Support",
                    description: "Tailored responses based on your unique needs"
                  },
                  {
                    icon: <Activity className="w-6 h-6" />,
                    title: "Continuous Support",
                    description: "Available 24/7 whenever you need help"
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
                    <GlassCard className="w-12 h-12 flex items-center justify-center flex-shrink-0" textShadow enhancedContrast={true}>
                      <div className="text-white text-shadow">
                        {feature.icon}
                      </div>
                    </GlassCard>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white text-shadow">
                        {feature.title}
                      </h3>
                      <p className="text-white/90 text-shadow">{feature.description}</p>
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
        </Section>

        {/* Advanced Features Demo */}
        <Section 
          background="white" 
          padding="lg"
          withPattern
          patternType="dots"
        >
          <SectionHeading
            title="Advanced AI Features"
            description="Experience the power of our AI-driven personal wellness therapy solutions system"
            align="center"
            withDivider
            textColor="text-black"
          />
          
          <AIFeatureDemo />
        </Section>

        {/* CTA Section */}
        <Section background="white" padding="lg">
          <div className="max-w-4xl mx-auto text-center">
            <Card
              variant="gradient"
              shadow="lg"
              padding="lg"
              className="rounded-3xl"
              withShimmer
              textAlign="center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Want to be part of the future of iLIGHT+?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Experience our most advanced personal wellness therapy solutions features and take your well-being journey to the next level.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-block"
              >
                <Button
                  as={Link}
                  to="/contact"
                  variant="calm"
                  size="lg"
                  rounded="full"
                  icon={<Zap className="w-5 h-5" />}
                  className="shadow-lg"
                >
                  Get Started
                </Button>
              </motion.div>
            </Card>
          </div>
        </Section>
      </div>
    </>
  );
}