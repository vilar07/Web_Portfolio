import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';
import LoopingText from '@/components/LoopingText';
import { motion } from 'framer-motion';
import TextRotator from '@/components/TextRotator';

export default function Home() {
  const words = ["Fullstack Developer", "Cloud Engineer", "Network Engineer"];
  return (
    <>
      <Head>
        <title>Web Portfolio</title>
        <meta name="description" content="Tiago Vilar Web Portfolio" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center justify-center w-full min-h-screen text-dark dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col lg:items-center lg:px-4'>
            <div className='w-1/2 md:w-3/4 sm:w-full'>
              <Image 
                src={profilePic} 
                alt="TiagoVilar" 
                className='w-full h-auto lg:block' 
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center'>
              <LoopingText 
                className='w-full !text-3xl xl:!text-4xl lg:!text-3xl md:!text-2xl sm:!text-xl sm:px-2 lg:hidden' 
                text="Hi, my name is Tiago and I am a Full Stack Web Developer"
              />
               {/* <TextRotator words={words} interval={2000} className='w-full !text-3xl xl:!text-4xl lg:!text-3xl md:!text-2xl sm:!text-xl sm:px-2 lg:hidden'/> */}
              <AnimatedText 
                className='!text-5xl xl:!text-4xl lg:!text-4xl md:!text-3xl sm:!text-2xl sm:px-2' 
                text="Turning Vision Into Reality With Code And Design."
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs sm:px-2'>
                As a full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in Nextjs, Tailwindcss, Nestjs and more.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link 
                  href="/about" 
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:py-2 md:px-4 md:text-base sm:px-4 sm:py-2'
                >
                  Resume <LinkArrow className='w-6 ml-1' />
                </Link>
                <Link 
                  className='ml-4 text-lg font-medium underline capitalize text-dark dark:text-light md:text-base sm:text-sm sm:ml-2' 
                  href="mailto:tiagovilar07@gmail.com" 
                  target={"_blank"}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <motion.div 
          className='absolute inline-block w-24 right-8 bottom-8 md:hidden'
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.1,
            delay: 0.2,
          }}
        >
          <Image src={lightBulb} alt="TiagoVilar" className='w-full h-auto' />
        </motion.div>
      </main>
    </>
  )
}
