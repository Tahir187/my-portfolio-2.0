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
      className="w-[100px]"
      />
    </div>
  );
}
export default Skill;
