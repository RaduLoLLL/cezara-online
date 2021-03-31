import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  const isActive = (href) => {
    const router = useRouter();
    return router.pathname === href ? true : false;
  };
  return (
    <div>
      <nav className="flex justify-between items-center">
        <Image src="/Logo.svg" width={109} height={50} />
        <div className="lg:hidden text-yellow-500" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>

        <div className="flex lg:block hidden font-semibold text-xl">
          <Link href="/">
            <a
              href="#"
              className={`px-10 mx-5 py-5  ${
                isActive("/")
                  ? "bg-yellow-500 text-white"
                  : "text-yellow-500 hover:bg-yellow-500 hover:text-white"
              }`}
            >
              Acasa
            </a>
          </Link>
          <Link href="/magazin">
            <a
              href="#"
              className={`px-10 mx-5 py-5  ${
                isActive("/magazin")
                  ? "bg-yellow-500 text-white"
                  : "text-yellow-500 hover:bg-yellow-500 hover:text-white"
              }`}
            >
              Magazin
            </a>
          </Link>
          <Link href="/contact">
            <a
              href="#"
              className={`px-10 mx-5 py-5  ${
                isActive("/contact")
                  ? "bg-yellow-500 text-white"
                  : "text-yellow-500 hover:bg-yellow-500 hover:text-white"
              }`}
            >
              Contact
            </a>
          </Link>
        </div>

        <div className="lg:flex hidden flex items-center">
          <div className="px-5 cursor-pointer">
            <Link href="/cos">
              <Image src="/cart.svg" width={40} height={40} />
            </Link>
          </div>
          <div className="px-5 cursor-pointer">
            <Link href="/profil">
              <Image src="/user.svg" width={40} height={40} />
            </Link>
          </div>
          <div className="px-5 cursor-pointer">
            <Link href="/setari">
              <Image src="/settings.svg" width={40} height={40} />
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`flex flex-col font-semibold text-xl mt-10 text-center `}
        style={{
          transition: "all 1s ease-out",
          opacity: isOpen ? "100%" : "0",
          height: isOpen ? "100%" : "0",
        }}
      >
        <Link href="/">
          <a
            href="#"
            className={`px-10 mx-5 py-5  ${
              isActive("/")
                ? "bg-yellow-500 text-white"
                : "text-yellow-500 hover:bg-yellow-500 hover:text-white"
            }`}
          >
            Acasa
          </a>
        </Link>
        <Link href="/magazin">
          <a
            href="#"
            className={`px-10 mx-5 py-5  ${
              isActive("/magazin")
                ? "bg-yellow-500 text-white"
                : "text-yellow-500 hover:bg-yellow-500 hover:text-white"
            }`}
          >
            Magazin
          </a>
        </Link>
        <Link href="/contact">
          <a
            href="#"
            className={`px-10 mx-5 py-5  ${
              isActive("/contact")
                ? "bg-yellow-500 text-white"
                : "text-yellow-500 hover:bg-yellow-500 hover:text-white"
            }`}
          >
            Contact
          </a>
        </Link>
        <div className="flex justify-center items-center my-10">
          <div className="px-5 cursor-pointer">
            <Link href="/cos">
              <Image src="/cart.svg" width={40} height={40} />
            </Link>
          </div>
          <div className="px-5 cursor-pointer">
            <Link href="/profil">
              <Image src="/user.svg" width={40} height={40} />
            </Link>
          </div>
          <div className="px-5 cursor-pointer">
            <Link href="/setari">
              <Image src="/settings.svg" width={40} height={40} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
