/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        red: "#E3646E",
        purple: "#BB72E9",
        blue: "#3996DB",
        green: "#82BC4F",
        yellow: "#EABD5F",
        gray: {
          100: "#0D0E11",
          200: "#16181D",
          300: "#292C34",
          400: "#878EA1",
          500: "#C0C4CE",
          600: "#E2E4E9",
        },
      },
      fontFamily: {
        sans: "Quicksand",
        serif: "Inconsolata",
      },
    },
  },
  plugins: [{ plugins: [require("@tailwindcss/typography")] }],
};
