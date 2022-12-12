/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      backgroundColor: '#16142B',
      'white': '#ffffff',
      'secondaryWhite': '#E4E7EC',
      'primaryBlue': '#1967FF',
      'secondayBlue': '#4785FF',
      'primaryGray': '#344054',
      'secondaryGray': '#1D2939',
      'primaryDark': '#101828'
    },
    extend: {
      fontFamily:{
        'inter': "'Inter', sans-serif"
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '30': '7.5rem'
      }
    },
  },
  plugins: [],
}
