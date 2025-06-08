import { motion } from 'framer-motion';
import { 
  Heart, Brain, Users, LineChart, Shield, ArrowRight, 
  CheckCircle2, Award, Star, Gift, Target, Building,
  Clock, MessageSquare, Calendar, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { generateWebPageSchema, generateServiceSchema } from '../../utils/seoUtils';

export default function ProvidersPage() {
  // Generate schema for this page
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateWebPageSchema(
        "For Emotional Well-being Providers - iLight Partners",
        "Transform your therapy solution with iLight's innovative platform that enhances client engagement, streamlines administration, and improves therapy outcomes.",
        "https://ilight.health/providers"
      ),
      generateServiceSchema(
        "iLight Provider Platform",
        "An innovative platform for therapy providers that enhances client engagement, streamlines administration, and improves therapy outcomes.",
        "https://ilight.health/providers"
      )
    ]
  };

  return (
    <>
      <SEO 
        title="For Emotional Well-being Providers - iLight Partners"
        description="Transform your therapy solution with iLight's innovative platform that enhances client engagement, streamlines administration, and improves therapy outcomes."
        canonical="/providers"
        schema={schema}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-ilight-500 to-ilight-600 relative overflow-hidden">
          <div className="container-padding relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-white mb-6">
                  Beyond Just Another Listing Service
                </h1>
                <p className="text-xl text-white/90 mb-12">
                  Transform your therapy solution with innovative tools that enhance client engagement, 
                  improve outcomes, and reduce administrative burden.
                </p>
                <Link
                  to="/partners/join"
                  className="btn-light inline-flex items-center gap-2"
                  aria-label="Join our network of therapy providers"
                >
                  Join Our Network <Heart className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Challenges */}
        <section className="py-24 px-4 -mt-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-xl border border-ilight-100"
              >
                <h2 className="text-2xl font-bold mb-6">Common Provider Challenges</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Client Retention",
                      description: "Difficulty maintaining consistent client engagement between sessions."
                    },
                    {
                      title: "Progress Tracking",
                      description: "Limited visibility into client progress and treatment effectiveness."
                    },
                    {
                      title: "Administrative Burden",
                      description: "Too much time spent on paperwork instead of client care."
                    },
                    {
                      title: "Client Communication",
                      description: "Inefficient communication channels and response management."
                    }
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-ilight-600 mb-1">{challenge.title}</h3>
                        <p className="text-ilight-400">{challenge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-xl border border-ilight-100"
              >
                <h2 className="text-2xl font-bold mb-6">iLight Solutions</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "AI-Enhanced Engagement",
                      description: "24/7 therapy solutions keeps clients engaged and on track between sessions."
                    },
                    {
                      title: "Data-Driven Insights",
                      description: "Real-time analytics and progress tracking for better outcomes."
                    },
                    {
                      title: "Automated Administration",
                      description: "Streamlined workflows that reduce paperwork and save time."
                    },
                    {
                      title: "Integrated Communication",
                      description: "Secure, efficient client communication and therapy solutions tools."
                    }
                  ].map((solution, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-ilight-600 mb-1">{solution.title}</h3>
                        <p className="text-ilight-400">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Comprehensive Therapy Solution Tools</h2>
                <p className="text-xl text-ilight-400 max-w-3xl mx-auto">
                  Everything you need to enhance your therapy solution and improve client outcomes.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "AI-Powered Insights",
                  description: "Advanced analytics and pattern recognition to enhance therapy outcomes."
                },
                {
                  icon: <Activity className="w-12 h-12" />,
                  title: "Progress Tracking",
                  description: "Comprehensive monitoring and outcome measurement tools."
                },
                {
                  icon: <Calendar className="w-12 h-12" />,
                  title: "Smart Scheduling",
                  description: "Automated appointment management and reminders."
                },
                {
                  icon: <MessageSquare className="w-12 h-12" />,
                  title: "Secure Communication",
                  description: "HIPAA-compliant messaging and file sharing."
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Therapy Solution Management",
                  description: "Streamlined administrative tools and workflows."
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Client Portal",
                  description: "Self-service tools and resources for clients."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-ilight-100"
                >
                  <div className="mb-6 text-ilight-500">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-ilight-600">{feature.title}</h3>
                  <p className="text-ilight-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-ilight-500 to-ilight-600 rounded-3xl p-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Transform Your Therapy Solution Today</h2>
              <p className="text-xl text-white mb-8">
                Join our network and experience the future of emotional well-being care delivery.
              </p>
              <Link
                to="/partners/join"
                className="inline-flex items-center gap-2 bg-white text-ilight-600 px-8 py-4 
                  rounded-full text-lg font-semibold hover:bg-ilight-50 transition-colors"
                aria-label="Join our network of therapy providers"
              >
                Join Our Network <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}