"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Ссылки для навигации
const links = [
    { name: "works", path: "/works" },
    { name: "services", path: "/services" },
    { name: "posts", path: "/posts" },
    { name: "контакты", path: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex space-x-6">
            {links.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    className={`capitalize transition-all ${link.path === pathname
                        ? "text-accent-hover border-b-2 border-accent"
                        : ""
                        }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}
