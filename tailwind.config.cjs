/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // yeh add karo
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.06)", // optional soft shadow
      },
      colors: {
        "dark-card": "#1f1f1f", // ✅ custom color
        "cardLight": "#F7F9FB"
      },
      screens: {
        'max-912': { 'max': '912px' }, // custom max breakpoint
        '912': '912px',                // min-width breakpoint
        'max-792': { 'max': '792px' }, // custom max breakpoint
        '792': '792px',                // min-width breakpoint
        'max-922': { 'max': '1422px' },
        'max-465': { 'max': '465px' },
      },
    },
  },
  plugins: [],
};
