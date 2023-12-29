/** @type {import('tailwindcss').Config} */
export default {

  content: [
    ".index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      grayscale:{
        50: '90%',
      },
      height:{
        128:'28rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

