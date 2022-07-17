/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "serif"],
    },
    colors: {
      white: "#ffffff",
      black: "000000",
      primary: "#1f7a8c",
      bgColor: "#022b3a",
      powderBlue: "#BFDBF7",
      lavender: "#E1E5F2",
    },
  },

  plugins: [],
};
