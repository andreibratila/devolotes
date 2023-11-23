"use client";
import { useState, useEffect } from "react";

import Link from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header
      className={`fixed w-screen bg-slate-300 transition-all duration-700 ease-in-out ${
        isScrolled ? "" : "  bg-opacity-30 backdrop-filter backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and navigation */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              {/* Your Logo Here */}
              <Link href="/">DEVOLOTES</Link>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex items-center justify-end">
              <div className="hidden sm:block sm:ml-6">
                <nav className="flex space-x-4">
                  <Link
                    href="/"
                    className="text-black font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/lotes"
                    className="text-black font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Lotes
                  </Link>
                  <Link
                    href="/faq"
                    className="text-black font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dudas
                  </Link>
                  <Link
                    href="/Contacto"
                    className="text-black font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contactanos
                  </Link>
                </nav>
              </div>

              {/* Botón para el menú móvil */}
              <div className="flex items-center sm:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                >
                  <span className="sr-only">Open main menu</span>
                  <p>{isMenuOpen ? "Cerrar Menú" : "Menu"}</p>
                </button>
              </div>
            </div>

            {/* Navigation Links Compact */}
          </div>
        </div>
        {isMenuOpen && (
          <nav className="sm:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1 text-center">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dudas
                </Link>
              </li>
              <li>
                <Link
                  href="/lotes"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Lotes
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contactanos
                </Link>
              </li>
              {/* ... más ítems ... */}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
