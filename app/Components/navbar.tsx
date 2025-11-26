"use client";
import { Zen_Tokyo_Zoo } from "next/font/google";
import { useEffect, useState } from "react";
const zenTokyoZoo = Zen_Tokyo_Zoo({ subsets: ["latin"], weight: ["400"] });
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // สำหรับมือถือ

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={"fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black"}
      
    >
      <div className="mx-auto flex items-center justify-between px-6 py-7">
      
        {/* Logo */}
        <div className={`${zenTokyoZoo.className} text-2xl lg:text-3xl`}>CHANASORN</div>
    
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-xl text-white">
          <li><a href="#home" className=" hover:text-gray-300">home</a></li>
          <li><a href="#about" className=" hover:text-gray-300">About</a></li>
          <li><a href="#projects" className=" hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className=" hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Hamburger Mobile */}
        <div className="md:hidden text-white cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className={ "h-[120vh] text-black font-medium flex flex-col gap-4 px-6 py-4 md:hidden bg-white"}>
          <li className="py-2 cursor-pointer"><a href="#home" onClick={() => setMobileOpen(false)}>Home</a></li>
          <li className="py-2 cursor-pointer"><a href="#about" onClick={() => setMobileOpen(false)}>About</a></li>
          <li className="py-2 cursor-pointer"><a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a></li>
          <li className="py-2 cursor-pointer"><a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></li>
        </ul>
      )}
      <div className="w-full p-3 bg-danger-600">
        <div className="flex-row  flex justify-center items-center">
          <p className="flex text-center text-white text-sm">Welcome to my portfolio website!</p>
          <button>
            <span className="ml-4 text-white underline text-sm p-2 bg-danger-200 rounded-xl"><a href="#contact">Contact Me</a></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
