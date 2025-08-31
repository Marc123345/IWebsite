# iLight - Personal Wellness Support Platform

A comprehensive mental health support platform combining AI technology, professional care, and community connection.

## Features

- **Multi-language Support**: Google Translate API integration with secure token management
- **AI-Powered Support**: 24/7 emotional support and guidance
- **Professional Network**: Connect with licensed mental health professionals
- **Community Platform**: Safe space for peer support and connection
- **Secure Architecture**: Industry-standard security practices for data protection

## Translation Setup

The platform includes Google Translate API integration with secure token storage:

### Security Features
- API keys stored securely in backend environment variables
- Client-side token caching with encryption
- Rate limiting to prevent abuse
- CSRF protection for API calls
- Secure session management

### Storage Mechanisms
- **Memory Storage**: For temporary tokens during session
- **SessionStorage**: Encrypted storage that clears on browser close
- **LocalStorage**: Persistent encrypted storage (use with caution)
- **Secure Storage**: IndexedDB with encryption for sensitive data

### Best Practices Implemented
- Tokens never exposed in frontend code
- Automatic token refresh before expiration
- Fallback to original text if translation fails
- Caching to minimize API calls and reduce costs
- Input validation and sanitization
- Protection against XSS and CSRF attacks

## Environment Variables

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Translation API (Backend Only)
GOOGLE_TRANSLATION_API_KEY=your_google_api_key
```

## Usage

### Basic Translation
```tsx
import TranslatedText from './components/TranslatedText';

<TranslatedText targetLanguage="es">
  Hello, welcome to iLight!
</TranslatedText>
```

### Using Translation Hook
```tsx
import useTranslation from './hooks/useTranslation';

const { translate, currentLanguage, setCurrentLanguage } = useTranslation();

const translatedText = await translate('Hello world', {
  targetLanguage: 'es'
});
```

### Language Selector Component
```tsx
import LanguageSelector from './components/LanguageSelector';

<LanguageSelector 
  variant="dropdown" 
  showFlags={true}
  compact={false}
/>
```

## Security Considerations

1. **API Key Protection**: Never expose Google API keys in frontend code
2. **Token Lifecycle**: Implement proper token expiration and renewal
3. **Input Validation**: Sanitize all user inputs before processing
4. **Rate Limiting**: Prevent abuse with request rate limiting
5. **HTTPS Only**: Always use HTTPS in production
6. **Content Security Policy**: Implement strict CSP headers
7. **Session Security**: Use secure session management practices

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
