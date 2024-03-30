/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  // DaisyUI theme colors
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        du: {
          gray: {
            900: "rgba(17, 24, 39, 1)",
            800: "rgba(31, 41, 55, 1)",
            600: "rgba(75, 85, 99, 1)",
            400: "rgba(156, 163, 175, 1)",
            300: "rgba(209, 213, 219, 1)",
            200: "rgba(229, 231, 235, 1)",
            100: "rgba(243, 244, 246, 1)",
          },
          red: {
            100: "rgba(227, 0, 0, 1)",
            40: "rgba(255, 242, 244, 1)",
          },
        },
      },
    },
  },
};
