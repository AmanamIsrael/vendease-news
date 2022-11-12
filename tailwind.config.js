/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#161616",
        green: "#53FF8D",
        grey: "#252525",
        grey2: "#828282",
      },
    },
  },
  plugins: [],
};
