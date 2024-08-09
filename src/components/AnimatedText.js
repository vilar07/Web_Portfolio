import React from 'react'
import { delay, motion } from 'framer-motion';

const quote ={
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1, 
        transition:{
            delay:0.5, // delay before animation starts
            staggerChildren:0.08, // delay between each children
        }
    },

}

const singleWord ={
  initial:{
      opacity:0,
      y:50, //each word starts 50px below
  },
  animate:{
      opacity:1,
      y:0,
      transition:{
          duration:1.5 //duration of animation
      }
  },

}

const AnimatedText = ({text, className=""}) => {
  return (
    <div className='flex items-center justify-center w-full py-2 mx-auto overflow-hidden sm:py-0'>
      <motion.h1 className={`inline-block w-full text-dark font-semibold capitalize text-8xl dark:text-light ${className}`}
      variants={quote}
      initial="initial"
      animate="animate"
      >
        {
            text.split(" ").map((word, index) => 
            <motion.span key={word+'-'+index} className='inline-block'
            variants={singleWord}
            >
                {word}&nbsp;
            </motion.span>
            )
        }
      </motion.h1>
    </div>
  )
}

export default AnimatedText
