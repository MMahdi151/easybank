/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "hsl(233, 26%, 24%)",
        limegreen: "hsl(136, 65%, 51%)",
        cyandef: "hsl(192, 70%, 51%)",
        grayblue: {
          300: "hsl(233, 8%, 62%)",
          200: "hsl(220, 16%, 96%)",
          100: "hsl(0, 0%, 98%)",
        },
      },
    },
  },
  plugins: [],
};
