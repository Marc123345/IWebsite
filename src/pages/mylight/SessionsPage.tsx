import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, MessageSquare, Video, Users } from 'lucide-react';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import SectionHeading from '../../components/SectionHeading';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { 
  GlassCard, 
  ParallaxEffect, 
  TextReveal, 
  GradientText,
  AnimatedBackground
} from '../../components/patterns';
import FloatingCard from '../../components/FloatingCard';

export default function SessionsPage() {
  return (
    <>
      <SEO 
        title="MyLight Sessions - Manage Your Therapy Sessions"
        description="Schedule, manage, and review your therapy sessions and support group meetings."
        canonical="/mylight/sessions"
      />
      <div className="min-h-screen pt-20">
        <Section 
          background="gradient" 
          padding="md"
          gradientFrom="from-ilight-500"
          gradientTo="to-ilight-600"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <TextReveal
                direction="up"
                className="text-4xl font-bold mb-4 text-white"
              >
                Your Sessions
              </TextReveal>
              <p className="text-xl text-white/80">
                Manage your therapy sessions and support group meetings
              </p>
            </div>
          </div>
        </Section>

        {/* Upcoming Sessions */}
        <Section 
          background="white" 
          padding="md"
          withPattern
          patternType="dots"
          className="-mt-6"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Upcoming Sessions"
              align="left"
              withGradient
              withDivider
            />
            
            <div className="space-y-6">
              {[
                {
                  title: 'Individual Therapy',
                  provider: 'Dr. Sarah Smith',
                  date: 'Tomorrow',
                  time: '2:00 PM',
                  type: 'Video Call',
                  icon: <Video className="w-5 h-5" />
                },
                {
                  title: 'Group Support Meeting',
                  provider: 'Facilitated by John Davis',
                  date: 'Thursday',
                  time: '3:30 PM',
                  type: 'In-Person',
                  icon: <Users className="w-5 h-5" />
                },
                {
                  title: 'Mindfulness Workshop',
                  provider: 'Led by Emma Wilson',
                  date: 'Friday',
                  time: '11:00 AM',
                  type: 'Online',
                  icon: <Video className="w-5 h-5" />
                }
              ].map((session, index) => (
                <FloatingCard
                  key={index}
                  delay={index * 0.1}
                  glowEffect
                  glowColor="rgba(59, 95, 138, 0.1)"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-ilight-50 text-ilight-500 
                      flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-8 h-8" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-ilight-700 mb-1">{session.title}</h3>
                          <p className="text-sm text-ilight-400">{session.provider}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-ilight-500">
                          {session.icon}
                          <span>{session.type}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-ilight-400">
                          <Calendar className="w-4 h-4" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-ilight-400">
                          <Clock className="w-4 h-4" />
                          <span>{session.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>
        </Section>

        {/* Calendar View */}
        <Section 
          background="light" 
          padding="md"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Session Calendar"
              description="View and manage your upcoming appointments"
              align="left"
              withGradient
              withDivider
            />
            
            <Card
              variant="default"
              shadow="lg"
              padding="lg"
            >
              <div className="h-96 flex items-center justify-center text-ilight-400">
                <div className="text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-4 text-ilight-300" />
                  <p>Calendar visualization would appear here</p>
                  <p className="text-sm text-ilight-300 mt-2">Showing all your scheduled sessions</p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-ilight-500"></div>
                    <span className="text-sm text-ilight-600">Individual Therapy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-ilight-600">Group Sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-ilight-600">Workshops</span>
                  </div>
                </div>
                <Button
                  variant="gradient"
                  size="sm"
                  icon={<Calendar className="w-4 h-4" />}
                  withShimmer
                >
                  Schedule New Session
                </Button>
              </div>
            </Card>
          </div>
        </Section>

        {/* Past Sessions */}
        <Section 
          background="white" 
          padding="md"
          withPattern
          patternType="dots"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Past Sessions"
              description="Review your previous therapy sessions and notes"
              align="left"
              withGradient
              withDivider
            />
            
            <div className="space-y-6">
              {[
                {
                  title: 'Individual Therapy',
                  provider: 'Dr. Sarah Smith',
                  date: 'March 15, 2024',
                  notes: 'Discussed coping strategies and progress on goals',
                  type: 'Video Call'
                },
                {
                  title: 'Group Support Meeting',
                  provider: 'Facilitated by John Davis',
                  date: 'March 10, 2024',
                  notes: 'Shared experiences and learned from peer support',
                  type: 'In-Person'
                },
                {
                  title: 'Mindfulness Workshop',
                  provider: 'Led by Emma Wilson',
                  date: 'March 5, 2024',
                  notes: 'Practiced meditation techniques and stress management',
                  type: 'Online'
                }
              ].map((session, index) => (
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
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-ilight-700 mb-1">{session.title}</h3>
                        <p className="text-sm text-ilight-400">{session.provider}</p>
                      </div>
                      <div className="text-sm text-ilight-400">{session.date}</div>
                    </div>
                    <p className="text-sm text-ilight-600 mb-4">{session.notes}</p>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<MessageSquare className="w-4 h-4" />}
                      >
                        View Notes
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<Calendar className="w-4 h-4" />}
                      >
                        Schedule Follow-up
                      </Button>
                    </div>
                  </Card>
                </ParallaxEffect>
              ))}
            </div>
          </div>
        </Section>

        {/* Session Types */}
        <Section 
          background="gradient" 
          padding="md"
          gradientFrom="from-ilight-500"
          gradientTo="to-ilight-600"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Available Session Types"
              description="Explore different types of support sessions"
              align="left"
              withGradient
              gradientFrom="from-white"
              gradientTo="to-white/80"
            />
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Individual Therapy",
                  description: "One-on-one sessions with a licensed therapist",
                  features: [
                    "Personalized treatment",
                    "Private and confidential",
                    "Flexible scheduling",
                    "In-person or virtual options"
                  ]
                },
                {
                  title: "Group Support",
                  description: "Connect with others in facilitated group sessions",
                  features: [
                    "Shared experiences",
                    "Peer support",
                    "Professional facilitation",
                    "Topic-focused discussions"
                  ]
                },
                {
                  title: "Workshops",
                  description: "Learn specific skills and techniques",
                  features: [
                    "Expert-led instruction",
                    "Interactive exercises",
                    "Practical skill building",
                    "Resource materials"
                  ]
                }
              ].map((type, index) => (
                <GlassCard
                  key={type.title}
                  opacity={0.1}
                  blur="md"
                >
                  <h3 className="text-xl font-bold mb-4 text-white">{type.title}</h3>
                  <p className="text-white/80 mb-6">{type.description}</p>
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-white/80" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="calm"
                    fullWidth
                    withShimmer
                  >
                    Schedule
                  </Button>
                </GlassCard>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}