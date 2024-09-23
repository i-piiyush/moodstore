/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '5px -5px 31px 2px rgba(0, 0, 0, 0.16)',
      }
    },
  },
  plugins: [],
}

