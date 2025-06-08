import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Star, Trophy, Medal, Crown, Heart, Smile, Frown,
  Meh, Laugh, Brain, Shield, UserCircle2, Users,
  EyeOff, Sparkles, Rocket, Zap, Award, CheckCircle2,
  ArrowRight, Gift, Lightbulb, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

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
import useMediaQuery from '../../hooks/useMediaQuery';

// Import Beaker icon from lucide-react
import { Beaker } from 'lucide-react';

const moodAvatars = [
  { icon: <Laugh className="w-10 h-10" />, mood: "Excited", color: "from-green-400 to-green-600", hoverColor: "hover:from-green-500 hover:to-green-700" },
  { icon: <Smile className="w-10 h-10" />, mood: "Happy", color: "from-blue-400 to-blue-600", hoverColor: "hover:from-blue-500 hover:to-blue-700" },
  { icon: <Meh className="w-10 h-10" />, mood: "Neutral", color: "from-yellow-400 to-yellow-600", hoverColor: "hover:from-yellow-500 hover:to-yellow-700" },
  { icon: <Frown className="w-10 h-10" />, mood: "Sad", color: "from-purple-400 to-purple-600", hoverColor: "hover:from-purple-500 hover:to-purple-700" }
];

export default function GamificationPage() {
  const [customAvatarUrl, setCustomAvatarUrl] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showPrizeWheel, setShowPrizeWheel] = useState(false);
  const [isWheelSpinning, setIsWheelSpinning] = useState(false);
  const [wheelPrize, setWheelPrize] = useState<string | null>(null);
  const [showDice, setShowDice] = useState(false);
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [isDiceRolling, setIsDiceRolling] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Prize wheel options
  const prizes = [
    "50 Points", "Bonus Streak", "Daily Challenge", "Mystery Gift", 
    "10 Points", "Meditation Pack", "25 Points", "Badge Unlock"
  ];

  // Daily challenges
  const challenges = [
    { title: "Mindfulness Moment", description: "Complete a 5-minute meditation", points: 15, icon: <Brain className="w-5 h-5" /> },
    { title: "Gratitude Journal", description: "Write down 3 things you're grateful for", points: 10, icon: <Heart className="w-5 h-5" /> },
    { title: "Mood Check-in", description: "Record your mood 3 times today", points: 5, icon: <Smile className="w-5 h-5" /> },
    { title: "Support Circle", description: "Connect with someone in the community", points: 20, icon: <Users className="w-5 h-5" /> }
  ];

  // Handle mood selection
  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    
    // Trigger small confetti burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Handle prize wheel spin
  const spinWheel = () => {
    if (isWheelSpinning) return;
    
    setIsWheelSpinning(true);
    setWheelPrize(null);
    
    // Random number of full rotations (3-5) plus random prize
    const rotations = 3 + Math.floor(Math.random() * 3);
    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const degrees = rotations * 360 + (prizeIndex * (360 / prizes.length));
    
    setTimeout(() => {
      setWheelPrize(prizes[prizeIndex]);
      
      // Trigger confetti for prize win
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      setTimeout(() => {
        setIsWheelSpinning(false);
      }, 1000);
    }, 3000);
  };

  // Handle dice roll
  const rollDice = () => {
    if (isDiceRolling) return;
    
    setIsDiceRolling(true);
    setDiceValue(null);
    
    // Simulate dice roll with random value
    setTimeout(() => {
      const value = Math.floor(Math.random() * 6) + 1;
      setDiceValue(value);
      
      // Trigger confetti for high rolls (5-6)
      if (value >= 5) {
        confetti({
          particleCount: value * 20,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
      
      setTimeout(() => {
        setIsDiceRolling(false);
      }, 500);
    }, 1000);
  };

  // Handle CTA button click
  const handleCtaClick = () => {
    // Trigger confetti explosion
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { y: 0.7 }
    });
  };

  return (
    <>
      <SEO 
        title="Gamification & Rewards - iLight"
        description="Experience our engaging gamification system with mood avatars, achievements, and rewards while maintaining privacy and anonymity."
        canonical="/how-it-works/gamification"
      />
      <div className="bg-gray-50 min-h-screen">

        {/* Hero */}
        <section
          className="relative px-4 pt-32 pb-24 min-h-[600px] overflow-hidden"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/dadgglcaq/image/upload/v1747220644/envato-labs-ai-d28c167f-ea98-40e6-b75b-ba419b37e721_dukeq7.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0">
            <AnimatedBackground
              variant="gradient"
              intensity="medium"
              primaryColor="rgba(40, 65, 95, 0.8)"
              secondaryColor="rgba(30, 50, 80, 0.8)"
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <TextReveal
              direction="up"
              staggerChildren={0.05}
              className="text-white mb-8 text-4xl sm:text-5xl md:text-7xl font-bold font-serif"
              enhancedContrast={true}
            >
              Gamification & Rewards
            </TextReveal>

            <GlassCard className="max-w-3xl mx-auto p-6 border border-white/10" opacity={0.15} blur="sm" enhancedContrast={true}>
              <p className="text-base sm:text-xl text-gray-100 leading-relaxed">
                Goal setting and progress optimization stimulated by gamification and rewards. Innovative Rewards program being developed to stimulate your engagement and reward progress while maintaining your privacy.
              </p>
              <p className="text-base sm:text-xl text-gray-100 leading-relaxed mt-4">
                Future Rewards for the PURPOSE of benefiting others with recommendations, referring ILIGHT participants in need, progress and many other stimulants in HELPING US, HELP YOU, HELP OTHERS…BRING THE RIGHT CARE TO THE RIGHT PERSON AT THE RIGHT TIME.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Mood Avatars */}
        <Section background="white" padding="lg" className="-mt-20 relative z-10 pt-24 md:pt-28" withPattern patternType="dots">
          <SectionHeading
            title="Express Your Mood"
            description="Choose an avatar that represents how you're feeling, or stay anonymous"
            align="center"
            withDivider
            textColor="text-black"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {moodAvatars.map((avatar) => (
              <ParallaxEffect key={avatar.mood} direction="up" speed={0.3}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMoodSelect(avatar.mood)}
                  className={`text-center bg-white/60 backdrop-blur-sm border border-gray-200/50 p-4 md:p-6 rounded-xl
                             hover:shadow-xl transform transition-all duration-300 cursor-pointer
                             ${selectedMood === avatar.mood ? 'ring-4 ring-ilight-500 shadow-lg' : 'shadow-md'}`}
                >
                  <div className={`w-14 h-14 md:w-20 md:h-20 mx-auto mb-3 md:mb-5 rounded-full bg-gradient-to-br ${avatar.color} ${avatar.hoverColor}
                                   text-white flex items-center justify-center shadow-md transition-colors duration-300`}>
                    {avatar.icon}
                  </div>
                  <h3 className="font-medium text-base md:text-lg text-black">{avatar.mood}</h3>
                  
                  {selectedMood === avatar.mood && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 md:mt-3 text-xs md:text-sm text-green-600 flex items-center justify-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Selected</span>
                    </motion.div>
                  )}
                </motion.div>
              </ParallaxEffect>
            ))}
          </div>

          <Card variant="glass" shadow="lg" className="bg-white/60 backdrop-blur-sm border border-gray-200/50">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 text-white flex items-center justify-center">
                <EyeOff className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="font-medium text-black mb-1 text-center md:text-left">Stay Anonymous</h3>
                <p className="text-black text-sm md:text-base text-center md:text-left">
                  Prefer to remain private? You can participate anonymously while still tracking your progress
                </p>
              </div>
            </div>
          </Card>
          
          {/* Interactive Prize Wheel */}
          {showPrizeWheel && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mt-8 md:mt-12 bg-white p-6 md:p-8 rounded-xl shadow-xl border border-ilight-100"
            >
              <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-ilight-700">Spin to Win Rewards</h3>
              
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
                  {/* Prize Wheel */}
                  <motion.div
                    className="w-full h-full rounded-full bg-white border-8 border-ilight-500 shadow-xl relative overflow-hidden"
                    animate={{ 
                      rotate: isWheelSpinning ? 1800 + (360 / prizes.length) * prizes.indexOf(wheelPrize || prizes[0]) : 0 
                    }}
                    transition={{ 
                      duration: isWheelSpinning ? 3 : 0,
                      ease: [0.2, 0.9, 0.1, 1] 
                    }}
                  >
                    {prizes.map((prize, index) => {
                      const rotation = index * (360 / prizes.length);
                      const isEven = index % 2 === 0;
                      
                      return (
                        <div 
                          key={prize}
                          className={`absolute w-full h-full ${isEven ? 'bg-ilight-100' : 'bg-ilight-200'}`}
                          style={{ 
                            clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((rotation - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((rotation - 90) * Math.PI / 180)}%, ${50 + 50 * Math.cos((rotation + (360 / prizes.length) - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((rotation + (360 / prizes.length) - 90) * Math.PI / 180)}%)` 
                          }}
                        >
                          <div 
                            className="absolute text-center text-xs md:text-sm font-medium text-ilight-700"
                            style={{ 
                              transform: `rotate(${rotation + (360 / prizes.length) / 2}deg) translateY(-30px)`,
                              transformOrigin: 'center 160px',
                              width: '100px',
                              left: 'calc(50% - 50px)'
                            }}
                          >
                            {prize}
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                  
                  {/* Center pin */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-red-500 z-10"></div>
                  
                  {/* Center circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-ilight-600 text-white flex items-center justify-center shadow-md z-10">
                    <Trophy className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-ilight-700 mb-2">Spin the Wheel</h4>
                    <p className="text-sm md:text-base text-ilight-600 mb-4">Earn exciting rewards to boost your wellness journey!</p>
                    
                    {wheelPrize && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 md:p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 mb-4"
                      >
                        <div className="flex items-center gap-2 font-medium">
                          <Award className="w-4 h-4 md:w-5 md:h-5" />
                          <span>Congratulations! You won: {wheelPrize}</span>
                        </div>
                      </motion.div>
                    )}
                    
                    <Button
                      onClick={spinWheel}
                      variant="gradient"
                      size="lg"
                      icon={<Zap className="w-5 h-5" />}
                      disabled={isWheelSpinning}
                      className="w-full"
                    >
                      {isWheelSpinning ? 'Spinning...' : 'Spin the Wheel'}
                    </Button>
                  </div>
                  
                  <div className="text-xs md:text-sm text-ilight-500 bg-ilight-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <p>You can spin the wheel once per day. Rewards are added to your account immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowPrizeWheel(false)}
                  className="text-ilight-500 hover:text-ilight-700 font-medium"
                >
                  Close Prize Wheel
                </button>
              </div>
            </motion.div>
          )}
          
          {/* 3D Dice Game */}
          {showDice && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mt-8 md:mt-12 bg-white p-6 md:p-8 rounded-xl shadow-xl border border-ilight-100"
            >
              <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-ilight-700">Roll the Dice</h3>
              
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto perspective-1000">
                  {/* 3D Dice - Fixed to prevent auto-rotation on hover */}
                  <motion.div
                    className="w-full h-full relative transform-style-3d"
                    animate={{ 
                      rotateX: isDiceRolling ? [0, 360, 720, 1080, 1440, 1800] : diceValue ? getDiceRotation(diceValue).x : 0,
                      rotateY: isDiceRolling ? [0, 360, 720, 1080, 1440, 1800] : diceValue ? getDiceRotation(diceValue).y : 0,
                      rotateZ: isDiceRolling ? [0, 360, 720, 1080] : 0
                    }}
                    transition={{ 
                      duration: isDiceRolling ? 1 : 0.5,
                      ease: "easeOut"
                    }}
                    style={{ 
                      transformStyle: "preserve-3d",
                      pointerEvents: isDiceRolling ? "none" : "auto"
                    }}
                  >
                    {/* Dice Faces */}
                    {[1, 2, 3, 4, 5, 6].map((face) => (
                      <div
                        key={face}
                        className="absolute w-full h-full border-2 border-ilight-300 bg-white rounded-lg flex items-center justify-center"
                        style={{
                          ...getDiceFaceStyle(face),
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        <div className={`dice-${face} w-full h-full p-4`}>
                          {renderDiceFace(face)}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
                
                <div className="flex-1 space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-ilight-700 mb-2">Roll for Points</h4>
                    <p className="text-sm md:text-base text-ilight-600 mb-4">Test your luck and earn points based on your roll!</p>
                    
                    {diceValue && !isDiceRolling && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 md:p-4 ${diceValue >= 5 ? 'bg-green-50 border-green-200 text-green-700' : 'bg-ilight-50 border-ilight-200 text-ilight-700'} border rounded-lg mb-4`}
                      >
                        <div className="flex items-center gap-2 font-medium">
                          <Award className="w-4 h-4 md:w-5 md:h-5" />
                          <span>
                            You rolled a {diceValue}! 
                            {diceValue >= 5 ? ' Great roll! ' : ' '} 
                            You earned {diceValue * 5} points.
                          </span>
                        </div>
                      </motion.div>
                    )}
                    
                    <Button
                      onClick={rollDice}
                      variant="gradient"
                      size="lg"
                      icon={<Zap className="w-5 h-5" />}
                      disabled={isDiceRolling}
                      className="w-full"
                    >
                      {isDiceRolling ? 'Rolling...' : 'Roll Dice'}
                    </Button>
                  </div>
                  
                  <div className="text-xs md:text-sm text-ilight-500 bg-ilight-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <p>You can roll the dice three times per day. Higher rolls earn more points!</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowDice(false)}
                  className="text-ilight-500 hover:text-ilight-700 font-medium"
                >
                  Close Dice Game
                </button>
              </div>
            </motion.div>
          )}
          
          {/* Daily Challenges */}
          {showChallenges && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mt-8 md:mt-12 bg-white p-6 md:p-8 rounded-xl shadow-xl border border-ilight-100"
            >
              <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-ilight-700">Daily Challenges</h3>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-ilight-50 rounded-xl p-4 md:p-5 border border-ilight-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white text-ilight-500 flex items-center justify-center shadow-sm">
                        {challenge.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-ilight-700 mb-1">{challenge.title}</h4>
                        <p className="text-xs md:text-sm text-ilight-600 mb-3">{challenge.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1 text-amber-600 font-medium text-xs md:text-sm">
                            <Star className="w-3 h-3 md:w-4 md:h-4" />
                            <span>{challenge.points} points</span>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs"
                          >
                            Complete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowChallenges(false)}
                  className="text-ilight-500 hover:text-ilight-700 font-medium"
                >
                  Close Challenges
                </button>
              </div>
            </motion.div>
          )}
        </Section>

        {/* Levels & Achievements */}
        <Section background="gradient" padding="lg" gradientFrom="from-ilight-500" gradientTo="to-ilight-600">
          <SectionHeading
            title="Track Your Progress"
            description="Earn experience points and unlock achievements as you progress on your wellness journey"
            align="center"
            withGradient
            gradientFrom="from-white"
            gradientTo="to-white/80"
            textColor="text-white"
          />

          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
            {/* Levels */}
            <GlassCard opacity={0.1} blur="lg" className="p-6 md:p-8 border border-white/10" enhancedContrast={true}>
              <TextReveal direction="up" className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-white" enhancedContrast={true}>
                Level System
              </TextReveal>
              <div className="space-y-6 md:space-y-8">
                {[
                  { level: 1, title: "Wellness Seeker", icon: <Star className="w-5 h-5 md:w-6 md:h-6" />, color: "text-blue-300" },
                  { level: 5, title: "Mindfulness Warrior", icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />, color: "text-purple-300" },
                  { level: 10, title: "Emotional Master", icon: <Crown className="w-5 h-5 md:w-6 md:h-6" />, color: "text-amber-300" },
                  { level: 20, title: "Wellness Champion", icon: <Trophy className="w-5 h-5 md:w-6 md:h-6" />, color: "text-green-300" }
                ].map((level) => (
                  <motion.div
                    key={level.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 md:gap-5 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 border-2 border-current ${level.color} flex items-center justify-center`}>
                      {level.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-base md:text-lg text-white mb-1">Level {level.level}</div>
                      <div className="text-sm md:text-base text-white">{level.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            {/* Achievements */}
            <GlassCard opacity={0.1} blur="lg" className="p-6 md:p-8 border border-white/10" enhancedContrast={true}>
              <TextReveal direction="up" className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-white" enhancedContrast={true}>
                Achievements
              </TextReveal>
              <div className="space-y-6 md:space-y-8">
                {[
                  { title: "First Step", description: "Complete your first check-in", icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />, color: "text-blue-300" },
                  { title: "Consistency Streak", description: "7 days of continuous progress", icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />, color: "text-purple-300" },
                  { title: "Community Helper", description: "Therapy solutions for 5 other members", icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />, color: "text-red-300" },
                  { title: "Goal Achiever", description: "Complete 3 personal goals", icon: <Award className="w-5 h-5 md:w-6 md:h-6" />, color: "text-amber-300" }
                ].map((achievement) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center gap-4 md:gap-5 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 border-2 border-current ${achievement.color} flex items-center justify-center`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-base md:text-lg text-white mb-1">{achievement.title}</div>
                      <div className="text-sm md:text-base text-white">{achievement.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Section>

        {/* Privacy */}
        <Section background="white" padding="lg" withPattern patternType="dots">
          <SectionHeading
            title="Your Privacy Matters"
            description="Participate in our community while maintaining your privacy and anonymity"
            align="center"
            withDivider
            textColor="text-black"
          />

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: <UserCircle2 className="w-8 h-8 md:w-12 md:h-12" />,
                title: "Anonymous Profiles",
                description: "Use an avatar and nickname instead of real information"
              },
              {
                icon: <Shield className="w-8 h-8 md:w-12 md:h-12" />,
                title: "Private Progress",
                description: "Choose what to share with the community"
              },
              {
                icon: <Users className="w-8 h-8 md:w-12 md:h-12" />,
                title: "Safe Interaction",
                description: "Connect with others while maintaining boundaries"
              }
            ].map((feature, index) => (
              <FloatingCard
                key={feature.title}
                delay={index * 0.1}
                glowEffect
                glowColor="rgba(59, 95, 138, 0.1)"
                className="p-4 md:p-8 text-center flex flex-col items-center bg-white h-full"
              >
                <div className="mb-4 md:mb-6 text-ilight-500">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-ilight-700">{feature.title}</h3>
                <p className="text-sm md:text-base text-ilight-600">{feature.description}</p>
              </FloatingCard>
            ))}
          </div>
        </Section>

        {/* Rewards */}
        <Section background="gradient" gradientFrom="from-gray-50" gradientTo="to-gray-100" padding="lg">
          <SectionHeading
            title="Meaningful Rewards"
            description="Earn rewards that enhance your emotional well-being journey"
            align="center"
            withDivider
            textColor="text-black"
          />

          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Digital Badges",
                description: "Collect badges that represent your achievements and milestones",
                features: ["Milestone badges", "Skill mastery badges", "Community contribution badges", "Special event badges"]
              },
              {
                title: "Unlockable Content",
                description: "Gain access to premium resources and features",
                features: ["Advanced meditation guides", "Specialized coping techniques", "Expert-led workshops", "Personalized insights"]
              },
              {
                title: "Community Status",
                description: "Earn recognition within the community",
                features: ["Mentor opportunities", "Group leadership roles", "Featured success stories", "Community ambassador status"]
              },
              {
                title: "Real-World Benefits",
                description: "Convert your progress into tangible benefits. Redeemable points for value in the future.",
                features: ["Wellness product discounts", "Partner service vouchers", "Exclusive event invitations", "Charitable donation options"]
              }
            ].map((reward) => (
              <ParallaxEffect key={reward.title} direction="up" speed={0.3}>
                <Card
                  variant="default"
                  shadow="lg"
                  className="p-6 md:p-8 h-full hover:shadow-xl transition-shadow duration-300 bg-white"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-black">{reward.title}</h3>
                  <p className="text-sm md:text-base text-black mb-4 md:mb-8">{reward.description}</p>
                  <ul className="space-y-2 md:space-y-4 mb-4 md:mb-8 text-base md:text-lg">
                    {reward.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-sm md:text-base text-black leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ParallaxEffect>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Card variant="default" shadow="md" className="inline-block p-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 text-sm">
                <Beaker className="w-5 h-5 text-amber-500" />
                <p className="text-gray-700">
                  <strong>In Development:</strong> These features are currently being developed and will include rewards for the PURPOSE of benefiting others with recommendations, referring iLIGHT participants in need, progress and many other stimulants in HELPING US, HELP YOU, HELP OTHERS.
                </p>
              </div>
            </Card>
          </div>
        </Section>

        {/* CTA */}
        <Section background="blue-600" padding="lg">
          <div ref={ctaRef} className="max-w-4xl mx-auto text-center relative">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-ilight-600 to-ilight-700"
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(59, 95, 138, 1) 0%, rgba(31, 58, 97, 1) 100%)',
                    'linear-gradient(135deg, rgba(31, 58, 97, 1) 0%, rgba(59, 95, 138, 1) 100%)',
                    'linear-gradient(135deg, rgba(59, 95, 138, 1) 0%, rgba(31, 58, 97, 1) 100%)'
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Floating particles */}
              {Array.from({ length: isMobile ? 8 : 15 }).map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-white/20"
                  initial={{
                    x: Math.random() * 100 + '%',
                    y: Math.random() * 100 + '%',
                    scale: 0
                  }}
                  animate={{
                    y: [
                      `${Math.random() * 100}%`,
                      `${Math.random() * 100}%`,
                      `${Math.random() * 100}%`
                    ],
                    opacity: [0, 0.7, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Glowing orbs */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-white/10 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-white/10 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
            
            <div className="relative z-10 p-8 md:p-12 rounded-3xl text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(255,255,255,0.3)',
                    '0 0 20px rgba(255,255,255,0.5)',
                    '0 0 10px rgba(255,255,255,0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Want to be part of the future of iLIGHT+?
              </motion.h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Join our supportive community and begin tracking your progress today.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  as={Link}
                  to="/contact"
                  variant="calm"
                  size="lg"
                  rounded="full"
                  icon={<Rocket className="w-5 h-5" />}
                  className="shadow-lg"
                  withShimmer
                  onClick={handleCtaClick}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

// Helper functions for 3D dice
function getDiceRotation(value: number) {
  // Return rotation values for each dice face
  switch(value) {
    case 1: return { x: 0, y: 0 }; // Front face (1)
    case 2: return { x: 0, y: 90 }; // Right face (2)
    case 3: return { x: 270, y: 0 }; // Top face (3)
    case 4: return { x: 90, y: 0 }; // Bottom face (4)
    case 5: return { x: 0, y: 270 }; // Left face (5)
    case 6: return { x: 180, y: 0 }; // Back face (6)
    default: return { x: 0, y: 0 };
  }
}

function getDiceFaceStyle(face: number) {
  // Return style for each dice face
  switch(face) {
    case 1: return { transform: 'translateZ(24px)' }; // Front
    case 2: return { transform: 'rotateY(90deg) translateZ(24px)' }; // Right
    case 3: return { transform: 'rotateX(-90deg) translateZ(24px)' }; // Top
    case 4: return { transform: 'rotateX(90deg) translateZ(24px)' }; // Bottom
    case 5: return { transform: 'rotateY(-90deg) translateZ(24px)' }; // Left
    case 6: return { transform: 'rotateY(180deg) translateZ(24px)' }; // Back
    default: return {};
  }
}

function renderDiceFace(face: number) {
  // Render dots for each dice face
  switch(face) {
    case 1:
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-ilight-700"></div>
        </div>
      );
    case 2:
      return (
        <div className="w-full h-full flex justify-between p-4">
          <div className="w-4 h-4 rounded-full bg-ilight-700"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700 self-end"></div>
        </div>
      );
    case 3:
      return (
        <div className="w-full h-full flex flex-col justify-between p-4">
          <div className="w-4 h-4 rounded-full bg-ilight-700 self-end"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700 self-center"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700 self-start"></div>
        </div>
      );
    case 4:
      return (
        <div className="w-full h-full grid grid-cols-2 gap-8 p-4">
          <div className="w-4 h-4 rounded-full bg-ilight-700 justify-self-start"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700 justify-self-end"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700 justify-self-start"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700 justify-self-end"></div>
        </div>
      );
    case 5:
      return (
        <div className="w-full h-full grid grid-cols-2 gap-8 p-4">
          <div className="w-4 h-4 rounded-full bg-ilight-700 justify-self-start"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700 justify-self-end"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700 justify-self-center col-span-2"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700 justify-self-start"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700 justify-self-end"></div>
        </div>
      );
    case 6:
      return (
        <div className="w-full h-full grid grid-cols-2 gap-4 p-4">
          <div className="w-4 h-4 rounded-full bg-ilight-700"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700"></div>
          <div className="w-4 h-4 rounded-full bg-ilight-700"></div>
        </div>
      );
    default:
      return null;
  }
}