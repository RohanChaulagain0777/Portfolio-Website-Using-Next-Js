"use client";

import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/Projects" },
    { name: "About", path: "/About" },
    { name: "Contacts", path: "/Contacts" },
  ];

  return (
    <div className="flex justify-between items-center sticky top-0 z-50 m-10">
      <h1 className="text-lg font-semibold">R. C.</h1>
      <section className="flex items-center gap-5">
        <ModeToggle />
        <nav className="flex gap-6">
          {navLinks.map(({ name, path }) => {
            const isActive =
              path === "/" ? pathname === "/" : pathname.startsWith(path);

            return (
              <Link
                key={name}
                href={path}
                className={`text-sm font-medium 
                ${isActive ? "text-gray-600" : "text-gray-400 hover:text-gray-600"}
                `}
              >
                {name}
              </Link>
            );
          })}
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
