/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app.vue",
    "./src/components/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/layouts/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            primary: "#2777D4"
          }
        }
      },

      screens: {
        mmdlg: {min: "769px", max: "920px"},
      }
    },
  },
  plugins: [],
}

