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
  'Community': {
    'he': 'קהילה',
  },
  'Partners': {
    'he': 'שותפים',
  },
  // Common phrases
  'Welcome': {
    'he': 'ברוך הבא',
  },
  'Learn More': {
    'he': 'למד עוד',
  },
  'Get Started': {
    'he': 'התחל עכשיו',
  },
  'Join Our Community': {
    'he': 'הצטרף לקהילה שלנו',
  },
  'Experience personalized therapy solutions through our innovative platform combining AI technology, professional care, and community connection.': {
    'he': 'חווה פתרונות טיפול מותאמים אישית באמצעות הפלטפורמה החדשנית שלנו המשלבת טכנולוגיית AI, טיפול מקצועי וחיבור קהילתי.',
  },
  'The Right Care to the Right Person at the Right Time': {
    'he': 'הטיפול הנכון לאדם הנכון בזמן הנכון',
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