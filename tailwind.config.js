const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, "./src/**/*.{js,jsx,ts,tsx}"),
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        accent: "#6366f1",
        "accent-light": "#818cf8",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
