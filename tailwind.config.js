// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Video"'],
        sans: ['"Press Start 2P"']
      },
      backgroundImage: {
        'dropdown': "url('/mvpPages/dropdown/dropdownBg.png')",
        'greenButton': "url('/mvpPages/ButtonMGreen.png')",
        'grayButton': "url('/mvpPages/ButtonMGray.png')",
        'purpleButton': "url('/mvpPages/ButtonMPurple.png')",
    },
  },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["16px", "24px"],
      base: ["20px", "30px"],
      lg: ["16px", "22px"],
      xl: ["32px", "48px"],
      "2xl": ["80px", "96px"],
    },
    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'black': '#000000',
      'blue': '#7ADEE6',
      'orange': '#EF8C94',
      'dark-blue': '#14182E',
      'pink': '#E23D7A',
    },
  },
  plugins: [],
};
