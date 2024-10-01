/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Changed from "class" to 'class'
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" }, // Add this line
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(function ({ addComponents, theme }) {
      addComponents({
        ".button": {
          // Changed from button to .button
          backgroundColor: theme("colors.blue.500"),
          "@media (prefers-color-scheme: dark)": {
            // Changed this line
            backgroundColor: theme("colors.blue.600"),
          },
        },
      });
    }),
  ],
};
