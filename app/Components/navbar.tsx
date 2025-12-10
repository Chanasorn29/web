"use client";
import { Zen_Tokyo_Zoo } from "next/font/google";
import { useEffect, useState } from "react";

const zenTokyoZoo = Zen_Tokyo_Zoo({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black">
      <div className="mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className={`${zenTokyoZoo.className} text-xl lg:text-2xl`}>CHANASORN</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-xl text-white">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#footer" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Hamburger Mobile */}
        <div className="md:hidden text-white cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="h-[120vh] text-black font-medium flex flex-col gap-4 px-6 py-4 md:hidden bg-white">
          <li className="py-2 cursor-pointer"><a href="#home" onClick={() => setMobileOpen(false)}>Home</a></li>
          <li className="py-2 cursor-pointer"><a href="#about" onClick={() => setMobileOpen(false)}>About</a></li>
          <li className="py-2 cursor-pointer"><a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a></li>
          <li className="py-2 cursor-pointer"><a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></li>
        </ul>
      )}

      {/* Contact Button */}
<div
  
  className="relative w-full p-2 bg-danger-600 flex justify-center overflow-hidden bg-watermark"
>
  <span className="shine"></span>

  <div className="watermark-text-pattern">
    {Array.from({ length: 30 }).map((_, i) => (
      <span key={i}>CHANASORN</span>
    ))}
  </div>


  <button onClick={() => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  }} className="relative overflow-hidden flex px-6 py-0.5 
                     bg-danger-300 text-white rounded-lg 
                     hover:bg-black transition hover:scale-105 animate-tilt">

    <span className="absolute inset-0 flex items-center justify-center 
                     text-white/10 font-bold tracking-widest 
                     mix-blend-overlay pointer-events-none select-none">
      CONTACT
    </span>

    <span className="shine flex items-center justify-center"></span>
    <a href="#footer">Contact me now!</a>
    
    <span className="px-1">
      <img src="/point.png" alt="" className="size-4 mt-1" />
    </span>
  </button>
</div>


    </nav>
  );
}
