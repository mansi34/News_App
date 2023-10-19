/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B3B6B7',
        dark: {
          light: '#CACFD2 ',
          hard: '#0D2436',
          soft: '#5F6A6A',
        },
      },
      fontFamily: {
        opensans: ["'Open Sans'", 'sans - serif'],
        roboto: ["'Roboto'", 'sans - serif'],
      },
    },
  },
  plugins: [],
};
