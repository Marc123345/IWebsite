import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Heart, MessageSquare, Calendar, Shield,
  ArrowRight, CheckCircle2, Globe, Award, Star, Play,
  MapPin, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'; // Note: Hero component is imported but not used directly.
import SEO from '../components/SEO';
import CommunityFlow from '../components/community/CommunityFlow';
import CommunityConnectionMap from '../components/community/CommunityConnectionMap';
import Section from '../components/Section';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Flex from '../components/Flex';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import FloatingCard from '../components/FloatingCard'; // Note: FloatingCard is imported but not used directly.
import {
  GlassCard,
  ParallaxEffect, // Note: ParallaxEffect is imported but not used directly.
  TextReveal,
  MorphingShape, // Note: MorphingShape is imported but not used directly.
  AnimatedBackground
} from '../components/patterns';
import { generateWebPageSchema, generateServiceSchema } from '../utils/seoUtils';

export default function CommunityPage() {
  
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

  const communityFeatures = [
    {
      title: "Therapy Solutions Groups",
      description: "Connect with others in guided therapy solutions groups led by experienced facilitators who understand your journey.",
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1747217489/envato-labs-ai-1bb87a67-3a65-4287-b306-9ff7276e4410_ifvizh.jpg",
      link: "/community/events",
      isReversed: false
    },
    {
      title: "Community Events",
      description: "Participate in workshops, webinars, and social activities designed to foster connection and growth.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      link: "/community/events",
      isReversed: true
    }
  ];

  // Generate schema for this page
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateWebPageSchema(
        "iLight Community - Connect, Share, and Grow Together",
        "Join our supportive community to normalize wellness discussions, access expert guidance, and connect with others who understand your journey.",
        "https://ilight.health/community"
      ),
      generateServiceSchema(
        "iLight Community Support",
        "A supportive community where wellness discussions are normalized and valued, offering connection, understanding, and growth opportunities.",
        "https://ilight.health/community"
      )
    ]
  };

  return (
    <>
      <SEO
        title="iLight Community - Connect, Share, and Grow Together"
        description="Join our supportive community to normalize wellness discussions, access expert guidance, and connect with others who understand your journey."
        canonical="/community"
        schema={schema}
      />
      <div className="min-h-screen">
        <section className="relative min-h-[100vh] md:min-h-[120vh] flex items-center justify-center overflow-hidden pt-20 pb-24">
          {/* Hero background image */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://res.cloudinary.com/dadgglcaq/image/upload/v1748358168/envato-labs-image-edit_bjhgut.png" 
              alt="Community members connecting and supporting each other" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/70 z-[1]"></div>

          {/* Animated background overlay */}
          <AnimatedBackground
            variant="gradient"
            intensity="medium"
            primaryColor="rgba(0, 0, 0, 0.7)"
            secondaryColor="rgba(0, 0, 0, 0.6)"
            className="z-[1]"
          />

          <div className="container mx-auto px-4 relative z-[2]">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                variants={titleContainer}
                initial="hidden"
                animate="visible"
                className="mb-8"
              >
                <h1 className="sr-only">A Community That Understands</h1>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                  {("A Community That Understands").split(" ").map((word, i) => (
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

              <GlassCard className="max-w-3xl mx-auto mb-12" opacity={0.1} blur="sm" enhancedContrast={true}>
                <p className="text-xl text-white text-center text-shadow-lg leading-relaxed">
                  Mission to connect locally and globally on a known or anonymized basis to share the power of like-minded communal healing and resilience.
                </p>
                <p className="text-xl text-white text-center text-shadow-lg leading-relaxed mt-4">
                  iLight's fundamental imperative is to not only provide a safe environment for personalized enrichment but importantly stimulate a purpose driven setting to Help Us, Help You, Help Others.
                </p>
              </GlassCard>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
                {[
                  { icon: <Users className="w-5 h-5" />, text: "Supportive Environment" },
                  { icon: <Calendar className="w-5 h-5" />, text: "Expert-Led Events" },
                  { icon: <Shield className="w-5 h-5" />, text: "Safe Space" }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + idx * 0.2 }}
                    className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-md p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
                  >
                    <div className="text-white">{feature.icon}</div>
                    <span className="text-white font-medium text-shadow-lg">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
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
                  icon={<ArrowRight className="w-5 h-5" />}
                  withShimmer
                  className="shadow-lg"
                >
                  Join Our Community
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Community Features Section */}
        <Section
          background="white"
          padding="lg"
          withPattern
          patternType="dots"
          className="relative z-10" 
        >
          <div className="mx-auto max-w-7xl relative z-10"> 
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-16 text-center mx-auto">
                  <h2 className="font-bold mb-4 text-3xl md:text-4xl text-gray-800">Community Features</h2>
                  <div className="h-1 bg-ilight-500 rounded-full w-20 mb-6 mx-auto"></div>
                  <p className="text-gray-600 max-w-3xl text-lg md:text-xl mx-auto">Connect, share, and grow with others who understand your personal wellness journey.</p>
                </div>
              </motion.div>
            </div>

            <div className="max-w-6xl mx-auto">
              {communityFeatures.map((feature, index) => (
                <div className="mb-40" key={feature.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="relative transition duration-700 rounded-2xl shadow-xl overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="rounded-2xl min-h-[300px] lg:min-h-[500px] xl:max-h-[500px] object-cover h-full w-full"
                      />
                    </div>

                    <div className={`relative z-[1] -mt-[118px] ${feature.isReversed ? 'mr-auto ml-5 rounded-tr-[40px] pr-5' : 'ml-auto mr-5 rounded-tl-[40px] pl-5'} md:w-[70%] bg-white lg:w-3/5 shadow-xl`}>
                      <div className={`${feature.isReversed ? 'rounded-tr-2xl' : 'rounded-tl-2xl'} pt-4 md:pt-6 md:py-6 px-6`}>
                        <h3 className="pb-2 font-serif text-[32px] font-light leading-[48px] text-ilight-600 md:pb-6 md:text-5xl xl:text-[60px]">{feature.title}</h3>
                        <div className="text-base font-light lg:text-lg xl:text-xl xl:leading-[32px]">
                          <p className="text-gray-700">{feature.description}</p>
                        </div>
                        <div className="flex gap-5 pt-6">
                          <Link
                            to={feature.link}
                            className="px-5 py-[10px] text-base flex justify-center items-center group space-x-3 rounded-full transition duration-300 ease-in-out transform border border-ilight-600 text-white bg-ilight-600 hover:bg-transparent hover:text-ilight-700"
                            aria-label={`Learn more about ${feature.title}`}
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
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

        {/* Community Connection Map */}
        <Section
          background="white"
          padding="lg"
          withPattern
          patternType="dots"
        >
          <SectionHeading
            title="Global Community Map"
            description="Mission to connect locally and globally on a known or anonymized basis to share the power of like-minded communal healing and resilience."
            align="center"
            withDivider
            textColor="text-black"
            className="mb-16"
          />

          <div className="max-w-6xl mx-auto">
            <CommunityConnectionMap className="mb-16 shadow-lg rounded-lg" />

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Find Your Community", description: "Discover therapy solutions groups and community events in your area or connect virtually with members worldwide.", icon: <MapPin className="w-6 h-6" /> },
                { title: "Active Engagement", description: "See where the most active communities are located and join discussions that matter to you.", icon: <Activity className="w-6 h-6" /> },
                { title: "Global Perspective", description: "Gain insights and therapy solutions from diverse perspectives across different cultures and backgrounds.", icon: <Globe className="w-6 h-6" /> }
              ].map((feature, index) => (
                <Card
                  key={feature.title}
                  variant="default"
                  shadow="md"
                  className="text-center p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-ilight-50 text-ilight-500 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* How It Works Flow Chart */}
        <Section
          background="white"
          padding="lg"
          withPattern
          patternType="dots"
          className="mt-16"
        >
          <SectionHeading
            title="How Our Community Works"
            description="Join a supportive journey of connection, growth, and healing together."
            align="center"
            withDivider
            textColor="text-black"
            className="mb-16"
          />
          <CommunityFlow />
        </Section>

        {/* Breaking the Silence Section */}
        <Section
          background="gradient"
          padding="lg"
          gradientFrom="from-ilight-500"
          gradientTo="to-ilight-600"
          className="mt-16"
        >
          <SectionHeading
            title="Breaking the Silence"
            description="Creating a safe space for open conversations about personal wellness"
            align="center"
            withGradient
            gradientFrom="from-white"
            gradientTo="to-white/80"
            textColor="text-white"
            className="mb-16"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Shared Experiences", description: "Connect with others who truly understand your journey." },
                { title: "Open Dialogue", description: "Create space for honest wellness discussions." },
                { title: "Supportive Environment", description: "Find strength in a community that cares and understands." },
                { title: "Reduced Stigma", description: "Normalize wellness conversations through shared stories." }
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard opacity={0.1} blur="md" textShadow enhancedContrast={true} className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 text-white text-shadow flex items-center justify-center flex-shrink-0">
                        <Heart className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white text-shadow mb-1">{point.title}</h3>
                        <p className="text-white/90 text-shadow text-sm">{point.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Community Impact Section */}
        <Section
          background="gradient"
          padding="lg"
          gradientFrom="from-ilight-600"
          gradientTo="to-ilight-700"
          className="mt-16"
        >
          <SectionHeading
            title="Community Impact"
            description="How our community makes a difference in members' lives"
            align="center"
            withGradient
            gradientFrom="from-white"
            gradientTo="to-white/80"
            textColor="text-white"
            className="mb-16"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Peer Therapy Solutions Groups", description: "Regular meetings focused on specific wellness topics." },
                { title: "Guided Discussions", description: "Professional facilitators ensure meaningful conversations." },
                { title: "Safe Environment", description: "Confidential space for sharing and growth." },
                { title: "Connection Building", description: "Form lasting bonds with understanding peers." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard opacity={0.1} blur="md" textShadow enhancedContrast={true} className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 text-white text-shadow flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white text-shadow mb-1">{feature.title}</h3>
                        <p className="text-white/90 text-shadow text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="white" padding="lg" className="mt-16">
          <Container size="md">
            <div className="bg-gradient-to-br from-ilight-500 to-ilight-600 rounded-3xl p-10 md:p-12 shadow-xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Community</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 text-center leading-relaxed">
                Connect with others to combine the power of sharing and caring with the purpose of helping others while being part of the purpose of helping yourself while helping others.
              </p>
              <p className="text-lg md:text-xl text-white/90 mb-8 text-center leading-relaxed">
                HELP US, HELP YOU, HELP OTHERS and be part of the PRICELESS PURPOSE of enriching lives together through delivering the RIGHT CARE TO THE RIGHT PERSON AT THE RIGHT TIME.
              </p>

              <Flex justify="center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
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
                </motion.div>
              </Flex>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}