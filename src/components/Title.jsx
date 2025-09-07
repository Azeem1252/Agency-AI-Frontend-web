import React from 'react'
import { motion } from "motion/react"
const Title = ({title ,desc}) => {

  return (
    <>
      <motion.h3 
       initial={{ y: 30, opacity: 0 }}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }} 
      className='text-3xl sm:text-5xl font-medium'>{title}</motion.h3>
      <motion.p 
       initial={{ y: 20, opacity: 0 }}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.5,delay:  0.2 }}
      viewport={{ once: true }}
      className='text-w-lg max-w-4/5 sm:max-w-lg text-gray-500 text-center dark:text-white/80 mb-6'>{desc}</motion.p>
    </>
  )
}

export default Title
