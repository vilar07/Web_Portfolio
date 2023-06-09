import React, { useRef } from 'react'
import { useScroll } from "framer-motion"
import { motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
                 target='_blank'
                 className='text-green dark:text-primaryDark capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>   
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-0 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
            md:w-[2px] md:left-[30px] xs:left-[20px]
            '/>
                <ul className='w-full flex flex-col items-center justify-between ml-24 xs:ml-2'>
                    <Details 
                    position="Student" company="Aveiro University" companyLink="https://www.ua.pt/"
                    time="2019-2022" address="Universidade de Aveiro, 3810-193 Aveiro"
                    work="Completed a degree in computer and computer engineering"               
                    />

                    <Details 
                    position="Student" company="Aveiro University" companyLink="https://www.ua.pt/"
                    time="2022-Present" address="Universidade de Aveiro, 3810-193 Aveiro"
                    work="I'm taking a master's degree in computer engineering and telematics"               
                    /> 
                </ul>
        </div>
    </div>
  )
}

export default Experience
