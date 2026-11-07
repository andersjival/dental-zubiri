/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#36a8f6',
          500: '#0c8de7',
          600: '#006fe6', // Exact vibrant template blue
          700: '#0058b8',
          800: '#044a96',
          900: '#0a3f79',
          950: '#07284f',
        },
      },
    },
  },
  plugins: [],
}
