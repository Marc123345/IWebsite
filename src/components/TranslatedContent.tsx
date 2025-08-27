import { ReactNode, useState, useEffect } from 'react';
import useTranslation from '../hooks/useTranslation';

interface TranslatedContentProps {
  children: ReactNode;
  className?: string;
  targetLanguage?: string;
  sourceLanguage?: string;
  dynamicContent?: boolean;
  translationKey?: string;
}

/**
 * Enhanced component that provides translation functionality
 * Can render children directly or translate text content
 */
export default function TranslatedContent({
  children,
  className = '',
  targetLanguage,
  sourceLanguage = 'en',
  dynamicContent = false,
  translationKey,
}: TranslatedContentProps) {
  const [translatedText, setTranslatedText] = useState<string>('');
  const { translate, currentLanguage } = useTranslation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const performTranslation = async () => {
      // Only translate if children is a string and we have dynamic content enabled
      if (typeof children === 'string' && dynamicContent) {
        const effectiveTargetLanguage = targetLanguage || currentLanguage;
        
        // Skip translation if target is English
        if (effectiveTargetLanguage === 'en') {
          setTranslatedText(children);
          return;
        }

        try {
          const result = await translate(children, {
            targetLanguage: effectiveTargetLanguage,
            sourceLanguage
          });
          setTranslatedText(result);
        } catch (error) {
          console.warn('Translation failed:', error);
          setTranslatedText(children); // Fallback to original
        }
      } else if (typeof children === 'string') {
        setTranslatedText(children);
      }
    };

    performTranslation();
  }, [children, currentLanguage, targetLanguage, sourceLanguage, translate, dynamicContent, i18n.language]);

  // If children is not a string, render directly
  if (typeof children !== 'string') {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  // Use i18next translation if translationKey is provided
  if (translationKey) {
    return (
      <span className={className}>
        {t(translationKey)}
      </span>
    );
  }

  // Render translated text
  return (
    <span className={className}>
      {translatedText || children}
    </span>
  );
}

export { TranslatedContent };