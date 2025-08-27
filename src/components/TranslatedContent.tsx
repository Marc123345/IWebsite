import { ReactNode } from 'react';
import TranslatedText from './TranslatedText';
import TranslatedText from './TranslatedText';

interface TranslatedContentProps {
  children: ReactNode;
  i18nKey?: string;
  ns?: string;
  values?: Record<string, any>;
  className?: string;
  dynamicContent?: boolean;
  targetLanguage?: string;
  sourceLanguage?: string;
  enableTranslation?: boolean;
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
  enableTranslation = true,
}: TranslatedContentProps) {
  // If translation is disabled or children is not a string, render directly
  if (!enableTranslation || typeof children !== 'string') {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  // Use TranslatedText for string content
  return (
    <TranslatedText
      targetLanguage={targetLanguage}
      sourceLanguage={sourceLanguage}
      className={className}
  )
}: TranslatedContentProps) {
  // If translation is disabled or children is not a string, render directly
  if (!enableTranslation || typeof children !== 'string') {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  // Use TranslatedText for string content
  return (
    <TranslatedText
      targetLanguage={targetLanguage}
      sourceLanguage={sourceLanguage}
      className={className}
      fallbackToOriginal={true}
      showLoadingIndicator={false}
    >
      {children}
    </TranslatedText>
  );
}

// Named export for the component
export { TranslatedContent };
// Named export for the component
export { TranslatedContent };