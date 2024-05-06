'use client';
import "@/app/globals.css";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[60px]",
        "bg-white",
        "shadow-md",
        "w-full",
        "left-0",
        "p-4",
        "gap-10",
        "flex-col",
        "text-black",
      ];
    } else {
      menuClasses = [
        "hidden",
        "md:flex"
      ];
    }
    return menuClasses.join(" ");
  }

  function handleSubMenuHover() {
    setIsSubMenuOpen(!isSubMenuOpen);
  }

  return (
    <nav className="bg-white/80 text-black p-4 sm:p-6 md:flex md:justify-between md:items-center shadow-md sticky top-0 z-10"> 
      <div className="container mx-auto flex justify-between items-center">
        <Link href="" className="rounded-full text-2xl py-2 px-12 bg-[#899C9B] text-white font-bold">
          Pyydä tarjous
        </Link>
        
        <div className={getMenuClasses()} >
          <Link href="/" className="text-2xl mx-2 hover:text-black">
            Etusivu
          </Link>
          <div className="relative inline-block" onMouseEnter={handleSubMenuHover} onMouseLeave={handleSubMenuHover}>
            <Link href="" className="text-2xl mx-2 hover:text-black">
              Palvelumme
            </Link>
            {isSubMenuOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md py-2 px-4">
                <Link href="/ulkomaalaus" className="block py-1 hover:text-black">Ulkomaalaus</Link>
                <Link href="/huoltotyo" className="block py-1 hover:text-black">Huoltotyö</Link>
              </div>
            )}
          </div>
          <Link href="/kokemuksia" className="text-2xl mx-2 hover:text-black">
            Kokemuksia
          </Link>
          <Link href="/meista" className="text-2xl mx-2 hover:text-black">
            Meistä
          </Link>  
          <Link href="/yhteystiedot" className="text-2xl mx-2 hover:text-black">
            Yhteystiedot
          </Link>
        </div>     

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
