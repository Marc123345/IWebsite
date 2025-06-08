import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind class merging utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Form field helper functions
export function getFieldError(errors: Record<string, string[]>, field: string): string | undefined {
  return errors[field]?.[0];
}

// Date formatting
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Phone number formatting
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phone;
}

// SEO helpers
export function generateMetaTitle(title: string): string {
  return `${title} | iLight Mental Health Support`;
}

export function generateCanonicalUrl(path: string): string {
  return `https://ilight.health${path}`;
}

// Form step helpers
export function isStepComplete(step: number, data: Record<string, any>): boolean {
  const requiredFields = {
    1: ['firstName', 'lastName', 'email', 'phone'],
    2: ['dateOfBirth', 'emergencyContact', 'preferredCommunication'],
    3: ['credentials', 'specialization', 'experience', 'license']
  };

  return requiredFields[step as keyof typeof requiredFields]?.every(
    field => Boolean(data[field])
  ) ?? false;
}

// Navigation helpers
export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Accessibility helpers
export function setHighContrast(enabled: boolean): void {
  if (enabled) {
    document.body.classList.add('high-contrast');
  } else {
    document.body.classList.remove('high-contrast');
  }
}

export function setDarkMode(enabled: boolean): void {
  if (enabled) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

export function setFontSize(percentage: number): void {
  document.documentElement.style.fontSize = `${percentage}%`;
}

// Media query helper
export function useMediaQuery(query: string): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(query).matches;
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}