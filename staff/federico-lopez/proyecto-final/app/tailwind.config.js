const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-footer": "0 0 30px -15px rgba(0, 0, 0, 0.3)",
        "custom-header": "0 0 30px -15px rgba(0, 0, 0, 0.3)"
      },
      colors: {
        primary: "#FAFAFA",
        secondary: "#27A080",
        myblue: "#007C9E",
        quaternary: "#EF476F",
        myblack: "#292929",
        placeholder: "#B9B9B9",
        inputBg: "#EAEAEA",
        inputBorder: "#D9D9D9"   ,
        mygrey: "#474747"      
      },
      fontFamily: {
        "sans": ["Roboto", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}
