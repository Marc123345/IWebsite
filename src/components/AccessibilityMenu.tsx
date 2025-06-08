import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, X, Type, ZoomIn, ZoomOut, 
  Sun, Moon, Contrast, Eye
} from 'lucide-react';

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState('normal');
  const [theme, setTheme] = useState('light');

  const toggleMenu = () => setIsOpen(!isOpen);

  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      const newSize = fontSize - 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };

  const toggleContrast = () => {
    const newContrast = contrast === 'normal' ? 'high' : 'normal';
    setContrast(newContrast);
    
    if (newContrast === 'high') {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    if (newTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className="w-12 h-12 rounded-full bg-ilight-600 text-white flex items-center justify-center shadow-calm hover:shadow-calm-lg"
        aria-label="Accessibility options"
        aria-expanded={isOpen}
        aria-controls="accessibility-menu"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-menu"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 bg-white rounded-xl shadow-calm-lg border border-ilight-100 w-72 overflow-hidden"
          >
            <div className="p-4 border-b border-ilight-100 flex justify-between items-center bg-ilight-50">
              <h3 className="font-medium text-ilight-700 flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-ilight-600" />
                Accessibility Options
              </h3>
              <button 
                onClick={toggleMenu}
                className="text-ilight-600 hover:text-ilight-700 transition-colors"
                aria-label="Close accessibility menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-5 space-y-6">
              {/* Font Size */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Type className="w-5 h-5 text-ilight-600" />
                  <span className="font-medium text-ilight-700">Text Size</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decreaseFontSize}
                    className="p-2 rounded-lg bg-ilight-50 text-ilight-700 hover:bg-ilight-100 transition-colors shadow-calm"
                    aria-label="Decrease font size"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <button
                    onClick={resetFontSize}
                    className="flex-grow py-1 px-2 rounded-lg bg-ilight-50 text-ilight-700 hover:bg-ilight-100 transition-colors text-sm shadow-calm"
                  >
                    Reset ({fontSize}%)
                  </button>
                  <button
                    onClick={increaseFontSize}
                    className="p-2 rounded-lg bg-ilight-50 text-ilight-700 hover:bg-ilight-100 transition-colors shadow-calm"
                    aria-label="Increase font size"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Contrast */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Contrast className="w-5 h-5 text-ilight-600" />
                  <span className="font-medium text-ilight-700">Contrast</span>
                </div>
                <button
                  onClick={toggleContrast}
                  className={`w-full py-2 px-4 rounded-lg transition-colors shadow-calm ${
                    contrast === 'high' 
                      ? 'bg-ilight-600 text-white' 
                      : 'bg-ilight-50 text-ilight-700 hover:bg-ilight-100'
                  }`}
                >
                  {contrast === 'high' ? 'Normal Contrast' : 'High Contrast'}
                </button>
              </div>
              
              {/* Theme */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {theme === 'light' ? (
                    <Sun className="w-5 h-5 text-ilight-600" />
                  ) : (
                    <Moon className="w-5 h-5 text-ilight-600" />
                  )}
                  <span className="font-medium text-ilight-700">Theme</span>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`w-full py-2 px-4 rounded-lg transition-colors shadow-calm ${
                    theme === 'dark' 
                      ? 'bg-ilight-600 text-white' 
                      : 'bg-ilight-50 text-ilight-700 hover:bg-ilight-100'
                  }`}
                >
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
              
              {/* Reading Guide */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="w-5 h-5 text-ilight-600" />
                  <span className="font-medium text-ilight-700">Reading Guide</span>
                </div>
                <button
                  onClick={() => {
                    // Toggle reading guide functionality
                    document.body.classList.toggle('reading-guide');
                  }}
                  className="w-full py-2 px-4 rounded-lg bg-ilight-50 text-ilight-700 hover:bg-ilight-100 transition-colors shadow-calm"
                >
                  Toggle Reading Guide
                </button>
              </div>
              
              <div className="text-xs text-ilight-600 pt-2 border-t border-ilight-100">
                These settings help make our website more accessible for everyone.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}