"use client";
import React from 'react'
import {motion} from "framer-motion"
type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
        <motion.img 
        initial={{
            y: -100,
            opacity:0,
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        src="/experience.png" alt="experience"
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' />
    </article>
  )
}

export default ExperienceCard