/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ilight: {
          50: '#F5F8FC',   // Lightest - Off-white with blue tint
          100: '#E9EEF5',  // Very light gray-blue
          200: '#D1DCE8',  // Light blue-gray
          300: '#B8C4D6',  // Medium blue-gray
          400: '#8E9FBF',  // Soft lavender (secondary)
          500: '#3B5F8A',  // Primary deep blue (softer than before)
          600: '#2D4D76',  // Darker deep blue
          700: '#1F3A61',  // Even darker deep blue
          800: '#152A4A',  // Very dark deep blue
          900: '#0B1A33',  // Almost black deep blue
          accent: {
            turquoise: '#5AACB0',  // Calm teal
            lavender: '#9F90CF',   // Gentle purple
            peach: '#F8B195',      // Soft peach
            calm: {
              blue: '#69D2E7',
              green: '#A7DBAB',
              purple: '#9F90CF',
              sand: '#E0C9A6'
            }
          }
        },
        // Feedback colors
        success: '#2E8B57',  // Darker green for better contrast
        warning: '#D97706',  // Darker amber for better contrast
        error: '#DC2626',    // Darker red for better contrast
        info: '#2563EB'      // Darker blue for better contrast
      },
      fontFamily: {
        // Simplified font system - just two families
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      spacing: {
        // Custom spacing scale for consistent layout
        '4xs': '0.125rem',  // 2px
        '3xs': '0.25rem',   // 4px
        '2xs': '0.375rem',  // 6px
        'xs': '0.5rem',     // 8px
        'sm': '0.75rem',    // 12px
        'md': '1rem',       // 16px
        'lg': '1.5rem',     // 24px
        'xl': '2rem',       // 32px
        '2xl': '2.5rem',    // 40px
        '3xl': '3rem',      // 48px
        '4xl': '4rem',      // 64px
        '5xl': '5rem',      // 80px
        '6xl': '6rem',      // 96px
        'section': '6rem',  // Standard section padding (96px)
        'section-sm': '4rem', // Smaller section padding (64px)
        'section-lg': '8rem', // Larger section padding (128px)
        'container': '1280px', // Standard container width
        'container-sm': '1024px', // Smaller container width
        'container-lg': '1440px', // Larger container width
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        'dot-pattern': 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
        'line-pattern': 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
      },
      backgroundSize: {
        'dot-sm': '20px 20px',
        'dot-md': '30px 30px',
        'dot-lg': '40px 40px',
        'line-sm': '10px 10px',
        'line-md': '20px 20px',
        'line-lg': '30px 30px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'breathe': 'breathe 8s ease-in-out infinite',
        'wave': 'wave 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        },
        wave: {
          '0%': { transform: 'translateX(0) translateZ(0) scaleY(1)' },
          '50%': { transform: 'translateX(-25%) translateZ(0) scaleY(0.8)' },
          '100%': { transform: 'translateX(-50%) translateZ(0) scaleY(1)' },
        },
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'glow': '0 0 15px 2px rgba(59, 95, 138, 0.2)',
        'glow-lg': '0 0 30px 5px rgba(59, 95, 138, 0.3)',
        'calm': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'calm-lg': '0 20px 40px -5px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'calm': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};