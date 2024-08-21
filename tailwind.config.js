/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Stratos: ["Stratos-Regular", "sans-serif"],
        StratosBold: ["Stratos-Bold", "sans-serif"],
        StratosLight: ["Stratos-Light", "sans-serif"],
        StratosMedium: ["Stratos-Medium", "sans-serif"],
        StratosSemiBold: ["Stratos-SemiBold", "sans-serif"],
        StratosExtraBold: ["Stratos-ExtraBold", "sans-serif"],
        StratosExtraLight: ["Stratos-ExtraLight", "sans-serif"],
        StratosThin: ["Stratos-Thin", "sans-serif"],
        StratosBlacks: ["Stratos-Blacks", "sans-serif"],
      },
      colors: {
        primary: "#EB3134",
        secondary: "#555555",
        other: "#8DE67F",
        border: "#D33237",
      }
    },
  },
  plugins: [],
}

