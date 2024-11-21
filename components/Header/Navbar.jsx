"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "works", path: "/works" },
    { name: "services", path: "/services" },
    { name: "posts", path: "/posts" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex space-x-6">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`text-primary transition-colors ${
                        link.path === pathname
                        ? "text-accent underline underline-offset-4" 
                        : "hover:text-accent-hover"
                    }`}>
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}
