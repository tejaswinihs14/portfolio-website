// tailwind.config.js
module.exports = {
  darkMode: "class", // ✅ This enables class-based toggling
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
