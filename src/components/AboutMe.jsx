import React from "react";
import { GoGitCommit } from "react-icons/go";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import tenaImage from "../assets/tena.jpg"; // Adjust the path as needed

const AboutMe = () => {
  // Setup useInView hooks for sections
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: true, // Animate only once
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <div id="about">
      {/* Icons Section */}
      <div className="text-sky-600 flex items-center justify-center mt-5">
        {[...Array(4)].map((_, index) => (
          <GoGitCommit key={index} className="text-3xl" aria-label="Git Commit Icon" />
        ))}
      </div>

      <h1 className="text-center text-3xl font-bold mt-1">About Me</h1>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8 gap-8">
        {/* Text Section */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: -50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 w-full flex flex-col gap-3 md:text-pretty md:ml-14 text-black text-xl font-semibold"
        >
          <p className="font-bold text-sky-600 text-2xl">Hi, I’m Adeoye Tunmise.</p>
          <p>But you can call me Tena!😉</p>
          <p>
            A software developer dedicated to building efficient, scalable, and impactful applications.
            With expertise in JavaScript, React, Node.js, and MongoDB.
          </p>
          <p>
            I thrive on solving complex challenges and crafting solutions that make a difference.
          </p>
          <p>
            I have experience designing interactive user interfaces, creating robust APIs,
            and working on end-to-end software solutions.
          </p>
          <p>
            When I’m not coding, you’ll likely find me exploring new tools, diving into tech articles,
            or brainstorming my next big project! Let’s connect and create something amazing together. 🚀
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 w-full"
        >
          <img
            src={tenaImage}
            alt="Adeoye Tunmise"
            className=" max-w-62 md:max-w-96 rounded-lg shadow-md "
          />
        </motion.div>
      </div>
      </div>
    </>
  );
};

export default AboutMe;
