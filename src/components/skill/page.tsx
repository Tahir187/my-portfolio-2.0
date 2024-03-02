"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../../typings";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../../sanity.utils";


type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function SkillsCard({ skill,directionLeft }: Props) {
  const builder = imageUrlBuilder(client);
  return (
    <div className="group w-[150px] relative flex cursor-pointer">
      <motion.img 
      initial={{
        x: directionLeft ? -200 : 200,
        opacity : 0,
      }}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      src={builder.image(skill?.image).url()}
      className="rounded-full border border-gray-200 object-contain w-[100%] xl:w-[100%] filter group-hover:grayscale transition duration-300 ease-in-out bg-gray-50"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transitionduration-300 ease-in-out group-hover:bg-white h-[100%] w-[100%] xl:w-[100%] xl:h-[100%] rounded-full z-0 group-hover:text-black">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold justify-center">{skill?.progres}%</p>
        </div>
      </div>
    </div>
  );
}
export default SkillsCard;
