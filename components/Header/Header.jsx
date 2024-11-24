import Link from "next/link";

// Компоненты
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

export default function Header() {
    return (
        <header
            className="sticky top-0 w-full z-50 flex items-center justify-between
                       px-6 py-4 shadow-md backdrop-blur-lg
                       dark:bg-background/80 dark:text-primary
                       light:bg-navbar-light/80 light:text-black"
        >
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
                <NavbarMobile />
            </div>
        </header>
    );
}