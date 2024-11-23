import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// ThemeProvider для управления темой
import ThemeProvider from "@/components/ThemeProvider";

// Компоненты
import Header from "@/components/Header/Header";
import PageTransition from "@/components/PageTransition";

// Подключение шрифта JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono', // Глобальная CSS-переменная для шрифта
});

// Метаинформация для страницы
export const metadata = {
  title: "Ryabov Sergey",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ThemeProvider>
            {/* Заголовок страницы */}
            <Header />
            {/* Основной контент */}
            <PageTransition>{children}</PageTransition>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}