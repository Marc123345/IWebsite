import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, MessageSquare, Send, Sparkles, Target } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  type: 'text' | 'analysis' | 'insight';
}

export default function AIFeatureDemo() {
  const [activeFeature, setActiveFeature] = useState<'chat' | 'analysis' | 'insights'>('chat');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const features = [
    {
      id: 'chat',
      icon: <Bot className="w-6 h-6" />,
      label: 'AI Chat',
      description: 'Natural conversation with emotional understanding'
    },
    {
      id: 'analysis',
      icon: <Brain className="w-6 h-6" />,
      label: 'Pattern Analysis',
      description: 'Deep emotional pattern recognition'
    },
    {
      id: 'insights',
      icon: <Target className="w-6 h-6" />,
      label: 'Smart Insights',
      description: 'Personalized recommendations'
    }
  ];

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I understand you're feeling this way. Would you like to explore these emotions together?",
        sender: 'ai',
        type: activeFeature === 'chat' ? 'text' : activeFeature === 'analysis' ? 'analysis' : 'insight'
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-calm border border-ilight-100 overflow-hidden">
      {/* Feature Selection */}
      <div className="p-4 border-b border-ilight-100 overflow-x-auto scrollbar-hide">
        <div className="flex flex-nowrap gap-2 md:gap-4 min-w-max">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id as any)}
              className={`flex-1 p-3 md:p-4 rounded-xl border-2 transition-all min-w-[120px] ${
                activeFeature === feature.id
                  ? 'border-ilight-500 bg-ilight-50'
                  : 'border-ilight-100 hover:border-ilight-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-1 md:mb-2">
                <div className="text-ilight-500">{feature.icon}</div>
                <span className="font-medium text-black text-sm md:text-base">{feature.label}</span>
              </div>
              <p className="text-xs md:text-sm text-ilight-400">{feature.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="h-[400px] flex flex-col">
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-1' : ''}`}>
                <div className={`rounded-xl p-4 ${
                  message.sender === 'user'
                    ? 'bg-ilight-500 text-white'
                    : message.type === 'analysis'
                    ? 'bg-purple-50 border border-purple-200 shadow-calm'
                    : message.type === 'insight'
                    ? 'bg-amber-50 border border-amber-200 shadow-calm'
                    : 'bg-ilight-50 border border-ilight-100 shadow-calm'
                }`}>
                  {message.type === 'analysis' && (
                    <div className="flex items-center gap-2 text-purple-500 mb-2">
                      <Brain className="w-4 h-4" />
                      <span className="text-sm font-medium">Pattern Analysis</span>
                    </div>
                  )}
                  {message.type === 'insight' && (
                    <div className="flex items-center gap-2 text-amber-500 mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-medium">AI Insight</span>
                    </div>
                  )}
                  {message.text}
                </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-ilight-400"
            >
              <Bot className="w-5 h-5" />
              <span>AI is typing...</span>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-ilight-100">
          <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow px-4 py-2 rounded-xl border border-ilight-200 
                focus:outline-none focus:ring-2 focus:ring-ilight-500 focus:border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-4 py-2 bg-ilight-500 text-white rounded-xl 
                hover:bg-ilight-600 transition-colors shadow-calm"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}