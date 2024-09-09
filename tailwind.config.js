module.exports = {
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.scss",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        docuseal: {
          "color-scheme": "dark",
          primary: "#1A13FF",
          secondary: "#FFB100",
          accent: "#ED4185",
          neutral: "#000000",
          "base-100": "#faf7f5",
          "base-200": "#efeae6",
          "base-300": "#e7e2df",
          "base-content": "#000000",
          "--rounded-btn": "1.9rem",
          "--tab-border": "2px",
          "--tab-radius": ".5rem",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
    },
  },
};

// module.exports = {
//   content: [
//     "./app/views/**/*.html.erb",
//     "./app/helpers/**/*.rb",
//     "./app/javascript/**/*.js",
//     "./app/javascript/**/*.scss",
//   ],
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: [
//       {
//         docuseal: {
//           "color-scheme": "light",
//           primary: "#ffffff",
//           secondary: "#FFB100",
//           accent: "#ED4185",
//           neutral: "#000000",
//           "base-100": "#faf7f5",
//           "base-200": "#efeae6",
//           "base-300": "#e7e2df",
//           "base-content": "#000000",
//           "--rounded-btn": "1.9rem",
//           "--tab-border": "2px",
//           "--tab-radius": ".5rem",
//         },
//       },
//     ],
//   },
// };
