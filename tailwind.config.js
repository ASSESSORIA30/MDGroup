/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0D0F',
        graphite: '#15181B',
        slate: '#6B7178',
        mist: '#A9AFB4',
        bone: '#F5F3EF',
        bronze: '#B79268',
        champagne: '#D8C4A8',
        frost: '#DCE6E8',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.28em',
      },
    },
  },
  plugins: [],
}
