/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      height: {
        'pers': '35rem',
      },
      colors:{
        background: '#807ECE',
        bgcalc: '#2D2A37'
      },
      gridTemplateRows:{
        7: 'repeat(7,minmax(0,1fr))'
      }
    },
  },
  plugins: [],
}
