/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Movies_App-master/**/*.html",
    "./Movies_App-master/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        main: '#ff2c1f',
        dark: '#020307',
        light: '#fff',
      },
    },
  },
  plugins: [],
}

