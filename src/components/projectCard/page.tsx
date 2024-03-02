"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Project } from "../../../typings";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../../sanity.utils";

type ProjectProps = {
  project: Project;
};

export default function Project({ project }: ProjectProps) {
  const builder = imageUrlBuilder(client);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "0.8 1.4"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
      initial={{
        x: -170,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <section
        className="backdrop bg-white bg-opacity-10 
       border-gray-300 shadow-lg max-w-[42rem] border border-white/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] rounded-lg hover:bg-[#071321] transition group-even:pl-8"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{project?.title}</h3>
          <p className="mt-2 leading-relaxed text-white">
            {project?.description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {project?.technologies.map((technology) => (
              <li
                className="rounded-full object-cover flex items-center space-x-2 justify-center animate-pulse"
                key={technology._id}
              >
                <img
                  src={builder.image(technology?.image).url()}
                  alt="technolog"
                  className="h-10 w-10"
                />
              </li>
            ))}
          </ul>
        </div>
        <img
          src={builder.image(project?.image).url()}
          alt="Project I worked on"
          className="absolute top-8 -right-40 w-[28.25rem] 
           h-full object-cover rounded-t-lg shadow-dxl
           transition
          group-hover:scale-[1.04]
          group-hover:-translate-x-3 
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
