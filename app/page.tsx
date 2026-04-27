"use client";

import Navbar from "./components/Navbar";
import {useState, useEffect} from 'react';
import  Link  from "next/link"
import { usePathname } from "next/navigation";
import { ModeToggle } from "./components/ModeToggle";
import { CircleDashed } from 'lucide-react';
import SplitText from "@/components/SplitText";


export default function Home() {

  const [visible, setVisible] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const toggleVisibility= () =>{
      if(window.scrollY > 300) setVisible(true)
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
         <div
            role="heading"
            aria-level={1}
            className="font-light text-gray-700 dark:text-white leading-none"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            <SplitText
              text="ROHAN"
              splitType="chars"
              delay={50}
              duration={1}
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              ease="power3.out"
              textAlign="left"
            />
            <SplitText
              text="CHAULAGAIN"
              splitType="chars"
              delay={50}
              duration={1}
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              ease="power3.out"
              textAlign="left"
            />
          </div>
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

    <section className="relative mx-10 my-10" style={{ minHeight: "300px" }}>
      
      <div className="absolute top-10 left-0 w-48 flex flex-col gap-30">
        <p className="text-xs font-medium text-gray-600 uppercase leading-snug tracking-wide">
          I help companies, with front end development related work.
        </p>
        <span className="text-gray-600"><CircleDashed className="animate-spin" style={{animationDuration: '4s'}} size={60}/></span>
      </div>

     <div
        role="heading"
        aria-level={2}
        className="absolute bottom-0 left-1/3 font-light text-gray-700 dark:text-white leading-none"
        style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
      >
        <SplitText
          text="FRONT END"
          splitType="chars"
          delay={40}
          duration={1.2}
          from={{ opacity: 0, y: 60 }}
          to={{ opacity: 1, y: 0 }}
          ease="power3.out"
          textAlign="right"
        />
        <SplitText
          text="DEVELOPER"
          splitType="chars"
          delay={40}
          duration={1.2}
          from={{ opacity: 0, y: 60 }}
          to={{ opacity: 1, y: 0 }}
          ease="power3.out"
          textAlign="right"
        />
      </div>
    </section>

    <section className="relative mx-10 my-10">

      <div className="flex justify-between items-end">
        <div className="font-light text-gray-700 dark:text-white leading-none"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}>
          SOME
        </div>
        <div className="font-light text-gray-700 dark:text-white leading-none"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}>
          OF MY
        </div>
      </div>

      <div className="font-light text-gray-700 dark:text-white leading-none ml-20"
        style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}>
        PROJECTS
      </div>

      <div className="flex justify-center mt-4">
        <span className="text-xs font-medium text-gray-600 uppercase leading-snug tracking-wide text-center w-48">
          THE RESULTS OF MY WORK AS A FRONT END DEVELOPER
        </span>
      </div>

    </section>
    </div>
  );
}
