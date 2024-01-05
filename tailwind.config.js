/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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

