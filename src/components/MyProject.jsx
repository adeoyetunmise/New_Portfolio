import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GoGitCommit } from "react-icons/go";

const MyProject = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: "E-Commerce Website",
      details: "An online store built with React, Node.js, and MongoDB. Features include product search, cart management, and secure checkout.",
      link: "https://ooja-client.vercel.app/",
      imageSrc: "/src/assets/Ooja img2.png",
    },
    {
      title: "Law Firm Dashboard",
      details: "The law firm dashboard, built with React.js, Node.js, and MongoDB, offers a user-friendly interface for managing client information, tracking cases, scheduling appointments, and storing legal documents..",
      link: "https://idyllic-cocada-c1ad21.netlify.app/",
      imageSrc: "/src/assets/lawfirm.png",
    },
    {
      title: "Task Manager App",
      details: "A productivity app for task management. Built with React and Express, featuring real-time updates and notifications.",
      link: "https://mytaskmanager.com",
      imageSrc: "/images/taskmanager.png",
    },
  ];

  return (
    <div id='project' className="flex flex-col items-center justify-center bg-gray-100 p-8 min-h-screen">
      <div className="text-sky-600 flex items-center justify-center mt-5">
        {[...Array(4)].map((_, index) => (
          <GoGitCommit key={index} className="text-3xl" aria-label="Git Commit Icon" />
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-8">What I've Built</h2>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: -100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {project.imageSrc && (
              <img
                src={project.imageSrc}
                alt={`${project.title} preview`}
                className="mb-4 w-full h-40 object-cover rounded-md"
              />
            )}
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.details}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 font-bold hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
