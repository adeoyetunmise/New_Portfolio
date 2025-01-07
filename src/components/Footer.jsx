import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white py-8 ">
      <div className="max-w-7xl mx-auto px-6  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 ">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
                </li>
                <li>
                <a href="https://drive.google.com/file/d/117Db4L6Jh0jNo89iVgwkQb-hxN7ZOkx6/view?usp=sharing" className="hover:text-blue-400 transition">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-6">
            <a href="https://web.facebook.com/tunmishe4christ" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition">
            <FaFacebook  className="w-6 h-6" /></a>

              <a href="http://linkedin.com/in/tunmise-adeoye-7672b51b6" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/adeoyetunmise" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://github.com/adeoyetunmise" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/adeoyetunmise/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:email@example.com" className="hover:text-blue-400 transition">
                  adeoyetunmise53@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-blue-400 transition">
                  +234 903 090 6361
                </a>
              </li>
              <li>
                <span className="hover:text-blue-400 transition">
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>

          {/* Copyright Notice */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Tenacious. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
