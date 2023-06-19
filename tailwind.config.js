/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Poppins', 'sans-serif'],
      },
      colors: {
        'black-100': '#2B2C35',
        'primary-violet': {
          DEFAULT: '#5500BC',
          100: '#F5F8FF',
        },
        'primary-grey': {
          DEFAULT: '#747A88',
          100: '#4C4452',
        },
        'primary-white': {
          DEFAULT: '#FDF7FF',
        },
        'primary-black': {
          DEFAULT: '#1F1926',
        },
      },
    },
  },
  plugins: [],
};
