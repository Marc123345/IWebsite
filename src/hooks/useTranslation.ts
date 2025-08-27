import { useState, useEffect, useCallback } from 'react';
import { translationService, TranslationOptions, TranslationResult } from '../lib/translationService';

interface UseTranslationOptions {
  targetLanguage?: string;
  sourceLanguage?: string;
  enabled?: boolean;
  cacheKey?: string;
}

interface UseTranslationReturn {
  translate: (text: string, options?: Partial<TranslationOptions>) => Promise<string>;
  translateBatch: (texts: string[], options?: Partial<TranslationOptions>) => Promise<string[]>;
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
  supportedLanguages: string[];
}

/**
 * Custom hook for translation functionality with secure token management
 * 
 * Features:
 * - Automatic caching to minimize API calls
 * - Error handling and fallback to original text
 * - Batch translation support
 * - Language detection
 * - Secure token storage (tokens never exposed in frontend)
 */
export default function useTranslation(options: UseTranslationOptions = {}): UseTranslationReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguageState] = useState(options.targetLanguage || 'en');
  const [supportedLanguages, setSupportedLanguages] = useState<string[]>([
    'en', 'es', 'fr', 'de', 'it', 'pt', 'he', 'ar', 'zh', 'ja'
  ]);

  // Load supported languages on mount
  useEffect(() => {
    const loadSupportedLanguages = async () => {
      try {
        const languages = await translationService.getSupportedLanguages();
        setSupportedLanguages(languages);
      } catch (err) {
        console.warn('Failed to load supported languages:', err);
        // Keep fallback languages
      }
    };

    loadSupportedLanguages();
  }, []);

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred_language');
    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      setCurrentLanguageState(savedLanguage);
    }
  }, [supportedLanguages]);

  // Save language preference when it changes
  const setCurrentLanguage = useCallback((language: string) => {
    setCurrentLanguageState(language);
    localStorage.setItem('preferred_language', language);
  }, []);

  // Clear error function
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Main translation function
  const translate = useCallback(async (
    text: string, 
    overrideOptions: Partial<TranslationOptions> = {}
  ): Promise<string> => {
    if (!text.trim()) return text;

    // Skip translation if target language is the same as source or English
    const targetLang = overrideOptions.targetLanguage || currentLanguage;
    if (targetLang === 'en' || targetLang === (overrideOptions.sourceLanguage || 'en')) {
      return text;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await translationService.translateText({
        text,
        targetLanguage: targetLang,
        sourceLanguage: overrideOptions.sourceLanguage || options.sourceLanguage,
        ...overrideOptions
      });

      if (!result.success) {
        throw new Error(result.error || 'Translation failed');
      }

      return result.translatedText;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Translation failed';
      setError(errorMessage);
      console.warn('Translation error:', errorMessage);
      return text; // Fallback to original text
    } finally {
      setIsLoading(false);
    }
  }, [currentLanguage, options.sourceLanguage]);

  // Batch translation function
  const translateBatch = useCallback(async (
    texts: string[], 
    overrideOptions: Partial<TranslationOptions> = {}
  ): Promise<string[]> => {
    if (texts.length === 0) return [];

    const targetLang = overrideOptions.targetLanguage || currentLanguage;
    if (targetLang === 'en') {
      return texts; // No translation needed
    }

    setIsLoading(true);
    setError(null);

    try {
      const results = await translationService.translateBatch(
        texts,
        targetLang,
        overrideOptions.sourceLanguage || options.sourceLanguage
      );

      const translatedTexts = results.map((result, index) => {
        if (!result.success) {
          console.warn(`Translation failed for text ${index}:`, result.error);
          return texts[index]; // Fallback to original
        }
        return result.translatedText;
      });

      return translatedTexts;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Batch translation failed';
      setError(errorMessage);
      console.warn('Batch translation error:', errorMessage);
      return texts; // Fallback to original texts
    } finally {
      setIsLoading(false);
    }
  }, [currentLanguage, options.sourceLanguage]);

  return {
    translate,
    translateBatch,
    isLoading,
    error,
    clearError,
    currentLanguage,
    setCurrentLanguage,
    supportedLanguages
  };
}