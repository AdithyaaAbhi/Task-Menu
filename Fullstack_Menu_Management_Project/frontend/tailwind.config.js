
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D72B8', // Main color for buttons and accents
        secondary: '#1C1C1C', // Menu text color
        background: '#F9FAFB', // Light background color
        border: '#E5E7EB', // Border color for inputs and cards
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Match font from Figma
      },
      spacing: {
        '18': '4.5rem',
        '28': '7rem',
        '36': '9rem',
      },
    },
  },
  plugins: [],
}
