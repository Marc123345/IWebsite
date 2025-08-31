import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart, Brain, Users, Gift, ArrowRight, CheckCircle2,
  Target, Award, Star, Globe, Rocket, Zap, Flame, HandHeart,
  UserCheck, Gem, ShoppingBag, Focus, HeartHandshake,
  DollarSign, MessageSquare, Calendar, Clock, Sparkles,
  Lightbulb, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import {
  GlassCard,
  ParallaxEffect,
  TextReveal,
  AnimatedBackground
} from '../components/patterns';
import FloatingCard from '../components/FloatingCard';
import TranslatedContent from '../components/TranslatedContent';

export default function IlluminationPage() {
  const [selectedInitiative, setSelectedInitiative] = useState<string | null>(null);
  const [showIlluminationForm, setShowIlluminationForm] = useState<boolean>(false);

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
        title="Contribute & Illuminate - iLight"
        description="Support our mission through donations, or share your story of illumination. Join us in lighting up lives."
        canonical="/illumination"
      />
      <div className="min-h-screen">
        <section
          className="min-h-[80vh] relative overflow-hidden flex items-center pt-20"
          style={{
            backgroundColor: '#3B5F8A' // iLight dark blue
          }}
        >
          <AnimatedBackground
            variant="gradient"
            intensity="medium"
            primaryColor="rgba(0, 0, 0, 0.6)"
            secondaryColor="rgba(0, 0, 0, 0.4)"
          />

          <Container className="relative z-10 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                variants={titleContainer}
                initial="hidden"
                animate="visible"
                className="mb-8"
              >
                <h1 className="sr-only">Contribute & Illuminate - Support Our Mission</h1>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                  {["Contribute", "&", "Illuminate"].map((word, i) => (
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
                  className="text-xl md:text-2xl text-white text-shadow font-medium leading-relaxed"
                >
                  <TranslatedContent dynamicContent={true}>
                    Join us in lighting up lives through purpose-driven community engagement, direct support, and sharing acts of kindness.
                  </TranslatedContent>
                </motion.p>
              </GlassCard>
            </div>
          </Container>
        </section>

        {/* General Donation Card */}
        <Section
          background="white"
          padding="lg"
          className="-mt-20 relative z-10"
          withPattern
          patternType="dots"
        >
          <SectionHeading
            title="Support Our Mission"
            description="Your contribution helps us make a difference"
            align="center"
            withDivider
            textColor="text-black"
          />

          <div className="max-w-4xl mx-auto">
            <FloatingCard
              glowEffect
              glowColor="rgba(59, 95, 138, 0.1)"
              className="p-8"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-ilight-50 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-ilight-500" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-ilight-700">Make a Contribution</h3>
                  <p className="text-ilight-700 mb-6 leading-relaxed">
                    Join us in lighting up lives through direct donations to network therapy providers, supporting campaigns dedicated to benefiting our community members and supporting purpose-driven community engagement and care and resilience continuum solutions.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                      <span className="text-ilight-700">Support development of innovative therapy solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                      <span className="text-ilight-700">Help make emotional well-being support accessible</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                      <span className="text-ilight-700">Contribute to community building initiatives</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => setSelectedInitiative('general_donation_flow')}
                    variant="gradient"
                    size="lg"
                    icon={<Heart className="w-5 h-5" />}
                    withShimmer
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            </FloatingCard>
          </div>
        </Section>

        {/* Donation Options Placeholder Section */}
        {selectedInitiative === 'general_donation_flow' && (
          <Section
            background="light"
            padding="lg"
          >
            <SectionHeading
              title="Choose Your Way to Contribute"
              description="This section is currently under development. Soon you'll be able to donate to specific iLight causes or directly to our network therapy providers."
              align="center"
              withDivider
              textColor="text-black"
            />
            <Container className="text-center">
              <Card variant="default" shadow="lg" padding="lg" className="max-w-2xl mx-auto">
                <div className="flex flex-col items-center gap-4">
                  <Info className="w-12 h-12 text-ilight-500" />
                  <p className="text-ilight-700">
                    Thank you for your interest in supporting iLight! Full donation options, including supporting specific iLight initiatives and our trusted network therapy providers, are coming soon. Functionality is currently TBD.
                  </p>
                  <Button onClick={() => setSelectedInitiative(null)} variant="outline">
                    Close
                  </Button>
                </div>
              </Card>
            </Container>
          </Section>
        )}

        {/* Share Your Act of Illumination */}
        <Section
          background="white"
          padding="lg"
          withPattern
          patternType="dots"
        >
          <SectionHeading
            title="Share Your Act of Illumination"
            description="Help us build a tapestry of kindness. Share a story of how you, or someone you know, illuminated a life through a random act of connection or kindness."
            align="center"
            withDivider
            textColor="text-black"
          />
          <Container className="text-center">
            <Card variant="default" shadow="lg" padding="lg" className="max-w-2xl mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <Lightbulb className="w-12 h-12 text-amber-500"/>
                    <p className="text-ilight-700 mb-4">
                        This feature is coming soon! We're creating a space for our community to share and celebrate acts of illumination. Stay tuned to submit your story.
                    </p>
                    {/* Placeholder for future form or link */}
                    <Button
                        variant="gradient"
                        size="lg"
                        icon={<MessageSquare className="w-5 h-5"/>}
                        disabled // Disabled until feature is ready
                    >
                        Share Your Story (Coming Soon)
                    </Button>
                </div>
            </Card>
          </Container>
        </Section>

        {/* Your Impact Section */}
        <Section
          background="white"
          padding="lg"
          withPattern
          patternType="dots"
        >
          <SectionHeading
            title="Your Impact"
            description="How your contribution makes a difference"
            align="center"
            withDivider
            textColor="text-black"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Direct Therapy Solutions",
                description: "Your contribution directly supports individuals in need through our network of partners and initiatives."
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Community Building",
                description: "Help us create and strengthen supportive communities where people can connect and grow together."
              },
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: "Innovation",
                description: "Fund the development of new approaches and technologies to improve emotional well-being."
              }
            ].map((impact, index) => (
              <ParallaxEffect
                key={impact.title}
                direction="up"
                speed={0.3}
              >
                <Card
                  variant="default"
                  shadow="lg"
                  className="h-full p-6 text-center"
                >
                  <div className="mb-6 text-ilight-500 flex justify-center">{impact.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-black">{impact.title}</h3>
                  <p className="text-black leading-relaxed">{impact.description}</p>
                </Card>
              </ParallaxEffect>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient" padding="lg" gradientFrom="from-ilight-500" gradientTo="to-ilight-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Join Us in Lighting Up Lives</h2>
            <p className="text-xl text-white/90 mb-8">
              Together, we can create a world where everyone has access to the therapy solutions they need.
            </p>
            <p className="text-xl text-white/90 mb-8">
              HELP US, HELP YOU, HELP OTHERS and be part of the PRICELESS PURPOSE of enriching lives together through delivering the RIGHT CARE TO THE RIGHT PERSON AT THE RIGHT TIME.
            </p>

            <Button
              as={Link}
              to="/contact"
              variant="calm"
              size="lg"
              rounded="full"
              icon={<HandHeart className="w-5 h-5" />}
              className="mt-6"
            >
              Get Involved Today
            </Button>
          </div>
        </Section>
      </div>
    </>
  );
}