"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col max-w-4xl  items-center mx-auto justify-center"
    >
      <h3 className="uppercase  tracking-[16px] text-white text-2xl pt-20 ">
        About me
      </h3>

      <div
        className="flex items-center justify-evenly flex-col pt-8 md:flex-row mt-10 mx-auto
         backdrop bg-white bg-opacity-10 rounded border border-gray-500 shadow-lg
        "
      >
        <motion.img
          initial={{
            x: -170,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="/tahir.jpg"
          className="mb-5 mt-10 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded md:w-55 md:h-75 xl:w-[280px] xl:h-[330px]"
        />
        <div className="space-y-7 px-0  md:px-4 text-white">
          <h4 className="text-3xl font-semibold text-center">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]">little&apos;</span>{" "}
            background
          </h4>

          <p className="text-base text-center w-full pb-7">
            Embarked on a digital odyssey post my Computer Science degree, I
            honed my craft at a transformative coding boot camp, emerging as a
            proficient MERN Stack Developer. Expanding my repertoire, I embraced
            TypeScript and Next.js, elevating my skill set. Today, as a Full
            Stack Developer, I seamlessly navigate between frontend finesse and
            backend wizardry, crafting immersive digital experiences. Beyond the
            syntax, my code tells stories of innovation and user-centric design,
            ushering in a future where creativity harmonizes with efficiency.
            Join me on this perpetual quest, as we code the narrative of
            tomorrow&apos; digital landscapes. 🚀✨
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
