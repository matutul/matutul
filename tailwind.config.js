/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headingColor: "#2e2e2e",
        textColor: "#515151",
        cartNumBg: "#e80013",
        primary: "#f5f3f3",

        cardOverlay: "rgba(0, 0, 0, 0.4)",
        lightTextGray: "#9ca0ab",
      }
    },
  },
  plugins: [],
}

// Color property of the sites beginning period
// primary: "#191A19",
// headingColor: "#4E9F3D",
// textColor: "#D8E9A8",