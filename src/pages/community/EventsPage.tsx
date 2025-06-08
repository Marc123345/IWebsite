import { motion } from 'framer-motion';
import { 
  Users, Heart, MessageSquare, Calendar, Shield, 
  ArrowRight, CheckCircle2, Globe, Award, Star, Play,
  MapPin, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import Flex from '../../components/Flex';
import SectionHeading from '../../components/SectionHeading';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { 
  GlassCard, 
  ParallaxEffect, 
  TextReveal, 
  GradientText,
  AnimatedBackground
} from '../../components/patterns';
import FloatingCard from '../../components/FloatingCard';
import { generateWebPageSchema, generateServiceSchema } from '../../utils/seoUtils';

export default function EventsPage() {
  // Generate schema for this page
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateWebPageSchema(
        "Community Events - iLight Emotional Well-being Therapy Solutions",
        "Join our community events, workshops, and therapy solutions group meetings. Connect with others and learn valuable emotional well-being skills.",
        "https://ilight.health/community/events"
      ),
      generateServiceSchema(
        "iLight Community Events",
        "Interactive events and workshops focused on emotional well-being and personal development in a supportive environment.",
        "https://ilight.health/community/events"
      )
    ]
  };

  return (
    <>
      <SEO 
        title="Community Events - iLight Emotional Well-being Therapy Solutions"
        description="Join our community events, workshops, and therapy solutions group meetings. Connect with others and learn valuable emotional well-being skills."
        canonical="/community/events"
        schema={schema}
      />
      <div className="min-h-screen">
        <section 
          className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <TextReveal
                  direction="up"
                  staggerChildren={0.05}
                  className="text-white mb-6 text-5xl md:text-6xl font-bold font-serif"
                >
                  Community Events
                </TextReveal>
                
                <GlassCard className="max-w-3xl mx-auto mb-12" opacity={0.15} blur="md" textShadow>
                  <p className="text-xl text-white leading-relaxed">
                    Join our interactive events and workshops to connect, learn, and grow together in a supportive environment focused on emotional well-being and personal development.
                  </p>
                </GlassCard>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                  {[
                    { icon: <Calendar className="w-5 h-5 text-white" />, text: "Regular Workshops" },
                    { icon: <Users className="w-5 h-5 text-white" />, text: "Group Sessions" },
                    { icon: <Globe className="w-5 h-5 text-white" />, text: "Virtual & In-Person" }
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + idx * 0.2 }}
                      className="flex flex-col items-center gap-2 bg-white/30 backdrop-blur-lg p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                    >
                      <div className="text-white">{feature.icon}</div>
                      <span className="text-white font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How to Participate */}
        <Section 
          background="white" 
          padding="lg"
          withPattern
          patternType="dots"
        >
          <SectionHeading
            title="How to Participate"
            description="Join our community events in just a few simple steps"
            align="center"
            withGradient
            withDivider
            textColor="text-black"
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: "Browse Event Categories",
                  description: "Explore our different event types to find what interests you most"
                },
                {
                  title: "Register for Events",
                  description: "Sign up for specific events that match your schedule and interests"
                },
                {
                  title: "Prepare for Participation",
                  description: "Review any pre-event materials and set up your space for engagement"
                },
                {
                  title: "Join and Connect",
                  description: "Attend the event and actively participate in discussions and activities"
                }
              ].map((step, index) => (
                <ParallaxEffect
                  key={step.title}
                  direction="up"
                  speed={0.3}
                >
                  <Card
                    variant={index % 2 === 0 ? 'default' : 'glass'}
                    shadow="lg"
                    className={index % 2 === 0 ? '' : 'bg-ilight-50/50'}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-ilight-500 text-white 
                        text-xs flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-ilight-700">
                          {step.title}
                        </h3>
                        <p className="text-ilight-700 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </ParallaxEffect>
              ))}
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
            <div className="bg-gradient-to-br from-ilight-500 to-ilight-600 rounded-3xl p-12 shadow-xl text-center">
              <h2 className="text-4xl font-bold text-white mb-6 text-shadow-lg">Ready to Make a Difference?</h2>
              <p className="text-xl text-white mb-8 text-shadow">
                Take the first step towards healing by connecting with others who understand. 
                Together, we create a community of therapy solutions, growth, and shared resilience.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/community"
                  className="inline-flex items-center gap-2 bg-white text-ilight-600 px-8 py-4 
                    rounded-full text-lg font-semibold hover:bg-ilight-50 transition-colors shadow-lg"
                >
                  Get Started <Heart className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}