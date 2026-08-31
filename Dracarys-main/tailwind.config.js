/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gold': {
          50: '#fffbf0',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        'crimson': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        }
      },
      fontFamily: {
        'medieval': ['MedievalSharp', 'cursive'],
        'cinzel': ['Cinzel', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'dragon-scale': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
        'parchment': 'linear-gradient(45deg, #f4f1de 0%, #e8dab2 25%, #f4f1de 50%, #e8dab2 75%, #f4f1de 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(251, 191, 36, 0.5)',
        'glow-red': '0 0 20px rgba(185, 28, 28, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(251, 191, 36, 0.2)',
      }
    },
  },
  plugins: [],
};