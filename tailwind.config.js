const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      '3xs': '300px',
      '2xs': '436px',
      'xs': '576px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'sans': ["'Open Sans'", ...defaultTheme.fontFamily.sans],
    },
  },
  content: [
    '_site/**/*.html',
    './node_modules/tw-elements/dist/js/**/*.js',
    '_site/**/*.js',
  ],
};
