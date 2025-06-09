import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ilight-600 text-white border-t border-ilight-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Logo variant="light" size="lg" />
              </motion.div>
            </div>
            <p className="mt-4 text-white/90 leading-relaxed">
              iLIGHT is a mission driven organization aiming to spread the viral and purpose driven power, message and actions by "Lighting up the Lives" of people impacted by personal challenges.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href="tel:+18587860288" 
                  className="text-white/90 hover:text-white transition-colors">
                  +1 (858) 786-0288
                </a>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a href="mailto:support@ilight.care" 
                  className="text-white/90 hover:text-white transition-colors">
                  support@ilight.care
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Stay Updated</h3>
            <p className="text-white/90 mb-6">
              Subscribe to our newsletter for the latest updates as part of the ILIGHT Community.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address for newsletter"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg 
                    text-white placeholder-white/60 focus:outline-none focus:ring-2 
                    focus:ring-white/40 focus:border-transparent"
                />
                <motion.div 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-white/60 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-white text-ilight-600 px-4 py-3 rounded-lg 
                  hover:bg-white/90 transition-colors duration-300 font-medium shadow-calm hover:shadow-calm-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/80 text-sm text-center md:text-left">
              © {currentYear} iLight X Corporation. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
              <Link to="/privacy" className="text-white/80 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/80 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-white/80 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}