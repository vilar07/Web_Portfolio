import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/web_portfolio.jpg"
import project2 from "../../public/images/projects/webAppFinder.jpg"
import project3 from "../../public/images/projects/petLink.jpg"
import svcortinados from "../../public/images/projects/svcortinados.png"
import servicoNutricional from "../../public/images/projects/serviconutricional.png"
import petseeker from "../../public/images/projects/petseeker.png"
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion'

const enterFromLeft = {
    initial: {
      opacity: 0,
      scale: 0.6,
      x:-200
    },
    animate: {
      opacity: 1,
      scale: 1,
      x:0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 10,
      },
    },
  };
  
  const enterFromRight = {
    initial: {
      opacity: 0,
      scale: 0.6,
      x:200
    },
    animate: {
      opacity: 1,
      scale: 1,
      x:0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 10,
      },
    },
  };

  const enterFromBelow = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y:200
    },
    animate: {
      opacity: 1,
      scale: 1,
      y:0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 5,
      },
    },
  };


const FeaturedProject = ({type, title, summary, img, link = '', github = ''}) => {
    return(
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 relative
        rounded-br-2xl dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]  rounded-br-3xl dark:text-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            '/>
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-fidden rounded-lg lg:w-full'
            >
                <Image src={img} alt={title} className='w-full h-auto border rounded-2xl'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 dark:text-light lg:w-full lg:pl-0 lg:pt-6'>
                    <span className='text-green dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2' >
                        <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                    </Link>
                
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold
                    hover:bg-light hover:text-dark border-2 border-solid border-dark hover:dark:border-light hover:dark:text-light
                    hover:dark:bg-dark sm:px-4 sm:text-base'>Visit Website</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, img, link = '', github = ''}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border
        border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative
        xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]  rounded-br-3xl
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            '/>
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-fidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto border rounded-2xl'/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-green dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base sm:text-sm'>{type}</span>
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2' >
                        <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                    </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>Visit</Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon/></Link>
                    
                </div>
            </div>
        </article>
    )
}


const projects = () => {
  return (
    <>
        <Head>
            <title>Tiago Vilar | Projects Page</title>
            <meta name='description' content='Projects Page' />
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" className='text-center mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

                <div className='grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                        title="Web Portfolio"
                        summary="This is my web portfolio. It was built using Next.js, Tailwind CSS, and Framer Motion."
                        link="https://vilar07.github.io/Web_Portfolio"
                        type="Featured Project"
                        img={project1}
                        github="https://github.com/vilar07/Web_Portfolio"
                        />
                    </div>
                    
                    <motion.div className='col-span-12' variants={enterFromBelow} initial="initial" whileInView="animate" viewport={{once:true,}}>
                        <FeaturedProject
                        title="Silvia Vilar Cortinados"
                        summary="This is an simple website with admin authentication and dasboard to admin to create and manage publications. It was built using Next.js, Tailwind CSS, Framer Motion, Nestjs, Mysql and for cloud Aws and Vercel."
                        link="https://svcortinados.com"
                        type="Featured Project"
                        img={svcortinados}
                        />
                    </motion.div>
                    <motion.div className='col-span-12' variants={enterFromBelow} initial="initial" whileInView="animate" viewport={{once:true,}}>
                        <FeaturedProject
                        title="Nutritional Service"
                        summary="This is a full stack website, with dashboard for nutritionists to create content for the app and to manage users. It was developed algorithms for prediction and recommendation. It was built using Next.js, Tailwind CSS, Framer Motion, Nestjs, Mysql."
                        link="https://www.youtube.com/watch?v=7_4gtJnHXF0"
                        type="Featured Project"
                        img={servicoNutricional}
                        />
                    </motion.div>
                    <motion.div className='col-span-12' variants={enterFromBelow} initial="initial" whileInView="animate" viewport={{once:true,}}>
                        <FeaturedProject
                        title="Pet Seeker"
                        summary="This is a full stack website. It was built using Next.js, Tailwind CSS, Framer Motion, REST APIs (5 micro services), API Gateway, Mysql, and many (like 5) AWS Services as well as cloud infraestructure."
                        link="https://www.youtube.com/watch?v=b2KDB5k_IA4"
                        type="Featured Project"
                        img={petseeker}
                        />
                    </motion.div>
                    <motion.div className='col-span-6 sm:col-span-12' variants={enterFromLeft} initial="initial" whileInView="animate" viewport={{once:true,}}>
                        <Project
                        title="Event Finder"
                        link="/"
                        type="Featured Project"
                        img={project2}
                        github="https://github.com/vilar07/Web_Portfolio"
                        />
                    </motion.div>
                    <motion.div className='col-span-6 sm:col-span-12' variants={enterFromRight} initial="initial" whileInView="animate" viewport={{once:true,}}>
                        <Project
                        title="PetLink"
                        link="/"
                        type="Featured Project"
                        img={project3}
                        github="https://github.com/vilar07/Web_Portfolio"
                        />
                    </motion.div>
                </div>

            </Layout>
        </main>
    </>
  )
}

export default projects
