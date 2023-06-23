/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        cxl: '1920px',
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [],
}

