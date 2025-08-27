// Fallback translations for common UI text when API is unavailable
export const fallbackTranslations: Record<string, Record<string, string>> = {
  // Navigation
  'Home': {
    'es': 'Inicio',
    'fr': 'Accueil',
    'de': 'Startseite',
    'it': 'Casa',
    'pt': 'Início',
    'he': 'בית',
    'ar': 'الرئيسية',
    'zh': '首页',
    'ja': 'ホーム'
  },
  'About': {
    'es': 'Acerca de',
    'fr': 'À propos',
    'de': 'Über uns',
    'it': 'Chi siamo',
    'pt': 'Sobre',
    'he': 'אודות',
    'ar': 'حول',
    'zh': '关于',
    'ja': 'について'
  },
  'Services': {
    'es': 'Servicios',
    'fr': 'Services',
    'de': 'Dienstleistungen',
    'it': 'Servizi',
    'pt': 'Serviços',
    'he': 'שירותים',
    'ar': 'الخدمات',
    'zh': '服务',
    'ja': 'サービス'
  },
  'Contact': {
    'es': 'Contacto',
    'fr': 'Contact',
    'de': 'Kontakt',
    'it': 'Contatto',
    'pt': 'Contato',
    'he': 'צור קשר',
    'ar': 'اتصل',
    'zh': '联系',
    'ja': 'お問い合わせ'
  },
  // Common phrases
  'Welcome': {
    'es': 'Bienvenido',
    'fr': 'Bienvenue',
    'de': 'Willkommen',
    'it': 'Benvenuto',
    'pt': 'Bem-vindo',
    'he': 'ברוך הבא',
    'ar': 'مرحبا',
    'zh': '欢迎',
    'ja': 'ようこそ'
  },
  'Learn More': {
    'es': 'Aprende más',
    'fr': 'En savoir plus',
    'de': 'Mehr erfahren',
    'it': 'Scopri di più',
    'pt': 'Saiba mais',
    'he': 'למד עוד',
    'ar': 'اعرف أكثر',
    'zh': '了解更多',
    'ja': 'もっと詳しく'
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