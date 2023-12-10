/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
    colors: {
      gris: {
        100: '#E5E5E5',
      },
      rojo: {
        100: '#CF0709',
      },
      azul: {
        100: '#132932',
      },
    },
    margin: {
      '160': '160px',
      '1/6-screen': '16vw', // 25% of the viewport width
      '1/18-screen': '5.5vw', // 50% of the viewport width
      '3/4-screen': '75vw', // 75% of the viewport width
    },
    width: {
      '160': '160px',
      '1/6-screen': '16vw', // 25% of the viewport width
      '1/18-screen': '5.5vw', // 50% of the viewport width
      '3/4-screen': '75vw', // 75% of the viewport width
    },
    backgroundImage: {
      'servicios': "url('../src/Img/fondo-servicios.png')",
    },
    lineHeight: {
      'nada': '0',
    }
  },
  },
  plugins: [],
}

