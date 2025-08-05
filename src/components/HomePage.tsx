import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart, Brain, Users, Book, Shield, ArrowRight,
  CheckCircle2, Award, Star, Gift, Target, Building,
  Clock, MessageSquare, Calendar, Activity, Bot, Info,
  Trophy, Flame, Medal, Crown, Zap, X, Linkedin, Mail,
  Eye, Sparkles, Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AIChatDemo from '../components/AIChatDemo';
import Section from '../components/Section';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Flex from '../components/Flex';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import PlatformComponentsSection from '../components/features/home/PlatformComponentsSection';
import MissionJourneyVisualization from '../components/features/home/MissionJourneyVisualization';
import ChallengesSolutionsSection from '../components/features/home/ChallengesSolutionsSection';
import MissionStatement from '../components/features/home/MissionStatement';
import {
  GlassCard,
  ParallaxEffect,
  TextReveal,
  MorphingShape,
  AnimatedBackground,
  NoiseOverlay,
  DotPattern,
  GradientBlob,
  GlowEffect,
  FloatingElements,
  GentleWave,
  BreathingCircle
} from '../components/patterns';
import FloatingCard from '../components/FloatingCard';
import TranslatedContent from '../components/TranslatedContent';
import useMediaQuery from '../hooks/useMediaQuery';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const teamMembers = [
    {
      name: "Michael",
      surname: "Batashvili",
      role: "Research and Academic Partnerships",
      image: "https://ik.imagekit.io/qcvroy8xpd/Container.png?updatedAt=1748950133914",
      description: "Research lead specializing in quantitative analysis and academic partnerships.",
      linkedin: "https://www.linkedin.com/in/michael-batashvili-1660ab201/",
      email: "michael@ilight.health",
      achievements: [
        "PhD in Psychology",
        "12+ years research experience",
        "Data analytics expertise",
        "Publications"
      ]
    },
    {
      name: "Yaron",
      surname: "Eisenberg",
      role: "Communication & Stakeholder Relations",
      image: "https://ik.imagekit.io/qcvroy8xpd/Container%20(2).png?updatedAt=1748950237978",
      description: "Holding an MSc in Performance Psychology from the University of Edinburgh, combining academic excellence with real world experience. Former IDF Paratrooper and active reservist with demonstrated leadership in high-pressure environments. Over five years of independent coaching as a certified personal trainer and performance coach. Dedicated wellness advocate and public speaker specializing in mindset and performance.",
      linkedin: "https://www.linkedin.com/in/yaron-eisenberg-567a3b228/",
      email: "yaron@ilight.health",
      achievements: [
        "MSc in Performance Psychology, University of Edinburgh",
        "Former IDF Paratrooper and active reservist",
        "5+ years as a certified personal trainer and performance coach",
        "Wellness advocate and public speaker on mindset and performance"
      ]
    },
    {
      name: "Hailey",
      surname: "Fischer",
      role: "Marketing",
      image: "https://ik.imagekit.io/qcvroy8xpd/Container%20(3).png?updatedAt=1748950237974",
      description: "Strategic communications professional managing multi-platform content and engagement.",
      linkedin: "https://www.linkedin.com/in/hailey-fischer-ba1385173/",
      email: "hailey@ilight.health",
      achievements: [
        "Experience managing multi-million follower accounts",
        "Content strategy expert",
        "Multi-platform content creator"
      ]
    },
    {
      name: "Marc",
      surname: "Friedman",
      role: "Platform",
      image: "https://ik.imagekit.io/qcvroy8xpd/Container%20(6).png?updatedAt=1748950237867",
      description: "UX/UI specialist focused on creating intuitive wellness platforms.",
      linkedin: "https://www.linkedin.com/in/portfolio2/",
      email: "marc@ilight.health",
      achievements: [
        "Interactive Communications BA, 95% GPA",
        "Led B2B SaaS platform design",
        "CareerFoundry UI certified"
      ]
    },
    {
      name: "Ohad",
      surname: "Kaminer",
      role: "Operations",
      image: "https://ik.imagekit.io/qcvroy8xpd/Container%20(5).png?updatedAt=1748950237805",
      description: "Operations specialist with expertise in organizational psychology and team dynamics.",
      linkedin: "https://www.linkedin.com/in/ohad-kaminer/",
      email: "ohad@ilight.health",
      achievements: [
        "IDF Combat Engineering Commander",
        "Psychology B.A. Student",
        "Organizational development specialist"
      ]
    },
    {
      name: "Jayden",
      surname: "Youngleson",
      role: "Fundraising & Network Partnerships",
      image: "https://ik.imagekit.io/qcvroy8xpd/e5035a52-d90d-411f-a80b-4691ae622b18%201.png?updatedAt=1754054086723",
      description: "Strategic investment professional specializing in healthcare technology and wellness innovations. Director at TANJ Capital, focusing on identifying and developing transformative opportunities in digital health. Committed to bridging the gap between innovative wellness solutions and sustainable business growth.",
      linkedin: "https://www.linkedin.com/in/jayden-youngleson-06b940246/",
      email: "jayden@ilight.health",
      achievements: [
        "Director at TANJ Capital",
        "Led strategic healthcare investments",
        "Expertise in digital health ventures"
      ]
    },
    {
      name: "Darren",
      surname: "Youngleson",
      role: "Impact",
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1749056402/4c91361b-27ee-453b-88e0-af3026cac747_1_ro3hez_e_background_removal_f_png_vkfbub.png",
      description: "Seasoned healthcare executive with over 30 years of experience in public and private healthcare services companies. Expertise ranges from start up, business development and consolidation in various senior roles having actively participated in numerous strategic initiatives and transformative deals in the healthcare sector. Passionate about leveraging experience to meaningfully improve lives at scale.",
      linkedin: "https://www.linkedin.com/in/darren-youngleson-27a17310/",
      email: "darren@ilight.health",
      achievements: [
        "Led Corporate Finance, M&A & Investor Relations at Netcare",
        "Numerous Corporate & Social Responsibility Initiatives",
        "Global involvement growing, among others, Global Healthcare Investments & Solutions (USA) and CareRX (Canada)",
        "Chairman and Co Founder at Momentra (USA)",
        "50+ Healthcare M&A transactions ($5Bn+)"
      ]
    }
  ];

  const impactAreas = [
    {
      title: "Innovative Therapy Solutions",
      description: "We're pioneering new approaches to personal therapy solutions through technology, community, and compassionate care.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      link: "/about/impact",
      isReversed: false
    },
    {
      title: "Community Building",
      description: "Creating safe spaces for connection, understanding, and mutual therapy solutions among those facing similar challenges.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      link: "/community",
      isReversed: true
    },
    {
      title: "Professional Network",
      description: "Developing a network of dedicated professionals committed to compassionate care and innovative approaches.",
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1747217489/envato-labs-ai-1bb87a67-3a65-4287-b306-9ff7276e4410_ifvizh.jpg",
      link: "/partners",
      isReversed: false
    }
  ];

  const platformComponents = [
    {
      title: "iLight Community",
      description: "A place to share, heal, and grow. Connect with people who understand your journey and celebrate your progress. iLight's fundamental imperative is to not only provide a safe environment for personalized enrichment but importantly stimulate a purpose driven setting to Help Us, Help You, Help Others.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      link: "/community",
      isReversed: false
    },
    {
      title: "iLight Network Partners",
      description: "A network of vetted therapy providers and solutions who care about your unique needs and are committed to providing high-quality care and measurable outcomes.",
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1747213633/envato-labs-ai-069175b0-e804-46ad-b1b1-b154161d5313_xlltjp.jpg",
      link: "/partners",
      isReversed: true
    },
    {
      title: "MyLight",
      description: "Your personal companion for healing and resilience—offering guidance, encouragement, and understanding every step of the way.",
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1746363805/backpack-adventure-hiking-traveler-mother-and-daug-2024-10-18-04-50-03-utc_1_fsj2as.jpg",
      link: "/mylight",
      isReversed: false
    },
    {
      title: "iLight+",
      description: "Our premium platform aims to harness the power of data science, machine learning, and AI to deliver a personalized care support and continuum experience.",
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1747213921/envato-labs-ai-d02a20b1-a47a-429b-91eb-989dbdfb2eb7_kujjid.jpg",
      link: "/ilight-plus",
      isReversed: true
    }
  ];

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

  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setSelectedMember(null);
      }
    };
    if (selectedMember) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedMember]);

  // Handle video load event
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <>
      <SEO
        title="iLight - Compassionate Personal Wellness Therapy Solutions When You Need It Most"
        description="You're not alone. Find understanding, therapy solutions, and healing through our caring community and personalized guidance."
        canonical="/"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen overflow-hidden">
          {/* Video Background with Preloader */}
          <div className="absolute inset-0 bg-gradient-to-br from-ilight-700 to-ilight-800 z-0">
            {!isVideoLoaded && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: isVideoLoaded ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-ilight-200 border-t-ilight-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            )}
            <video
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              src="https://ik.imagekit.io/qcvroy8xpd/iLight%20Hero.mp4?updatedAt=1754396716668"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={handleVideoLoad}
            />
          </div>
          
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 z-10"
            style={{ 
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: Math.max(0.7, 1 - scrollY * 0.001)
            }}
          />

          {/* Background Effects */}
          <NoiseOverlay opacity={0.03} className="z-10" />
          <DotPattern size="lg" color="rgba(255,255,255,0.12)" className="z-10" />
          <FloatingElements variant="light" density="medium" speed="slow" className="z-10" />
          <GradientBlob 
            variant="accent" 
            size="lg" 
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-30 z-10" 
          />
          <GentleWave 
            position="bottom" 
            color="rgba(255,255,255,0.15)" 
            height={50} 
            className="z-10" 
          />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center pt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-5xl w-full"
              style={{ 
                transform: `translateY(${scrollY * -0.2}px)`,
                opacity: Math.max(0.2, 1 - scrollY * 0.002)
              }}
            >
              <motion.div
                variants={titleContainer}
                initial="hidden"
                animate="visible"
                className="mb-6"
              >
                <h1 className="sr-only">The Right Care to the Right Person at the Right Time</h1>
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                  {["The", "Right", "Care", "to", "the", "Right", "Person", "at", "the", "Right", "Time"].map((word, i) => (
                    <motion.span
                      key={i}
                      variants={titleWord}
                      className="font-serif text-white text-shadow-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <GlassCard className="max-w-3xl mx-auto mb-4 md:mb-8" opacity={0.2} blur="lg" enhancedContrast={true}>
                <TranslatedContent dynamicContent={true} className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                  Experience personalized therapy solutions through our innovative platform combining AI technology, professional care, and community connection.
                </TranslatedContent>
              </GlassCard>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 md:mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    as={Link}
                    to="/contact?type=careseeker"
                    variant="gradient"
                    size="lg"
                    rounded="full"
                    icon={<Heart className="w-5 h-5" />}
                    withShimmer
                    className="shadow-xl w-full sm:w-auto"
                  >
                    Get Therapy Solutions
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    as={Link}
                    to="/contact?type=caregiver"
                    variant="outline"
                    size="lg"
                    rounded="full"
                    icon={<Shield className="w-5 h-5" />}
                    className="border-white/40 text-white hover:bg-white/10 shadow-xl w-full sm:w-auto"
                  >
                    Partners
                  </Button>
                </motion.div>
              </div>
              
              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ opacity: Math.max(0, 1 - scrollY * 0.01) }}
              >
                <div className="flex flex-col items-center text-white/70">
                  <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-center justify-center mb-2">
                    <motion.div
                      className="w-1.5 h-1.5 bg-white rounded-full"
                      animate={{ y: [0, 15, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <span className="text-xs font-light">Scroll</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <MissionStatement />

        {/* Mission Journey Visualization */}
        <MissionJourneyVisualization />

        {/* Challenges and Solutions Section */}
        <ChallengesSolutionsSection />

        {/* Data-Driven Insights Section */}
        <Section
          background="light"
          padding="lg"
          withPattern
          patternType="dots"
          className="py-16 md:py-24 lg:py-32"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading
                title="How iLight Uses Data to Drive Better Outcomes"
                description="We don't just collect data — we turn it into personalized care that works."
                align="center"
                withDivider
                textColor="text-black"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-12 md:mt-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4 md:space-y-6"
              >
                <TranslatedContent dynamicContent={true} className="text-base md:text-lg text-ilight-700 leading-relaxed">
                  iLight analyzes patterns in user behavior — from the words they type to their interaction frequency — to detect personal wellness signals in real time.
                </TranslatedContent>
                <TranslatedContent dynamicContent={true} className="text-base md:text-lg text-ilight-700 leading-relaxed">
                  These insights guide tailored recommendations, match users to the right providers or peer support, and track improvements week by week.
                </TranslatedContent>
                <TranslatedContent dynamicContent={true} className="text-base md:text-lg text-ilight-700 leading-relaxed">
                  The graph shows how increased data signal confidence (e.g. emotional trends, engagement indicators) aligns with better personal wellness outcomes over time.
                </TranslatedContent>

                <div className="space-y-3 md:space-y-4 mt-6 md:mt-8">
                  {[
                    {
                      title: "Pattern Recognition",
                      description: "Our AI identifies emotional patterns that might be missed in traditional approaches"
                    },
                    {
                      title: "Personalized Insights",
                      description: "Data-driven recommendations tailored to your unique needs and progress"
                    },
                    {
                      title: "Continuous Improvement",
                      description: "Your feedback helps our system get better at supporting you over time"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-calm hover:shadow-calm-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-ilight-50 text-ilight-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-ilight-700 mb-1">{item.title}</h4>
                        <p className="text-sm md:text-base text-ilight-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-xl border border-ilight-100 hover:scale-[1.02] transition-all duration-500"
              >
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-ilight-700 text-center">Correlation: Data Signals → Wellness Outcomes</h3>
                <div className="h-64 md:h-80 relative px-12 py-10">
                  {/* Horizontal axis line */}
                  <div className="absolute bottom-0 left-12 right-12 h-px bg-ilight-200"></div>
                  
                  {/* Vertical axis line */}
                  <div className="absolute top-10 bottom-0 left-12 w-px bg-ilight-200"></div>
                  
                  {/* Right vertical axis line */}
                  <div className="absolute top-10 bottom-0 right-12 w-px bg-ilight-200"></div>
                  
                  {/* Bottom axis labels */}
                  <div className="absolute bottom-0 left-12 right-12 flex justify-between">
                    <span className="text-xs md:text-sm text-ilight-400 -mb-6 transform -translate-x-1/2">Week 1</span>
                    <span className="text-xs md:text-sm text-ilight-400 -mb-6 transform -translate-x-1/2">Week 4</span>
                    <span className="text-xs md:text-sm text-ilight-400 -mb-6 transform -translate-x-1/2">Week 8</span>
                    <span className="text-xs md:text-sm text-ilight-400 -mb-6 transform -translate-x-1/2">Week 12</span>
                  </div>
                  
                  {/* Left axis labels */}
                  <div className="absolute top-10 bottom-0 left-0 flex flex-col justify-between py-4 md:py-6">
                    <span className="text-xs md:text-sm text-ilight-400 transform -translate-y-1/2">High</span>
                    <span className="text-xs md:text-sm text-ilight-400 transform -translate-y-1/2">Med</span>
                    <span className="text-xs md:text-sm text-ilight-400 transform -translate-y-1/2">Low</span>
                  </div>
                  
                  {/* Right axis labels */}
                  <div className="absolute top-10 bottom-0 right-0 flex flex-col justify-between py-4 md:py-6">
                    <span className="text-xs md:text-sm text-green-500 transform -translate-y-1/2">Improved</span>
                    <span className="text-xs md:text-sm text-yellow-500 transform -translate-y-1/2">Neutral</span>
                    <span className="text-xs md:text-sm text-red-500 transform -translate-y-1/2">Challenged</span>
                  </div>
                  
                  {/* Graph lines and points */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      d="M 40 200 Q 100 180 150 150 T 250 120 T 350 80 T 450 40"
                      fill="none"
                      stroke="#3B5F8A"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                    />
                    <motion.circle cx="40" cy="200" r="5" fill="#3B5F8A" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} />
                    <motion.circle cx="150" cy="150" r="5" fill="#3B5F8A" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} />
                    <motion.circle cx="250" cy="120" r="5" fill="#3B5F8A" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} />
                    <motion.circle cx="350" cy="80" r="5" fill="#3B5F8A" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }} />
                    <motion.circle cx="450" cy="40" r="5" fill="#3B5F8A" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.4 }} />
                  </svg>
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                      d="M 40 220 Q 100 200 150 170 T 250 140 T 350 100 T 450 60"
                      fill="none"
                      stroke="#4CAF93"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                    />
                    <motion.circle cx="40" cy="220" r="5" fill="#4CAF93" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} />
                    <motion.circle cx="150" cy="170" r="5" fill="#4CAF93" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }} />
                    <motion.circle cx="250" cy="140" r="5" fill="#4CAF93" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.3 }} />
                    <motion.circle cx="350" cy="100" r="5" fill="#4CAF93" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.6 }} />
                    <motion.circle cx="450" cy="60" r="5" fill="#4CAF93" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.9 }} />
                  </svg>
                </div>
                
                {/* Legend */}
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-6 md:mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-ilight-500 rounded-full"></div>
                    <span className="text-xs md:text-sm text-ilight-700">Data Signal Confidence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-success rounded-full"></div>
                    <span className="text-xs md:text-sm text-ilight-700">Wellness Outcomes</span>
                  </div>
                </div>
                
                {/* Source note */}
                <div className="mt-3 md:mt-4 text-center">
                  <p className="text-xs md:text-sm text-ilight-500 italic">
                    Based on anonymized user data from our platform
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Platform Components Section */}
        <Section
          background="white"
          padding="lg"
          className="py-16 md:py-24 lg:py-32"
        >
          <div className="max-w-6xl mx-auto text-center">
            <PlatformComponentsSection components={platformComponents} />
          </div>
        </Section>

        {/* CTA Section */}
        <Section 
          background="white" 
          padding="lg" 
          textAlign="center"
          className="py-16 md:py-24 lg:py-32"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card
                variant="gradient"
                shadow="lg"
                padding="lg"
                className="rounded-3xl overflow-hidden"
                withShimmer
                textAlign="center"
              >
                <div className="relative z-10">
                  <SectionHeading
                    title="Join Our Mission"
                    description="Be part of transforming personal wellness therapy solutions through innovation and compassion."
                    align="center"
                    withGradient
                    gradientFrom="from-white"
                    gradientTo="to-white/80"
                    textColor="text-white"
                  />
                  
                  <p className="text-xl text-white/90 mb-8 text-center">
                    HELP US, HELP YOU, HELP OTHERS and be part of the PRICELESS PURPOSE of enriching lives together through delivering the RIGHT CARE TO THE RIGHT PERSON AT THE RIGHT TIME.
                  </p>
                  
                  <div className="flex justify-center mt-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        as={Link}
                        to="/contact"
                        variant="calm"
                        size="lg"
                        rounded="full"
                        icon={<ArrowRight className="w-5 h-5" />}
                        className="mx-auto shadow-xl"
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Section>

        {/* Platform Status Notice */}
        <Section 
          background="white" 
          padding="md" 
          textAlign="center"
          className="py-8 md:py-12 lg:py-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-ilight-50 rounded-xl p-4 md:p-6 border border-ilight-100 shadow-calm">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-ilight-600 flex-shrink-0" />
                  <div className="text-xs md:text-sm text-black">
                    <p>
                      <strong>Platform Status:</strong> Some features mentioned on this website, including certain gamification and reward elements, are currently in development and will be rolled out progressively. We are continuously working to enhance and expand our platform's capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>
    </>
  );
}