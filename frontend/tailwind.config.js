module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "loader-bg": "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
