/**
 * Secure Token Storage Utility
 * 
 * This utility provides secure token storage mechanisms following industry best practices.
 * It includes multiple storage options with appropriate security measures.
 */

interface TokenData {
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
  tokenType?: string;
  scope?: string;
}

interface StorageOptions {
  storage: 'memory' | 'sessionStorage' | 'localStorage' | 'secure';
  encrypt?: boolean;
  autoRefresh?: boolean;
  onTokenExpired?: () => void;
  onTokenRefreshed?: (newToken: TokenData) => void;
}

class SecureTokenStorage {
  private memoryStorage: Map<string, TokenData> = new Map();
  private readonly STORAGE_KEY = 'ilight_tokens';
  private readonly ENCRYPTION_KEY = 'ilight_secure_key'; // In production, use a proper key derivation
  
  /**
   * Store tokens securely based on the chosen mechanism
   */
  async storeTokens(tokens: TokenData, options: StorageOptions): Promise<void> {
    try {
      const tokenData = {
        ...tokens,
        storedAt: Date.now()
      };

      switch (options.storage) {
        case 'memory':
          this.memoryStorage.set(this.STORAGE_KEY, tokenData);
          break;

        case 'sessionStorage':
          if (options.encrypt) {
            const encrypted = await this.encryptData(JSON.stringify(tokenData));
            sessionStorage.setItem(this.STORAGE_KEY, encrypted);
          } else {
            sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(tokenData));
          }
          break;

        case 'localStorage':
          if (options.encrypt) {
            const encrypted = await this.encryptData(JSON.stringify(tokenData));
            localStorage.setItem(this.STORAGE_KEY, encrypted);
          } else {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tokenData));
          }
          break;

        case 'secure':
          // Use the most secure option available
          await this.storeInSecureStorage(tokenData);
          break;

        default:
          throw new Error('Invalid storage option');
      }

      // Set up auto-refresh if enabled
      if (options.autoRefresh && tokens.refreshToken) {
        this.setupAutoRefresh(tokens, options);
      }

    } catch (error) {
      console.error('Failed to store tokens:', error);
      throw new Error('Token storage failed');
    }
  }

  /**
   * Retrieve tokens from storage
   */
  async getTokens(options: StorageOptions): Promise<TokenData | null> {
    try {
      let storedData: string | null = null;

      switch (options.storage) {
        case 'memory':
          const memoryData = this.memoryStorage.get(this.STORAGE_KEY);
          return memoryData || null;

        case 'sessionStorage':
          storedData = sessionStorage.getItem(this.STORAGE_KEY);
          break;

        case 'localStorage':
          storedData = localStorage.getItem(this.STORAGE_KEY);
          break;

        case 'secure':
          return await this.getFromSecureStorage();

        default:
          throw new Error('Invalid storage option');
      }

      if (!storedData) return null;

      // Decrypt if necessary
      const jsonData = options.encrypt 
        ? await this.decryptData(storedData)
        : storedData;

      const tokenData: TokenData = JSON.parse(jsonData);

      // Check if token is expired
      if (this.isTokenExpired(tokenData)) {
        if (options.onTokenExpired) {
          options.onTokenExpired();
        }
        
        // Try to refresh if refresh token is available
        if (tokenData.refreshToken && options.autoRefresh) {
          return await this.refreshTokens(tokenData, options);
        }
        
        // Clear expired token
        await this.clearTokens(options);
        return null;
      }

      return tokenData;

    } catch (error) {
      console.error('Failed to retrieve tokens:', error);
      return null;
    }
  }

  /**
   * Clear stored tokens
   */
  async clearTokens(options: StorageOptions): Promise<void> {
    try {
      switch (options.storage) {
        case 'memory':
          this.memoryStorage.delete(this.STORAGE_KEY);
          break;

        case 'sessionStorage':
          sessionStorage.removeItem(this.STORAGE_KEY);
          break;

        case 'localStorage':
          localStorage.removeItem(this.STORAGE_KEY);
          break;

        case 'secure':
          await this.clearSecureStorage();
          break;
      }
    } catch (error) {
      console.error('Failed to clear tokens:', error);
    }
  }

  /**
   * Check if token is expired
   */
  isTokenExpired(tokenData: TokenData): boolean {
    return Date.now() >= tokenData.expiresAt;
  }

  /**
   * Check if token will expire soon (within 5 minutes)
   */
  isTokenExpiringSoon(tokenData: TokenData): boolean {
    const fiveMinutes = 5 * 60 * 1000;
    return Date.now() >= (tokenData.expiresAt - fiveMinutes);
  }

  /**
   * Refresh tokens using refresh token
   */
  private async refreshTokens(tokenData: TokenData, options: StorageOptions): Promise<TokenData | null> {
    try {
      if (!tokenData.refreshToken) {
        throw new Error('No refresh token available');
      }

      // In a real implementation, make API call to refresh tokens
      // This is a placeholder for the actual refresh logic
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refreshToken: tokenData.refreshToken
        })
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const newTokenData: TokenData = await response.json();
      
      // Store new tokens
      await this.storeTokens(newTokenData, options);
      
      if (options.onTokenRefreshed) {
        options.onTokenRefreshed(newTokenData);
      }

      return newTokenData;

    } catch (error) {
      console.error('Token refresh failed:', error);
      await this.clearTokens(options);
      return null;
    }
  }

  /**
   * Set up automatic token refresh
   */
  private setupAutoRefresh(tokens: TokenData, options: StorageOptions): void {
    const timeUntilExpiry = tokens.expiresAt - Date.now();
    const refreshTime = Math.max(timeUntilExpiry - (5 * 60 * 1000), 60000); // Refresh 5 minutes before expiry, minimum 1 minute

    setTimeout(async () => {
      await this.refreshTokens(tokens, options);
    }, refreshTime);
  }

  /**
   * Encrypt data using Web Crypto API
   */
  private async encryptData(data: string): Promise<string> {
    try {
      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(data);
      
      // Generate a key from the encryption key
      const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(this.ENCRYPTION_KEY),
        { name: 'PBKDF2' },
        false,
        ['deriveBits', 'deriveKey']
      );

      // Generate a random salt
      const salt = crypto.getRandomValues(new Uint8Array(16));
      
      // Derive encryption key
      const key = await crypto.subtle.deriveKey(
        {
          name: 'PBKDF2',
          salt: salt,
          iterations: 100000,
          hash: 'SHA-256'
        },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt']
      );

      // Generate random IV
      const iv = crypto.getRandomValues(new Uint8Array(12));
      
      // Encrypt the data
      const encrypted = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: iv },
        key,
        dataBuffer
      );

      // Combine salt, iv, and encrypted data
      const combined = new Uint8Array(salt.length + iv.length + encrypted.byteLength);
      combined.set(salt, 0);
      combined.set(iv, salt.length);
      combined.set(new Uint8Array(encrypted), salt.length + iv.length);

      // Convert to base64
      return btoa(String.fromCharCode(...combined));
    } catch (error) {
      console.error('Encryption failed:', error);
      throw new Error('Failed to encrypt data');
    }
  }

  /**
   * Decrypt data using Web Crypto API
   */
  private async decryptData(encryptedData: string): Promise<string> {
    try {
      const encoder = new TextEncoder();
      const decoder = new TextDecoder();
      
      // Convert from base64
      const combined = new Uint8Array(
        atob(encryptedData).split('').map(char => char.charCodeAt(0))
      );

      // Extract salt, iv, and encrypted data
      const salt = combined.slice(0, 16);
      const iv = combined.slice(16, 28);
      const encrypted = combined.slice(28);

      // Generate key material
      const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(this.ENCRYPTION_KEY),
        { name: 'PBKDF2' },
        false,
        ['deriveBits', 'deriveKey']
      );

      // Derive decryption key
      const key = await crypto.subtle.deriveKey(
        {
          name: 'PBKDF2',
          salt: salt,
          iterations: 100000,
          hash: 'SHA-256'
        },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
      );

      // Decrypt the data
      const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        key,
        encrypted
      );

      return decoder.decode(decrypted);
    } catch (error) {
      console.error('Decryption failed:', error);
      throw new Error('Failed to decrypt data');
    }
  }

  /**
   * Store in secure storage (IndexedDB with encryption)
   */
  private async storeInSecureStorage(tokenData: TokenData): Promise<void> {
    // This would implement IndexedDB storage with encryption
    // For now, fall back to encrypted sessionStorage
    const encrypted = await this.encryptData(JSON.stringify(tokenData));
    sessionStorage.setItem(this.STORAGE_KEY, encrypted);
  }

  /**
   * Get from secure storage
   */
  private async getFromSecureStorage(): Promise<TokenData | null> {
    try {
      const stored = sessionStorage.getItem(this.STORAGE_KEY);
      if (!stored) return null;
      
      const decrypted = await this.decryptData(stored);
      return JSON.parse(decrypted);
    } catch (error) {
      console.error('Failed to get from secure storage:', error);
      return null;
    }
  }

  /**
   * Clear secure storage
   */
  private async clearSecureStorage(): Promise<void> {
    sessionStorage.removeItem(this.STORAGE_KEY);
  }

// Create singleton instance for token storage
export const tokenStorage = new SecureTokenStorage();

// Export types
export type { TokenData, StorageOptions };