import { motion } from 'framer-motion';
import {
  Heart, Brain, Users, Book, Shield, ArrowRight,
  CheckCircle2, Award, Star, Gift, Target, Building,
  Clock, MessageSquare, Calendar, Activity, Bot, Info,
  Rocket, Bell, ChevronRight, Zap
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
  AnimatedBackground
} from '../components/patterns';
import FloatingCard from '../components/FloatingCard';
import ChallengesSolutionsSection from '../components/features/home/ChallengesSolutionsSection';
import useMediaQuery from '../hooks/useMediaQuery';

export default function MyLightPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
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
        title="MyLight - Care Continuum for Personal Wellness"
        description="Experience personalized wellness support with MyLight's data-driven insights and comprehensive care continuum features."
        canonical="/mylight"
      />
      <div className="min-h-screen">
        <section className="enhanced-hero relative">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dadgglcaq/image/upload/v1746363805/backpack-adventure-hiking-traveler-mother-and-daug-2024-10-18-04-50-03-utc_1_fsj2as.jpg"
            alt="MyLight background"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-[5]"></div>
          <AnimatedBackground
            variant="gradient"
            intensity="medium"
            primaryColor="rgba(0, 0, 0, 0.6)"
            secondaryColor="rgba(0, 0, 0, 0.4)"
            className="z-[6]"
          />

          <div className="enhanced-hero-content relative z-[7]">
            <div className="max-w-4xl mx-auto">
              <motion.div
                variants={titleContainer}
                initial="hidden"
                animate="visible"
                className="mb-8"
              >
                <h1 className="sr-only">Care Continuum</h1>
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                  {["Care", "Continuum"].map((word, i) => (
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
                    Data driven combination of therapy solutions just for YOU.
                  </TranslatedContent>
                </motion.p>
              </GlassCard>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center"
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
                  Start Your Journey
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges and Solutions Section */}
        <ChallengesSolutionsSection />

        {/* Dashboard Preview */}
        <Section
          background="light"
          padding="lg"
        >
          <SectionHeading
            title="Your Personal Dashboard"
            description="Track your progress, set goals, and access personalized resources all in one place."
            align="center"
            withDivider
            textColor="text-black"
          />

          <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-calm-lg border border-ilight-100">
            <div className="bg-ilight-50 p-4 md:p-6">
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-ilight-700">Welcome, Sarah</h3>
                  <p className="text-ilight-600 text-sm md:text-base">Monday, May 27, 2025</p>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <button className="p-1 md:p-2 rounded-full bg-white text-ilight-600 shadow-calm hover:bg-gray-50">
                    <Bell className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button className="p-1 md:p-2 rounded-full bg-white text-ilight-600 shadow-calm hover:bg-gray-50">
                    <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-ilight-500 text-white flex items-center justify-center shadow-calm text-sm font-semibold">
                    S
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6">
                {[
                  { label: "Mood Trend", value: "Improving", icon: <Activity className="w-4 h-4 md:w-5 md:h-5" />, color: "bg-green-100 text-green-600" },
                  { label: "Next Session", value: "Today, 3PM", icon: <Calendar className="w-4 h-4 md:w-5 md:h-5" />, color: "bg-blue-100 text-blue-600" },
                  { label: "Goals Progress", value: "3/5 Complete", icon: <Target className="w-4 h-4 md:w-5 md:h-5" />, color: "bg-purple-100 text-purple-600" },
                  { label: "Streak", value: "7 Days", icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />, color: "bg-amber-100 text-amber-600" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-3 md:p-4 rounded-xl shadow-calm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                      <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${stat.color} flex items-center justify-center`}>
                        {stat.icon}
                      </div>
                      <span className="text-xs md:text-sm text-ilight-600 font-medium">{stat.label}</span>
                    </div>
                    <div className="text-sm md:text-lg font-bold text-ilight-700">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Main Dashboard Content */}
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                <div className="md:col-span-2">
                  <div className="bg-white p-3 md:p-4 rounded-xl shadow-calm mb-4 md:mb-6">
                    <div className="flex justify-between items-center mb-3 md:mb-4">
                      <h4 className="font-bold text-sm md:text-base text-ilight-700">Wellness Progress</h4>
                      <select className="text-xs md:text-sm bg-ilight-50 border border-ilight-100 rounded-lg px-1 md:px-2 py-1 focus:ring-2 focus:ring-ilight-300">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last 90 Days</option>
                      </select>
                    </div>
                    <div className="h-40 md:h-64 relative">
                      {/* Horizontal axis line */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-ilight-200"></div>
                      
                      {/* Vertical axis line */}
                      <div className="absolute top-0 bottom-0 left-0 w-px bg-ilight-200"></div>
                      
                      {/* Right vertical axis line */}
                      <div className="absolute top-0 bottom-0 right-0 w-px bg-ilight-200"></div>
                      
                      {/* Bottom axis labels with increased negative margin */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 md:px-6">
                        <span className="text-xs md:text-sm text-ilight-400 -mb-8 md:-mb-10 transform -translate-x-1/2">Week 1</span>
                        <span className="text-xs md:text-sm text-ilight-400 -mb-8 md:-mb-10 transform -translate-x-1/2">Week 4</span>
                        <span className="text-xs md:text-sm text-ilight-400 -mb-8 md:-mb-10 transform -translate-x-1/2">Week 8</span>
                        <span className="text-xs md:text-sm text-ilight-400 -mb-8 md:-mb-10 transform -translate-x-1/2">Week 12</span>
                      </div>
                      
                      {/* Left axis labels with increased negative margin */}
                      <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-4 md:py-6">
                        <span className="text-xs md:text-sm text-ilight-400 -ml-8 md:-ml-10 transform -translate-y-1/2">High</span>
                        <span className="text-xs md:text-sm text-ilight-400 -ml-8 md:-ml-10 transform -translate-y-1/2">Med</span>
                        <span className="text-xs md:text-sm text-ilight-400 -ml-8 md:-ml-10 transform -translate-y-1/2">Low</span>
                      </div>
                      
                      {/* Right axis labels with increased negative margin and width */}
                      <div className="absolute top-0 bottom-0 right-0 flex flex-col justify-between py-4 md:py-6">
                        <span className="text-xs md:text-sm text-green-500 -mr-20 md:-mr-24 transform -translate-y-1/2 text-right w-16 md:w-20">Improved</span>
                        <span className="text-xs md:text-sm text-yellow-500 -mr-20 md:-mr-24 transform -translate-y-1/2 text-right w-16 md:w-20">Neutral</span>
                        <span className="text-xs md:text-sm text-red-500 -mr-20 md:-mr-24 transform -translate-y-1/2 text-right w-16 md:w-20">Challenged</span>
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
                  </div>

                  <div className="bg-white p-3 md:p-4 rounded-xl shadow-calm">
                    <div className="flex justify-between items-center mb-3 md:mb-4">
                      <h4 className="font-bold text-sm md:text-base text-ilight-700">Current Goals</h4>
                      <button className="text-xs md:text-sm text-ilight-500 hover:text-ilight-700 flex items-center gap-1">
                        View All <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      {[
                        { title: "Daily Mindfulness", progress: 80, target: "10 minutes daily" },
                        { title: "Weekly Exercise", progress: 60, target: "3 times per week" },
                        { title: "Journal Writing", progress: 40, target: "Daily entry" }
                      ].map((goal, i) => (
                        <div key={i} className="space-y-1 md:space-y-2">
                          <div className="flex justify-between">
                            <span className="text-xs md:text-sm text-ilight-700 font-medium">{goal.title}</span>
                            <span className="text-xs text-ilight-500">{goal.target}</span>
                          </div>
                          <div className="h-1.5 md:h-2 bg-ilight-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-ilight-500 rounded-full"
                              style={{ width: `${goal.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-right text-xs text-ilight-500">{goal.progress}% Complete</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="bg-white p-3 md:p-4 rounded-xl shadow-calm">
                    <h4 className="font-bold text-sm md:text-base text-ilight-700 mb-3 md:mb-4">Recent Activity</h4>
                    <div className="space-y-3 md:space-y-4">
                      {[
                        { icon: <Brain className="w-3 h-3 md:w-4 md:h-4 text-purple-500" />, text: "Completed Mindfulness Session", time: "2 hours ago" },
                        { icon: <Target className="w-3 h-3 md:w-4 md:h-4 text-green-500" />, text: "Achieved Daily Goal", time: "5 hours ago" },
                        { icon: <MessageSquare className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />, text: "New Message from Dr. Smith", time: "Yesterday" }
                      ].map((activity, i) => (
                        <div key={i} className="flex items-start gap-2 md:gap-3">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                            {activity.icon}
                          </div>
                          <div>
                            <div className="text-xs md:text-sm text-ilight-700">{activity.text}</div>
                            <div className="text-xs text-ilight-500">{activity.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-ilight-500 p-3 md:p-4 rounded-xl shadow-calm text-white">
                    <h4 className="font-bold text-sm md:text-base mb-3 md:mb-4">Quick Actions</h4>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      <button className="p-2 md:p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" /> Schedule
                      </button>
                      <button className="p-2 md:p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                        <MessageSquare className="w-3 h-3 md:w-4 md:h-4" /> Message
                      </button>
                      <button className="p-2 md:p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                        <Brain className="w-3 h-3 md:w-4 md:h-4" /> Meditate
                      </button>
                      <button className="p-2 md:p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3 md:w-4 md:h-4"
                        >
                          <path d="M3 3v18h18" />
                          <path d="m19 9-5 5-4-4-3 3" />
                        </svg> Progress
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-ilight-100 flex flex-col md:flex-row justify-between items-center gap-3">
                <div className="text-xs md:text-sm text-ilight-500">Last updated: Today at 2:45 PM</div>
                {/* Fixed button with proper link */}
                <Link to="/mylight/progress">
                  <Button variant="gradient" size="sm" rounded="full">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 md:p-6 bg-amber-50 rounded-xl border border-amber-200 shadow-calm max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <Info className="w-6 h-6 md:w-8 md:h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-amber-800 mb-2">Illustrative Design and Content</h3>
                <p className="text-sm md:text-base text-amber-700 mb-2">
                  The personal dashboard shown above is currently in development. This is a preview of the planned functionality that will be available in the near future.
                </p>
                <p className="text-sm md:text-base text-amber-700">
                  Join our beta program to be among the first to experience these features when they become available.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Data-Driven Insights */}
        <Section
          background="gradient"
          padding="lg"
          gradientFrom="from-ilight-500"
          gradientTo="to-ilight-600"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Data-Driven Insights</h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 text-center max-w-3xl mx-auto">
            Make informed decisions about your personal wellness with comprehensive analytics and personalized insights.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Activity className="w-8 h-8 md:w-12 md:h-12" />, title: "Progress Analytics", description: "Track your personal wellness journey with detailed progress metrics and trends." },
              { icon: <Brain className="w-8 h-8 md:w-12 md:h-12" />, title: "Behavioral Patterns", description: "Identify patterns and triggers through AI-powered analysis." },
              { icon: <Target className="w-8 h-8 md:w-12 md:h-12" />, title: "Goal Tracking", description: "Set and monitor personal goals with actionable insights." }
            ].map((feature, index) => (
              <GlassCard key={feature.title} opacity={0.1} blur="md" textShadow enhancedContrast={true} className="p-4 md:p-6 text-center">
                <div className="mb-4 md:mb-6 text-white flex justify-center">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">{feature.title}</h3>
                <p className="text-sm md:text-base text-white leading-relaxed">{feature.description}</p>
              </GlassCard>
            ))}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Start Your Journey Today</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 text-center">
                Take the first step towards better wellness with personalized support and guidance tailored to your unique needs.
              </p>
              <div className="flex justify-center mt-6">
                <Button
                  as={Link}
                  to="/contact"
                  variant="calm"
                  size="lg"
                  rounded="full"
                  icon={<Rocket className="w-5 h-5" />}
                  className="shadow-lg"
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