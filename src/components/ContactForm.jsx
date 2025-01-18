import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { GoGitCommit } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9b31r6v", // Replace with your EmailJS Service ID
        "template_evc7m4n", // Replace with your EmailJS Template ID
        form.current,
        "8S7oPFAXeIXI0Au9G" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send the message. Please try again later.", {
            position: "top-center",
            autoClose: 3000,
          });
          console.error(error);
        }
      );
  };

  return (
    <section className="py-16 bg-gray-100" id="contact" ref={ref}>
      {/* Toast Container */}
      <ToastContainer />
      
      <div className="text-sky-600 flex items-center justify-center mt-5">
        {[...Array(4)].map((_, index) => (
          <GoGitCommit key={index} className="text-3xl" aria-label="Git Commit Icon" />
        ))}
      </div>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 3 }}
        >
          <h2 className="text-2xl font-semibold">Send Me a Message</h2>
          <p className="text-lg text-gray-600">
            I'm currently available to take on new projects. Feel free to reach out for collaborations, consultations, or anything else!
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <HiMail className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-lg">adeoyetunmise53@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <HiPhone className="w-6 h-6 text-green-600 mr-3" />
              <span className="text-lg">+234 90309 06361</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <HiLocationMarker className="w-6 h-6 text-red-600 mr-3" />
              <span className="text-lg">Lagos, Nigeria.</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 max-w- mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
