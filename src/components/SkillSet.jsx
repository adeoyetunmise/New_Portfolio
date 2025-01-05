import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaDatabase,
  FaGit,
  FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss,  SiBootstrap } from 'react-icons/si';


const SkillSet = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const skills = [
      { icon: <FaReact className="text-sky-500" />, name: "React" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
      { icon: <FaCss3 className="text-blue-500" />, name: "CSS3" },
      { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
      { icon: <FaDatabase className="text-purple-500" />, name: "MongoDB" },
      { icon: <SiTailwindcss className="text-teal-500" />, name: "Tailwind CSS" },
      { icon: <SiBootstrap className="text-indigo-600" />, name: "Bootstrap" },
      { icon: <FaGit className="text-red-500" />, name: "Git" },
      { icon: <FaGithub className="text-gray-700" />, name: "GitHub" },
      
    ];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-screen">
    <h2 className="text-3xl font-bold mb-8">My Tech Stack</h2>
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg"
        >
          <div className="text-6xl mb-4">{skill.icon}</div>
          <p className="text-xl font-semibold">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </div>
  )
}

export default SkillSet