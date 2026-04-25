"use client";

import Navbar from "./components/Navbar";
import {useState, useEffect} from 'react';
import  Link  from "next/link"
import { usePathname } from "next/navigation";
import { ModeToggle } from "./components/ModeToggle";

export default function Home() {

  const [visible, setVisible] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const toggleVisibility= () =>{
      if(window.scrollY > 50) setVisible(true)
         else setVisible(false)
    }
    
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);

  },[])

    const navLinks = [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/Projects" },
      { name: "About", path: "/About" },
      { name: "Contacts", path: "/Contacts" },
    ];

  return (
    <div>
      {
        visible && (
          <Navbar />
        )
      }
      
      <section className="flex justify-between item-center mx-10 my-5">
        <h1 className="text-9xl font-regular text-gray-700 dark:text-white">ROHAN CHAULAGAIN</h1>
        <nav className="flex gap-4 mt-5 flex-col">
          {navLinks.map(({ name, path }) => {
            const isActive =
              path === "/" ? pathname === "/" : pathname.startsWith(path);

            return (
              <Link
                key={name}
                href={path}
                className={`text-sm font-bold 
                ${isActive ? "text-gray-600" : "text-gray-400 hover:text-gray-600"}
                `}
              >
                {name}
              </Link>
            );
          })}
          <ModeToggle />
        </nav>
      </section>
    </div>
  );
}
