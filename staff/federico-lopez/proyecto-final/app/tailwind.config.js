const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom-logo': '1px 0px 53px rgba(181, 215, 224, 0.3)'
    },
      boxShadow: {
        "custom-footer": "inset 0px 1px 0px #DADADA",
        "custom-header": "0 0 30px -15px rgba(0, 0, 0, 0.3)",
        "custom-items": "inset 0px -1px 0px #DADADA"
      },
      colors: {
        primary: "#FAFAFA",
        secondary: "#27A080",
        myblue: "#007C9E",
        quaternary: "#EF476F",
        myblack: "#292929",
        placeholder: "#B9B9B9",
        inputBg: "#EAEAEA",
        inputBorder: "#D9D9D9",
        mygrey: "#474747",
        secondarygrey: "#8E8E93" 
      },
      fontFamily: {
        "sans": ["Roboto", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
