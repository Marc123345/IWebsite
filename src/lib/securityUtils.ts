/**
 * Security Utilities for Token Management and Data Protection
 * 
 * This module provides comprehensive security utilities following industry best practices
 * for protecting sensitive data and preventing common vulnerabilities.
 */

interface SecurityHeaders {
  'Content-Security-Policy'?: string;
  'X-Content-Type-Options'?: string;
  'X-Frame-Options'?: string;
  'X-XSS-Protection'?: string;
  'Strict-Transport-Security'?: string;
  'Referrer-Policy'?: string;
}

interface CSRFTokenData {
  token: string;
  expiresAt: number;
}

class SecurityUtils {
  private readonly CSP_NONCE_LENGTH = 16;
  private readonly CSRF_TOKEN_LENGTH = 32;
  private readonly TOKEN_EXPIRY = 60 * 60 * 1000; // 1 hour

  /**
   * Generate secure random string for tokens and nonces
   */
  generateSecureRandom(length: number): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Generate Content Security Policy nonce
   */
  generateCSPNonce(): string {
    return this.generateSecureRandom(this.CSP_NONCE_LENGTH);
  }

  /**
   * Generate CSRF token
   */
  generateCSRFToken(): string {
    const token = this.generateSecureRandom(this.CSRF_TOKEN_LENGTH);
    const expiresAt = Date.now() + this.TOKEN_EXPIRY;
    
    // Store in sessionStorage for validation
    const tokenData: CSRFTokenData = { token, expiresAt };
    sessionStorage.setItem('csrf_token', JSON.stringify(tokenData));
    
    return token;
  }

  /**
   * Validate CSRF token
   */
  validateCSRFToken(token: string): boolean {
    try {
      const stored = sessionStorage.getItem('csrf_token');
      if (!stored) return false;
      
      const tokenData: CSRFTokenData = JSON.parse(stored);
      
      // Check expiry
      if (Date.now() > tokenData.expiresAt) {
        sessionStorage.removeItem('csrf_token');
        return false;
      }
      
      // Constant-time comparison to prevent timing attacks
      return this.constantTimeCompare(token, tokenData.token);
    } catch (error) {
      console.error('CSRF token validation error:', error);
      return false;
    }
  }

  /**
   * Constant-time string comparison to prevent timing attacks
   */
  private constantTimeCompare(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    
    return result === 0;
  }

  /**
   * Sanitize user input to prevent XSS
   */
  sanitizeInput(input: string): string {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }

  /**
   * Validate and sanitize URL to prevent open redirect attacks
   */
  sanitizeURL(url: string, allowedDomains: string[] = []): string | null {
    try {
      const urlObj = new URL(url, window.location.origin);
      
      // Only allow HTTP and HTTPS protocols
      if (!['http:', 'https:'].includes(urlObj.protocol)) {
        return null;
      }
      
      // Check against allowed domains if provided
      if (allowedDomains.length > 0) {
        const isAllowed = allowedDomains.some(domain => 
          urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
        );
        
        if (!isAllowed) {
          return null;
        }
      }
      
      return urlObj.toString();
    } catch (error) {
      console.error('URL validation error:', error);
      return null;
    }
  }

  /**
   * Generate recommended security headers
   */
  getSecurityHeaders(nonce?: string): SecurityHeaders {
    const headers: SecurityHeaders = {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    };

    // Add CSP with nonce if provided
    if (nonce) {
      headers['Content-Security-Policy'] = [
        "default-src 'self'",
        `script-src 'self' 'nonce-${nonce}' 'unsafe-eval'`, // unsafe-eval needed for Vite dev
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https://mczrjfkqoukfiasskudu.supabase.co https://translation.googleapis.com",
        "media-src 'self' https:",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "upgrade-insecure-requests"
      ].join('; ');
    }

    // Add HSTS in production
    if (window.location.protocol === 'https:') {
      headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload';
    }

    return headers;
  }

  /**
   * Implement rate limiting for API calls
   */
  createRateLimiter(maxRequests: number, windowMs: number) {
    const requests: number[] = [];
    
    return {
      isAllowed: (): boolean => {
        const now = Date.now();
        
        // Remove old requests outside the window
        while (requests.length > 0 && requests[0] <= now - windowMs) {
          requests.shift();
        }
        
        // Check if we're under the limit
        if (requests.length < maxRequests) {
          requests.push(now);
          return true;
        }
        
        return false;
      },
      
      getTimeUntilReset: (): number => {
        if (requests.length === 0) return 0;
        return Math.max(0, requests[0] + windowMs - Date.now());
      }
    };
  }

  /**
   * Secure session management
   */
  createSecureSession() {
    const sessionId = this.generateSecureRandom(32);
    const expiresAt = Date.now() + (30 * 60 * 1000); // 30 minutes
    
    const sessionData = {
      id: sessionId,
      createdAt: Date.now(),
      expiresAt,
      lastActivity: Date.now()
    };
    
    // Store in sessionStorage (automatically cleared when browser closes)
    sessionStorage.setItem('secure_session', JSON.stringify(sessionData));
    
    return {
      sessionId,
      isValid: (): boolean => {
        try {
          const stored = sessionStorage.getItem('secure_session');
          if (!stored) return false;
          
          const session = JSON.parse(stored);
          return Date.now() < session.expiresAt;
        } catch {
          return false;
        }
      },
      
      updateActivity: (): void => {
        try {
          const stored = sessionStorage.getItem('secure_session');
          if (stored) {
            const session = JSON.parse(stored);
            session.lastActivity = Date.now();
            sessionStorage.setItem('secure_session', JSON.stringify(session));
          }
        } catch (error) {
          console.error('Failed to update session activity:', error);
        }
      },
      
      destroy: (): void => {
        sessionStorage.removeItem('secure_session');
      }
    };
  }

  /**
   * Input validation utilities
   */
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  }

  validatePhoneNumber(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  }

  validatePassword(password: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// Create singleton instance
export const securityUtils = new SecurityUtils();

// Export types
export type { SecurityHeaders, CSRFTokenData };