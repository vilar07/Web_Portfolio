import React, { useRef } from 'react'
import { useScroll } from "framer-motion"
import { motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}
            >
                <h3 className='text-2xl font-bold capitalize'>{position}&nbsp;<a href={companyLink}
                 target='_blank'
                 className='capitalize text-green dark:text-primaryDark'>@{company}</a></h3>
                <span className='font-medium capitalize text-dark/75 dark:text-light/75'>
                    {time} | {address}
                </span>
                <p className='w-full font-medium'>
                    {work}
                </p>
            </motion.div>   
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top'/>
                <ul className='flex flex-col items-center justify-between w-full ml-12'>
                    <Details 
                    position="Student" company="Aveiro University" companyLink="https://www.ua.pt/"
                    time="2019-2022" address="Universidade de Aveiro, 3810-193 Aveiro"
                    work="Completed a degree in computer and computer engineering"               
                    />

                    <Details 
                    position="Student" company="Aveiro University" companyLink="https://www.ua.pt/"
                    time="2022-2024" address="Universidade de Aveiro, 3810-193 Aveiro"
                    work="Completed a master's degree in computer engineering and telematics"               
                    /> 

                    <Details 
                    position="Internship" company="Wish & Cook" companyLink="https://wishandcook.com/pt"
                    time="2023-2024" address="3810-193 Aveiro"
                    work="Dissertation Internship at Wish & Cook"               
                    /> 

                    <Details 
                    position="Employee" company="Altice Labs" companyLink="https://www.alticelabs.com/"
                    time="2025-Now" address="3810-106 Aveiro"
                    work="Junior DevOps Engineer"               
                    /> 
                </ul>
        </div>
    </div>
  )
}

export default Education
