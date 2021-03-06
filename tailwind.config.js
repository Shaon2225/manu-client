module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1C4F82",

          secondary: "#7D919B",

          accent: "#EB6B47",

          neutral: "#23282F",


          info: "#0092D6",

          success: "#6CB288",

          warning: "#DAAD58",

          error: "#AB3D30",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
