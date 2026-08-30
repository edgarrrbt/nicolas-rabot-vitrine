/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#2E4034', deep: '#22301F', 700: '#33493A' },
        sage: { DEFAULT: '#6B7B3C', light: '#A3B18A' },
        terracotta: { DEFAULT: '#C67B5C', dark: '#A85F42' },
        clay: '#B5651D',
        sand: '#D4C4A8',
        cream: '#FAF6EE',
        'soft-cream': '#F5F0E1',
        bark: { DEFAULT: '#2B2115', muted: '#5B4F42' },
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        organic: '20px',
        'organic-lg': '28px',
      },
      boxShadow: {
        natural: '0 10px 30px -12px rgba(43, 33, 21, 0.25)',
        'natural-lg': '0 24px 60px -20px rgba(43, 33, 21, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
}
