// components/Navbar.jsx
import { motion } from "framer-motion";
import { FaBars, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {

  const [bars, setBars] = useState(true)

  useEffect(() => {

    if (bars) return;

    const handlescroll = () => {
      setBars(!bars)

    }

    window.addEventListener('scroll', handlescroll)

    return () => {
      window.removeEventListener("scroll", handlescroll)
    }
  }, [bars])


  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-800 shadow-md fixed w-full top-0 z-50"
    >
      <div className="w-full mx-auto px-4 py-4 flex justify-between items-center shadow-lg shadow-purple-300">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-400">
          Shibam.dev
        </div>

        {/* Nav Links */}
        <FaBars className="lg:hidden text-white" onClick={() => {
          setBars(!bars)
        }} />
        <div className={bars ? 'hidden lg:flex lg:space-x-6 lg:text-white lg:text-xl lg:border-2 lg:border-white lg:px-6 lg:py-2 lg:rounded-lg lg:gap-10 font-sans bg-purple-500' : 'flex flex-col border-2 lg:flex-row lg:text-white lg:text-xl lg:border-0 lg:font-sans rounded-lg text-white border-black fixed right-5 top-10 p-4 lg:static lg:gap-10 lg:border-white lg:p-2 lg:rounded-lg bg-purple-500'}>
          <a href="#home" className="hover:text-purple-300 transition">Home</a>
          <a href="#skills" className="hover:text-purple-300 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-300 transition">Projects</a>
          <a href="#about" className="hover:text-purple-300 transition">About</a>
          <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
        </div>
        <div className="hidden lg:flex gap-3 items-center text-3xl">
          <a href="https://www.linkedin.com/in/shibam-debnath-aa5a12151/"
            target="_blank"
            className="border-2 border-purple-200 px-4 py-1 rounded-md text-purple-700 bg-white"><FaLinkedin /></a>
          <a href="https://github.com/SshibamDebnathh"
            target="_blank"
            className="border-2 border-slate-50 px-4 py-1 bg-purple-500 text-white rounded-md "><FaGithub /></a>
        </div>
      </div>
    </motion.nav>
  );
}
