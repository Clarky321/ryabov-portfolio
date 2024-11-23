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

/*
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


export default function PageTransition({ children }) {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="h-screen w-screen fixed bg-background top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    )
}
*/