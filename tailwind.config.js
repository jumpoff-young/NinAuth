/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montreal: ['PP Neue Montreal', 'sans-serif'], // Adding the Roboto font
      },
      colors:{
        'blackCustom':'#111111',
        'primaryColor':'#008643',
      },
    },
  },
  plugins: [],
}