import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Shield, Users, Eye, MessageSquare, 
  CheckCircle2, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Card from '../components/Card';
import { 
  GlassCard, 
  ParallaxEffect, 
  TextReveal, 
  AnimatedBackground
} from '../components/patterns';
import PromiseTabs from '../components/PromiseTabs';

export default function PromisePage() {
  return (
    <>
      <SEO 
        title="The iLight Promise - Our Commitment to You"
        description="Learn about our commitment to providing a safe, supportive, and effective platform for your personal wellness journey."
        canonical="/promise"
      />
      <div className="min-h-screen">
        <section 
          className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-12"
          style={{
            backgroundColor: '#3B5F8A' // Blue background instead of image
          }}
        >
          {/* Animated background */}
          <AnimatedBackground
            variant="gradient"
            intensity="medium"
            primaryColor="rgba(40, 65, 95, 0.8)"
            secondaryColor="rgba(30, 50, 80, 0.8)"
            className="z-[1]"
          />
          
          {/* Floating particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full bg-white/20"
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
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <TextReveal
                  direction="up"
                  className="text-white mb-8 text-5xl md:text-6xl font-bold font-serif"
                  enhancedContrast={true}
                >
                  The iLight Promise
                </TextReveal>
                
                <GlassCard 
                  className="max-w-3xl mx-auto mb-12" 
                  opacity={0.3} 
                  blur="md" 
                  textShadow 
                  enhancedContrast={true}
                  padding="md"
                >
                  <TranslatedContent className="text-xl text-white leading-relaxed text-shadow-lg" dynamicContent={true}>
                    Our commitment to providing a safe, supportive, and effective platform for your personal wellness journey.
                  </TranslatedContent>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Promise Tabs */}
        <Section 
          background="white" 
          padding="lg"
          className="-mt-10 relative z-10 pt-16 md:pt-20" // Increased top padding
          withPattern
          patternType="dots"
        >
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              title="Our Promises to You"
              description="These are the core principles that guide everything we do"
              align="center"
              withDivider
              textColor="text-black"
              className="mb-10" // Added margin bottom
            />
            
            <div className="mt-8">
              <PromiseTabs className="shadow-xl" />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section 
          background="gradient" 
          padding="lg"
          gradientFrom="from-ilight-500"
          gradientTo="to-ilight-600"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-shadow-lg">Experience Our Promise in Action</h2>
            <p className="text-xl text-white/90 mb-8 text-shadow">
              Join our community today and see how we're transforming personal wellness support.
            </p>
            
            <Button
              as={Link}
              to="/contact"
              variant="calm"
              size="lg"
              rounded="full"
              icon={<ArrowRight className="w-5 h-5" />}
              className="shadow-lg"
            >
              Get Started
            </Button>
          </div>
        </Section>
      </div>
    </>
  );
}