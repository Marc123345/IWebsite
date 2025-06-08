import { motion } from 'framer-motion';
import { 
  Users, Heart, MessageSquare, Calendar, Shield, 
  ArrowRight, Brain, Target, Activity, Award 
} from 'lucide-react';

export default function CommunityFlow() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto">
        {/* Flow Chart */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute inset-0 hidden md:block">
            {/* Animated Gradient Lines */}
            <div className="absolute top-1/2 left-[25%] right-[25%] h-1 rounded-full overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-ilight-200 via-ilight-500 to-ilight-200"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
            <div className="absolute top-1/2 left-[75%] right-[25%] h-1 rounded-full overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-ilight-200 via-ilight-500 to-ilight-200"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1
                }}
              />
            </div>
          </div>

          {/* Flow Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Join */}
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
              <div className="bg-white rounded-2xl p-8 shadow-calm hover:shadow-calm-lg 
                transition-all duration-500 border border-ilight-100 hover:border-ilight-200
                relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-ilight-500/5 to-transparent
                  transform -translate-x-full group-hover:translate-x-full transition-transform
                  duration-1000" />
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.1 }}
                    viewport={{ once: true }}
                    className="absolute -top-12 -left-4 text-9xl font-bold text-ilight-100 
                      select-none pointer-events-none"
                  >
                    1
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-ilight-50 to-ilight-100
                      text-ilight-500 flex items-center justify-center mb-6 shadow-calm"
                  >
                    <Users className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-ilight-700">Join the Community</h3>
                  <div className="space-y-4">
                    {[
                      { icon: <Shield className="w-5 h-5" />, text: "Create secure profile" },
                      { icon: <Heart className="w-5 h-5" />, text: "Share your journey" },
                      { icon: <Target className="w-5 h-5" />, text: "Set personal goals" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-ilight-50/50
                          hover:bg-ilight-50 transition-colors duration-300"
                      >
                        <div className="text-ilight-500">{item.icon}</div>
                        <span className="text-ilight-700">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-8 h-8 text-ilight-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
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
              <div className="bg-white rounded-2xl p-8 shadow-calm hover:shadow-calm-lg 
                transition-all duration-500 border border-ilight-100 hover:border-ilight-200
                relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-ilight-500/5 to-transparent
                  transform -translate-x-full group-hover:translate-x-full transition-transform
                  duration-1000" />
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.1 }}
                    viewport={{ once: true }}
                    className="absolute -top-12 -left-4 text-9xl font-bold text-ilight-100 
                      select-none pointer-events-none"
                  >
                    2
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-ilight-50 to-ilight-100
                      text-ilight-500 flex items-center justify-center mb-6 shadow-calm"
                  >
                    <MessageSquare className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-ilight-700">Connect & Share</h3>
                  <div className="space-y-4">
                    {[
                      { icon: <Users className="w-5 h-5" />, text: "Join therapy solutions groups" },
                      { icon: <Calendar className="w-5 h-5" />, text: "Attend events" },
                      { icon: <Brain className="w-5 h-5" />, text: "Share experiences" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-ilight-50/50
                          hover:bg-ilight-50 transition-colors duration-300"
                      >
                        <div className="text-ilight-500">{item.icon}</div>
                        <span className="text-ilight-700">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <ArrowRight className="w-8 h-8 text-ilight-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Grow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
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
                  delay: 1
                }}
              />
              <div className="bg-white rounded-2xl p-8 shadow-calm hover:shadow-calm-lg 
                transition-all duration-500 border border-ilight-100 hover:border-ilight-200
                relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-ilight-500/5 to-transparent
                  transform -translate-x-full group-hover:translate-x-full transition-transform
                  duration-1000" />
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.1 }}
                    viewport={{ once: true }}
                    className="absolute -top-12 -left-4 text-9xl font-bold text-ilight-100 
                      select-none pointer-events-none"
                  >
                    3
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-ilight-50 to-ilight-100
                      text-ilight-500 flex items-center justify-center mb-6 shadow-calm"
                  >
                    <Activity className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-ilight-700">Grow Together</h3>
                  <div className="space-y-4">
                    {[
                      { icon: <Award className="w-5 h-5" />, text: "Track progress" },
                      { icon: <Heart className="w-5 h-5" />, text: "Support others" },
                      { icon: <Target className="w-5 h-5" />, text: "Achieve goals" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-ilight-50/50
                          hover:bg-ilight-50 transition-colors duration-300"
                      >
                        <div className="text-ilight-500">{item.icon}</div>
                        <span className="text-ilight-700">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-24 grid md:grid-cols-4 gap-6">
          {[
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Safe Space",
              description: "Private and secure environment"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Therapy Solutions Network",
              description: "Connect with understanding peers"
            },
            {
              icon: <Brain className="w-6 h-6" />,
              title: "Expert Guidance",
              description: "Professional therapy solutions and resources"
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "Personal Growth",
              description: "Track progress and celebrate wins"
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-ilight-50 to-white rounded-xl p-6 shadow-calm
                border border-ilight-100 hover:shadow-calm-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-xl bg-white text-ilight-500 
                  flex items-center justify-center mb-4 shadow-calm"
              >
                {benefit.icon}
              </motion.div>
              <h4 className="text-lg font-semibold text-ilight-700 mb-2">{benefit.title}</h4>
              <p className="text-ilight-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}