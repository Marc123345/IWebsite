import { ReactNode } from 'react';
import TranslatedText from './TranslatedText';

interface TranslatedContentProps {
  children: ReactNode;
  className?: string;
  targetLanguage?: string;
  sourceLanguage?: string;
  enableTranslation?: boolean;
}

export { TranslatedContent };
export default TranslatedContent;
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
      fallbackToOriginal={true}
      showLoadingIndicator={false}
    >
      {children}
    </TranslatedText>
  );
}