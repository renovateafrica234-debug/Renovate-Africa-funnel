/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ra-teal': '#004D40',
        'ra-teal-light': '#00695C',
        'ra-cream': '#F5F1E8',
        'ra-beige': '#E9E2D1',
        'ra-lemon': '#D4E157',
        'ra-grey': '#A6A6A0',
        'ra-charcoal': '#2B2B29',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
