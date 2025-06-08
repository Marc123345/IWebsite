import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  Activity, 
  CheckCircle2, 
  Sparkles, 
  Zap
} from 'lucide-react';

interface DataInsightsTabsProps {
  className?: string;
}

export default function DataInsightsTabs({ className = '' }: DataInsightsTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 'pattern-recognition',
      title: 'Pattern Recognition',
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-ilight-500 text-white border-ilight-500',
      inactiveColor: 'bg-neutral-800 text-ilight-500/70 border-neutral-700',
      content: {
        title: 'Identifying Emotional Patterns',
        description: 'Our AI identifies patterns in user behavior — from the words they type to their interaction frequency — to detect personal wellness signals in real time.',
        points: [
          'Natural language processing detects emotional states',
          'Behavioral pattern recognition across interactions',
          'Early identification of potential concerns',
          'Personalized response based on historical data'
        ]
      }
    },
    {
      id: 'personalized-insights',
      title: 'Personalized Insights',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-ilight-500 text-white border-ilight-500',
      inactiveColor: 'bg-neutral-800 text-ilight-500/70 border-neutral-700',
      content: {
        title: 'Tailored Recommendations',
        description: 'These insights guide tailored recommendations, match users to the right providers or peer support, and track improvements week by week.',
        points: [
          'Customized therapy solutions approaches',
          'Provider matching based on specific needs',
          'Resource recommendations aligned with goals',
          'Adaptive support intensity based on current state'
        ]
      }
    },
    {
      id: 'continuous-improvement',
      title: 'Continuous Learning',
      icon: <Activity className="w-6 h-6" />,
      color: 'bg-ilight-500 text-white border-ilight-500',
      inactiveColor: 'bg-neutral-800 text-ilight-500/70 border-neutral-700',
      content: {
        title: 'Evolving With You',
        description: 'Our system continuously learns from interactions, improving its ability to provide relevant support and measuring outcomes over time.',
        points: [
          'Feedback integration for improved accuracy',
          'Outcome measurement to validate effectiveness',
          'Adaptation to changing user needs',
          'Continuous model refinement and enhancement'
        ]
      }
    }
  ];

  return (
    <div className={`${className}`}>
      {/* Tabs Navigation - Mobile-friendly scrollable tabs */}
      <div className="relative flex items-center justify-between max-w-md mx-auto mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 h-1 bg-neutral-700/50 w-full" style={{ transform: 'translateY(-50%)' }}>
          <motion.div 
            className="h-full bg-ilight-500 transition-all duration-700 ease-out"
            animate={{ width: `${(activeTab / (tabs.length - 1)) * 100}%` }}
          />
        </div>

        {/* Tab Buttons */}
        <div className="flex space-x-4 md:space-x-8 relative">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              aria-label={`View point: ${tab.title}`}
              className="relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-ilight-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-darkest transition-transform duration-300 ease-out flex-shrink-0"
              style={{ 
                transform: `scale(${activeTab === index ? 1.1 : 0.9})` 
              }}
              onClick={() => setActiveTab(index)}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300 ease-out border-2 group-hover:shadow-lg group-hover:shadow-ilight-500/30 ${
                activeTab === index ? tab.color : tab.inactiveColor
              }`}>
                {tab.icon}
              </div>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap px-2 py-1 bg-neutral-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 pointer-events-none">
                {tab.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl p-6 shadow-xl border border-ilight-100">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center bg-ilight-50 text-ilight-500 mx-auto md:mx-0">
              {tabs[activeTab].icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-ilight-700 mb-2 text-center md:text-left">
                {tabs[activeTab].content.title}
              </h3>
              <p className="text-ilight-600 text-base text-center md:text-left">
                {tabs[activeTab].content.description}
              </p>
            </div>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-3">
            {tabs[activeTab].content.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2 bg-ilight-50 p-3 rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-ilight-500 flex-shrink-0 mt-0.5" />
                <span className="text-ilight-700">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}