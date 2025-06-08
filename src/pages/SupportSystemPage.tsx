import { motion } from 'framer-motion';
import { 
  Heart, Shield, Users, Gift, ArrowRight, CheckCircle2, 
  Sparkles, Target, Award, Star, Globe, Rocket, Zap,
  Trophy, Medal, Crown, Flame, Play, Info, Lightbulb,
  Activity, Brain, Book
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Flex from '../components/Flex';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Card from '../components/Card';
import { 
  GlassCard, 
  ParallaxEffect, 
  TextReveal, 
  GradientText,
  AnimatedBackground
} from '../components/patterns';
import FloatingCard from '../components/FloatingCard';
import TherapySolutionsFeatures from '../components/features/therapy/TherapySolutionsFeatures';

export default function SupportSystemPage() {
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
        title="Therapy Solutions System - iLight Emotional Well-being Platform"
        description="Discover our comprehensive emotional well-being therapy solutions system combining professional care, community therapy solutions, and innovative technology."
        canonical="/how-it-works/support"
      />
      <div className="min-h-screen">
        <section 
          className="enhanced-hero"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/dadgglcaq/image/upload/v1746354919/AI_and_Mental_Health_k9z08h.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="enhanced-hero-overlay"></div>
          <div className="enhanced-hero-content">
            <div className="max-w-4xl mx-auto">
              {/* Split text animation for title */}
              <motion.div
                variants={titleContainer}
                initial="hidden"
                animate="visible"
                className="mb-8"
              >
                <h1 className="sr-only">Comprehensive Therapy Solutions</h1>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                  {["Comprehensive", "Therapy Solutions"].map((word, i) => (
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
              
              <GlassCard className="max-w-3xl mx-auto mb-12" opacity={0.2} blur="md" textShadow enhancedContrast={true}>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl text-white text-shadow leading-relaxed"
                >
                  Our integrated approach combines purpose-driven community engagement, peer therapy solutions, a personalized continuum of therapy solutions and innovative data-driven technology for holistic support and development of resilience.
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
                <Link
                  to="/contact"
                  className="enhanced-btn-secondary inline-flex items-center gap-2"
                >
                  Get Therapy Solutions <Heart className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support Pillars */}
        <section className="py-24 px-4 -mt-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Vetted Network of Therapy and Resilience Solutions",
                  description: "Expert therapy providers and therapists"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Community Therapy Solutions",
                  description: "Connect with peers who understand your journey"
                },
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "AI Technology",
                  description: "24/7 personalized therapy solutions and guidance"
                }
              ].map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="enhanced-card"
                >
                  <div className="mb-6 text-ilight-500">{pillar.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-ilight-600">{pillar.title}</h3>
                  <p className="text-ilight-600">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-4xl font-bold mb-6">How Our Therapy Solutions Work</h2>
                <p className="text-xl text-ilight-600">
                  A seamless integration of human expertise and innovative technology.
                </p>
              </motion.div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Initial Assessment",
                  description: "Complete a comprehensive assessment to understand your needs"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Personalized Plan",
                  description: "Receive a customized therapy solutions plan tailored to your goals"
                },
                {
                  icon: <Brain className="w-6 h-6" />,
                  title: "Ongoing Therapy Solutions",
                  description: "Access 24/7 AI therapy solutions and scheduled professional care"
                },
                {
                  icon: <Activity className="w-6 h-6" />,
                  title: "Progress Tracking",
                  description: "Monitor your progress and adjust therapy solutions as needed"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-ilight-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-ilight-500 
                    flex items-center justify-center flex-shrink-0 shadow-md">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-ilight-600">
                      {step.title}
                    </h3>
                    <p className="text-ilight-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Therapy Solutions Features */}
        <TherapySolutionsFeatures />

        {/* CTA Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="enhanced-cta-section p-12 rounded-3xl"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Start Your Journey Today</h2>
              <p className="text-xl text-white/90 mb-8">
                Experience our comprehensive therapy solutions system and take the first step towards 
                better personal wellness.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/contact"
                  className="enhanced-cta-button inline-flex items-center gap-2"
                >
                  Get Started <Rocket className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}