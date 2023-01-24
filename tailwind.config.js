/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
  themes: [
    {
      mountain: {
        primary: "#e51937",
        secondary: "#141414",
        accent: "#767676",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },
    "dark",
    "cupcake",
  ],
},
  plugins: [require("daisyui")],
}