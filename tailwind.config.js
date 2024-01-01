/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.html",
    "./src/*.html",
    "./src/assets/js/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

