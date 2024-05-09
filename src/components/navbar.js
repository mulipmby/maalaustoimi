import "@/app/globals.css";
import Link from "next/link";
import logo from "/public/logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white text-black p-4 md:flex md:justify-between md:items-center shadow-md sticky top-0 z-10">
      <div className="mx-auto flex justify-between items-center w-full max-w-[1800px]">
        <Image src={logo} alt="logo" height={50} />
        <Link
          href="#contact"
          className="rounded-full py-3 px-6 bg-teal-900 text-white font-bold uppercase text-sm"
          style={{ whiteSpace: "nowrap" }}
        >
          Pyydä tarjous
        </Link>
      </div>
    </nav>
  );
}
