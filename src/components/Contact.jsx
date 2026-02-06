import React from 'react'
import { motion } from "motion/react";
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import github from '../assets/github.png'
import click from '../assets/click.png'
import touch from '../assets/touch.png'
const Contact = () => {
  return (
    <section id='contact' className='px-6 py-10 flex flex-col justify-center gap-3 items-center text-white font-roboto'>
            <motion.h1 
                initial={{ opacity: 0, y: 50 }}   // before appearing
                whileInView={{ opacity: 1, y: 0 }} // when in viewport
                viewport={{ once: false }}          // animate only once
                transition={{ duration: 1, ease: "easeOut" }}
                className='lg:text-4xl font-bold'>Contact Me !</motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 50 }}   // before appearing
                whileInView={{ opacity: 1, y: 0 }} // when in viewport
                viewport={{ once: false }}          // animate only once
                transition={{ duration: 1, ease: "easeOut" }}
                className='text-center italic'>Got a question? Send me a message, and I'll get back to you soon.</motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}   // before appearing
                whileInView={{ opacity: 1, y: 0 }} // when in viewport
                viewport={{ once: false }}          // animate only once
                transition={{ duration: 1, ease: "easeOut" }}
                className='w-full lg:w-1/3 sm:w-2/3 bg-white/20 rounded flex flex-col gap-3 justify-center items-center p-4'>
                <h1 className='lg:text-xl'>Get in Touch</h1>
                <p className='text-center'>Have something to discuss? Send me a message and let's talk.</p>
                <input placeholder='Your Name' className='px-2 py-1 border border-white/40 bg-white/10 rounded w-full' />
                <input placeholder='Your Email' className='px-2 py-1 border border-white/40 bg-white/10 rounded w-full' />
                <textarea placeholder='Your Message' className='px-2 py-1 border border-white/40 bg-white/10 rounded w-full' />
                <button className='bg-[#292929b3] w-full px-2 py-2 rounded text-white hover:bg-[#1b1b1b]'>Send Message</button>

                <div className='bg-white/10 w-full rounded p-4 flex gap-3 flex-col text-sm justify-center items-center'>
                    <div className='flex gap-2'>
                        <p>Connect with me !</p>
                        <img className='hidden lg:block w-4' src={click}/>
                        <img className='lg:hidden w-4' src={touch}/>
                    </div>
                    <div className='bg-white/5 rounded w-full p-2 flex gap-2'>
                        <img className='w-6 ' src={linkedin} />
                        <a href='https://linkedin.com/in/hvsingh28'>hvsingh28</a>
                    </div>
                    <div className='bg-white/5 rounded w-full p-2 flex gap-2'>
                        <img className='w-6 ' src={github} />
                        <a href='https://github.com/hvsingh28'>hvsingh28</a>
                    </div>
                    <div className='bg-white/5 rounded w-full p-2 flex gap-2'>
                        <img className='w-6 ' src={mail} />
                        <a href='mailto:hvsinghrathore28@gmail.com'>hvsinghrathore28@gmail.com</a>
                    </div>
                </div>
            </motion.div>

    </section>
  )
}

export default Contact