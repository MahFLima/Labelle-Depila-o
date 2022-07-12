/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Poppins", "sans-serif"],
      },
      colors: {
        pink: {
          500: "#FF3366",
          300: "#F67797",
        },
        gray: {
          100: "#F9F9F9",
          500: '#767676'
        }
      },
    },
  },
  plugins: [],
};
