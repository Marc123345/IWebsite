import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, Sparkles, Brain, User, Clock } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const demoResponses = {
  greeting: [
    "Hi! I'm your AI personal wellness companion. How are you feeling today?",
    "Hello! I'm here to provide therapy solutions. Would you like to talk about how you're doing?",
    "Welcome! I'm your personal AI therapy solutions provider. How can I help you today?"
  ],
  emotional: [
    "I hear you. It sounds like you're going through a lot. Would you like to explore these feelings together?",
    "That must be challenging. Can you tell me more about what's been happening?",
    "I understand these feelings can be overwhelming. Let's work through this together."
  ],
  supportive: [
    "You're showing great strength in sharing this. What kind of therapy solutions would be most helpful right now?",
    "I'm here to listen and provide therapy solutions. Would you like to explore some coping strategies?",
    "Your feelings are valid. Let's focus on what we can do to help you feel better."
  ]
};

const getRandomResponse = (category: keyof typeof demoResponses) => {
  const responses = demoResponses[category];
  return responses[Math.floor(Math.random() * responses.length)];
};

export default function AIChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: getRandomResponse('greeting'),
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    setIsTyping(true);
    
    let responseCategory: keyof typeof demoResponses = 'supportive';
    const lowerMessage = inputMessage.toLowerCase();
    
    if (lowerMessage.includes('feel') || lowerMessage.includes('feeling')) {
      responseCategory = 'emotional';
    }

    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
    setIsTyping(false);

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: getRandomResponse(responseCategory),
      sender: 'ai',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, aiMessage]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-calm border border-ilight-100 overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b border-ilight-100 bg-gradient-to-r from-ilight-600 to-ilight-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm 
            flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">iLight AI Assistant</h3>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div 
        ref={chatContainerRef}
        className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-ilight-50/50 to-white"
      >
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start gap-2 max-w-[80%] ${
              message.sender === 'user' ? 'flex-row-reverse' : ''
            }`}>
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br flex-shrink-0
                flex items-center justify-center text-white
                ${message.sender === 'user' 
                  ? 'from-ilight-600 to-ilight-700' 
                  : 'from-ilight-500 to-ilight-600'}`}
              >
                {message.sender === 'user' ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Brain className="w-4 h-4" />
                )}
              </div>
              <div className={`rounded-2xl p-3 ${
                message.sender === 'user'
                  ? 'bg-ilight-600 text-white rounded-tr-none'
                  : 'bg-white border border-ilight-100 text-ilight-700 rounded-tl-none shadow-calm'
              }`}>
                <p className="mb-1">{message.text}</p>
                <div className="text-xs opacity-70 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ilight-500 to-ilight-600 
                flex-shrink-0 flex items-center justify-center text-white">
                <Brain className="w-4 h-4" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-3 border border-ilight-100 shadow-calm">
                <LoadingSpinner size="sm" variant="primary" />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Chat Input - Illustrative Only */}
      <div className="p-4 border-t border-ilight-100">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message... (Illustrative demo only)"
            className="flex-1 px-4 py-2 rounded-xl border border-ilight-200 
              focus:outline-none focus:ring-2 focus:ring-ilight-600 
              focus:border-transparent"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-ilight-600 to-ilight-700 text-white p-3 
              rounded-xl hover:from-ilight-700 hover:to-ilight-800 transition-all duration-300 shadow-calm"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </form>
      </div>

      {/* Features List */}
      <div className="p-4 bg-ilight-50/50 border-t border-ilight-100">
        <div className="flex items-center gap-2 text-sm text-ilight-600">
          <Sparkles className="w-4 h-4 text-ilight-600" />
          <span>Illustrative Demo:</span>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded-full bg-white border border-ilight-100 text-ilight-700 shadow-calm">
              24/7 Therapy Solutions
            </span>
            <span className="px-2 py-1 rounded-full bg-white border border-ilight-100 text-ilight-700 shadow-calm">
              Intervention Detection
            </span>
            <span className="px-2 py-1 rounded-full bg-white border border-ilight-100 text-ilight-700 shadow-calm">
              Personalized Care
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}