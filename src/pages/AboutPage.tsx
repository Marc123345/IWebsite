import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Brain, Users, Book, Shield, ArrowRight, 
  CheckCircle2, Award, Star, Gift, Target, Building,
  Clock, MessageSquare, Calendar, Activity, Bot, Info,
  Trophy, Flame, Medal, Crown, Zap, X, Linkedin, Mail,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Flex from '../components/Flex';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import TranslatedContent from '../components/TranslatedContent';
import {
  GlassCard, 
  ParallaxEffect, 
  TextReveal, 
  MorphingShape, 
  AnimatedBackground,
  NoiseOverlay,
  DotPattern,
  GlowEffect,
  FloatingElements,
  GentleWave
} from '../components/patterns';
import FloatingCard from '../components/FloatingCard';
import MissionOrbitalCarousel from '../components/features/about/MissionOrbitalCarousel';
import { generateWebPageSchema } from '../utils/seoUtils';

export default function AboutPage() {
  
  const teamMembers = [
    {
      name: "Michael",
      surname: "Batashvili",
      role: "Research and Academic Partnerships",
      image: "https://ik.imagekit.io/qcvroy8xpd/1619874568091.jpeg",
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
      role: "Strategy & Impact",
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
    },
    {
      name: "Bonelle",
      surname: "Klinger",
      role: "Care Continuum Excellence",
      image: "https://ik.imagekit.io/qcvroy8xpd/ceaf77c6-42dd-4ddf-9f29-142d58083af3.jpeg?updatedAt=1761917394051",
      description: "Dr. Bonelle Klinger was born in Miami, Florida. She graduated from Emory University and obtained her medical degree at The George Washington University. Her anesthesiology residency was at University of Miami/Jackson Memorial Hospital. She completed her training with a pediatric anesthesiology fellowship at Children's National Medical Center. Dr. Klinger worked as an attending anesthesiologist in several hospitals including the Veteran Affairs Medical Center. She felt it was a great privilege caring for those who served her country. Dr. Klinger was always passionate about integrative medicine and wanted to find a way to help patients heal. She is currently working as a consultant in an integrative medicine clinic and is excited to help as many people as she can.",
      linkedin: "https://www.linkedin.com/in/bonelle-klinger/",
      email: "bonelle@ilight.health",
      achievements: [
        "Medical Degree from The George Washington University",
        "Anesthesiology Residency at University of Miami/Jackson Memorial Hospital",
        "Pediatric Anesthesiology Fellowship at Children's National Medical Center",
        "Integrative Medicine Consultant"
      ]
    }
  ];

  const impactAreas = [
    {
      title: "Innovative Therapy Solutions",
      description: "We're pioneering new approaches to personal therapy solutions through technology, community, and compassionate care.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      link: "/services",
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

  const missionCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const glowVariants = {
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const teamGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const teamCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.5, 
        ease: [0.6, 0.01, 0.05, 0.95]
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

  // Generate schema for this page
  const schema = generateWebPageSchema(
    "About iLight - Our Passion in Personal Wellness Therapy Solutions",
    "Learn about iLight's passion to transform personal wellness therapy solutions through innovative technology and compassionate care.",
    "https://ilight.health/about"
  );

  return (
    <>
      <SEO
        title="About iLight - Our Passion in Personal Wellness Therapy Solutions"
        description="Learn about iLight's passion to transform personal wellness therapy solutions through innovative technology and compassionate care."
        canonical="/about"
        schema={schema}
      />
      <div className="min-h-screen">
        <section
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
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

          <div className="container mx-auto px-4 relative z-10 py-24">
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
                  Our Passion
                </TextReveal>
                
                <GlassCard className="max-w-3xl mx-auto mb-12" opacity={0.2} blur="md" textShadow enhancedContrast={true}>
                  <p className="text-xl text-white text-shadow font-medium leading-relaxed">
                    <TranslatedContent dynamicContent={true}>
                      Transforming personal wellness therapy solutions through innovation, compassion, and accessibility.
                    </TranslatedContent>
                  </p>
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
                    icon={<ArrowRight className="w-5 h-5" />}
                    withShimmer
                    className="shadow-lg"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Statement - Orbital Carousel */}
        <Section
          background="white"
          padding="lg"
          withPattern
          patternType="dots"
        >
          <div className="max-w-6xl mx-auto relative">
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-ilight-100/50 blur-3xl"
              variants={glowVariants}
              animate="animate"
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-ilight-100/50 blur-3xl"
              variants={glowVariants}
              animate="animate"
              transition={{ delay: 1 }}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="Our Mission"
                align="center"
                withDivider
                textColor="text-black"
                className="mb-16"
              />
            </motion.div>

            {/* Orbital Mission Carousel */}
            <MissionOrbitalCarousel />
          </div>
        </Section>

        {/* Team Section - ENHANCED WITH WOW FACTOR */}
        <Section
          background="gradient"
          padding="lg"
          gradientFrom="from-ilight-700"
          gradientTo="to-ilight-800"
          className="relative overflow-hidden mt-16"
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full opacity-10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
              backgroundSize: '200% 200%',
            }}
          />
          
          <NoiseOverlay opacity={0.03} className="z-[1]" />
          
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

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Team Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">The iLight illuminators</h2>
              
              <GlassCard className="max-w-4xl mx-auto mb-8" opacity={0.1} blur="md" textShadow enhancedContrast={true}>
                <p className="text-xl text-white leading-relaxed mb-4">
                  The iLight illuminators is everyone who plays a part, large or small, in driving our collective Mission and Vision of Illuminating lives.
                </p>
                <p className="text-xl text-white leading-relaxed mb-4">
                  From each member of the ILIGHT Community, to the Trusted Therapy Providers and those working tirelessly in their role to Illuminate Lives by providing THE RIGHT CARE TO THE RIGHT PERSON AT THE RIGHT TIME.
                </p>
                <p className="text-2xl text-white font-semibold">
                  We are all in this together.
                </p>
              </GlassCard>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-white mb-4 inline-block relative">
                  <span className="relative z-10">iLight Illuminators</span>
                </h3>
                <p className="text-white/80 text-lg max-w-3xl mx-auto">
                  Some of the passionate team members committed to actively make a difference in delivering the Mission and Vision
                </p>
              </motion.div>
            </motion.div>

            {/* Team Grid - Enhanced with 3D effect and animations */}
            <motion.div
              variants={teamGridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {teamMembers.sort((a, b) => a.surname.localeCompare(b.surname)).map((member, index) => (
                <motion.div
                  key={`${member.name}-${member.surname}`}
                  variants={teamCardVariants}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  className="perspective-1000"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative group transform-gpu transition-all duration-500 cursor-pointer h-full">
                    {/* 3D Card with hover effect */}
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-xl group-hover:shadow-2xl group-hover:border-white/30 transition-all duration-500 h-full">
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          background: [
                            'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 70%)',
                            'radial-gradient(circle at 50% 100%, rgba(255,255,255,0.3) 0%, transparent 70%)',
                            'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 70%)'
                          ]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      {/* Content */}
                      <div className="p-6 text-center relative z-10 flex flex-col h-full">
                        {/* Image with animated border */}
                        <div className="relative mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                          <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-colors duration-500"></div>
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-transparent"
                            animate={{
                              borderColor: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0)']
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <div className="w-full h-full bg-ilight-600 flex items-center justify-center">
                            <img
                              src={member.image}
                              alt={`${member.name} ${member.surname}, ${member.role} at iLight`}
                              className="w-full h-full"
                              style={member.name === "Bonelle" ? {
                                objectFit: "contain",
                                objectPosition: "center center"
                              } : {
                                objectFit: "cover",
                                objectPosition: "center top"
                              }}
                            />
                          </div>
                        </div>
                        
                        {/* Name with glow effect */}
                        <h3 className="text-xl font-bold mb-1 text-white group-hover:text-white/90 transition-colors duration-300">
                          {member.name} {member.surname}
                        </h3>
                        
                        {/* Role with animated underline */}
                        <div className="relative inline-block">
                          <p className="text-white/70 text-sm mb-3">{member.role}</p>
                          <motion.div
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/30"
                            animate={{ width: ['0%', '100%', '0%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                          />
                        </div>
                        
                        {/* View details button */}
                        <div className="mt-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                          <button 
                            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-sm font-medium backdrop-blur-sm transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
                            aria-label={`View details for ${member.name} ${member.surname}`}
                          >
                            <Eye className="w-4 h-4" />
                            <span>View details</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Reflection effect */}
                    <div className="absolute inset-x-5 h-1/3 bottom-0 bg-gradient-to-b from-white/5 to-transparent transform translate-y-full scale-y-[-0.3] opacity-50 blur-sm group-hover:opacity-70 transition-opacity duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Team Member Modal */}
            <AnimatePresence>
              {selectedMember && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
                  onClick={() => setSelectedMember(null)}
                >
                  <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -50, opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                    className="bg-white rounded-2xl max-w-4xl w-full mx-auto shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-ilight-100 text-ilight-600 hover:bg-ilight-200 transition-colors z-10"
                      aria-label="Close details"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-10">
                      <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="aspect-square w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                          <div className="w-full h-full bg-ilight-600 flex items-center justify-center">
                            <img
                              src={selectedMember.image}
                              alt={`${selectedMember.name} ${selectedMember.surname}, ${selectedMember.role} at iLight`}
                              className="w-full h-full transform hover:scale-105 transition-transform duration-300"
                              style={selectedMember.name === "Bonelle" ? {
                                objectFit: "contain",
                                objectPosition: "center center"
                              } : selectedMember.name === "Jayden" ? {
                                objectFit: "cover",
                                objectPosition: "center center"
                              } : {
                                objectFit: "cover",
                                objectPosition: "center top"
                              }}
                            />
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mt-6">{selectedMember.name} {selectedMember.surname}</h3>
                        <p className="text-xl text-ilight-600 font-semibold mb-4">{selectedMember.role}</p>

                        <div className="flex justify-center md:justify-start gap-4 mt-4 w-full">
                          <a
                            href={selectedMember.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
                            aria-label={`LinkedIn profile of ${selectedMember.name} ${selectedMember.surname}`}
                          >
                            <Linkedin className="w-5 h-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                          <a
                            href={`mailto:${selectedMember.email}`}
                            className="p-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-colors flex items-center gap-2"
                            aria-label={`Email ${selectedMember.name} ${selectedMember.surname}`}
                          >
                            <Mail className="w-5 h-5" />
                            <span className="sr-only">Email</span>
                          </a>
                        </div>
                      </div>
                      <div className="md:col-span-2 text-gray-700 md:pl-4">
                        <p className="mb-6 text-lg leading-relaxed">{selectedMember.description}</p>

                        <h4 className="font-bold text-ilight-700 text-xl mb-4 flex items-center gap-2">
                          <Award className="w-6 h-6 text-yellow-500" /> Key Achievements
                        </h4>
                        <ul className="space-y-3 mb-8 text-lg">
                          {selectedMember.achievements.map((achievement, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 shadow-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index, duration: 0.4 }}
                            >
                              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                              {achievement === "Publications" ? (
                                <a 
                                  href="https://scholar.google.com/citations?user=-MKEXyYAAAAJ&hl=en" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {achievement}
                                </a>
                              ) : (
                                <span>{achievement}</span>
                              )}
                            </motion.li>
                          ))}
                        </ul>

                        <Button
                          variant="calm"
                          size="lg"
                          rounded="full"
                          onClick={() => setSelectedMember(null)}
                          className="w-full md:w-auto"
                        >
                          Close Details
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Section>

        {/* Impact Areas */}
        <Section
          background="white"
          padding="lg"
          withPattern
          patternType="dots"
          className="mt-16"
        >
          <SectionHeading
            title="Our Impact"
            description="How we're making a difference in personal wellness therapy solutions"
            align="center"
            withDivider
            textColor="text-black"
            className="mb-16"
          />

          <div className="max-w-6xl mx-auto">
            {impactAreas.map((area, index) => (
              <div className="mb-32" key={area.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative transition duration-700">
                    <img 
                      src={area.image} 
                      alt={area.title} 
                      className="rounded-2xl min-h-[300px] lg:min-h-[500px] xl:max-h-[500px] object-cover h-full w-full shadow-lg"
                    />
                  </div>
                  
                  <div className={`relative z-[1] -mt-[118px] ${area.isReversed ? 'mr-auto ml-5 rounded-tr-[40px] pr-5' : 'ml-auto mr-5 rounded-tl-[40px] pl-5'} md:w-[70%] bg-white lg:w-3/5 shadow-xl`}>
                    <div className={`${area.isReversed ? 'rounded-tr-2xl' : 'rounded-tl-2xl'} pt-6 md:py-6 px-6`}>
                      <h3 className="pb-2 font-serif text-[32px] font-light leading-[48px] text-ilight-600 md:pb-6 md:text-5xl xl:text-[60px]">{area.title}</h3>
                      <div className="text-base font-light lg:text-lg xl:leading-[32px]">
                        <p className="text-black">
                          <TranslatedContent dynamicContent={true}>{area.description}</TranslatedContent>
                        </p>
                      </div>
                      <div className="flex gap-5 pt-6">
                        <Link
                          to={area.link}
                          className="px-5 py-[10px] text-base flex justify-center items-center group space-x-3 rounded-full transition duration-300 ease-in-out transform border border-ilight-600 text-white bg-ilight-600 hover:bg-transparent hover:text-ilight-700"
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
        </Section>

        {/* CTA Section */}
        <Section background="white" padding="lg" className="mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <Card
              variant="gradient"
              shadow="lg"
              padding="lg"
              className="rounded-3xl"
              withShimmer
            >
              <SectionHeading
                title="Join Our Mission"
                description="Be part of transforming personal wellness therapy solutions through innovation and compassion."
                align="center"
                withGradient
                gradientFrom="from-white"
                gradientTo="to-white/80"
                textColor="text-white"
              />

              <div className="flex justify-center mt-6">
                <Button
                  as={Link}
                  to="/contact"
                  variant="calm"
                  size="lg"
                  rounded="full"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="mx-auto"
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </div>
        </Section>
      </div>
    </>
  );
}