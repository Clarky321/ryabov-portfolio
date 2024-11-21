"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/",
    },
    {
        name: "works",
        path: "/",
    },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div>Navbar</div>
    )
}