import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Brain, Users, Book, Shield, ArrowRight, 
  CheckCircle2, Award, Star, Gift, Target, Building,
  Clock, MessageSquare, Calendar, Activity, Bot, Info
} from 'lucide-react';
import Button from './Button';
import ContentCard from './ContentCard';
import { SmoothTransition, GentleWave, BreathingCircle } from './patterns';

export default function DesignSystem() {
  const [activeTab, setActiveTab] = useState('colors');

  const tabs = [
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'cards', label: 'Cards' },
    { id: 'icons', label: 'Icons' },
    { id: 'animations', label: 'Animations' }
  ];

  return (
    <div className="container-padding py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">iLight Design System</h1>
          <p className="text-xl text-ilight-400">
            A comprehensive guide to our design language and components
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-ilight-100 pb-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-ilight-500 text-white'
                  : 'bg-ilight-50 text-ilight-500 hover:bg-ilight-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Colors */}
        {activeTab === 'colors' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Primary Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                <div key={shade} className="space-y-2">
                  <div 
                    className={`h-24 rounded-xl bg-ilight-${shade} shadow-md`}
                    style={{ backgroundColor: `var(--tw-color-ilight-${shade})` }}
                  ></div>
                  <div className="text-sm font-medium">ilight-{shade}</div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Accent Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-24 rounded-xl bg-ilight-accent-turquoise shadow-md"></div>
                <div className="text-sm font-medium">accent-turquoise</div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-xl bg-ilight-accent-lavender shadow-md"></div>
                <div className="text-sm font-medium">accent-lavender</div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-xl bg-ilight-accent-peach shadow-md"></div>
                <div className="text-sm font-medium">accent-peach</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Calm Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-24 rounded-xl shadow-md" style={{ backgroundColor: '#69D2E7' }}></div>
                <div className="text-sm font-medium">calm-blue</div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-xl shadow-md" style={{ backgroundColor: '#A7DBAB' }}></div>
                <div className="text-sm font-medium">calm-green</div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-xl shadow-md" style={{ backgroundColor: '#9F90CF' }}></div>
                <div className="text-sm font-medium">calm-purple</div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-xl shadow-md" style={{ backgroundColor: '#E0C9A6' }}></div>
                <div className="text-sm font-medium">calm-sand</div>
              </div>
            </div>
          </div>
        )}

        {/* Typography */}
        {activeTab === 'typography' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Typography</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-2">Heading 1</div>
                <h1>This is a Heading 1</h1>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-2">Heading 2</div>
                <h2>This is a Heading 2</h2>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-2">Heading 3</div>
                <h3>This is a Heading 3</h3>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-2">Body Text</div>
                <p>This is regular body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-2">Caption</div>
                <div className="caption">This is a caption text used for smaller, supporting information</div>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-2">Quote</div>
                <div className="quote">"This is a quote style used for testimonials and important statements"</div>
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        {activeTab === 'buttons' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Buttons</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-4">Button Variants</div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="calm">Calm Button</Button>
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-4">Button Sizes</div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-4">Button with Icons</div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" icon={<Heart className="w-5 h-5" />}>
                    With Icon
                  </Button>
                  <Button variant="primary" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                    Icon Right
                  </Button>
                  <Button variant="primary" loading>
                    Loading
                  </Button>
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-4">Rounded Buttons</div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" rounded="default">Default Rounded</Button>
                  <Button variant="primary" rounded="full">Fully Rounded</Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cards */}
        {activeTab === 'cards' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Cards</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ContentCard>
                <h3 className="text-xl font-bold mb-4 text-ilight-600">Basic Card</h3>
                <p className="text-ilight-400">This is a basic content card with default styling.</p>
              </ContentCard>
              
              <ContentCard padding="lg" shadow="lg">
                <h3 className="text-xl font-bold mb-4 text-ilight-600">Large Padding & Shadow</h3>
                <p className="text-ilight-400">This card has larger padding and shadow.</p>
              </ContentCard>
              
              <ContentCard className="bg-ilight-50">
                <h3 className="text-xl font-bold mb-4 text-ilight-600">Custom Background</h3>
                <p className="text-ilight-400">This card has a custom background color.</p>
              </ContentCard>
              
              <ContentCard hover={false} border={false}>
                <h3 className="text-xl font-bold mb-4 text-ilight-600">No Hover & No Border</h3>
                <p className="text-ilight-400">This card has hover effects and border disabled.</p>
              </ContentCard>
            </div>
          </div>
        )}

        {/* Icons */}
        {activeTab === 'icons' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Icons</h2>
            
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-sm text-ilight-400 mb-4">Common Icons</div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {[
                  { icon: <Heart className="w-6 h-6" />, name: 'Heart' },
                  { icon: <Brain className="w-6 h-6" />, name: 'Brain' },
                  { icon: <Users className="w-6 h-6" />, name: 'Users' },
                  { icon: <Shield className="w-6 h-6" />, name: 'Shield' },
                  { icon: <Book className="w-6 h-6" />, name: 'Book' },
                  { icon: <Target className="w-6 h-6" />, name: 'Target' },
                  { icon: <Award className="w-6 h-6" />, name: 'Award' },
                  { icon: <Star className="w-6 h-6" />, name: 'Star' },
                  { icon: <Gift className="w-6 h-6" />, name: 'Gift' },
                  { icon: <Calendar className="w-6 h-6" />, name: 'Calendar' },
                  { icon: <Clock className="w-6 h-6" />, name: 'Clock' },
                  { icon: <MessageSquare className="w-6 h-6" />, name: 'MessageSquare' },
                  { icon: <Activity className="w-6 h-6" />, name: 'Activity' },
                  { icon: <Bot className="w-6 h-6" />, name: 'Bot' },
                  { icon: <Building className="w-6 h-6" />, name: 'Building' },
                  { icon: <Info className="w-6 h-6" />, name: 'Info' },
                  { icon: <ArrowRight className="w-6 h-6" />, name: 'ArrowRight' },
                  { icon: <CheckCircle2 className="w-6 h-6" />, name: 'CheckCircle2' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-lg bg-ilight-50 flex items-center justify-center text-ilight-500">
                      {item.icon}
                    </div>
                    <div className="text-sm text-ilight-400">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Animations */}
        {activeTab === 'animations' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Animations</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-4">Smooth Transition</div>
                <SmoothTransition>
                  <div className="p-6 bg-ilight-50 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Smooth Fade In</h3>
                    <p>This content fades in smoothly when it enters the viewport</p>
                  </div>
                </SmoothTransition>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-4">Gentle Wave</div>
                <div className="h-40 bg-ilight-50 rounded-lg relative overflow-hidden">
                  <GentleWave color="rgba(84, 72, 88, 0.1)" height={20} position="bottom" />
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-4">Breathing Circle</div>
                <div className="h-40 bg-ilight-50 rounded-lg relative overflow-hidden flex items-center justify-center">
                  <BreathingCircle size="sm" duration={4} />
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-sm text-ilight-400 mb-4">Button Hover Animation</div>
                <div className="flex justify-center">
                  <Button variant="primary" size="lg">
                    Hover Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}