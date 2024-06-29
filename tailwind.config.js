/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#A46254', 
      },
      fontFamily: {
        garamond: ['EB Garamond', 'serif'], 
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeInExpand: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        fadeInExpand: 'fadeInExpand 1s ease-out forwards'
      }
    },
  },
  plugins: [],
}
