/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx}", "./components/**/*.{js,ts,jsx}"],
  theme: {
    extend: {},
    colors: {
      blue: "#159EEC",
      sky: "#D0ECFB",
      black: "#000",
      blackDev: "#2E2E2E",
      indigo: "#7A5592",
      white: "fff",
      bluef: "#159EEC26",
    },

    screens: {
      xsm: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      xxl: "40rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      ...breakpoints(theme("screens")),
    }),
  },

  plugins: [],
};
