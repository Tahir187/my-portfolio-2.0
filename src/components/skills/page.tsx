'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Skill from '../skill/page'
type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className='flex relative flex-col text-center md:text-left xl:text-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='uppercase  tracking-[20px] text-white text-2xl top-20 absolute'>Skills</h3>
        <h3 className='uppercase  tracking-[3px] text-white text-sm top-36 absolute'>Hover over a skill for curreny profieciency</h3>

        <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
    </motion.div>
  )
}

export default Skills