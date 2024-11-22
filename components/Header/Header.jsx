import Link from "next/link";

// Компоненты
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import DarkMode from "./DarkMode";

export default function Header() {
    return (
        <header className="w-full flex items-center justify-between px-6 py-4 shadow-md transition-colors dark:bg-background dark:text-primary light:bg-navbar-light light:text-black">
            {/* Логотип */}
            <div>
                <Link href="/" className="text-lg font-bold transition-none">
                    Ryabov Sergey
                </Link>
            </div>

            {/* Навигация для десктопа */}
            <div className="hidden md:flex">
                <Navbar />
            </div>

            {/* Переключатель темы и мобильное меню */}
            <div className="flex items-center space-x-4">
                <DarkMode />
                <NavbarMobile />
            </div>
        </header>
    );
}