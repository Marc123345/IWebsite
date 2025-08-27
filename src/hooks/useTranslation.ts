import { useTranslation as useI18nextTranslation } from 'react-i18next';
import { translationService } from '../lib/translationService';

interface UseTranslationReturn {
  translate: (text: string, options?: { targetLanguage?: string; sourceLanguage?: string }) => Promise<string>;
  isLoading: boolean;
  error: string | null;
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
  supportedLanguages: string[];
  t: (key: string) => string;
}

export default function useTranslation(): UseTranslationReturn {
  const { t, i18n } = useI18nextTranslation();
  
  const supportedLanguages = [
    'en', 'he'
  ];

  const translate = async (text: string, options?: { targetLanguage?: string; sourceLanguage?: string }): Promise<string> => {
    const targetLanguage = options?.targetLanguage || i18n.language;
    
    // Skip translation if target is English
    if (targetLanguage === 'en') {
      return text;
    }

    try {
      const result = await translationService.translateText({
        text,
        targetLanguage,
        sourceLanguage: options?.sourceLanguage || 'en'
      });
      
      return result.success ? result.translatedText : text;
    } catch (error) {
      console.warn('Translation failed:', error);
      return text; // Fallback to original
    }
  };

  const setCurrentLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return {
    translate,
    isLoading: false,
    error: null,
    currentLanguage: i18n.language,
    setCurrentLanguage,
    supportedLanguages,
    t
  };
}