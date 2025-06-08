import { motion } from 'framer-motion';
import { 
  Award, Brain, Building, Calendar, CheckCircle2, 
  Heart, Shield, Star, Target, Users 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { generateWebPageSchema, generateServiceSchema } from '../../utils/seoUtils';

export default function BenefitsPage() {
  // Generate schema for this page
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateWebPageSchema(
        "Provider Benefits - iLight Partners",
        "Discover the benefits of joining iLight's emotional well-being provider network, including advanced technology, therapy solution growth, and comprehensive therapy solutions.",
        "https://ilight.health/partners/benefits"
      ),
      generateServiceSchema(
        "iLight Provider Benefits",
        "Comprehensive benefits for therapy providers including business growth, advanced technology, and administrative support.",
        "https://ilight.health/partners/benefits"
      )
    ]
  };

  return (
    <>
      <SEO 
        title="Provider Benefits - iLight Partners"
        description="Discover the benefits of joining iLight's emotional well-being provider network, including advanced technology, therapy solution growth, and comprehensive therapy solutions."
        canonical="/partners/benefits"
        schema={schema}
      />
      <div className="min-h-screen">
        <section 
          className="py-24 px-4 relative overflow-hidden"
          style={{
            backgroundImage: 'url("https://i.imgur.com/TFlBtJA.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
          
          <div className="container-padding relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-white mb-6">
                  Benefits of Partnering with iLight
                </h1>
                <p className="text-xl text-white/90 mb-12">
                  Join our innovative platform and access comprehensive tools and therapy solutions to enhance 
                  your therapy solution and client care.
                </p>
                <Link
                  to="/partners/join"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 
                    rounded-full text-lg font-semibold hover:bg-ilight-50 transition-colors shadow-md"
                  aria-label="Join our network of therapy providers"
                >
                  Join Our Network <Heart className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Benefits */}
        <section className="py-24 px-4 -mt-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-12 h-12" />,
                  title: "Therapy Solution Growth",
                  description: "Expand your client base and increase revenue through our platform"
                },
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "AI Technology",
                  description: "Access cutting-edge AI tools to enhance client therapy solutions"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Comprehensive Therapy Solutions",
                  description: "Get the tools and resources you need to succeed"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-xl border border-ilight-100"
                >
                  <div className="mb-6 text-ilight-500">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-ilight-600">{benefit.title}</h3>
                  <p className="text-ilight-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Benefits */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-4xl font-bold mb-6">Comprehensive Benefits Package</h2>
                <p className="text-xl text-ilight-400 max-w-3xl mx-auto">
                  Everything you need to provide exceptional care and grow your therapy solution.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Therapy Solution Management",
                  features: [
                    "Automated scheduling system",
                    "Secure client communications",
                    "Digital documentation tools",
                    "Billing and payment processing",
                    "Therapy solution analytics dashboard"
                  ]
                },
                {
                  title: "Client Care Tools",
                  features: [
                    "AI-powered therapy solutions between sessions",
                    "Progress tracking tools",
                    "Resource library access",
                    "Outcome measurement tools"
                  ]
                },
                {
                  title: "Professional Development",
                  features: [
                    "Continuing education credits",
                    "Professional workshops",
                    "Peer consultation groups",
                    "Clinical supervision options",
                    "Research opportunities"
                  ]
                },
                {
                  title: "Marketing Therapy Solutions",
                  features: [
                    "Professional profile page",
                    "Client matching system",
                    "SEO optimization",
                    "Marketing resources",
                    "Referral network access"
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-ilight-100"
                >
                  <h3 className="text-xl font-bold mb-6 text-ilight-600">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-ilight-500 flex-shrink-0" />
                        <span className="text-ilight-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-ilight-500 to-ilight-600 rounded-3xl p-12 text-white"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Therapy Solution?</h2>
              <p className="text-xl text-white mb-8">
                Join our network of emotional well-being professionals and access all these benefits today.
              </p>
              <Link
                to="/partners/join"
                className="inline-flex items-center gap-2 bg-white text-ilight-600 px-8 py-4 
                  rounded-full text-lg font-semibold hover:bg-ilight-50 transition-colors"
                aria-label="Apply to join our network"
              >
                Apply Now <Award className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}