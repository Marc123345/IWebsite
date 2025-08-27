// Fallback translations for common UI text when API is unavailable
export const fallbackTranslations: Record<string, Record<string, string>> = {
  // Navigation
  'Home': {
    'he': 'בית',
  },
  'About': {
    'he': 'אודות',
  },
  'Services': {
    'he': 'שירותים',
  },
  'Contact': {
    'he': 'צור קשר',
  },
  // Common phrases
  'Welcome': {
    'he': 'ברוך הבא',
  },
  'Learn More': {
    'he': 'למד עוד',
  }
};

export function getFallbackTranslation(text: string, targetLanguage: string): string {
  // Return original text if target is English
  if (targetLanguage === 'en') {
    return text;
  }

  // Check if we have a fallback translation
  const translations = fallbackTranslations[text];
  if (translations && translations[targetLanguage]) {
    return translations[targetLanguage];
  }

  // Return original text if no fallback available
  return text;
}