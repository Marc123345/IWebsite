import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart, Brain, Users, Gift, ArrowRight, CheckCircle2,
  Target, Award, Star, Globe, Rocket, Zap, Flame, HandHeart,
  UserCheck, Gem, ShoppingBag, Focus, HeartHandshake,
  DollarSign, MessageSquare, Calendar, Clock, Sparkles,
  Lightbulb, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import SectionHeading from '../../components/SectionHeading';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Container from '../../components/Container';
import {
  GlassCard,
  ParallaxEffect,
  TextReveal,
  AnimatedBackground
} from '../../components/patterns';
import FloatingCard from '../../components/FloatingCard';
import { generateWebPageSchema } from '../../utils/seoUtils';

export default function IlluminatorsPage() {
  const [selectedInitiative, setSelectedInitiative] = useState<string | null>(null);
  const [showIlluminationForm, setShowIlluminationForm] = useState<boolean>(false);

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

  const illuminatorRolesData = [
    {
      icon: <MessageSquare className="w-10 h-10 md:w-12 md:h-12" />,
      title: "Community Support",
      description: "Help moderate and support our online community with empathy and understanding.",
      requirements: [
        "Strong communication skills",
        "Empathy and patience",
        "Basic mental health knowledge",
        "Online community experience"
      ],
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1747217489/envato-labs-ai-1bb87a67-3a65-4287-b306-9ff7276e4410_ifvizh.jpg"
    },
    {
      icon: <Calendar className="w-10 h-10 md:w-12 md:h-12" />,
      title: "Event Coordinator",
      description: "Organize and facilitate community events and workshops that foster connection and growth.",
      requirements: [
        "Event planning experience",
        "Leadership skills",
        "Time management",
        "Public speaking ability"
      ],
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1747213633/envato-labs-ai-069175b0-e804-46ad-b1b1-b154161d5313_xlltjp.jpg"
    },
    {
      icon: <Brain className="w-10 h-10 md:w-12 md:h-12" />,
      title: "Content Creator",
      description: "Create educational and supportive content that informs, inspires, and empowers our community.",
      requirements: [
        "Content creation skills",
        "Mental health knowledge",
        "Creative writing ability",
        "Research skills"
      ],
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1747213921/envato-labs-ai-d02a20b1-a47a-429b-91eb-989dbdfb2eb7_kujjid.jpg"
    },
    {
      icon: <HandHeart className="w-10 h-10 md:w-12 md:h-12" />,
      title: "Peer Supporter",
      description: "Provide direct support to community members through active listening and shared experiences.",
      requirements: [
        "Lived experience (valued)",
        "Strong empathy & compassion",
        "Active listening skills",
        "Awareness of boundaries"
      ],
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1747220644/envato-labs-ai-d28c167f-ea98-40e6-b75b-ba419b37e721_dukeq7.jpg"
    }
  ];

  const illuminatorBenefitsData = [
    {
      icon: <Brain className="w-10 h-10 md:w-12 md:h-12" />,
      title: "Professional Development",
      description: "Access training and skill development opportunities to enhance your capabilities and career prospects.",
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1746363805/backpack-adventure-hiking-traveler-mother-and-daug-2024-10-18-04-50-03-utc_1_fsj2as.jpg"
    },
    {
      icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
      title: "Network Growth",
      description: "Connect with mental health professionals and peers who share your passion for making a difference.",
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1746354919/AI_and_Mental_Health_k9z08h.jpg"
    },
    {
      icon: <Award className="w-10 h-10 md:w-12 md:h-12" />,
      title: "Recognition & Rewards",
      description: "Earn certificates, recognition, and potential rewards for your valuable contributions to the community.",
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1746365703/envato-labs-ai-b498f02d-355e-4e74-bdd7-75616aee851f_lwl0hr.webp"
    },
    {
      icon: <Heart className="w-10 h-10 md:w-12 md:h-12" />,
      title: "Meaningful Impact",
      description: "Make a real difference in people's lives through direct support and community building.",
      image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1748358168/envato-labs-image-edit_bjhgut.png"
    }
  ];

  // Generate schema for this page
  const schema = generateWebPageSchema(
    "Become an Illuminator - iLight Community",
    "Join our contributor program and help make mental health support more accessible. Become an Illuminator and make a difference in people's lives.",
    "https://ilight.health/community/illuminators"
  );

  return (
    <>
      <SEO
        title="Become an Illuminator - iLight Community"
        description="Join our contributor program and help make mental health support more accessible. Become an Illuminator and make a difference in people's lives."
        canonical="/community/illuminators"
        schema={schema}
      />
      <div className="min-h-screen bg-gray-50">
        <section
          className="relative px-4 pt-32 pb-24 min-h-[600px] overflow-hidden"
          style={{
            backgroundColor: '#3B5F8A' // Using iLight's primary blue color instead of an image
          }}
        >
          <div className="absolute inset-0">
            <AnimatedBackground
              variant="gradient"
              intensity="medium"
              primaryColor="rgba(40, 65, 95, 0.8)"
              secondaryColor="rgba(30, 50, 80, 0.8)"
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <TextReveal
              direction="up"
              staggerChildren={0.05}
              className="text-white mb-8 text-5xl md:text-7xl font-bold font-serif"
            >
              Become an Illuminator
            </TextReveal>

            <GlassCard className="max-w-3xl mx-auto p-6 border border-white/10" opacity={0.15} blur="sm">
              <p className="text-xl text-gray-100 leading-relaxed">
                Join our community of dedicated contributors who help make mental health support
                accessible to all. As an Illuminator, you'll be part of a movement creating
                positive change in people's lives through compassion and connection.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Illuminator Roles */}
        <Section background="white" padding="lg" className="-mt-20 relative z-10" withPattern patternType="dots">
          <SectionHeading
            title="Illuminator Roles"
            description="Find the perfect volunteer opportunity that matches your skills, interests, and availability"
            align="center"
            withGradient
            withDivider
            textColor="text-black"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {illuminatorRolesData.map((role, index) => (
              <FloatingCard
                key={role.title}
                delay={index * 0.05}
                glowEffect
                glowColor="rgba(59, 95, 138, 0.05)"
                className="flex flex-col h-full"
              >
                <div className="relative mb-4 overflow-hidden rounded-lg aspect-[16/10]">
                  <img
                    src={role.image}
                    alt={`${role.title} role illustration`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-center mb-4 text-ilight-500">{role.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">{role.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center flex-grow">{role.description}</p>
                <div className="space-y-2 text-sm mt-auto pt-4 border-t border-gray-100">
                  <div className="font-medium text-gray-700">Key Requirements:</div>
                  {role.requirements.map((req, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{req}</span>
                    </div>
                  ))}
                </div>
              </FloatingCard>
            ))}
          </div>
        </Section>

        {/* Benefits */}
        <Section
          background="gradient"
          padding="lg"
          gradientFrom="from-ilight-600"
          gradientTo="to-ilight-700"
        >
          <SectionHeading
            title="Benefits of Being an Illuminator"
            description="Join a community of passionate individuals and grow while making a meaningful difference"
            align="center"
            withGradient
            gradientFrom="from-white"
            gradientTo="to-gray-200"
            textColor="text-white"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {illuminatorBenefitsData.map((benefit, index) => (
              <GlassCard
                key={index}
                opacity={0.1}
                blur="md"
                className="p-6 text-center flex flex-col items-center h-full hover:bg-white/5 transition-all"
              >
                <div className="relative mb-4 overflow-hidden rounded-lg aspect-[16/10] w-full">
                  <img
                    src={benefit.image}
                    alt={`${benefit.title} benefit illustration`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 text-white
                  flex items-center justify-center mb-4 shadow-md">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-shadow-sm">
                  {benefit.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed text-shadow-sm flex-grow">
                  {benefit.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* Share Your Act of Illumination */}
        <Section
          background="white"
          padding="lg"
          withPattern
          patternType="dots"
        >
          <SectionHeading
            title="Share Your Act of Illumination"
            description="Help us build a tapestry of kindness. Share a story of how you, or someone you know, illuminated a life through a random act of connection or kindness."
            align="center"
            withGradient
            withDivider
            textColor="text-black"
          />
          <Container className="text-center">
            <Card variant="default" shadow="lg" padding="lg" className="max-w-2xl mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <Lightbulb className="w-12 h-12 text-amber-500"/>
                    <p className="text-ilight-700 mb-4">
                        This feature is coming soon! We're creating a space for our community to share and celebrate acts of illumination. Stay tuned to submit your story.
                    </p>
                    {/* Placeholder for future form or link */}
                    <Button
                        variant="gradient"
                        size="lg"
                        icon={<MessageSquare className="w-5 h-5"/>}
                        disabled // Disabled until feature is ready
                    >
                        Share Your Story (Coming Soon)
                    </Button>
                </div>
            </Card>
          </Container>
        </Section>

        {/* Application Form */}
        <Section
          id="apply"
          background="light"
          padding="lg"
        >
          <SectionHeading
            title="Apply to Become an Illuminator"
            description="Take the first step towards making a difference in mental health support and join our community of dedicated contributors"
            align="center"
            withGradient
            withDivider
            textColor="text-black"
          />

          <Card
            variant="default"
            shadow="xl"
            padding="lg"
            className="max-w-2xl mx-auto rounded-xl border border-gray-200"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input id="firstName" type="text" className="form-input" placeholder="Enter your first name" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input id="lastName" type="text" className="form-input" placeholder="Enter your last name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input id="email" type="email" className="form-input" placeholder="Enter your email address" required />
              </div>
              <div>
                <label htmlFor="preferredRole" className="block text-sm font-medium text-gray-700 mb-1">Preferred Role</label>
                <select id="preferredRole" className="form-select" required >
                  <option value="">Select a role</option>
                  <option value="community">Community Support</option>
                  <option value="events">Event Coordinator</option>
                  <option value="content">Content Creator</option>
                  <option value="peer">Peer Supporter</option>
                </select>
              </div>
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to become an Illuminator?</label>
                <textarea id="motivation" className="form-textarea" rows={4} placeholder="Share your motivation for joining our contributor community..." required />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Relevant Experience</label>
                <textarea id="experience" className="form-textarea" rows={4} placeholder="Tell us about any relevant experience you have..." required />
              </div>
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                fullWidth
                icon={<Rocket className="w-5 h-5" />}
                withShimmer
              >
                Submit Application
              </Button>
            </form>
          </Card>
        </Section>

        {/* CTA Section */}
        <Section
          background="gradient"
          padding="lg"
          gradientFrom="from-ilight-600"
          gradientTo="to-ilight-700"
        >
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              title="Ready to Make a Difference?"
              description="Join our community of Illuminators and help shape the future of mental health support through compassion, connection, and shared purpose."
              align="center"
              withGradient
              gradientFrom="from-white"
              gradientTo="to-gray-200"
              textColor="text-white"
            />
            <Button
              as="a"
              href="#apply"
              variant="calm"
              size="lg"
              rounded="full"
              icon={<HandHeart className="w-5 h-5" />}
              className="mt-8 shadow-lg"
              withShimmer
            >
              Apply Now
            </Button>
          </div>
        </Section>
      </div>
    </>
  );
}