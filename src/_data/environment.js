module.exports = function () {
  return {
    ELEVENTY_ENV: process.env.ELEVENTY_ENV || "development",
  };
};
