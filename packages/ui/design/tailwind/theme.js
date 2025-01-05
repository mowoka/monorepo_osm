// @ts-check
const colors = require('./colors')

/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
  extend: {
    colors,
    fontSize: {
      '3xl': ['24px', '28.8px'],
      '2xl': ['20px', '24px'],
      xl: ['18px', '22.5px'],
      lg: ['16px', '19.2px'],
      md: ['14px', '21px'],
      base: ['12px', '18px'],
      sm: ['14px', '21px'],
      xs: ['12px', '18px'],
    },
  },
}

module.exports = {
  theme,
}
