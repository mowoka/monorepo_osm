const { theme } = require('@repo/ui/design/tailwind/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
    '../../apps/mobile/**/*.{js,jsx,ts,tsx}',
  ],
  important: 'html',
  theme: {
    ...theme,
    boxShadow: {
      side: '0px -1px 10px 0px rgba(0, 0, 0, 0.1)',
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      pulse: {
        '0%': { opacity: '1' },
        '100%': { opacity: '1' },
        '50%': { opacity: '0.5' },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.3s ease-in-out',
      pulse: 'pulse 0.7s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    backgroundImage: {
      radial:
        'radial-gradient(59.85% 342.69% at 49.85% 50%, #2D4972 0%, #177E95 100%)',
      linear: 'linear-gradient(to left, #115F70 0%, #2D4972 51.73%)',
    },
  },
}
