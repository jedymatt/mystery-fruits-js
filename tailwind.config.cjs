 
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'close-section': {
          '0%': {
            height: 'auto',
            opacity: '1',
            "margin-bottom": '40px',
            padding: '28px',
          },
          '100%': {
            opacity: '0',
            height: '0',
            padding: '0',
            "margin-bottom": '0',
          }
        }
      },
      animation: {
        'slide-in': 'slide-in 1s ease 0s 1 normal forwards',
        'close-section': 'close-section 1s ease 0s 1 normal forwards',
      },
    },
  },
  plugins: [],
}
