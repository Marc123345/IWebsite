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
  },
  'Mission to connect locally and globally on a known or anonymized basis to share the power of like-minded communal healing and resilience.': {
    'he': 'משימה להתחבר מקומית וגלובלית על בסיס ידוע או אנונימי כדי לשתף את כוח הריפוי והחוסן הקהילתי.',
  },
  'iLight\'s fundamental imperative is to not only provide a safe environment for personalized enrichment but importantly stimulate a purpose driven setting to Help Us, Help You, Help Others.': {
    'he': 'הציווי הבסיסי של iLight הוא לא רק לספק סביבה בטוחה להעשרה אישית אלא חשוב לעורר סביבה מונעת מטרה לעזור לנו, לעזור לך, לעזור לאחרים.',
  },
  'Transforming personal wellness therapy solutions through innovation, compassion, and accessibility.': {
    'he': 'שינוי פתרונות טיפול רווחה אישית באמצעות חדשנות, חמלה ונגישות.',
  },
  'Learn about iLight\'s passion to transform personal wellness therapy solutions through innovative technology and compassionate care.': {
    'he': 'למד על התשוקה של iLight לשנות פתרונות טיפול רווחה אישית באמצעות טכנולוגיה חדשנית וטיפול חמלה.',
  },
  'Join our supportive community to normalize wellness discussions, access expert guidance, and connect with others who understand your journey.': {
    'he': 'הצטרף לקהילה התומכת שלנו כדי לנרמל דיונים על רווחה, לגשת להדרכה מומחית ולהתחבר לאחרים שמבינים את המסע שלך.',
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