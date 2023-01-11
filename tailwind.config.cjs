/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
       Nutino: ["Nunito Sans", "regular"],
       Lora: ["Lora", "regular"],
      },
    },
  },
  plugins: [],
}
