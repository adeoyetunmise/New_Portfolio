import React from 'react'
import { useState } from 'react';
import { FaFireFlameCurved } from "react-icons/fa6";
import { motion } from "framer-motion";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <>
    <nav className="p-4 ">
      <div className="max-w-7xl mx-auto flex items-center p-7 justify-between">
        {/* Logo Section */}
        <div className="text-black text-2xl font-semibold flex items-center ">
          <a href="">Adeoye Tunmise</a>
          <FaFireFlameCurved className='text-sky-700' />
        </div>

        {/* Mobile menu button */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar links (visible on large screens) */}
        <div className="hidden lg:flex space-x-6">
        <a href="#about" className="text-black text-lg hover:text-blue-300">
            Home
          </a>
          <a href="#about" className="text-black text-lg hover:text-blue-300">
            About
          </a>
          <a href="#projects" className="text-black text-lg hover:text-blue-300">
            Projects
          </a>
          <a href="#contact" className="text-black text-lg hover:text-blue-300">
            Contact
          </a>
          <motion.a
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
           href="https://drive.google.com/file/d/1zVU8EGcPgKk0DPNxUm1CyEcHBw3Y5ekE/view?usp=sharing" className="text-white text-xl bg-sky-500 rounded px-2 py-1 hover:text-white">
            View Resume
          </motion.a>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden text-black p-4 space-y-4">
            <a href="#about" className="block hover:text-blue-300">
            Home
          </a>
          <a href="#about" className="block hover:text-blue-300">
            About
          </a>
          <a href="#projects" className="block hover:text-blue-300">
            Projects
          </a>
          <a href="#contact" className="block hover:text-blue-300">
            Contact
          </a>
        </div>
      )}
    </nav>
    </>
  )
}

export default NavBar