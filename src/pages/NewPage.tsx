import { motion } from 'framer-motion';
import { 
  Heart, Brain, Users, Book, Shield, ArrowRight, 
  CheckCircle2, Award, Star, Gift, Target, Building,
  Clock, MessageSquare, Calendar, Activity, Bot, Info,
  Rocket
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
  MorphingShape,
  GradientText,
  AnimatedBackground
} from '../components/patterns';
import FloatingCard from '../components/FloatingCard';

export default function NewPage() {
  return (
    <>
      <SEO 
        title="New Page - iLight Mental Health Support"
        description="This is a new page for the iLight mental health support platform."
        canonical="/new-page"
      />
      <div className="min-h-screen">
        <section className="hero-section">
          <div className="absolute inset-0">
            <motion.img 
              src="https://i.imgur.com/L2JYpgL.jpeg"
              alt="Background"
              className="hero-section-image"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Dark overlay */}
          <div className="hero-section-overlay" />
          
          <div className="hero-section-content">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-white mb-6">
                  <TranslatedContent dynamicContent={true}>New Page Title</TranslatedContent>
                </h1>
                <TranslatedContent className="text-xl text-white mb-12" dynamicContent={true}>
                  This is a description for the new page. It provides information about the content and purpose of this page.
                </TranslatedContent>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-ilight-600 px-8 py-4 
                      rounded-full text-lg font-semibold hover:bg-ilight-50 transition-colors"
                  >
                    Primary Action <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/how-it-works"
                    className="text-white hover:text-ilight-100 transition-colors 
                      inline-flex items-center gap-2"
                  >
                    Secondary Action <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <Section 
          background="white" 
          padding="lg"
          withPattern
          patternType="dots"
        >
          <SectionHeading
            title="Main Section Title"
            description="This is the main content section of the new page."
            align="center"
            withGradient
            withDivider
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Feature One",
                description: "Description of the first feature."
              },
              {
                icon: <Brain className="w-12 h-12" />,
                title: "Feature Two",
                description: "Description of the second feature."
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Feature Three",
                description: "Description of the third feature."
              }
            ].map((feature, index) => (
              <FloatingCard
                key={feature.title}
                delay={index * 0.1}
                glowEffect
                glowColor="rgba(59, 95, 138, 0.1)"
              >
                <div className="mb-6 text-ilight-500">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-ilight-700">{feature.title}</h3>
                <p className="text-ilight-600">{feature.description}</p>
              </FloatingCard>
            ))}
          </div>
        </Section>

        {/* Secondary Content */}
        <Section 
          background="light" 
          padding="lg"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Secondary Section"
                description="This is additional content for the new page."
                align="left"
                withGradient
                withDivider
              />
              
              <div className="space-y-6">
                {[
                  {
                    icon: <CheckCircle2 className="w-6 h-6" />,
                    title: "Point One",
                    description: "Description of the first point."
                  },
                  {
                    icon: <CheckCircle2 className="w-6 h-6" />,
                    title: "Point Two",
                    description: "Description of the second point."
                  },
                  {
                    icon: <CheckCircle2 className="w-6 h-6" />,
                    title: "Point Three",
                    description: "Description of the third point."
                  }
                ].map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-ilight-50 text-ilight-500 
                      flex items-center justify-center flex-shrink-0 transform 
                      group-hover:scale-110 transition-transform duration-300">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-ilight-600">
                        {point.title}
                      </h3>
                      <p className="text-ilight-400">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <ParallaxEffect
              direction="right"
              speed={0.2}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-calm">
                <img
                  src="https://i.imgur.com/ADf4Cv6.jpeg"
                  alt="Secondary content image"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </ParallaxEffect>
          </div>
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
            >
              <SectionHeading
                title="Call to Action"
                description="Take the next step with iLight mental health support."
                align="center"
                withGradient
                gradientFrom="from-white"
                gradientTo="to-white/80"
              />
              
              <Button
                as={Link}
                to="/contact"
                variant="calm"
                size="lg"
                rounded="full"
                icon={<Rocket className="w-5 h-5" />}
                className="mt-6"
              >
                Get Started
              </Button>
            </Card>
          </div>
        </Section>
      </div>
    </>
  );
}