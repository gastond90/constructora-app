/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  colors: {
      gris: {
        100: '#E5E5E5',
      },
      rojo: {
        100: '#CF0709',
      },
      azul: {
        100: '#132932',
      },
    }},
  },
  plugins: [],
}

