/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'roboto': ['Roboto Flex', 'sans-serif']
    },
    minWidth: {
      'card-s': '280px',
    },
    extend: {
      screens: {
        'mobileM': '375px',
      },
    },
  },
  plugins: [],
}

