"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-white-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/mtahir.jpg"
        alt="M.Tahir image"
        className="-mb-20  md:mb-0 mt-[600px] flex-shrink-0 w-56 h-50 rounded-full object-cover  md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px] xl:mt-20"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a little background
        </h4>
        <p className="text-sm">
          I'm Muhammad Tahir Bharchoond a MERN Stack Developer here is little about me. 
          Embarking on a journey fueled by curiosity and a passion for problem-solving, I graduated with a degree in Computer Science—an expedition that laid the foundation for my love affair with technology.
          After donning the cap and gown, my path evolved into the realm of Full Stack Development, where I seamlessly blend the art of frontend finesse with the precision of backend wizardry. As a MERN Stack enthusiast, I orchestrate the symphony of NextJs, TypeScript, MongoDB, Express.js, React, and Node.js, TailwindCSS, Sanity to breathe life into digital landscapes. 
          For me, coding is an artistic expression—a canvas where pixels meet logic. Each project is a masterpiece, meticulously crafted with a palette of languages and frameworks, creating immersive and user-centric experiences.
          In the ever-evolving tech landscape, I navigate through the bits and bytes, exploring the horizons of innovation. My journey transcends borders, collaborating on projects that traverse the digital terrain and bring diverse ideas to life.
          Every line of code is an ode to passion—an ode to sculpting tomorrow's digital elegance. Join me on this odyssey through algorithms, frameworks, and the ever-expanding universe of possibilities as we craft the future, one byte at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
