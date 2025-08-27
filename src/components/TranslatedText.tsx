import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

interface TranslatedTextProps {
  children: string;
  targetLanguage?: string;
  sourceLanguage?: string;
  className?: string;
  fallbackToOriginal?: boolean;
  showLoadingIndicator?: boolean;
  enableRetry?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Component that automatically translates text content
 * 
 * Features:
 * - Automatic translation based on current language
 * - Loading states and error handling
 * - Fallback to original text on failure
 * - Retry functionality
 * - Caching for performance
 */
export default function TranslatedText({
  children,
  targetLanguage,
  sourceLanguage = 'en',
  className = '',
  fallbackToOriginal = true,
  showLoadingIndicator = true,
  enableRetry = true,
  as: Component = 'span'
}: TranslatedTextProps) {
  const [translatedText, setTranslatedText] = useState(children);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string | null>(null);
  
  const { 
    translate, 
    currentLanguage, 
    isLoading: serviceLoading,
    error: serviceError 
  } = useTranslation();

  // Determine target language
  const effectiveTargetLanguage = targetLanguage || currentLanguage;

  // Translate text when language changes
  useEffect(() => {
    const performTranslation = async () => {
      // Skip translation if target is English or same as source
      if (effectiveTargetLanguage === 'en' || effectiveTargetLanguage === sourceLanguage) {
        setTranslatedText(children);
        return;
      }

      setIsTranslating(true);
      setTranslationError(null);

      try {
        const result = await translate(children, {
          targetLanguage: effectiveTargetLanguage,
          sourceLanguage
        });
        
        setTranslatedText(result);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Translation failed';
        setTranslationError(errorMessage);
        
        if (fallbackToOriginal) {
          setTranslatedText(children);
        }
      } finally {
        setIsTranslating(false);
      }
    };

    performTranslation();
  }, [children, effectiveTargetLanguage, sourceLanguage, translate, fallbackToOriginal]);

  // Retry translation function
  const retryTranslation = () => {
    setTranslationError(null);
    // Trigger re-translation by updating a dependency
    const performRetry = async () => {
      setIsTranslating(true);
      try {
        const result = await translate(children, {
          targetLanguage: effectiveTargetLanguage,
          sourceLanguage
        });
        setTranslatedText(result);
        setTranslationError(null);
      } catch (error) {
        setTranslationError(error instanceof Error ? error.message : 'Translation failed');
      } finally {
        setIsTranslating(false);
      }
    };
    
    performRetry();
  };

  // Show loading indicator
  if ((isTranslating || serviceLoading) && showLoadingIndicator) {
    return (
      <Component className={`inline-flex items-center gap-2 ${className}`}>
        <Loader2 className="w-4 h-4 animate-spin text-ilight-500" />
        <span className="text-ilight-600">Translating...</span>
      </Component>
    );
  }

  // Show error state with retry option
  if (translationError && enableRetry && !fallbackToOriginal) {
    return (
      <Component className={`inline-flex items-center gap-2 ${className}`}>
        <AlertCircle className="w-4 h-4 text-red-500" />
        <span className="text-red-600">Translation failed</span>
        <button
          onClick={retryTranslation}
          className="text-ilight-500 hover:text-ilight-600 transition-colors"
          aria-label="Retry translation"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </Component>
    );
  }

  // Render translated text with smooth transition
  return (
    <motion.div
      key={translatedText}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}
      as={Component}
    >
      {translatedText}
    </motion.div>
  );
}