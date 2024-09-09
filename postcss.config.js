module.exports = {
  syntax: require("postcss-scss"), // Add this line to use the SCSS parser
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
