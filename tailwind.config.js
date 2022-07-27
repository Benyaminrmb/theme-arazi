/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        'header-blue': '#0A1660',
        'body-gray': '#E7E7E7',
      },
    }
  },
  plugins: [require("daisyui")],
};
