module.exports = {
  parser: "postcss-scss", // Specify postcss-scss parser here
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
