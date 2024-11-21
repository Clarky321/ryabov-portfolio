"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CiMenuFries } from "react-icons/ci"

import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    { name: "works", path: "/works" },
    { name: "services", path: "/services" },
    { name: "posts", path: "/posts" },
];

export default function NavbarMobile() {
    const pathname = usePathname();
  
    return (
      <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="p-2 rounded-md text-accent hover:bg-accent/10 transition-all">
          <CiMenuFries size={20} />
        </SheetTrigger>
        <SheetContent className="bg-background p-6 flex flex-col items-end">
          <div className="mt-16 mb-12 text-center">
            <Link href="/" className="text-3xl font-bold">
              Ryabov
            </Link>
          </div>
          <nav className="flex flex-col gap-4 items-center">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`capitalize text-lg ${
                  pathname === link.path
                    ? "text-accent border-b-2 border-accent"
                    : "text-primary hover:text-accent-hover"
                } transition-all`}>
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      </div>
    );
  }