import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle2, 
  Brain, 
  Target, 
  Users, 
  Heart, 
  Activity
} from 'lucide-react';
import { TranslatedContent } from '../../TranslatedContent';

export default function ChallengesSolutionsSection() {
  const challenges = [
    {
      title: "Overwhelming Choices",
      description: "Difficulty in choosing the right therapy solutions options and resources.",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Inconsistent Progress",
      description: "Challenges in maintaining momentum and tracking improvement.",
      icon: <Activity className="w-5 h-5" />,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Limited Guidance",
      description: "Lack of professional direction between sessions.",
      icon: <Brain className="w-5 h-5" />,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Isolation",
      description: "Feeling alone in the personal wellness journey.",
      icon: <Users className="w-5 h-5" />,
      color: "bg-red-100 text-red-600"
    }
  ];

  const solutions = [
    {
      title: "Personalized Guidance",
      description: "AI-powered recommendations based on your unique needs and progress.",
      icon: <Brain className="w-5 h-5" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Progress Tracking",
      description: "Comprehensive monitoring of your personal wellness journey.",
      icon: <Target className="w-5 h-5" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Professional Support",
      description: "Seamless connection with professionals.",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Community Connection",
      description: "Access to peer support and shared experiences.",
      icon: <Users className="w-5 h-5" />,
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Challenges Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-ilight-500/20 to-ilight-600/20 
                rounded-2xl blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 -mx-8 -mt-8 px-8 py-4 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">The Challenge of Self-Navigation</h3>
              </div>
              
              {/* Card Content */}
              <div className="space-y-5">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${challenge.color} flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300`}>
                      {challenge.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-gray-800">{challenge.title}</h4>
                      <p className="text-gray-600">
                        <TranslatedContent dynamicContent={true}>{challenge.description}</TranslatedContent>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-ilight-500/20 to-ilight-600/20 
                rounded-2xl blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 -mx-8 -mt-8 px-8 py-4 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">MyLight Solution</h3>
              </div>
              
              {/* Card Content */}
              <div className="space-y-5">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${solution.color} flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300`}>
                      {solution.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-gray-800">{solution.title}</h4>
                      <p className="text-gray-600">
                        <TranslatedContent dynamicContent={true}>{solution.description}</TranslatedContent>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}