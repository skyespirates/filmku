module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: "#0F172A",
      surface: "#1E293B",
      primary: "#1d4ed8",
      secondary: "#b91c1c",
      white: "#fff",
      grey: "#e2e8f0",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@themesberg/flowbite/plugin")],
};
