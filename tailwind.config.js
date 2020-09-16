module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/index.html', './src/index.js'],
  theme: {
    extend: {
       colors: {
        primaryBlue: "#00A0B6",
        primaryYellow: "#F0BD1C"
      }
    },
  },
  variants: {},
  plugins: [],
}
