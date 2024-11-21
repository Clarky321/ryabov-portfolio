import Link from "next/link";

// components
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import DarkMode from "./DarkMode";

export default function Header() {
    return (
        <header className="w-full flex items-center justify-between px-6 py-4 bg-background shadow-md">
            {/* Логотип слева */}
            <div>
                <Link
                    href="/"
                    className="text-lg font-bold text-accent transition-none">
                    Ryabov Sergey
                </Link>
            </div>

            {/* Навигация по центру */}
            <div className="hidden md:flex">
                <Navbar />
            </div>

            {/* Переключатель темы справа */}
            <div className="flex items-center space-x-4">
                <NavbarMobile />
                <DarkMode />
            </div>
        </header>
    );
}