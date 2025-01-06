import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import  { useState, useEffect } from "react";
import heroImage from "../assets/tenacious.png"

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 1 },
};


const HeroPage = () => {
  const textToType = "Software Developer"; // Text to display
  const [typedText, setTypedText] = useState(""); // Typed text state
  const [isCursorVisible, setIsCursorVisible] = useState(true); // Cursor blinking state

  useEffect(() => {
    // Typing effect
    let typingTimeout;
    if (typedText.length < textToType.length) {
      typingTimeout = setTimeout(() => {
        setTypedText((prev) => prev + textToType[prev.length]);
      }, 150); // Typing speed (ms)
    }

    return () => clearTimeout(typingTimeout);
  }, [typedText, textToType]);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 500); // Blinking speed (ms)

    return () => clearInterval(cursorInterval);
  }, [])
  
  return (
    
    <motion.div 
    variants={variants}
    initial = "hidden"
    animate = "visible"
    transition = {{duration: 1}}
     className="flex flex-col bg-slate-300 md:flex-row items-center justify-center md:justify-between p-8 gap-8">
      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <img
          src={heroImage}
          alt="Placeholder"
          className="w-80 rounded-3xl shadow-md md:ml-32"
        />
      </div>
    {/* Text Section */}
    <div className="md:w-1/2 w-full flex flex-col gap-3 md:mr-10">
    <h1 className="text-black font-bold text-xl">
          Howdy,
        </h1>
        <h1 className="text-2xl font-extrabold text-gray-800">I'm Adeoye Tunmise</h1>
        
        <p className="text-sky-500 font-bold text-5xl">
          {typedText}
          <span
        className={`${
          isCursorVisible ? "opacity-100" : "opacity-0"
        } w-1 h-6 ml-1`}
      >|</span>
        </p>
        <p className="text-black text-xl">
        A passionate software developer, skilled in JavaScript, Node.js, React, and MongoDB. I focus on creating efficient, scalable applications and enjoy solving complex problems while continuously learning and adapting to new technologies. 
        </p>

{/* Social Media Icons */}
<div className="flex items-center gap-4 mt-4">
          <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
          <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
          <FaInstagram className="text-pink-600 text-2xl cursor-pointer" />
        </div>


        <motion.a
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
          href="https://wa.me/2349030906361?text=Hello%2C%20I'd%20like%20to%20connect!"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 text-center px-6 py-3 md:w-40 bg-sky-500 text-white font-semibold rounded-lg shadow hover:bg-sky-600"
        >
          let's chat
        </motion.a>

      </div>
    </motion.div>
  )
}

export default HeroPage