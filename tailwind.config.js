const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#f2f4f5',
          dark: '#a8a8b6',
          darker: '#727788',
          ...colors.gray,
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
