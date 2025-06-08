import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Users, MessageSquare, Bell, Calendar, Shield, ArrowRight, 
  CheckCircle2, Lock, FileText, Activity, Book, Phone, Mail
} from 'lucide-react';
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

export default function FamilyPortalPage() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1], [1, 1.2]);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <SEO 
        title="Family Portal - iLight Personal Wellness Support"
        description="Access our secure family portal to stay connected and informed about your loved one's personal wellness journey."
        canonical="/family-portal"
      />
      <div className="min-h-screen">
        <section 
          className="relative min-h-screen flex items-center justify-center px-6 py-32 text-white text-center bg-gradient-to-br from-ilight-600 to-ilight-700"
        >
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(84,72,88,0.1),transparent)]"
            style={{ scale }}
          />

          <div className="container-padding relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-white text-shadow-lg mb-6 text-5xl md:text-6xl font-bold">
                  Stay Connected and Informed
                </h1>
                
                <GlassCard className="max-w-3xl mx-auto mb-12" opacity={0.2} blur="md" textShadow>
                  <p className="text-xl text-white text-center">
                    Break free from isolation and join a supportive community where wellness discussions are normalized and valued.
                  </p>
                </GlassCard>
                
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
            </div>
          </div>
        </section>

        {/* Community Features Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-4xl font-bold mb-6">Family Portal Features</h2>
                <p className="text-xl text-ilight-400 max-w-3xl mx-auto">
                  Access tools and features designed to help you support your loved one's personal 
                  wellness journey.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "Secure Communication",
                  description: "Private communication with care team members"
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  title: "Appointment Updates",
                  description: "Stay informed about upcoming sessions"
                },
                {
                  icon: <Bell className="w-6 h-6" />,
                  title: "Notifications",
                  description: "Customizable alerts for important events"
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email Summaries",
                  description: "Regular updates on progress and activities"
                },
                {
                  icon: <Book className="w-6 h-6" />,
                  title: "Educational Materials",
                  description: "Learn about personal wellness conditions and treatments"
                },
                {
                  icon: <FileText className="w-6 h-6" />,
                  title: "Support Guides",
                  description: "Practical advice for supporting loved ones"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-ilight-500 to-ilight-600 
                    rounded-2xl transform rotate-1 scale-[0.98] opacity-0 group-hover:opacity-10 
                    transition-all duration-300" />
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                    transition-all duration-300 border border-ilight-100 hover:border-ilight-200">
                    <div className="mb-6 text-ilight-500">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-4 text-ilight-600">{feature.title}</h3>
                    <p className="text-ilight-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Communication & Resources */}
        <section className="py-24 px-4 bg-gradient-to-b from-white to-ilight-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-ilight-100"
              >
                <h3 className="text-xl font-bold mb-6 text-ilight-600">Communication Tools</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <MessageSquare className="w-5 h-5" />,
                      title: "Secure Messaging",
                      description: "Private communication with care team members"
                    },
                    {
                      icon: <Calendar className="w-5 h-5" />,
                      title: "Appointment Updates",
                      description: "Stay informed about upcoming sessions"
                    },
                    {
                      icon: <Bell className="w-5 h-5" />,
                      title: "Notifications",
                      description: "Customizable alerts for important events"
                    },
                    {
                      icon: <Mail className="w-5 h-5" />,
                      title: "Email Summaries",
                      description: "Regular updates on progress and activities"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-ilight-50 text-ilight-500 
                        flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-ilight-600 mb-1">{item.title}</h4>
                        <p className="text-sm text-ilight-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-ilight-100"
              >
                <h3 className="text-xl font-bold mb-6 text-ilight-600">Support Resources</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Book className="w-5 h-5" />,
                      title: "Educational Materials",
                      description: "Learn about personal wellness conditions and treatments"
                    },
                    {
                      icon: <FileText className="w-5 h-5" />,
                      title: "Support Guides",
                      description: "Practical advice for supporting loved ones"
                    },
                    {
                      icon: <Users className="w-5 h-5" />,
                      title: "Family Support Groups",
                      description: "Connect with other families facing similar challenges"
                    },
                    {
                      icon: <Shield className="w-5 h-5" />,
                      title: "Crisis Resources",
                      description: "Emergency contacts and intervention strategies"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-ilight-50 text-ilight-500 
                        flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-ilight-600 mb-1">{item.title}</h4>
                        <p className="text-sm text-ilight-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The iLight Promise */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-4xl font-bold mb-6">The iLight Promise</h2>
                <p className="text-xl text-ilight-400 mb-8">
                  We take privacy seriously. Our family portal is designed with multiple layers of 
                  security to protect sensitive information while enabling meaningful connection.
                </p>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ilight-500 to-ilight-600 
                    text-white flex items-center justify-center">
                    <Shield className="w-8 h-8" />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "End-to-End Encryption",
                  description: "All communications are fully encrypted"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Consent-Based Access",
                  description: "Control who can view information"
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Protection of Patients' Privacy",
                  description: "Meets healthcare privacy standards"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-ilight-50 text-ilight-500 
                      flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-ilight-600">
                    {feature.title}
                  </h3>
                  <p className="text-ilight-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-white to-ilight-50">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-ilight-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4 text-ilight-600">Family Portal Registration</h2>
                <p className="text-ilight-400">
                  Register to access our secure family portal and stay connected with your loved one's care team.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="relationship">Relationship to Client</label>
                  <select
                    id="relationship"
                    className="form-input"
                    required
                  >
                    <option value="">Select relationship</option>
                    <option value="parent">Parent</option>
                    <option value="spouse">Spouse/Partner</option>
                    <option value="sibling">Sibling</option>
                    <option value="child">Adult Child</option>
                    <option value="other">Other Family Member</option>
                  </select>
                </div>
                <div>
                  <label className="form-label" htmlFor="clientEmail">Client's Email</label>
                  <input
                    type="email"
                    id="clientEmail"
                    className="form-input"
                    required
                  />
                  <p className="text-sm text-ilight-400 mt-1">
                    The client will need to approve your connection request
                  </p>
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={`flex items-center justify-center gap-2 
                    ${isLoading ? 'invisible' : ''}`}>
                    Register <ArrowRight className="w-5 h-5" />
                  </span>
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}