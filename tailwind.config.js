/** @type {import('tailwindcss').Config} */
module.exports = {
  // Включение тёмной темы
  darkMode: ["class"],

  // Указание путей для сканирования классов Tailwind
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Глобальный префикс для классов Tailwind (если требуется)
  prefix: "",

  theme: {
    // Настройка контейнера
    container: {
      center: true, // Центрирование по горизонтали
      padding: "16px", // Отступы внутри контейнера
    },

    // Определение экранных размеров
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    // Добавление шрифта
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },

    extend: {
      // Определение цветов
      colors: {
        background: {
          DEFAULT: "#202023", // Тёмный фон
          light: "#F0E7DB",   // Светлый фон
        },
        backdropBlur: {
          sm: '4px',
          lg: '16px',
        },
        navbar: {
          light: "#f4ede4",   // Светлый фон для Navbar
        },
        primary: "#EDEDED",   // Основной текст (тёмный текст в светлой теме заменится на чёрный)
        accent: {
          DEFAULT: "#ffffff", // Белый акцент
          hover: "#88ccca",   // Голубой акцент при наведении
        },
      },

      // Анимации для аккордеона
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
    },
  },

  // Подключение плагинов
  plugins: [require("tailwindcss-animate")],
};