/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0" },
        "70%": { opacity: "20%" },
        "100%": { opacity: "100%" },
      },
      "loader": {
        "0%": { opacity: "0%", transform: "translateX(100%)" },
        "50%": { opacity: "100%", transform: "translateX(0%)", width: "100vw" },
        "100%": { opacity: "50%", transform: "translateX(-100%)", width: "0" },
      }
    },
    animation: {
      "fade-in": "fade-in 6s ease-in-out forwards",
      "loader": "loader 2s ease-in-out forwards"
    }
  },
  plugins: [],
}

