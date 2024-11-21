/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)", 
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#202023", // Тёмная тема
          light: "#F0E7DB",   // Светлая тема
        },
        navbar: {
          light: "#f4ede4",   // Светлый фон для navbar
        },
        primary: "#EDEDED",   // Основной текст
        accent: {
          DEFAULT: "#ffffff", // Акцент белый
          hover: "#88ccca",   // Голубой при наведении
        },
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
					to: { opacity: "1" },
        },
        fadeOut: {
					from: { opacity: "1" },
					to: { opacity: "0" },
				},
      },
      animation: {
				fadeIn: "fadeIn 0.5s ease-in-out",
				fadeOut: "fadeOut 0.5s ease-in-out",
			},
    },
  },
  plugins: [require("tailwindcss-animate")],
};