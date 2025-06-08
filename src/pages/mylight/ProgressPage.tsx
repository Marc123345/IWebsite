import { motion } from 'framer-motion';
import { Activity, ArrowUp, Brain, Calendar, CheckCircle2, Target } from 'lucide-react';
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

export default function ProgressPage() {
  return (
    <>
      <SEO 
        title="MyLight Progress - Track Your Mental Health Journey"
        description="Monitor your mental health progress, track goals, and view achievements over time."
        canonical="/mylight/progress"
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
                Your Progress
              </TextReveal>
              <p className="text-xl text-white/80">
                Track your mental health journey and celebrate your achievements
              </p>
            </div>

            {/* Progress Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: 'Overall Progress',
                  value: '78%',
                  change: '+12%',
                  icon: <Activity className="w-6 h-6" />,
                  color: 'from-green-500 to-green-600'
                },
                {
                  title: 'Goals Completed',
                  value: '15',
                  change: '+3',
                  icon: <Target className="w-6 h-6" />,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  title: 'Streak',
                  value: '7 Days',
                  change: '+2',
                  icon: <Calendar className="w-6 h-6" />,
                  color: 'from-purple-500 to-purple-600'
                }
              ].map((stat, index) => (
                <GlassCard
                  key={stat.title}
                  opacity={0.1}
                  blur="md"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} 
                    text-white flex items-center justify-center mb-4`}>
                    {stat.icon}
                  </div>
                  <div className="text-sm text-white/70 mb-1">{stat.title}</div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="flex items-center text-green-300 text-sm">
                      <ArrowUp className="w-4 h-4" />
                      {stat.change}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </Section>

        {/* Goals Progress */}
        <Section 
          background="white" 
          padding="md"
          withPattern
          patternType="dots"
          className="-mt-6"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Current Goals"
              align="left"
              withGradient
              withDivider
            />
            
            <div className="space-y-6">
              {[
                {
                  title: 'Practice Daily Mindfulness',
                  progress: 80,
                  target: '10 minutes daily',
                  status: 'On Track'
                },
                {
                  title: 'Weekly Exercise Routine',
                  progress: 60,
                  target: '3 times per week',
                  status: 'In Progress'
                },
                {
                  title: 'Journal Writing',
                  progress: 40,
                  target: 'Daily entry',
                  status: 'Needs Focus'
                }
              ].map((goal, index) => (
                <FloatingCard
                  key={index}
                  delay={index * 0.1}
                  glowEffect
                  glowColor="rgba(59, 95, 138, 0.1)"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-ilight-700">{goal.title}</div>
                      <div className="text-sm text-ilight-400">{goal.target}</div>
                    </div>
                    <div className="h-2 bg-ilight-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        className="h-full bg-gradient-to-r from-ilight-500 to-ilight-600"
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-ilight-500">{goal.progress}% Complete</div>
                      <div className="text-ilight-400">{goal.status}</div>
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>
        </Section>

        {/* Recent Achievements */}
        <Section 
          background="light" 
          padding="md"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Recent Achievements"
              align="left"
              withGradient
              withDivider
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Brain className="w-6 h-6" />,
                  title: 'Mindfulness Master',
                  description: 'Completed 30 days of meditation practice',
                  date: '2 days ago'
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  title: 'Consistency Champion',
                  description: 'Maintained daily check-ins for 7 days',
                  date: '1 week ago'
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: 'Goal Getter',
                  description: 'Achieved first mental health milestone',
                  date: '2 weeks ago'
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6" />,
                  title: 'Progress Pioneer',
                  description: 'Completed initial assessment and set goals',
                  date: '3 weeks ago'
                }
              ].map((achievement, index) => (
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
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-ilight-50 text-ilight-500 
                        flex items-center justify-center flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div>
                        <div className="font-medium text-ilight-700 mb-1">
                          {achievement.title}
                        </div>
                        <div className="text-sm text-ilight-600 mb-2">
                          {achievement.description}
                        </div>
                        <div className="text-sm text-ilight-500">{achievement.date}</div>
                      </div>
                    </div>
                  </Card>
                </ParallaxEffect>
              ))}
            </div>
          </div>
        </Section>

        {/* Mood Trends */}
        <Section 
          background="white" 
          padding="md"
          withPattern
          patternType="dots"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Mood Trends"
              description="Track your emotional patterns over time"
              align="left"
              withGradient
              withDivider
            />
            
            <Card
              variant="default"
              shadow="lg"
              padding="lg"
            >
              <div className="h-64 flex items-center justify-center text-ilight-400">
                <div className="text-center">
                  <Activity className="w-12 h-12 mx-auto mb-4 text-ilight-300" />
                  <p>Mood chart visualization would appear here</p>
                  <p className="text-sm text-ilight-300 mt-2">Tracking your daily mood entries over time</p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-7 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                  <div key={day} className="text-center">
                    <div className="text-sm text-ilight-400 mb-2">{day}</div>
                    <div className={`w-full h-1 rounded-full ${
                      [0, 3, 6].includes(i) ? 'bg-red-300' :
                      [1, 4].includes(i) ? 'bg-yellow-300' :
                      'bg-green-300'
                    }`}></div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <div className="text-sm text-ilight-400">Last 7 days</div>
                <Button
                  variant="outline"
                  size="sm"
                >
                  View Details
                </Button>
              </div>
            </Card>
          </div>
        </Section>

        {/* Insights */}
        <Section 
          background="gradient" 
          padding="md"
          gradientFrom="from-ilight-500"
          gradientTo="to-ilight-600"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="AI Insights"
              description="Personalized observations based on your progress"
              align="left"
              withGradient
              gradientFrom="from-white"
              gradientTo="to-white/80"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Mindfulness Impact",
                  insight: "Your mood scores are consistently higher on days following mindfulness practice. Consider making this a daily priority.",
                  date: "Generated today"
                },
                {
                  title: "Sleep Pattern",
                  insight: "There appears to be a correlation between your reported sleep quality and emotional resilience the following day.",
                  date: "Generated yesterday"
                }
              ].map((insight, index) => (
                <GlassCard
                  key={insight.title}
                  opacity={0.1}
                  blur="md"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 text-white 
                      flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-2">
                        {insight.title}
                      </div>
                      <p className="text-white/80 mb-2">
                        {insight.insight}
                      </p>
                      <div className="text-sm text-white/60">{insight.date}</div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </Section>

        {/* Next Steps */}
        <Section 
          background="white" 
          padding="md"
          withPattern
          patternType="dots"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Recommended Next Steps"
              description="Personalized suggestions to continue your progress"
              align="left"
              withGradient
              withDivider
            />
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Brain className="w-6 h-6" />,
                  title: "Try Guided Meditation",
                  description: "Based on your progress, a guided meditation session could help with stress reduction",
                  action: "Start Session"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Set a New Goal",
                  description: "You've completed several goals. Consider adding a new challenge to your journey",
                  action: "Add Goal"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Join a Support Group",
                  description: "Connect with others who share similar experiences and goals",
                  action: "Find Groups"
                }
              ].map((step, index) => (
                <FloatingCard
                  key={step.title}
                  delay={index * 0.1}
                  glowEffect
                  glowColor="rgba(59, 95, 138, 0.1)"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-ilight-50 text-ilight-500 
                      flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-ilight-700">{step.title}</h3>
                    <p className="text-ilight-600 mb-6">{step.description}</p>
                  </div>
                  <Button
                    variant="gradient"
                    fullWidth
                    withShimmer
                  >
                    {step.action}
                  </Button>
                </FloatingCard>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}