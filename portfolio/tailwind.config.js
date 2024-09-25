/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#db4a2b", // Example: Primary color (blue)
        secondary: "#e4e2dd",
        third: "#cfcfcc", // Example: Secondary color (purple)
      },
      fontFamily: {
        sans: ["Archivo", "sans-serif"],
        display: ["Archivo Black", "sans-serif"],
      },
      backgroundImage: {
        backdrop: "url('/src/assets/backdrop.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
