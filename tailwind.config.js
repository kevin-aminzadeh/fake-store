/** @type {import('tailwindcss').Config} */

const colors = require("./src/constants/theme/colors");

module.exports = {
  content: ["./**/*.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
  corePlugin: {
    backgroundOpacity: true,
  },
};
