"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img 
      initial={{
        x: directionLeft ? -200 : 200,
        opacity : 0,
      }}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
      className="rounded-full border border-gray-200 object-cover w-16 h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transitionduration-300 ease-in-out group-hover:bg-white h-16 w016 xl:w-20 xl:h-20 rounded-full z-0 group-hover:text-black">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold justify-center">100%</p>
        </div>
      </div>
    </div>
  );
}
export default Skill;
