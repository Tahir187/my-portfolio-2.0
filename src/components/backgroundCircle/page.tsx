import React from 'react'
import {motion} from "framer-motion"

type Props ={};
const BackgroundCircle = ({}:Props) => {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      scale: [1,2,2,3,1],
      opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
      borderRadius:["20%", "20%","50%", "80%", "20%"]
    }}
    transition={{
      duration: 2.5
    }}
    className='relative flex justify-center items-center top-9'>
        <div className='absolute border border-[#1d2b3e] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='rounded-full border border-[#1d2b3e] h-[300px] w-[300px] absolute mt-52' />
        <div className='rounded-full border border-[#1d2b3e] h-[400px] w-[400px] absolute mt-52' />
        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[500px] w-[500px] absolute mt-52 animate-pulse' />
        <div className='rounded-full border border-[#1d2b3e] h-[600px] w-[600px] absolute mt-52' />
    </motion.div>
  )
}

export default BackgroundCircle