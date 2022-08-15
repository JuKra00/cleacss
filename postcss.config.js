const autoprefixer = require("autoprefixer");

module.exports = (ctx) => ({
  plugins: {
    autoprefixer,
    cssnano:
      ctx.env === "production"
        ? {
            preset: "advanced",
          }
        : false,
  },
});
