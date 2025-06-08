import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, Send, User, Users, Clock } from 'lucide-react';
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

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: '1',
      name: 'Dr. Sarah Smith',
      role: 'Therapist',
      lastMessage: 'Looking forward to our next session!',
      time: '10:30 AM',
      unread: 2
    },
    {
      id: '2',
      name: 'Support Group #1',
      role: 'Group',
      lastMessage: 'Thank you all for sharing today',
      time: 'Yesterday',
      unread: 0
    },
    {
      id: '3',
      name: 'John Davis',
      role: 'Support Coordinator',
      lastMessage: 'How are you feeling today?',
      time: '2 days ago',
      unread: 1
    }
  ];

  const messages = [
    {
      id: '1',
      sender: 'Dr. Sarah Smith',
      content: 'Hi Sarah, how are you doing today?',
      time: '10:30 AM',
      isMe: false
    },
    {
      id: '2',
      sender: 'Me',
      content: "Hi Dr. Smith! I'm doing better, thanks for asking.",
      time: '10:31 AM',
      isMe: true
    },
    {
      id: '3',
      sender: 'Dr. Sarah Smith',
      content: "That's great to hear! Have you been practicing the techniques we discussed?",
      time: '10:32 AM',
      isMe: false
    }
  ];

  return (
    <>
      <SEO 
        title="MyLight Messages - Secure Communication"
        description="Communicate securely with your care team and support network."
        canonical="/mylight/messages"
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
                Messages
              </TextReveal>
              <p className="text-xl text-white/80">
                Communicate with your care team and support network
              </p>
            </div>
          </div>
        </Section>

        <Section 
          background="white" 
          padding="md"
          withPattern
          patternType="dots"
          className="-mt-6"
        >
          <div className="max-w-7xl mx-auto">
            <Card
              variant="default"
              shadow="lg"
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-3">
                {/* Chat List */}
                <div className="border-r border-ilight-100">
                  <div className="p-4 border-b border-ilight-100">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search messages..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-ilight-200 
                          focus:outline-none focus:ring-2 focus:ring-ilight-500 focus:border-transparent"
                      />
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ilight-400" />
                    </div>
                  </div>

                  <div className="divide-y divide-ilight-100">
                    {chats.map((chat) => (
                      <motion.button
                        key={chat.id}
                        onClick={() => setSelectedChat(chat.id)}
                        className={`w-full p-4 text-left hover:bg-ilight-50 transition-colors 
                          ${selectedChat === chat.id ? 'bg-ilight-50' : ''}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-ilight-100 flex items-center 
                            justify-center flex-shrink-0">
                            {chat.role === 'Group' ? (
                              <Users className="w-5 h-5 text-ilight-500" />
                            ) : (
                              <User className="w-5 h-5 text-ilight-500" />
                            )}
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-start mb-1">
                              <div className="font-medium text-ilight-600 truncate">
                                {chat.name}
                              </div>
                              <div className="text-xs text-ilight-400 flex-shrink-0">
                                {chat.time}
                              </div>
                            </div>
                            <div className="text-sm text-ilight-400 truncate">
                              {chat.lastMessage}
                            </div>
                          </div>
                          {chat.unread > 0 && (
                            <div className="w-5 h-5 rounded-full bg-ilight-500 text-white 
                              text-xs flex items-center justify-center flex-shrink-0">
                              {chat.unread}
                            </div>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Chat Window */}
                <div className="col-span-2 flex flex-col h-[600px]">
                  {selectedChat ? (
                    <>
                      {/* Chat Header */}
                      <div className="p-4 border-b border-ilight-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-ilight-100 flex items-center 
                            justify-center">
                            <User className="w-5 h-5 text-ilight-500" />
                          </div>
                          <div>
                            <div className="font-medium text-ilight-600">Dr. Sarah Smith</div>
                            <div className="text-sm text-ilight-400">Therapist</div>
                          </div>
                        </div>
                      </div>

                      {/* Messages */}
                      <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-ilight-50/30">
                        {messages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`flex items-start gap-2 max-w-[80%] ${
                              msg.isMe ? 'flex-row-reverse' : ''
                            }`}>
                              <div className={`w-8 h-8 rounded-full bg-gradient-to-br flex-shrink-0
                                flex items-center justify-center text-white
                                ${msg.isMe 
                                  ? 'from-ilight-500 to-ilight-600' 
                                  : 'from-ilight-400 to-ilight-500'}`}
                              >
                                {msg.isMe ? (
                                  <User className="w-4 h-4" />
                                ) : (
                                  <User className="w-4 h-4" />
                                )}
                              </div>
                              <div className={`rounded-2xl p-3 ${
                                msg.isMe
                                  ? 'bg-ilight-500 text-white rounded-tr-none'
                                  : 'bg-white border border-ilight-100 text-ilight-700 rounded-tl-none shadow-calm'
                              }`}>
                                <p className="mb-1">{msg.content}</p>
                                <div className="text-xs opacity-70 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {msg.time}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Message Input */}
                      <div className="p-4 border-t border-ilight-100">
                        <form className="flex gap-2">
                          <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-grow px-4 py-2 rounded-lg border border-ilight-200 
                              focus:outline-none focus:ring-2 focus:ring-ilight-500 
                              focus:border-transparent"
                          />
                          <Button
                            type="submit"
                            variant="gradient"
                            icon={<Send className="w-5 h-5" />}
                            withShimmer
                          />
                        </form>
                      </div>
                    </>
                  ) : (
                    <div className="flex-grow flex items-center justify-center text-ilight-400 bg-ilight-50/30">
                      <div className="text-center">
                        <MessageSquare className="w-12 h-12 mx-auto mb-4" />
                        <p>Select a conversation to start messaging</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* Message Settings */}
        <Section 
          background="light" 
          padding="md"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Message Settings"
              description="Customize your messaging experience"
              align="left"
              withGradient
              withDivider
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <ParallaxEffect
                direction="up"
                speed={0.3}
              >
                <Card
                  variant="default"
                  shadow="lg"
                >
                  <h3 className="text-lg font-semibold mb-4 text-ilight-700">Notification Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-ilight-600">Email Notifications</div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-ilight-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ilight-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ilight-500"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-ilight-600">Push Notifications</div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-ilight-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ilight-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ilight-500"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-ilight-600">Sound Alerts</div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-ilight-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ilight-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ilight-500"></div>
                      </label>
                    </div>
                  </div>
                </Card>
              </ParallaxEffect>
              
              <ParallaxEffect
                direction="up"
                speed={0.3}
              >
                <Card
                  variant="glass"
                  shadow="lg"
                  className="bg-ilight-50/50"
                >
                  <h3 className="text-lg font-semibold mb-4 text-ilight-700">Privacy Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-ilight-600">Read Receipts</div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-ilight-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ilight-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ilight-500"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-ilight-600">Online Status</div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-ilight-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ilight-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ilight-500"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-ilight-600">Message Archiving</div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-ilight-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ilight-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ilight-500"></div>
                      </label>
                    </div>
                  </div>
                </Card>
              </ParallaxEffect>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}