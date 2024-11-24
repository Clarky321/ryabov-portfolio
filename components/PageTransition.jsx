"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 50 }} // Начальное состояние: прозрачность 0 и смещение вниз
                animate={{ opacity: 1, y: 0 }} // Конечное состояние: прозрачность 1 и смещение на место
                exit={{ opacity: 0, y: -50 }} // При выходе: прозрачность 0 и смещение вверх
                transition={{
                    duration: 0.6, // Длительность анимации
                    ease: "easeInOut", // Тип анимации
                }}
                className="relative" // Добавляем CSS-классы при необходимости
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}