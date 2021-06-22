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
        hijau: '#3e5641',
        merah: '#a24936',
        jingga: '#d36135',
        hijautua: '#282B28',
        hijaumuda: '#83BCA9'
      }
    },
  },
  variants: {
    extend: {
      padding: ['hover', 'group-hover', 'even', 'odd'],
      height: ['hover', 'group-hover'],
      width: ['hover', 'group-hover'],
      margin: ['hover', 'group-hover'],
      fontWeight: ['hover', 'group-hover'],
      transform: ['hover', 'group-hover'],
      scale: ['hover', 'group-hover'],
      translate: ['hover', 'group-hover'],
      inset: ['hover', 'group-hover'],
      space: ['hover', 'group-hover'],
      transitionDelay: ['hover', 'group-hover'],
      backgroundColor: ['even', 'odd'],
      flexDirection: ['even', 'odd'],
      textColor: ['even', 'odd'],
      backgroundImage: ['first', 'last', 'even', 'odd'],
      gradientColorStops: ['first', 'last', 'even', 'odd'],
    },
  },
  plugins: [],
}
