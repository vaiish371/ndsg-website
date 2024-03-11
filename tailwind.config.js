/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        caudex: ['Caudex', 'serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'primary-maroon': '#A12800',
        'orange-forme': '#FFFFFF',
        'beige':'#FFECD1',
        'white':'#FFFFFF',
      }
    },
  },
  plugins: [],
}