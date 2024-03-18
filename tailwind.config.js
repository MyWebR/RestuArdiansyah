/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary:'#0ea5e9',
        dark:'#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

