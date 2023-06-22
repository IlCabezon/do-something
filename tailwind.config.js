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
        'primary-error': 'var(--color-errors-primary)',
        'primary-black': 'var(--color-primary-black)',
        'primary-blue': {
          DEFAULT: 'var(--color-primary-blue)',
          100: 'var(--color-primary-blue-100)',
          200: 'var(--color-primary-blue-200)',
          300: 'var(--color-primary-blue-300)',
          400: 'var(--color-primary-blue-400)',
          500: 'var(--color-primary-blue-500)',
          600: 'var(--color-primary-blue-600)',
          700: 'var(--color-primary-blue-700)',
          800: 'var(--color-primary-blue-800)',
          900: 'var(--color-primary-blue-900)',
        },
        'primary-grey': {
          DEFAULT: 'var(--color-primary-grey)',
          100: 'var(--color-primary-grey-100)',
          200: 'var(--color-primary-grey-200)',
          300: 'var(--color-primary-grey-300)',
          400: 'var(--color-primary-grey-400)',
          500: 'var(--color-primary-grey-500)',
          600: 'var(--color-primary-grey-600)',
          700: 'var(--color-primary-grey-700)',
          800: 'var(--color-primary-grey-800)',
          900: 'var(--color-primary-grey-900)',
        },
        'primary-white': 'var(--color-primary-white)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        default: 'var(--color-text-primary)',
        inverse: 'var(--color-text-primary-inverse)',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        'primary-container': 'var(--color-bg-primary-container)',
        secondary: 'var(--color-bg-secondary)',
        default: 'var(--color-bg-primary)',
        inverse: 'var(--color-bg-primary-inverse)',
        'primary-container-inverse': 'var(--color-bg-primary-container-inverse)',
      },
      borderColor: {
        primary: 'var(--color-primary-grey-500)',
        secondary: 'var(--color-text-secondary)',
        default: 'var(--color-bg-primary)',
        sameAsBgCont: 'var(--color-bg-primary-container)',
      },
      backgroundImage: {
        'navbar-pattern': "linear-gradient(rgb(84, 139, 255, 70%), rgb(84, 139, 255, 70%)), url('/src/assets/homeBanner.png')",
      },
    },
  },
  plugins: [],
};
