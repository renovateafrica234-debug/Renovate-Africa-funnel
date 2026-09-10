/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: '#0B2E2A',
        cream: '#F9F5EC',
        beige: '#E8DDD0',
        lemon: '#E2FF54',
        charcoal: '#1E1E1E',
      }
    }
  },
  plugins: []
}
