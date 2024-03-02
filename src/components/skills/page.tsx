'use client'
import React from 'react'
import {motion} from 'framer-motion'
import SkillsCard from '../skill/page'
import { Skill } from '../../../typings'
type Props = {
  skills : Skill[]
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className='flex relative flex-col text-center  min-h-screen md:text-left xl:text-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='uppercase  tracking-[20px] text-white text-2xl top-20 absolute'>Skills</h3>
        <h3 className='uppercase  tracking-[3px] text-white text-sm top-36 absolute'>Hover over a skill for current profieciency</h3>

        <div className='grid grid-cols-4 gap-5 border border-white'>
          {skills?.slice(0, skills.length / 2).map((skill)=>(
            <SkillsCard key={skill._id} skill = {skill} />
            
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill)=>(
            <SkillsCard key={skill._id} skill = {skill} />
            
          ))}
            
        </div>
    </motion.div>
  )
}

export default Skills