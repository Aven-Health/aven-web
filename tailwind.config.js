/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#36454f",
        accent: "#d4af37",
        cardDark: "#2f3e49",
        cardLight: "#455a64",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
