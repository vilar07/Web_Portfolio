import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import profilePicTiago from "../../public/images/profile/tiagovilar.jpg";
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';
import { motion } from 'framer-motion';

const AnimatedNumbers = ({value}) => {

const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 5000});
const isInView = useInView(ref, {once: true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) =>{
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })
}, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Tiago Vilar | About Page</title>
            <meta name='description' content='About Page' />
        </Head>
        <TransitionEffect/>
        <main className='flex flex-col items-center justify-center w-full dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Passion Fuels Purpose!' className='mb-16 text-center lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:px-24' />
            
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 sm:px-24 '>
                    <motion.div className='flex flex-col w-full col-span-3 xl:col-span-4 md:order-2 md:col-span-8'
                    initial={{ y: 200 }}
                    animate={{y: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.8, // Atraso para cada palavra
                    }}
                    whileInView={true}>
                        <h2 className='w-full mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                        <p className='w-full font-serif text-2xl font-medium break-words'>
                        My name is Tiago Miguel Vilar Bastos and i am a 23-year-old full-stack web developer with a degree in Computer Engineering and Informatics, and a Master&apos;s degree in Computer Engineering and Telematics from the University of Aveiro.
                        </p>
                        <p></p>
                        <p className='w-full font-serif text-2xl font-medium break-words'>
                        I specialize in creating user-friendly web interfaces and robust cloud-based solutions using technologies like Next.js, NestJS, and various databases. With a passion for technology and innovation, I excel in developing efficient and scalable applications. I am committed to continuous learning and staying updated with the latest industry trends to deliver high-quality projects that drive business success.
                        </p>
                    </motion.div>
                    <motion.div className='relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 '
                    initial={{ y: 200 }}
                    animate={{y: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.8, // Atraso para cada palavra
                    }}
                    whileInView={true}>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]  xl:col-span-2' />
                        <Image src={profilePicTiago} alt='Tiago Vilar' className='w-full h-auto rounded-2xl'
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />  
                    </motion.div>
                    <div className='flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <motion.span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'
                            initial={{ scale: 1 }}
                            animate={{scale: [1, 1.2, 1] }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 0.1, // Pausa entre saltos
                                delay: 0.2, // Atraso para cada palavra
                            }}>
                                <AnimatedNumbers value={2} />+
                            </motion.span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>satisfied clients</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <motion.span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'
                            initial={{ scale: 1 }}
                            animate={{scale: [1, 1.2, 1] }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 0.1, // Pausa entre saltos
                                delay: 0.2, // Atraso para cada palavra
                            }}>
                            <AnimatedNumbers value={20} />+
                            </motion.span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>projects completed</h2>
                        </div>
                        
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <motion.span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'
                            initial={{ scale: 1 }}
                            animate={{scale: [1, 1.2, 1] }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 0.1, // Pausa entre saltos
                                delay: 0.2, // Atraso para cada palavra
                            }}>
                            <AnimatedNumbers value={1} />+
                            </motion.span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>years of experience</h2>
                        </div>
                    </div>
                </div>

            <Skills />
            <Education/>
            </Layout>
        </main>
    </>
  )
}

export default about
