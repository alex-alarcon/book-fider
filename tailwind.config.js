const { colors, maxWidth, width } = require('tailwindcss/defaultTheme');

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
      maxWidth: {
        ...maxWidth,
        '1/10': '10%',
        '1/15': '15%',
        '7/10': '70%',
      },
      width: {
        ...width,
        '7/10': '70%',
      },
    },
  },
  variants: {
    borderWidth: ['last-child'],
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant('last-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`last-child${separator}${className}`)}:last-child`;
        });
      });
    },
  ],
};
