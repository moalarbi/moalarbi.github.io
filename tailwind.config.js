const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
    "content/**/*.mdx",
  ],

  theme: {
    extend: {
      fontFamily: {
        // الخط الافتراضي الأساسي للموقع
        sans: ["var(--font-ibm-arabic)", ...defaultTheme.fontFamily.sans],
        // خط خاص للعناوين إذا احتجته
        display: ["var(--font-calsans)", ...defaultTheme.fontFamily.sans],
        // خيار إضافي لو حبيت تستخدمه يدويًا
        ibm: ["var(--font-ibm-arabic)"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: "none" },
            'blockquote p:first-of-type::after': { content: "none" },
          },
        },
      },
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "75%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        "fade-left": {
          "0%": { transform: "translateX(100%)", opacity: "0%" },
          "30%": { transform: "translateX(0%)", opacity: "100%" },
          "100%": { opacity: "0%" },
        },
        "fade-right": {
          "0%": { transform: "translateX(-100%)", opacity: "0%" },
          "30%": { transform: "translateX(0%)", opacity: "100%" },
          "100%": { opacity: "0%" },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },
          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
