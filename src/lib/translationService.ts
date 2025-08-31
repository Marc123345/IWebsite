/**
 * Frontend-Only Translation Service
 * 
 * This service provides translation functionality using only fallback translations
 * since Google Translation API cannot be called directly from the browser due to CORS restrictions.
 */

import { getFallbackTranslation } from './fallbackTranslations';

interface TranslationOptions {
  text: string;
  targetLanguage: string;
  sourceLanguage?: string;
}

interface TranslationResult {
  translatedText: string;
  detectedSourceLanguage?: string;
  success: boolean;
  error?: string;
}

interface TranslationCache {
  [key: string]: {
    translatedText: string;
    timestamp: number;
    expiresAt: number;
  };
}

class TranslationService {
  private cache: TranslationCache = {};
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
  private readonly MAX_CACHE_SIZE = 1000;

  constructor() {
    this.loadCacheFromStorage();
    this.initializeAutoTranslation();
  }

  /**
   * Initialize automatic translation for Hebrew
   */
  private initializeAutoTranslation(): void {
    const preferredLanguage = localStorage.getItem('preferred_language');
    if (preferredLanguage === 'he') {
      this.applyLanguageToDocument('he');
    }
  }

  /**
   * Apply language translations to the entire document
   */
  private async applyLanguageToDocument(language: string): Promise<void> {
    if (language === 'en') return;

    // Set document direction for RTL languages
    if (language === 'he') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'he';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = language;
    }
  }

  /**
   * Translate text using fallback translations only
   */
  async translateText(options: TranslationOptions): Promise<TranslationResult> {
    try {
      // Return original text if target is English
      if (options.targetLanguage === 'en') {
        return {
          translatedText: options.text,
          success: true
        };
      }

      // Create cache key
      const cacheKey = this.createCacheKey(options);
      
      // Check cache first
      const cachedResult = this.getCachedTranslation(cacheKey);
      if (cachedResult) {
        return {
          translatedText: cachedResult.translatedText,
          success: true
        };
      }

      // Use fallback translation
      const fallbackResult = getFallbackTranslation(options.text, options.targetLanguage);
      
      // Cache the translation if it's different from original
      if (fallbackResult !== options.text) {
        this.cacheTranslation(cacheKey, fallbackResult);
      }

      return {
        translatedText: fallbackResult,
        success: true
      };

    } catch (error) {
      console.warn('Translation failed:', error);
      return {
        translatedText: options.text,
        success: false,
        error: error instanceof Error ? error.message : 'Translation failed'
      };
    }
  }

  /**
   * Batch translate multiple texts
   */
  async translateBatch(texts: string[], targetLanguage: string, sourceLanguage?: string): Promise<TranslationResult[]> {
    const promises = texts.map(text => 
      this.translateText({ text, targetLanguage, sourceLanguage })
    );
    
    return Promise.all(promises);
  }

  /**
   * Get supported languages
   */
  async getSupportedLanguages(): Promise<string[]> {
    return ['en', 'he'];
  }

  /**
   * Detect language of given text (simplified for frontend-only)
   */
  async detectLanguage(text: string): Promise<string | null> {
    // Simple heuristic for Hebrew detection
    const hebrewPattern = /[\u0590-\u05FF]/;
    if (hebrewPattern.test(text)) {
      return 'he';
    }
    return 'en';
  }

  /**
   * Clear translation cache
   */
  clearCache(): void {
    this.cache = {};
    this.saveCacheToStorage();
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { size: number; oldestEntry: number; newestEntry: number } {
    const entries = Object.values(this.cache);
    const timestamps = entries.map(entry => entry.timestamp);
    
    return {
      size: entries.length,
      oldestEntry: timestamps.length > 0 ? Math.min(...timestamps) : 0,
      newestEntry: timestamps.length > 0 ? Math.max(...timestamps) : 0
    };
  }

  // Private methods for cache management

  private createCacheKey(options: TranslationOptions): string {
    return `${options.sourceLanguage || 'auto'}-${options.targetLanguage}-${btoa(options.text).slice(0, 50)}`;
  }

  private getCachedTranslation(key: string): { translatedText: string } | null {
    const cached = this.cache[key];
    
    if (!cached) return null;
    
    // Check if cache entry has expired
    if (Date.now() > cached.expiresAt) {
      delete this.cache[key];
      this.saveCacheToStorage();
      return null;
    }
    
    return { translatedText: cached.translatedText };
  }

  private cacheTranslation(key: string, translatedText: string): void {
    // Clean up old entries if cache is too large
    if (Object.keys(this.cache).length >= this.MAX_CACHE_SIZE) {
      this.cleanupCache();
    }

    this.cache[key] = {
      translatedText,
      timestamp: Date.now(),
      expiresAt: Date.now() + this.CACHE_DURATION
    };

    this.saveCacheToStorage();
  }

  private cleanupCache(): void {
    const entries = Object.entries(this.cache);
    const now = Date.now();
    
    // Remove expired entries
    const validEntries = entries.filter(([_, value]) => now <= value.expiresAt);
    
    // If still too many, remove oldest entries
    if (validEntries.length >= this.MAX_CACHE_SIZE) {
      validEntries.sort((a, b) => b[1].timestamp - a[1].timestamp);
      validEntries.splice(this.MAX_CACHE_SIZE * 0.8); // Keep 80% of max size
    }
    
    // Rebuild cache
    this.cache = Object.fromEntries(validEntries);
  }

  private loadCacheFromStorage(): void {
    try {
      const stored = sessionStorage.getItem('translation_cache');
      if (stored) {
        this.cache = JSON.parse(stored);
        // Clean up expired entries on load
        this.cleanupCache();
      }
    } catch (error) {
      console.warn('Failed to load translation cache:', error);
      this.cache = {};
    }
  }

  private saveCacheToStorage(): void {
    try {
      sessionStorage.setItem('translation_cache', JSON.stringify(this.cache));
    } catch (error) {
      console.warn('Failed to save translation cache:', error);
    }
  }
}

// Create singleton instance for translation service
export const translationService = new TranslationService();

// Export types
export type { TranslationOptions, TranslationResult };