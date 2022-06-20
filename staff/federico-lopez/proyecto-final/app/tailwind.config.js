module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-footer': '0 0 30px -15px rgba(0, 0, 0, 0.3)',
        'custom-header': '0 0 30px -15px rgba(0, 0, 0, 0.3)'
      },
      colors: {
        primary: "#F1F4F8",
        secondary: "#06D6A0",
        tertiary: "#00829F",
        quaternary: "#EF476F"
      }
    }
  },
  plugins: [],
}
