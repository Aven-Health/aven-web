/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#36454f",   // Main theme
        cardDark: "#2f3e49",
        cardLight: "#455a64",
        accent: "#d4af37",    // Buttons / highlights
      },
    },
  },
  plugins: [],
}
