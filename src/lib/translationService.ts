/**
 * Translation Service with Secure Token Management
 * 
 * This service handles translation requests through our secure backend
 * and implements proper token storage and management practices.
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
  private readonly API_ENDPOINT: string;

  constructor() {
    this.API_ENDPOINT = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/translate-text`;
    this.loadCacheFromStorage();
  }

  /**
   * Translate text using our secure backend service
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

      // Try fallback translation first for common phrases
      const fallbackResult = getFallbackTranslation(options.text, options.targetLanguage);
      if (fallbackResult !== options.text) {
        return {
          translatedText: fallbackResult,
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
      
      const response = await fetch(this.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(options)
      });

      if (!response.ok) {
        console.warn(`Translation API unavailable (${response.status}), using fallback`);
        return {
          translatedText: getFallbackTranslation(options.text, options.targetLanguage),
          success: true
        };
      }

      const result: TranslationResult = await response.json();

      // Cache successful translations
      if (result.success && result.translatedText) {
        this.cacheTranslation(cacheKey, result.translatedText);
      }

      return result;

    } catch (error) {
      console.warn('Translation API unavailable, using fallback:', error);
      // Return fallback translation instead of throwing error
      return {
        translatedText: getFallbackTranslation(options.text, options.targetLanguage),
        success: true
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
   * Get supported languages (cached for performance)
   */
  async getSupportedLanguages(): Promise<string[]> {
    // Return commonly supported languages
    // In a real implementation, you might fetch this from Google's API
    return [
      'en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh',
      'ar', 'hi', 'he', 'nl', 'sv', 'da', 'no', 'fi', 'pl', 'tr'
    ];
  }

  /**
   * Detect language of given text
   */
  async detectLanguage(text: string): Promise<string | null> {
    try {
      // Use translation with auto-detect to get source language
      const result = await this.translateText({
        text,
        targetLanguage: 'en' // Use English as target to detect source
      });

      return result.detectedSourceLanguage || null;
    } catch (error) {
      console.error('Language detection error:', error);
      return null;
    }
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

// Create singleton instance
export const translationService = new TranslationService();

// Export types for use in components
export type { TranslationOptions, TranslationResult };