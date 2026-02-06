import React from 'react'
import hero from "../assets/Hero.png"
import { motion } from "motion/react";
const HeroSec = () => {


  return (
    <section id='home' className='bg-[#1b1b1b] relative overflow-visible min-h-screen flex flex-col justify-between gap-4 pt-32 '>
      
        <div className='px-2.5 flex flex-col gap-3'>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}   // before appearing
              whileInView={{ opacity: 1, y: 0 }} // when in viewport
              viewport={{ once: false }}          // animate only once
              transition={{ duration: 1, ease: "easeOut" }}
              className='text-4xl  md:text-6xl lg:text-8xl font-bold text-white px-5 text-center'>Hi! Welcome to My <span>Portfolio</span></motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}   // before appearing
              whileInView={{ opacity: 1, y: 0 }} // when in viewport
              viewport={{ once: false }}          // animate only once
              transition={{ duration: 1, ease: "easeOut" }}
              className='text-xl lg:text-4xl md:text-2xl text-gray-300 px-1 md:px-7 text-center'>I'm <span className='text-white font-bold text-2xl lg:text-5xl'>Harsh</span>, a <span className='text-2xl lg:text-5xl text-gray-400 font-bold '>Full-Stack</span> website developer <br className='hidden md:block'></br><span>Let's build your online presense quickly and efficiently</span> </motion.p>
            <div className='text-white text-s lg:text-2xl lg:mt-8 flex flex-col items-center md:mt-0 mt-12  gap-6 md:gap-4 md:flex-row md:justify-center'>
                <motion.button
                              className="bg-[#292929b3] px-1.5 rounded-xl w-44 h-10 text-lg lg:w-64 lg:h-16 text-center flex justify-center items-center"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              initial={{ opacity: 0, x: -50 }}   // before appearing
                              whileInView={{ opacity: 1, x: 0 }} // when in viewport
                              viewport={{ once: true }}          // animate only once
                              transition={{ duration: 1, ease: "easeOut" }}
                              onClick={() =>
                                document.getElementById("projects").scrollIntoView({
                                  behavior: "smooth",
                                })
                              }
                            >
                              See projects
                </motion.button>
                <motion.button
                              className="bg-[#292929b3] px-1.5 rounded-xl w-44 h-10 text-lg lg:w-64 lg:h-16 text-center flex justify-center items-center"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              initial={{ opacity: 0, x: 50 }}   // before appearing
                              whileInView={{ opacity: 1, x: 0 }} // when in viewport
                              viewport={{ once: true }}          // animate only once
                              transition={{ duration: 1, ease: "easeOut" }}
                            >
                              Download Resume
                </motion.button>
                
            </div>
        </div>
        <motion.div 
          className='md:py-10 flex justify-center relative z-10 px-5  py-10 md:px-10'
          initial={{ opacity: 0, y: 150 }}   // before appearing
          whileInView={{ opacity: 1, y: 0 }} // when in viewport
          viewport={{ once: false }}          // animate only once
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img className='rounded-4xl  outline-6 outline-white/10 lg:w-3/4  sm:w-8/10 border-10  border-white/40' src={hero} alt='hero' />
        </motion.div>
      
        
    </section>
  )
}

export default HeroSec