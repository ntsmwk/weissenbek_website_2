const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ["'Open Sans'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  content: [
    '_site/**/*.html',
    './node_modules/tw-elements/dist/js/**/*.js',
    '_site/**/*.js',
  ],
  plugins: [require('tw-elements/dist/plugin')],
};
