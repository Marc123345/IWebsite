import { motion } from 'framer-motion';
import {
  Heart, Brain, Users, Book, Shield, ArrowRight,
  CheckCircle2, Award, Star, Gift, Target, Building,
  Clock, MessageSquare, Calendar, Activity, Bot, Info,
  Rocket
  // LineChart is not used in this file's JSX, but kept in imports if needed elsewhere.
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AIChatDemo from '../components/AIChatDemo';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button'; // Not directly used in JSX, but SectionHeading/Card might use it
import Card from '../components/Card';
import {
  GlassCard,
  ParallaxEffect, // Used for AI Demo Section
  TextReveal,     // Not directly used in JSX
  MorphingShape,  // Not directly used
  GradientText,   // Not directly used
  AnimatedBackground // Not directly used
} from '../components/patterns';
import FloatingCard from '../components/FloatingCard'; // Not directly used
import { generateWebPageSchema, generateServiceSchema } from '../utils/seoUtils';

export default function ServicesPage() {
  const serviceComponents = [
    {
      title: "AI Personal Wellness Therapy Solutions",
      // UPDATED Description (Source 7 consistency)
      description: "Our premium platform aims to harness the power of data science, machine learning, and AI to deliver a personalized care support and continuum experience.",
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      link: "/how-it-works/ai", // Updated link to correct path
      isReversed: false
    },
    {
      title: "Professional Therapy",
      description: "Connect with licensed professionals who specialize in trauma, PTSD, and various personal wellness challenges.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      link: "/mylight", // Links to MyLight page which represents personal journey / care continuum
      isReversed: true
    },
    {
      title: "Community Therapy Solutions",
      description: "Join our supportive community where you can connect with others who understand your journey and share experiences.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      link: "/community",
      isReversed: false
    }
  ];

  const coreServicesList = [
    {
      icon: <Bot className="w-12 h-12" />,
      // UPDATED Title (related to Source 21)
      title: "iLight+ (Advanced AI Solution)",
      // UPDATED Description (Source 7 consistency)
      description: "Our premium platform aims to harness the power of data science, machine learning, and AI to deliver a personalized care support and continuum experience.",
      link: "/ilight-plus",
      features: [
        "Personalized support",
        "Progress tracking",
        "Continuous availability"
      ]
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Professional Care",
      description: "Connect with licensed professionals who specialize in trauma-informed care and evidence-based therapeutic approaches.",
      link: "/mylight",
      features: [
        "Expert therapists",
        "Personalized treatment",
        "Secure sessions",
        "Progress monitoring"
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community Therapy Solutions",
      description: "Join a compassionate community where shared experiences foster understanding, growth, and mutual therapy solutions on your wellness journey.",
      link: "/community",
      features: [
        "Therapy solutions groups",
        "Peer connections",
        "Shared experiences",
        "Resource sharing"
      ]
    }
  ];

  const comprehensiveFeaturesList = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Professional Therapy",
      description: "Sessions with licensed professionals who specialize in your specific needs"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Book sessions at times that work for your lifestyle and preferences"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Therapy Solutions",
      description: "24/7 emotional support and guidance powered by advanced technology"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Setting",
      description: "Create personalized wellness goals and track your progress over time"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Therapy Solutions",
      description: "Connect with others who understand your experiences in a safe environment"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Progress Tracking",
      description: "Visualize your growth and celebrate milestones on your wellness journey"
    },
    {
      icon: <Gift className="w-8 h-8" />, // Changed from Book to Gift for "Resources"
      title: "Resources",
      description: "Access a comprehensive library of tools, guides, and educational materials"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Personalization",
      description: "Every aspect of your experience is tailored to your unique needs and preferences"
    }
    // REMOVED duplicate "Professional Therapy" item
  ];

  // Generate schema for this page
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateWebPageSchema(
        "Personal Wellness Therapy Solutions - iLight",
        "Explore our comprehensive personal wellness therapy solutions services including AI assistance, professional therapy, and community therapy solutions.",
        "https://ilight.health/services"
      ),
      generateServiceSchema(
        "iLight Personal Wellness Services",
        "Comprehensive personal wellness therapy solutions including AI technology, professional care, and community support.",
        "https://ilight.health/services"
      )
    ]
  };

  return (
    <>
      <SEO
        title="Personal Wellness Therapy Solutions - iLight"
        description="Explore our comprehensive personal wellness therapy solutions services including AI assistance, professional therapy, and community therapy solutions."
        canonical="/services"
        schema={schema}
      />
      <div className="min-h-screen">
        <section
          className="min-h-[80vh] md:min-h-[70vh] lg:min-h-[60vh] relative overflow-hidden flex items-center justify-center text-center pt-20 pb-10 md:pb-20" // Adjusted min-height for better content fit
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50 z-[1]" /> {/* Slightly adjusted overlay */}

          <div className="container mx-auto px-4 relative z-[2] py-12 md:py-24"> {/* Added padding to container */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-md leading-tight">
                  Comprehensive Personal Wellness Therapy Solutions
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto">
                  Experience personalized care through our innovative blend of AI technology,
                  professional expertise, and community connection. Our holistic approach meets you
                  where you are on your wellness journey.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-ilight-600 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ilight-500"
                    aria-label="Get started with iLight services"
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/how-it-works/ai"
                    className="text-white hover:text-gray-200 transition-colors
                      inline-flex items-center gap-2 text-lg py-3 px-6 rounded-full hover:bg-white/10"
                    aria-label="Learn more about how iLight works"
                  >
                    Learn More <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Components Section */}
        <Section
          background="white"
          padding="lg"
          className="-mt-16 md:-mt-20 relative z-10" // Adjusted negative margin
          withPattern
          patternType="dots"
        >
          <div className="mx-auto max-w-7xl relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{duration: 0.5}}
              >
                <div className="mb-12 text-center mx-auto">
                  <h2 className="font-bold mb-4 text-3xl md:text-4xl text-gray-800">Our Service Offerings</h2>
                  <div className="h-1 bg-gradient-to-r from-ilight-500 to-ilight-600 rounded-full w-20 mb-6 mx-auto"></div>
                  <p className="text-gray-600 max-w-3xl text-lg md:text-xl mx-auto leading-relaxed">
                    Explore our comprehensive personal wellness services designed to support you at every step of your journey,
                    providing the right care at the right time.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="max-w-6xl mx-auto">
              {serviceComponents.map((service, index) => (
                <div className="mb-16 md:mb-32" key={service.title}> {/* Adjusted margin */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="relative transition duration-700 shadow-2xl rounded-2xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="min-h-[300px] lg:min-h-[450px] xl:max-h-[500px] object-cover h-full w-full" // Adjusted min-height
                      />
                    </div>

                    <div className={`relative z-[1] -mt-[100px] md:-mt-[118px] ${service.isReversed ? 'mr-auto ml-4 md:ml-5 rounded-tr-[30px] md:rounded-tr-[40px] pr-4 md:pr-5' : 'ml-auto mr-4 md:mr-5 rounded-tl-[30px] md:rounded-tl-[40px] pl-4 md:pl-5'} md:w-[70%] bg-white lg:w-3/5 shadow-xl`}>
                      <div className={`${service.isReversed ? 'rounded-tr-xl md:rounded-tr-2xl' : 'rounded-tl-xl md:rounded-tl-2xl'} py-4 md:py-6 px-4 md:px-6`}> {/* Adjusted padding and rounding */}
                        <h3 className="pb-2 font-serif text-2xl md:text-[32px] font-light leading-tight md:leading-[48px] text-ilight-600 md:pb-4 xl:text-4xl">{service.title}</h3>
                        <div className="text-sm md:text-base font-light lg:text-lg xl:leading-[32px]">
                          <p className="text-gray-700 leading-relaxed">{service.description}</p>
                        </div>
                        <div className="flex gap-5 pt-4 md:pt-6">
                          <Link
                            to={service.link}
                            className="px-5 py-2 md:py-[10px] text-sm md:text-base flex justify-center items-center group space-x-2 md:space-x-3 rounded-full transition duration-300 ease-in-out transform border border-ilight-500 text-white bg-ilight-500 hover:bg-transparent hover:text-ilight-600"
                            aria-label={`Learn more about ${service.title}`}
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 ml-1 md:ml-2 transform group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Core Services */}
        <Section
          background="light"
          padding="lg"
        >
          <div className="max-w-6xl mx-auto">
            <SectionHeading
                title="Our Core Pillars of Support"
                description="Integrated solutions for your holistic well-being."
                align="center"
                withGradient
                withDivider
                textColor="text-black"
                className="mb-12"
            />
            <div className="grid md:grid-cols-3 gap-8">
              {coreServicesList.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-xl border border-gray-200 flex flex-col h-full hover:border-ilight-300 transition-all"
                >
                  <div className="mb-5 text-ilight-500 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center text-ilight-700">{service.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm text-center flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-5 text-sm">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto text-center">
                    <Link
                      to={service.link}
                      className="text-ilight-500 hover:text-ilight-700 font-semibold inline-flex items-center gap-2 group"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* AI Support Demo */}
        <Section
          background="gradient"
          padding="lg"
          gradientFrom="from-ilight-500"
          gradientTo="to-ilight-600"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-shadow-lg">Experience Our AI Support</h2>
                <p className="text-lg md:text-xl text-white/90 text-shadow mb-6 leading-relaxed">
                  We are developing a unique and comprehensive platform driven by data science, machine learning and AI to provide a personalized care continuum solution.
                </p>
              </div>

              <div className="space-y-6 relative">
                {[
                  { icon: <Brain className="w-6 h-6" />, title: "Emotional Intelligence", description: "Advanced understanding of emotions and context" },
                  // UPDATED "Personalized Therapy Solutions" to "Personalized Support"
                  { icon: <Shield className="w-6 h-6" />, title: "Personalized Support", description: "Tailored responses based on your unique needs" },
                  // UPDATED "Continuous Therapy Solutions" to "Continuous Support"
                  { icon: <Activity className="w-6 h-6" />, title: "Continuous Support", description: "Available 24/7 whenever you need help" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <GlassCard className="w-12 h-12 flex items-center justify-center flex-shrink-0 p-2" opacity={0.15} blur="sm">
                      <div className="text-white text-shadow">
                        {feature.icon}
                      </div>
                    </GlassCard>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-white text-shadow">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 text-shadow text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <AIChatDemo />
            </motion.div>
          </div>
        </Section>

        {/* Comprehensive Therapy Solutions Features */}
        <Section
          background="white"
          padding="lg"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{duration: 0.5}}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Platform Features</h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Our integrated platform provides all the tools and resources you need for your personal wellness journey,
                  seamlessly connecting professional care, technology, and community support.
                </p>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {comprehensiveFeaturesList.map((feature, index) => (
                <motion.div
                  key={index} // Using index as key if titles can repeat, ensure titles are unique if possible
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card
                    variant="default"
                    shadow="lg"
                    className="h-full text-center p-6 flex flex-col items-center hover:shadow-xl transition-shadow border border-gray-100"
                  >
                    <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-ilight-50
                      text-ilight-600 flex items-center justify-center shadow-sm group-hover:shadow-md
                      transition-all duration-300 relative">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-ilight-700">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm flex-grow">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
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
              textAlign="center"
            >
              <SectionHeading
                title="Start Your Journey Today"
                description="Take the first step towards better personal wellness with our comprehensive therapy solutions system. You don't have to walk this path alone."
                align="center"
                withGradient
                gradientFrom="from-white"
                gradientTo="to-white/80"
                textColor="text-white"
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