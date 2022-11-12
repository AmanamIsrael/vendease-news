/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#161616",
        green: "#53FF8D",
        grey: "#252525",
        grey2: "#828282",
      },
      lineHeight: {
        44.78: "44.78px",
      },
    },
  },
  plugins: [],
};
