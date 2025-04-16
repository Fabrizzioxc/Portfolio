"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, } from "lucide-react";
import { Button } from "../components/ui/button";
import GitHub from "../assets/icons/GitHub";
import LinkedIn from "../assets/icons/LinkedIn";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navMenuRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen && window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && navMenuRef.current && !navMenuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  console.log("isOpen:", isOpen);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b-4 border-black bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="font-bold text-2xl">Fabrizzio</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#experiencia" className="hover:underline">Experiencia</a>
          <a href="#proyectos" className="hover:underline">Proyectos</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <a href="https://www.linkedin.com/in/fabrizzio-zambrano-602678334/" target="_blank" rel="noopener noreferrer">
            <Button>
              <LinkedIn className="w-6 h-6" />
            </Button>
          </a>
          <a href="https://github.com/Fabrizzioxc" target="_blank" rel="noopener noreferrer">
            <Button>
              <GitHub className="w-6 h-6" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ">
          <button onClick={handleToggle}>
            {isOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={navMenuRef}
            initial={{ translateX: "100%" }}
            animate={{ translateX: "0%" }}
            exit={{ translateX: "100%" }}
            transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-64 bg-white border-l-4 border-black p-6 flex flex-col z-50"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X size={32} strokeWidth={3} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 text-lg font-medium">
              <a href="#experiencia" onClick={() => setIsOpen(false)}>Experiencia</a>
              <a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
              <a href="#habilidades" onClick={() => setIsOpen(false)}>Habilidades</a>
              <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col space-y-4 mt-6">
              <a href="https://www.linkedin.com/in/fabrizzio-zambrano-602678334/" target="_blank" rel="noopener noreferrer">
                <Button>
                  <LinkedIn className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://github.com/Fabrizzioxc" target="_blank" rel="noopener noreferrer">
                <Button>
                  <GitHub className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
