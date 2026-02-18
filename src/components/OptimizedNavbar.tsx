import { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Home, Info, Lightbulb, Heart,
  Users, Brain, Bot, Shield, Building, Globe, Target, Award, Book,
  MessageSquare, Calendar, Activity, Phone, Mail,
  Stethoscope, Trophy, Focus, HandHeart, ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import useScrollPosition from '../hooks/useScrollPosition';
import useMediaQuery from '../hooks/useMediaQuery';

interface MenuItem {
  path: string;
  label: string;
  icon: JSX.Element;
  description?: string;
  subItems?: MenuItem[];
  external?: boolean;
}

/**
 * Optimized Navbar component with performance improvements:
 * - Uses custom hooks for scroll position and media queries
 * - Memoized to prevent unnecessary re-renders
 * - Optimized animations with reduced complexity
 * - Conditional rendering for mobile menu
 */
function OptimizedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const { y: scrollY } = useScrollPosition();
  const isScrolled = scrollY > 10;
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  // Memoize toggle function to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Memoize submenu toggle function
  const toggleSubmenu = useCallback((path: string) => {
    setActiveSubmenu(prev => prev === path ? null : path);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);

  // Handle body overflow when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Add click outside handler to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only run this if the menu is open
      if (!isOpen) return;
      
      // Get the menu element
      const menuElement = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-toggle-button');
      
      // If the click is outside the menu and not on the toggle button, close the menu
      if (menuElement && 
          !menuElement.contains(event.target as Node) && 
          menuButton && 
          !menuButton.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const menuItems: MenuItem[] = [
    { 
      path: '/', 
      label: 'Home', 
      icon: <Home className="w-5 h-5" />,
      description: "Personal wellness therapy solutions platform"
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: <Info className="w-5 h-5" />,
      description: "Our passion and team",
      subItems: [
        { path: '/about', label: 'About Us', icon: <Info className="w-5 h-5" />, description: 'Our story and mission' },
        { path: '/promise', label: 'The iLight Promise', icon: <Heart className="w-5 h-5" />, description: 'Our commitment to you' }
      ]
    },
    {
      path: '/services',
      label: 'Services',
      icon: <Heart className="w-5 h-5" />,
      description: "Explore our therapy solutions services",
      subItems: [
        { path: '/mylight', label: 'Personal Therapy Solutions', icon: <Brain className="w-5 h-5" />, description: '1:1 guidance and therapy solutions' },
        { path: '/ilight-plus', label: 'AI Therapy Solutions', icon: <Bot className="w-5 h-5" />, description: '24/7 AI-powered assistance' },
        { path: '/family-portal', label: 'Family Therapy Solutions', icon: <Users className="w-5 h-5" />, description: 'Therapy solutions for loved ones' }
      ]
    },
    {
      path: '/contribute',
      label: 'Contribute',
      icon: <Heart className="w-5 h-5" />,
      description: "Lighting up lives"
    },
    { 
      path: '/community', 
      label: 'Community', 
      icon: <Users className="w-5 h-5" />,
      description: "Connect with others",
      subItems: [
        { path: '/community', label: 'iLight Community', icon: <Users className="w-5 h-5" />, description: 'Our supportive community' },
        { path: '/community/events', label: 'Events', icon: <Calendar className="w-5 h-5" />, description: 'Attend workshops and meetups' }
      ]
    },
    {
      path: '/community/illuminators',
      label: 'Volunteer Contributors',
      icon: <HandHeart className="w-5 h-5" />,
      description: "Join our volunteer program"
    },
    {
      path: '/illuminators',
      label: 'Illuminators Campaign',
      icon: <Lightbulb className="w-5 h-5" />,
      description: "Random Acts of Illumination",
      subItems: [
        { path: '/illuminators/recommend', label: 'Share a Resource', icon: <Lightbulb className="w-5 h-5" />, description: 'Recommend an illuminator' },
        { path: '/illuminators/share', label: 'Tell Your Story', icon: <Heart className="w-5 h-5" />, description: 'Share your journey' },
        { path: '/illuminators/participate', label: 'Get Involved', icon: <Users className="w-5 h-5" />, description: 'Volunteer opportunities' }
      ]
    },
    {
      path: '/partners',
      label: 'Partners',
      icon: <Stethoscope className="w-5 h-5" />,
      description: "Join our provider network",
      subItems: [
        { path: '/partners', label: 'Overview', icon: <Info className="w-5 h-5" />, description: 'Learn about our network' },
        { path: '/partners/benefits', label: 'Benefits', icon: <Award className="w-5 h-5" />, description: 'Provider advantages' },
        { path: '/partners/join', label: 'Join Network', icon: <Target className="w-5 h-5" />, description: 'Apply to join' }
      ]
    },
    {
      path: 'https://ilight.lovable.app',
      label: 'One Pager',
      icon: <ExternalLink className="w-5 h-5" />,
      description: "View our one pager",
      external: true
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-16 shadow-xl' : 'h-20'}`}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-ilight-800 to-ilight-700"></div>
      
      <div className="container-padding h-full relative z-10">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-50"
            >
              <Logo variant="light" size={isDesktop ? "lg" : "md"} />
            </motion.div>

            {/* Menu Button */}
            <motion.button
              id="menu-toggle-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="relative z-50 p-3 rounded-full bg-ilight-500 text-white hover:bg-ilight-400 transition-colors shadow-lg border border-white/20"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="container mx-auto h-full overflow-y-auto py-24 px-6"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-ilight-500/50 text-white hover:bg-ilight-500 transition-colors z-50"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </motion.button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {menuItems.map((item) => (
                  <div key={item.path} className="w-full">
                    <div
                      className="relative"
                      onClick={() => item.subItems && toggleSubmenu(item.path)}
                    >
                      {item.external ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-5 rounded-2xl text-base font-medium transition-all duration-300 hover:bg-ilight-500 w-full bg-ilight-700/50 text-white hover:text-white"
                        >
                          <div className="w-12 h-12 rounded-xl bg-ilight-400 flex items-center justify-center flex-shrink-0 shadow-md">
                            {item.icon}
                          </div>
                          <div className="flex-grow">
                            <div className="font-bold text-lg">{item.label}</div>
                            {item.description && (
                              <div className="text-sm text-white/90">{item.description}</div>
                            )}
                          </div>
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          className={`flex items-center gap-4 p-5 rounded-2xl text-base font-medium transition-all duration-300 hover:bg-ilight-500 w-full ${
                            location.pathname === item.path || activeSubmenu === item.path
                              ? 'bg-ilight-500 text-white shadow-lg'
                              : 'bg-ilight-700/50 text-white hover:text-white'
                          }`}
                          onClick={(e) => item.subItems && e.preventDefault()}
                        >
                          <div className="w-12 h-12 rounded-xl bg-ilight-400 flex items-center justify-center flex-shrink-0 shadow-md">
                            {item.icon}
                          </div>
                          <div className="flex-grow">
                            <div className="font-bold text-lg">{item.label}</div>
                            {item.description && (
                              <div className="text-sm text-white/90">{item.description}</div>
                            )}
                          </div>
                          {item.subItems && (
                            <motion.div
                              animate={{ rotate: activeSubmenu === item.path ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-auto"
                            >
                              <ChevronDown className="w-5 h-5" />
                            </motion.div>
                          )}
                        </Link>
                      )}
                    </div>

                    {item.subItems && (
                      <AnimatePresence>
                        {activeSubmenu === item.path && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-6 mt-2"
                          >
                            <div className="bg-ilight-500/40 rounded-2xl p-3 border border-white/10 shadow-lg">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className={`flex items-center gap-3 p-4 text-base transition-colors duration-300 rounded-xl ${
                                    location.pathname === subItem.path
                                      ? 'bg-ilight-400 text-white shadow-md'
                                      : 'text-white hover:text-white hover:bg-ilight-500/50'
                                  }`}
                                >
                                  <div className="w-10 h-10 rounded-lg bg-ilight-400/80 flex items-center justify-center flex-shrink-0 shadow-md">
                                    {subItem.icon}
                                  </div>
                                  <div className="flex-grow">
                                    <div className="font-bold">{subItem.label}</div>
                                    {subItem.description && (
                                      <div className="text-sm text-white/90">{subItem.description}</div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(OptimizedNavbar);