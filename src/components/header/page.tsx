"use client"
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/muhammad-tahir-109b80234/"
          fgColor="rgb(3, 83, 82)"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Tahir187"
          fgColor="rgb(3, 83, 82)"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com"
          fgColor="rgb(3, 83, 82)"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com"
          fgColor="rgb(3, 83, 82)"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-[rgb(3, 83, 82)]"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="rgb(3, 83, 82)"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[rgb(3, 83, 82)]">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Navbar;