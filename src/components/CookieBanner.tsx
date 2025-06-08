import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made cookie choices
    const cookieChoices = localStorage.getItem('cookiePreferences');
    if (!cookieChoices) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true
    });
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-ilight-100 
          shadow-calm-lg max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-ilight-50 flex items-center justify-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-ilight-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-ilight-700 mb-1">Cookie Preferences</h3>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-ilight-700 leading-relaxed">
              We use cookies to enhance your experience and analyze our website traffic. 
              By clicking "Accept All", you consent to our use of cookies. Visit our{' '}
              <a href="/privacy" className="text-ilight-500 hover:text-ilight-600 font-medium">
                Privacy Policy
              </a>{' '}
              to learn more about how we use your data.
            </p>
            
            {/* Language Notice */}
            <div className="bg-ilight-50 p-3 md:p-4 rounded-lg border border-ilight-100">
              <div className="flex items-start gap-3">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-ilight-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-black">
                  We are working towards offering the website in multiple languages. Currently, it is available in English only.
                </p>
              </div>
            </div>
            
            {/* Cookie Options */}
            <div className="space-y-3 md:space-y-4 bg-ilight-50/50 p-4 md:p-6 rounded-xl">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="necessary"
                  checked={preferences.necessary}
                  disabled
                  className="mt-1 form-checkbox"
                />
                <label htmlFor="necessary" className="flex-grow">
                  <span className="block font-medium text-ilight-700 text-sm md:text-base">Necessary (Required)</span>
                  <span className="block text-xs md:text-sm text-ilight-600">
                    Essential for website functionality
                  </span>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="analytics"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    analytics: e.target.checked
                  }))}
                  className="mt-1 form-checkbox"
                />
                <label htmlFor="analytics" className="flex-grow">
                  <span className="block font-medium text-ilight-700 text-sm md:text-base">Analytics</span>
                  <span className="block text-xs md:text-sm text-ilight-600">
                    Help us improve our website
                  </span>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    marketing: e.target.checked
                  }))}
                  className="mt-1 form-checkbox"
                />
                <label htmlFor="marketing" className="flex-grow">
                  <span className="block font-medium text-ilight-700 text-sm md:text-base">Marketing</span>
                  <span className="block text-xs md:text-sm text-ilight-600">
                    Personalized content and ads
                  </span>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 bg-ilight-600 text-white rounded-lg font-medium 
                  hover:bg-ilight-700 transition-colors shadow-calm hover:shadow-calm-lg"
              >
                Accept All
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSavePreferences}
                className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 bg-ilight-50 text-ilight-700 rounded-lg font-medium 
                  hover:bg-ilight-100 transition-colors shadow-calm hover:shadow-calm-lg"
              >
                Save Preferences
              </motion.button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-ilight-600 hover:text-ilight-700 
                transition-colors"
              aria-label="Close cookie preferences"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}