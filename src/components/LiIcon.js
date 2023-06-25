import React from 'react'
import { motion } from 'framer-motion'
import { useScroll } from "framer-motion"

const LiIcon = ({reference}) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )
  return (
    <div>
        <figure className='absolute left-0 stroke-dark dark:stroke-light'>
            <svg className='-rotate-90 md:w-[75px] md:h-[70px] xs:w-[75px] xs:h-[40px]
            sm:w-[75px] sm:h-[50px]
            ' width="75" height="75" viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className='stroke-green dark:stroke-primaryDark stroke-1 fill-none'/>
                <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-light dark:fill-dark'
                style={{
                    pathLength: scrollYProgress
                }}
                />
                <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-green dark:fill-primaryDark'/>
            </svg>
        </figure>
    </div>
  )
}

export default LiIcon
