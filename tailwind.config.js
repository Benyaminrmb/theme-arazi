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
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl.7': '1024px',
      'xl.6': '1150px',
      'xl.5': '1350px',
      'xl.4': '1550px',
      'xl.3': '1700px',
      'xl.2': '1818px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('daisyui')],
}
