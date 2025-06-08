import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart, Shield, Users, Eye, MessageSquare
} from 'lucide-react';

interface PromiseTabsProps {
  className?: string;
}

export default function PromiseTabs({ className = '' }: PromiseTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const promises = [
    {
      title: "A Safe Space",
      icon: <Shield className="w-5 h-5" />,
      description: "Your well-being is our priority. We foster a judgment-free, inclusive environment where you can be your authentic self or, if you prefer, allow for anonymity.",
      features: ["Judgment-free environment", "Inclusive community", "Option for anonymity", "Secure platform"]
    },
    {
      title: "Protecting Your Privacy",
      icon: <Eye className="w-5 h-5" />,
      description: "Your trust matters. We uphold the highest standards of confidentiality and data security—because your story is yours alone.",
      features: ["End-to-end encryption", "Protection of Patients' Privacy", "Data ownership", "Transparent policies"]
    },
    {
      title: "Offering Compassionate Support",
      icon: <Heart className="w-5 h-5" />,
      description: "Whether through licensed professionals, virtual caregivers, or community support, we promise empathy, not just efficiency.",
      features: ["Licensed professionals", "AI-powered support", "Peer connections", "Empathetic approach"]
    },
    {
      title: "Making Wellness Accessible",
      icon: <Users className="w-5 h-5" />,
      description: "We believe personal wellness care is a right, not a privilege. Our platform is designed to be affordable, intuitive, and easy to use for everyone.",
      features: ["Affordable options", "Intuitive interface", "Accessibility features", "Multiple languages"]
    },
    {
      title: "Listening and Growing With You",
      icon: <MessageSquare className="w-5 h-5" />,
      description: "We're always learning. Your feedback guides us to improve our tools, features, and services so we can serve you, and others better every day.",
      features: ["Continuous improvement", "User feedback integration", "Regular updates", "Community-driven development"]
    }
  ];

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-ilight-100 overflow-hidden ${className}`}>
      {/* Tabs - Horizontal scrollable on mobile */}
      <div className="flex overflow-x-auto scrollbar-hide border-b border-ilight-100 px-4 py-2">
        {promises.map((promise, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center gap-2 px-5 py-3 transition-all rounded-full text-sm whitespace-nowrap my-2 mx-2
              ${activeTab === index
                ? 'bg-ilight-100 text-ilight-700 font-semibold'
                : 'text-ilight-500 hover:bg-ilight-50/60'}
            `}
          >
            {promise.icon}
            <span className="truncate">{promise.title}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-ilight-50 to-ilight-100
                text-ilight-500 flex items-center justify-center mb-4 shadow-inner flex-shrink-0 mx-auto sm:mx-0">
                {promises[activeTab].icon}
              </div>
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-ilight-800 text-center sm:text-left">
                  {promises[activeTab].title}
                </h3>
                <p className="text-ilight-700 leading-relaxed text-sm sm:text-base text-center sm:text-left">
                  {promises[activeTab].description}
                </p>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {promises[activeTab].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 bg-ilight-50 p-2 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-ilight-500 flex-shrink-0"></div>
                      <span className="text-sm text-ilight-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}