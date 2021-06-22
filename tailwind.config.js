module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: ['hover', 'focus'],
      spacing: {
        cardHeight: '30rem',
        videoHeightXl: '65vh',
        videoHeightLg: '45vh',
        videoHeight: '30vh'
      },
      colors: {
        merah: '#ec1d27',
        abuAbu: '#242424'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
