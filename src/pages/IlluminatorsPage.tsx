import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Heart, Users, ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import { GradientBlob, FloatingElements, DotPattern } from '../components/patterns';

export default function IlluminatorsPage() {
  const campaigns = [
    {
      title: 'Share Your Recommended Illuminator',
      subtitle: 'Innovative therapies, products, services, acts of kindness / illumination for PTSD healing and resilience',
      cta: 'Submit an Idea for Illumination',
      destination: '/illuminators/recommend',
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: 'from-ilight-500 to-ilight-600'
    },
    {
      title: 'Your Story is Our Light',
      subtitle: 'Inspiration & Recruitment',
      cta: 'Share a Story of Illumination',
      destination: '/illuminators/share',
      icon: <Heart className="w-8 h-8" />,
      gradient: 'from-ilight-600 to-ilight-700'
    },
    {
      title: 'How do you want to Illuminate?',
      subtitle: 'Action & Involvement',
      cta: 'Explore Ways to Serve',
      destination: '/illuminators/participate',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-ilight-700 to-ilight-800'
    }
  ];

  return (
    <>
      <SEO
        title="Illuminators - Random Acts of Illumination | iLight"
        description="Join the iLight Illuminator initiative. Share resources, tell your story, or volunteer to help illuminate lives through random acts of illumination."
        canonical="/illuminators"
      />

      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="relative overflow-hidden">
        <GradientBlob variant="primary" size="xl" className="absolute top-0 left-0 opacity-30" />
        <FloatingElements variant="light" density="low" speed="slow" />
        <DotPattern size="md" color="rgba(255,255,255,0.1)" />

        <Container size="lg" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm mb-6 md:mb-8"
            >
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </motion.div>

            <SectionHeading
              title="The Illuminator Initiative"
              description="Random Acts of Illumination (RAI)"
              align="center"
              withGradient
              gradientFrom="from-white"
              gradientTo="to-white/90"
              textColor="text-white"
              className="mb-6 md:mb-8"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-6 text-white"
            >
              <p className="text-lg md:text-xl leading-relaxed">
                The overarching ILIGHT Mission and Movement is to Illuminate Lives through:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
                <Card variant="glass" padding="md" className="backdrop-blur-md bg-white/10">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Random Acts of Illumination</h3>
                      <p className="text-sm text-white/90">With the benefit of The Ripple Effect</p>
                    </div>
                  </div>
                </Card>

                <Card variant="glass" padding="md" className="backdrop-blur-md bg-white/10">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">The ILIGHT Community</h3>
                      <p className="text-sm text-white/90">To Help Us Help You Help Others</p>
                    </div>
                  </div>
                </Card>

                <Card variant="glass" padding="md" className="backdrop-blur-md bg-white/10">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">The ILIGHT Care Continuum</h3>
                      <p className="text-sm text-white/90">The Right Care to the Right Person at the Right Time</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Campaign Cards Section */}
      <Section background="white" padding="xl">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <SectionHeading
              title="Choose Your Path to Illuminate"
              description="Every action creates a ripple effect. Choose how you want to make a difference."
              align="center"
              withDivider
              textColor="text-black"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.destination}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  variant="elevated"
                  padding="lg"
                  className="h-full flex flex-col group hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${campaign.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {campaign.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-3">
                    {campaign.title}
                  </h3>

                  <p className="text-black/70 mb-6 flex-grow">
                    {campaign.subtitle}
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      as={Link}
                      to={campaign.destination}
                      variant="gradient"
                      size="lg"
                      rounded="full"
                      icon={<ArrowRight className="w-5 h-5" />}
                      className="w-full"
                    >
                      {campaign.cta}
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section background="light" padding="lg">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card variant="gradient" padding="lg" className="text-center" withShimmer>
              <div className="relative z-10">
                <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Illuminate Lives?
                </h2>
                <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                  Every contribution matters. Whether you're sharing a resource, telling your story, or volunteering your time, you're part of the ripple effect that changes lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    as={Link}
                    to="/illuminators/recommend"
                    variant="calm"
                    size="lg"
                    rounded="full"
                  >
                    Get Started
                  </Button>
                  <Button
                    as={Link}
                    to="/about"
                    variant="outline"
                    size="lg"
                    rounded="full"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Learn More About iLight
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
