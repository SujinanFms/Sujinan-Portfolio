/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sharetech: ["Share Tech", "sans-serif"], // เพิ่มฟอนต์ Share Tech
      },
    },
  },
  plugins: [],
};
