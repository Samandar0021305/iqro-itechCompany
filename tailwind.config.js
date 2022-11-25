/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#2E2E2E",
      blue: "#159EEC",
      },
     
    },
  },
  plugins: [],
}
