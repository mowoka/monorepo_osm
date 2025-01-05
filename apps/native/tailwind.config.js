// @ts-check

const { theme } = require('@repo/ui/design/tailwind/theme')
/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './App.tsx',
    '../../packages/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    ...theme,
  },
}
