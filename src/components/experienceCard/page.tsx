"use client";
import React from 'react'
import {motion} from "framer-motion"
type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5  flex-shrink-0 w-[300px] md:w-[400px] xl:w-[600px] snap-center bg-[#074746]  p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
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

        <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Boot Camp</h4>
        <p className='font-bold text-2xl mt-1'>MERN Stack</p>
        <div className='flex space-x-2 my-2'>
        <img src="/javascript-logo.png"
        className='h-10 w-10 rounded-full'
        alt="javascript-logo"/>
        <img src="/javascript-logo.png"
        className='h-10 w-10 rounded-full'
        alt="javascript-logo"/>
        <img src="/javascript-logo.png"
        className='h-10 w-10 rounded-full'
        alt="javascript-logo"/>
        <img src="/javascript-logo.png"
        className='h-10 w-10 rounded-full'
        alt="javascript-logo"/>
        </div>
        <p className='uppercase py-5 text-white'>Started work... - Ended</p>
        <ul className='list-disc space-y-4 ml-5 text-lg '>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
        </div>
    </article>
  )
}

export default ExperienceCard