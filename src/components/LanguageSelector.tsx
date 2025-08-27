import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית', flag: '🇮🇱' },
];

interface LanguageSelectorProps {
  className?: string;
  variant?: 'dropdown' | 'modal';
  showFlags?: boolean;
  compact?: boolean;
}

export default function LanguageSelector({
  className = '',
  variant = 'dropdown',
  showFlags = true,
  compact = false
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setCurrentLanguage, supportedLanguages } = useTranslation();

  // Filter languages to only show supported ones
  const availableLanguages = languages.filter(lang => 
    supportedLanguages.includes(lang.code)
  );

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageSelect = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    setIsOpen(false);
    
    // Force a page refresh to ensure all components re-render with new language
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  if (variant === 'modal') {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 
            text-white transition-colors ${className}`}
          aria-label="Select language"
        >
          <Globe className="w-5 h-5" />
          {!compact && <span>{currentLang.code.toUpperCase()}</span>}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl"
                onClick={e => e.stopPropagation()}
              >
                <h3 className="text-lg font-semibold mb-4 text-ilight-700">Select Language</h3>
                <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                  {availableLanguages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language.code)}
                      className={`flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                        currentLanguage === language.code
                          ? 'bg-ilight-50 text-ilight-700 border border-ilight-200'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      {showFlags && <span className="text-xl">{language.flag}</span>}
                      <div>
                        <div className="font-medium">{language.name}</div>
                        <div className="text-sm text-gray-500">{language.nativeName}</div>
                      </div>
                      {currentLanguage === language.code && (
                        <Check className="w-5 h-5 text-ilight-500 ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Dropdown variant
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 
          text-white transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5" />
        {showFlags && <span>{currentLang.flag}</span>}
        {!compact && <span>{currentLang.name}</span>}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 
              py-2 min-w-[200px] z-50"
          >
            {availableLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 
                  transition-colors ${
                  currentLanguage === language.code ? 'bg-ilight-50 text-ilight-700' : 'text-gray-700'
                }`}
              >
                {showFlags && <span className="text-lg">{language.flag}</span>}
                <div className="flex-grow">
                  <div className="font-medium">{language.name}</div>
                  <div className="text-sm text-gray-500">{language.nativeName}</div>
                </div>
                {currentLanguage === language.code && (
                  <Check className="w-5 h-5 text-ilight-500" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}