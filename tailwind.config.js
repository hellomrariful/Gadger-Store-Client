/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primaryColor: '#2E68FF',
          descriptionColor: '#7F7F7F',
          backgroundColor: '#F4F9FF',
      }
  }
  },
  plugins: [],
}

