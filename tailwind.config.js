// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
        mono: ['"Press Start 2P"'],
        sans: ['"Quantico"'],
      },
    },
    fontSize: {
      xs: ["8px"],
      sm: ["9px"],
      base: ["14px", "31px"],
      lg: ["17px", "25px"],
      xl: ["32px"],
      "2xl": ["40px"],
      "3xl": ["48px"],
    },
  },
  plugins: [],
};
