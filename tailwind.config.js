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
    }},
  },
  plugins: [],
}

