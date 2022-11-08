/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        tahiti: "#001858",
      },
    },
    plugins: [],
  },
};
