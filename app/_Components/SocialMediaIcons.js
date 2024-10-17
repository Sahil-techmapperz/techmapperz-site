"use client"
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowForward, IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

const SocialMediaIcons = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIcons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-1/3 z-50 right-0 transform -translate-y-1/2 flex items-center">
      {/* Social Media Icons */}
      <motion.div
        className={`relative flex flex-col space-y-4 p-4 bg-white rounded-l-lg shadow-lg ${
          isOpen ? 'mr-0' : 'mr-[-100%]'
        }`}
        initial={{ x: 100, opacity: 0 }}
        animate={isOpen ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Close Icon */}
        {isOpen && (
          <div
            className="absolute top-1 right-0 cursor-pointer text-gray-700"
            onClick={toggleIcons}
          >
            <IoMdClose size={20} />
          </div>
        )}

        {/* Social Media Links */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700"
        >
          <FaLinkedinIn size={24} />
        </a>
      </motion.div>

      {/* Toggle Arrow (Shown when icons are hidden) */}
      {!isOpen && (
        <div
          className="cursor-pointer bg-gray-800 text-white p-2 rounded-l-lg fixed right-0"
          onClick={toggleIcons}
        >
          <IoIosArrowForward size={24} />
        </div>
      )}
    </div>
  );
};

export default SocialMediaIcons;
