/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFCF7',
        sand: '#FFF8E9',
        butter: '#FFF1C7',
        gold: '#C7A85A',
        ink: '#302B27',
        muted: '#746B62',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: { soft: '0 8px 30px rgba(48,43,39,0.08)' },
    },
  },
  plugins: [],
}
