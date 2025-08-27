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

import TranslatedContent from '../../TranslatedContent';

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
      inactiveColor: 'bg-white text-ilight-500/70 border-gray-200',
      content: {
        title: <TranslatedContent dynamicContent={true}>Identifying Emotional Patterns</TranslatedContent>,
        description: <TranslatedContent dynamicContent={true}>Our AI identifies patterns in user behavior — from the words they type to their interaction frequency — to detect personal wellness signals in real time.</TranslatedContent>,
        points: [
          <TranslatedContent dynamicContent={true}>Natural language processing detects emotional states</TranslatedContent>,
          <TranslatedContent dynamicContent={true}>Behavioral pattern recognition across interactions</TranslatedContent>,
          <TranslatedContent dynamicContent={true}>Early identification of potential concerns</TranslatedContent>,
          <TranslatedContent dynamicContent={true}>Personalized response based on historical data</TranslatedContent>
        ]
      }
    },
    {
      id: 'personalized-insights',
      title: 'Personalized Insights',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-ilight-500 text-white border-ilight-500',
      inactiveColor: 'bg-white text-ilight-500/70 border-gray-200',
      content: {
        title: <TranslatedContent dynamicContent={true}>Tailored Recommendations</TranslatedContent>,
        description: <TranslatedContent dynamicContent={true}>These insights guide tailored recommendations, match users to the right providers or peer support, and track improvements week by week.</TranslatedContent>,
        points: [
          <TranslatedContent dynamicContent={true}>Customized therapy solutions approaches</TranslatedContent>,
          <TranslatedContent dynamicContent={true}>Provider matching based on specific needs</TranslatedContent>,
          <TranslatedContent dynamicContent={true}>Resource recommendations aligned with goals</TranslatedContent>,
          <TranslatedContent dynamicContent={true}>Adaptive support intensity based on current state</TranslatedContent>
        ]
      }
    },
    {
      id: 'continuous-improvement',
      title: 'Continuous Learning',
      icon: <Activity className="w-6 h-6" />,
      color: 'bg-ilight-500 text-white border-ilight-500',
      inactiveColor: 'bg-white text-ilight-500/70 border-gray-200',
      content: {
        title: <TranslatedContent dynamicContent={true}>Evolving With You</TranslatedContent>,
        description: <TranslatedContent dynamicContent={true}>Our system continuously learns from interactions, improving its ability to provide relevant support and measuring outcomes over time.</TranslatedContent>,
        points: [
          <TranslatedContent dynamicContent={true}>Feedback integration for improved accuracy</TranslatedContent>,
          <TranslatedContent dynamicContent={true}>Outcome measurement to validate effectiveness</TranslatedContent>,
          <TranslatedContent dynamicContent={true}>Adaptation to changing user needs</TranslatedContent>,
          <TranslatedContent dynamicContent={true}>Continuous model refinement and enhancement</TranslatedContent>
        ]
      }
    }
  ];

  return (
    <div className={`${className}`}>
      {/* Tabs Navigation - Mobile-friendly scrollable tabs */}
      <div className="relative flex items-center justify-between max-w-md mx-auto mb-8 overflow-x-auto pb-4 scrollbar-hide">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 h-1 bg-gray-200 w-full z-0" style={{ transform: 'translateY(-50%)' }}>
          <motion.div 
            className="h-full bg-ilight-500 transition-all duration-700 ease-out"
            animate={{ width: `${(activeTab / (tabs.length - 1)) * 100}%` }}
          />
        </div>

        {/* Tab Buttons */}
        <div className="flex space-x-6 md:space-x-10 relative z-10">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              aria-label={`View point: ${tab.title}`}
              className="relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-ilight-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-transform duration-300 ease-out flex-shrink-0"
              style={{ 
                transform: `scale(${activeTab === index ? 1.1 : 0.9})` 
              }}
              onClick={() => setActiveTab(index)}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-colors duration-300 ease-out border-2 group-hover:shadow-lg group-hover:shadow-ilight-500/30 ${
                activeTab === index ? tab.color : tab.inactiveColor
              }`}>
                {tab.icon}
              </div>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap px-2 py-1 bg-ilight-600 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
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
          <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center bg-ilight-50 text-ilight-500 mx-auto md:mx-0">
              {tabs[activeTab].icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-ilight-700 mb-3 text-center md:text-left">
                {tabs[activeTab].content.title}
              </h3>
              <p className="text-ilight-600 text-base text-center md:text-left">
                {tabs[activeTab].content.description}
              </p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-3">
            {tabs[activeTab].content.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-ilight-50 p-4 rounded-lg"
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