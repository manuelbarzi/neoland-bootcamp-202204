module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
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
