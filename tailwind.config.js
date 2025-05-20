/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ma-couleur': '#25737d',
        'color2' : '#539aa4',
        'bg-page' : '#e4f3f4'
      },
      fontFamily : {
        Pacifico: ['Pacifico', 'Pacifico'],
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}