import { motion } from 'framer-motion';
import { 
  Heart, Shield, Users, Gift, ArrowRight, CheckCircle2, 
  Sparkles, Target, Award, Star, Globe, Rocket, Zap,
  Trophy, Medal, Crown, Flame, Play, Info, Lightbulb
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
  GradientText,
  AnimatedBackground
} from '../components/patterns';
import FloatingCard from '../components/FloatingCard';

// Import Beaker icon from lucide-react
import { Beaker } from 'lucide-react';

export default function BetaPage() {
  return (
    <>
      <SEO 
        title="Join the iLight Beta Program - Early Access"
        description="Be among the first to experience our innovative personal wellness support platform. Join our beta program and help shape the future of personal wellness care."
        canonical="/beta"
      />
      <div className="min-h-screen">
        <section 
          className="min-h-[80vh] relative overflow-hidden flex items-center pt-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <AnimatedBackground 
            variant="gradient" 
            intensity="medium"
            primaryColor="rgba(0, 0, 0, 0.6)"
            secondaryColor="rgba(0, 0, 0, 0.4)"
          />
          
          <div className="container-padding relative z-10 py-24 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <GlassCard className="inline-block mb-6" padding="sm">
                <GradientText
                  from="from-white"
                  to="to-white/80"
                  className="text-xl font-medium"
                >
                  Limited Access
                </GradientText>
              </GlassCard>
              
              <TextReveal
                direction="up"
                staggerChildren={0.05}
                className="text-white mb-8 text-5xl md:text-6xl font-bold"
              >
                Join the iLight Beta Program
              </TextReveal>
              
              <GlassCard className="max-w-3xl mx-auto mb-12" opacity={0.1}>
                <TranslatedContent className="text-2xl text-white/90 leading-relaxed" dynamicContent={true}>
                  Be among the first to experience our innovative personal wellness support platform 
                  and help shape the future of personal wellness care.
                </TranslatedContent>
              </GlassCard>
              
              <Button
                as="a"
                href="#apply"
                variant="gradient"
                size="lg"
                rounded="full"
                icon={<Beaker className="w-5 h-5" />}
                withShimmer
              >
                Apply for Beta Access
              </Button>
            </div>
          </div>
        </section>

        {/* Beta Features */}
        <Section 
          background="white" 
          padding="lg"
          className="-mt-20 relative z-10"
          withPattern
          patternType="dots"
        >
          <SectionHeading
            title="Beta Program Features"
            description="Get early access to these innovative features"
            align="center"
            withGradient
            withDivider
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "Advanced AI Support",
                description: "Experience our cutting-edge AI personal wellness companion before public release"
              },
              {
                icon: <Activity className="w-12 h-12" />,
                title: "Gamification System",
                description: "Test our engagement and progress tracking features"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Community Platform",
                description: "Connect with other beta testers in our exclusive community"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Privacy Controls",
                description: "Try our advanced privacy and anonymity features"
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Personalization",
                description: "Experience AI-driven personalized wellness support"
              },
              {
                icon: <MessageSquare className="w-12 h-12" />,
                title: "Provider Integration",
                description: "Test seamless connection with wellness professionals"
              }
            ].map((feature, index) => (
              <FloatingCard
                key={feature.title}
                delay={index * 0.1}
                glowEffect
                glowColor="rgba(59, 95, 138, 0.1)"
              >
                <div className="mb-6 text-ilight-500">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-ilight-700">{feature.title}</h3>
                <p className="text-ilight-600">{feature.description}</p>
              </FloatingCard>
            ))}
          </div>
        </Section>

        {/* Beta Timeline */}
        <Section 
          background="gradient" 
          padding="lg"
          gradientFrom="from-ilight-500"
          gradientTo="to-ilight-600"
        >
          <SectionHeading
            title="Beta Program Timeline"
            description="Our roadmap for the beta testing phase"
            align="center"
            withGradient
            gradientFrom="from-white"
            gradientTo="to-white/80"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-white/20 ml-0.5"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    phase: "Phase 1: Early Access",
                    date: "April 2024",
                    description: "Limited beta release to first 100 testers",
                    features: [
                      "Core AI functionality",
                      "Basic user interface",
                      "Initial feedback collection"
                    ]
                  },
                  {
                    phase: "Phase 2: Feature Expansion",
                    date: "June 2024",
                    description: "Expanded beta with additional features",
                    features: [
                      "Gamification system",
                      "Community features",
                      "Provider integration"
                    ]
                  },
                  {
                    phase: "Phase 3: Refinement",
                    date: "August 2024",
                    description: "Final beta phase with polished experience",
                    features: [
                      "Performance optimization",
                      "UI/UX improvements",
                      "Final feedback implementation"
                    ]
                  },
                  {
                    phase: "Public Launch",
                    date: "October 2024",
                    description: "Official platform launch",
                    features: [
                      "Full feature set",
                      "Expanded provider network",
                      "Global availability"
                    ]
                  }
                ].map((phase, index) => (
                  <GlassCard
                    key={phase.phase}
                    opacity={0.1}
                    blur="md"
                    className="ml-16 relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-16 top-6 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{phase.phase}</h3>
                        <div className="text-white/70 mb-4">{phase.date}</div>
                        <p className="text-white/90 mb-4">{phase.description}</p>
                        <ul className="space-y-2">
                          {phase.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-white/80">
                              <CheckCircle2 className="w-5 h-5 text-white/60" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Beta Tester Benefits */}
        <Section 
          background="white" 
          padding="lg"
          withPattern
          patternType="dots"
        >
          <SectionHeading
            title="Beta Tester Benefits"
            description="Exclusive advantages for our beta participants"
            align="center"
            withGradient
            withDivider
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Early Access",
                description: "Be the first to experience our innovative platform"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Direct Feedback",
                description: "Shape the platform with your input and suggestions"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Lifetime Discount",
                description: "Receive special pricing on premium features after launch"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Exclusive Community",
                description: "Connect with other beta testers and our development team"
              }
            ].map((benefit, index) => (
              <ParallaxEffect
                key={benefit.title}
                direction="up"
                speed={0.3}
              >
                <Card
                  variant={index % 2 === 0 ? 'default' : 'glass'}
                  shadow="lg"
                  className={`text-center ${index % 2 === 0 ? '' : 'bg-ilight-50/50'}`}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-ilight-50 text-ilight-500 
                      flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-medium text-ilight-700 mb-2">{benefit.title}</h3>
                  <p className="text-ilight-600">{benefit.description}</p>
                </Card>
              </ParallaxEffect>
            ))}
          </div>
        </Section>

        {/* Application Form */}
        <Section 
          id="apply" 
          background="light" 
          padding="lg"
        >
          <SectionHeading
            title="Apply for Beta Access"
            description="Limited spots available - apply now to secure your place"
            align="center"
            withGradient
            withDivider
          />

          <Card
            variant="default"
            shadow="lg"
            padding="lg"
            className="max-w-4xl mx-auto"
          >
            <form className="space-y-6">
              <Grid cols={1} mdCols={2} gap="md">
                <div>
                  <label className="block text-sm font-medium text-ilight-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-ilight-200 
                      focus:outline-none focus:ring-2 focus:ring-ilight-500 
                      focus:border-transparent shadow-calm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ilight-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-ilight-200 
                      focus:outline-none focus:ring-2 focus:ring-ilight-500 
                      focus:border-transparent shadow-calm"
                    required
                  />
                </div>
              </Grid>

              <div>
                <label className="block text-sm font-medium text-ilight-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-ilight-200 
                    focus:outline-none focus:ring-2 focus:ring-ilight-500 
                    focus:border-transparent shadow-calm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ilight-700 mb-1">
                  Why are you interested in joining our beta program?
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-ilight-200 
                    focus:outline-none focus:ring-2 focus:ring-ilight-500 
                    focus:border-transparent shadow-calm"
                  rows={4}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ilight-700 mb-1">
                  Which features are you most interested in testing?
                </label>
                <div className="space-y-2">
                  {[
                    "AI Support Features",
                    "Gamification System",
                    "Community Platform",
                    "Provider Integration",
                    "Privacy Controls"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        id={feature.replace(/\s+/g, '-').toLowerCase()}
                        className="w-4 h-4 text-ilight-500 border-ilight-300 rounded 
                          focus:ring-ilight-500"
                      />
                      <label
                        htmlFor={feature.replace(/\s+/g, '-').toLowerCase()}
                        className="ml-2 text-ilight-600"
                      >
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ilight-700 mb-1">
                  How did you hear about us?
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg border border-ilight-200 
                    focus:outline-none focus:ring-2 focus:ring-ilight-500 
                    focus:border-transparent shadow-calm"
                >
                  <option value="">Please select</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend or Family</option>
                  <option value="search">Search Engine</option>
                  <option value="provider">Wellness Provider</option>
                  <option value="other">Other</option>
                </select>
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

        {/* FAQ Section */}
        <Section 
          background="white" 
          padding="lg"
          withPattern
          patternType="dots"
        >
          <SectionHeading
            title="Frequently Asked Questions"
            description="Common questions about our beta program"
            align="center"
            withGradient
            withDivider
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long will the beta program last?",
                answer: "The beta program is scheduled to run for approximately 6 months, from April to October 2024, with different phases introducing new features."
              },
              {
                question: "Is there a cost to join the beta program?",
                answer: "No, the beta program is completely free. In fact, beta testers will receive exclusive discounts on premium features after launch."
              },
              {
                question: "How will my feedback be used?",
                answer: "Your feedback will directly influence the development of the platform. We'll regularly implement changes based on beta tester suggestions."
              },
              {
                question: "What are the technical requirements?",
                answer: "The platform is web-based and mobile-responsive, so you'll need a device with internet access and a modern web browser."
              },
              {
                question: "How will you protect my privacy during the beta?",
                answer: "We take privacy seriously. All beta testers' data is protected with the same enterprise-grade security measures we'll use in our final release."
              }
            ].map((faq, index) => (
              <ParallaxEffect
                key={index}
                direction="up"
                speed={0.3}
              >
                <Card
                  variant={index % 2 === 0 ? 'default' : 'glass'}
                  shadow="lg"
                  className={index % 2 === 0 ? '' : 'bg-ilight-50/50'}
                >
                  <h3 className="text-lg font-bold mb-3 text-ilight-700">{faq.question}</h3>
                  <p className="text-ilight-600">{faq.answer}</p>
                </Card>
              </ParallaxEffect>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section 
          background="gradient" 
          padding="lg"
          gradientFrom="from-ilight-500"
          gradientTo="to-ilight-600"
        >
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              title="Be Part of Something Transformative"
              description="Join our beta program today and help shape the future of personal wellness support."
              align="center"
              withGradient
              gradientFrom="from-white"
              gradientTo="to-white/80"
            />
            
            <Button
              as="a"
              href="#apply"
              variant="calm"
              size="lg"
              rounded="full"
              icon={<Beaker className="w-5 h-5" />}
              className="mt-8"
              withShimmer
            >
              Apply for Beta Access
            </Button>
          </div>
        </Section>
      </div>
    </>
  );
}