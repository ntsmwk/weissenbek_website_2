module.exports = {
  content: [
    '_site/**/*.html',
    './node_modules/tw-elements/dist/js/**/*.js',
    '_site/**/*.js',
  ],
  plugins: [require('tw-elements/dist/plugin')],
};
