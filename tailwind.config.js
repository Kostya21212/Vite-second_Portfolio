/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html.{html,js}","./src/about.js.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("rippleui")],
}
