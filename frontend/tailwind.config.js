module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1B2124',
        secondary: '#04A3DD',
        gold: '#F3B742',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@themesberg/flowbite/plugin')],
};
