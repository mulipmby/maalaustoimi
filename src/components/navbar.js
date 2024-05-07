'use client';
import "@/app/globals.css";
import Link from 'next/link';
import logo from '/public/logo.svg'
import Image from 'next/image';
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
    <nav className="bg-white text-black p-4 md:flex md:justify-between md:items-center shadow-md sticky top-0 z-10"> 
      <div className="mx-auto flex justify-between items-center w-full max-w-[1800px]">
        <Image src={logo} alt="logo" height={50}/>
        <Link href="#contact" className="rounded-full py-3 px-6 bg-teal-900 text-white font-bold uppercase text-sm">
          Pyydä tarjous
        </Link>
      
      </div>
    </nav>
  );
}
