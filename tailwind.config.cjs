/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "font-opens": ["'Open Sans', sans-serif;"],
    },

    extend: {
      colors: {
        "bg-color-primary" : "#25282C",
        "bg-color-secondary" : "#FFFFFF",
        "bg-iconbtn" : "#F4083D",
        "bg-card" : "#2F3237",
        "bg-input" : "#171618",
      },
      textColor: {
        "text-primary" : "#FFFFFF",
        "text-secondary" : "#D20939",
      }
    },
  },
  plugins: [require("daisyui")],
}
