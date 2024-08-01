/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0)',
          },
          '25%': {
            transform: 'translateX(calc(-100% - 2.5rem))',//
          },
          '75%': {
            transform: 'translateX(calc(100% - 2.5rem))',
          },
          '100%': {
            transform: 'translateX(0)',
          }
        }
      }
    },
  },
  plugins: [],
}