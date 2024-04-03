/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.vue",
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

