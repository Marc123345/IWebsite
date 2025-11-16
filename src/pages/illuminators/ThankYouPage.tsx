import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Home, Sparkles, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import Container from '../../components/Container';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { GradientBlob, FloatingElements } from '../../components/patterns';

export default function ThankYouPage() {
  return (
    <>
      <SEO
        title="Thank You - Illuminators Campaign | iLight"
        description="Thank you for your contribution to the iLight Illuminators campaign. Together, we're lighting up lives."
        canonical="/illuminators/thank-you"
      />

      <Section background="gradient" padding="xl" className="min-h-screen relative overflow-hidden flex items-center">
        <GradientBlob variant="primary" size="xl" className="absolute top-0 left-0 opacity-30" />
        <FloatingElements variant="light" density="low" speed="slow" />

        <Container size="md" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mb-8"
            >
              <CheckCircle2 className="w-16 h-16 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Thank You for Illuminating Lives!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-white/90 mb-4"
            >
              Your contribution has been received.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-white/80 mb-12 max-w-2xl mx-auto"
            >
              Every act of illumination creates a ripple effect that touches countless lives. Thank you for being part of our mission to deliver the right care to the right person at the right time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              <Card variant="glass" padding="lg" className="backdrop-blur-md bg-white/10 max-w-2xl mx-auto">
                <div className="flex items-start gap-4 text-left">
                  <Sparkles className="w-8 h-8 text-white flex-shrink-0 mt-1" />
                  <div className="text-white">
                    <h3 className="font-bold text-xl mb-2">What Happens Next?</h3>
                    <ul className="space-y-2 text-white/90">
                      <li>• Our team will review your submission carefully</li>
                      <li>• You may receive a follow-up email if we need additional information</li>
                      <li>• We'll keep you updated on how your contribution is making an impact</li>
                      <li>• Together, we're building a community of illuminators</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    as={Link}
                    to="/"
                    variant="calm"
                    size="lg"
                    rounded="full"
                    icon={<Home className="w-5 h-5" />}
                  >
                    Return Home
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    as={Link}
                    to="/illuminators"
                    variant="outline"
                    size="lg"
                    rounded="full"
                    icon={<ArrowRight className="w-5 h-5" />}
                    className="border-white text-white hover:bg-white/10"
                  >
                    Explore More Ways to Illuminate
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16"
            >
              <p className="text-white/70 text-sm">
                Questions? Contact us at{' '}
                <a
                  href="mailto:campaigns@ilight.care"
                  className="text-white underline hover:text-white/80 transition-colors"
                >
                  campaigns@ilight.care
                </a>
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
