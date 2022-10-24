/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        meditation: ['Meditation Typeface', 'sans-serif'],
        yeseva: ['Yeseva One', 'cursive'],
      },
    },
  },
  plugins: [require('daisyui')],
}
