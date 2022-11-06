/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 7s linear infinite',
        'spin-slows': 'spin 10s linear infinite'
      },
      colors: {
        'top': '#190a26',
        'middle':'#190a26',
        'topmost':'#4f1b5d',
        'bottom':'#0a000f',

      },
    
    },

  },
  plugins: [],
}
