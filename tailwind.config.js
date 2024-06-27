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
    },
  },
  plugins: [],
}
