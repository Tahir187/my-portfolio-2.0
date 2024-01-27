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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row  max-w-5xl px-8 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[16px] text-white text-2xl pb-20">
        About me
      </h3>

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
          className="-mb-5 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-55 md:h-75 xl:w-[300px] xl:h-[370px]"
        />
        <div className="space-y-7 px-0 md:px-4">
          <h4 className="text-3xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]">little</span>{" "}
            background
          </h4>
          <p className="text-base">
            Embarked on a digital odyssey post my Computer Science degree, I
            honed my craft at a transformative coding boot camp, emerging as a
            proficient MERN Stack Developer. Expanding my repertoire, I embraced
            TypeScript and Next.js, elevating my skill set. Today, as a Full
            Stack Developer, I seamlessly navigate between frontend finesse and
            backend wizardry, crafting immersive digital experiences. Beyond the
            syntax, my code tells stories of innovation and user-centric design,
            ushering in a future where creativity harmonizes with efficiency.
            Join me on this perpetual quest, as we code the narrative of
            tomorrow's digital landscapes. 🚀✨
          </p>
        </div>
    </motion.div>
  );
};

export default About;
