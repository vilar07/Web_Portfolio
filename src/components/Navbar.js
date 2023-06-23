import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import TwitterIcon, { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({href, title, className=""}) =>{
  const router = useRouter();
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[1px] inline-block bg-dark absolute  left-0
      -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'} 
      dark:bg-light`}>
        &nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({href, title, className="", toggle}) =>{
  const router = useRouter();

const handleClick = () => {
  toggle();
  router.push(href)
}

  return(
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}

      <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute  left-0
      -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'} 
      dark:bg-light`}>
        &nbsp;</span>
    </button>
  )
}

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <header className='w-full px-32 py-8 font-medium flex items-center justify-between 
      dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

        <div className='w-full flex justify-between items-center lg:hidden'>
          <nav>
              <CustomLink href='/' title="Home" className='mr-4'/>
              <CustomLink href='/about' title="About" className='mx-4'/>
              <CustomLink href='/projects' title="Projects" className='mx-4'/>
              <CustomLink href='/articles' title="Articles" className='ml-4'/>
          </nav>
          <nav className='flex justify-center items-center '>
            <motion.a href='https://twitter.com' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-8 mr-3'
            ><TwitterIcon/></motion.a>
            <motion.a href='https://github.com/' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-8 mx-3'
            ><GithubIcon/></motion.a>
            <motion.a href='https://www.linkedin.com/' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-8 mx-3'
            ><LinkedInIcon/></motion.a >
            <motion.a href='https://www.facebook.com/' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-8 mx-3'
            ><FacebookIcon/></motion.a >
            <motion.a href='https ://www.instagram.com/' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-8 ml-3'
            ><InstagramIcon/></motion.a >

            <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-4
            flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark" }`}>
            {
              mode === "dark" ? 
              <SunIcon className={"fill-dark"} />
              : <MoonIcon className={"fill-dark"} />
            }
            </button>
        </nav>
        </div>

        {
          isOpen ?
          <motion.div 
          initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
          animate={{scale:1, opacity:1, transition:{delay:0.1}}}
          className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
          '>
            <nav className='flex flex-col justify-center items-center'>
                <CustomMobileLink href='/' title="Home" className='' toggle={handleClick} />
                <CustomMobileLink href='/about' title="About" className='' toggle={handleClick}/>
                <CustomMobileLink href='/projects' title="Projects" className='' toggle={handleClick}/>
                <CustomMobileLink href='/articles' title="Articles" className='' toggle={handleClick}/>
            </nav>
            <nav className='flex justify-center items-center mt-2 '>
              <motion.a href='https://twitter.com' target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className='w-8 mr-3 sm:mx-1'
              ><TwitterIcon/></motion.a>
              <motion.a href='https://github.com/' target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className='w-8 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'
              ><GithubIcon/></motion.a>
              <motion.a href='https://www.linkedin.com/' target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className='w-8 mx-3 sm:mx-1'
              ><LinkedInIcon/></motion.a >
              <motion.a href='https://www.facebook.com/' target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className='w-8 mx-3 sm:mx-1'
              ><FacebookIcon/></motion.a >
              <motion.a href='https://www.instagram.com/' target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className='w-8 ml-3 sm:mx-1'
              ><InstagramIcon/></motion.a >
  
              <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-4
              flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark" }`}>
              {
                mode === "dark" ? 
                <SunIcon className={"fill-dark"} />
                : <MoonIcon className={"fill-dark"} />
              }
              </button>
          </nav>
          </motion.div>
          : null
        }
        
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo/>
        </div>
      </header>
    </div>

  )
}

export default Navbar
