import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import Link from 'next/link'
import article1 from "../../public/images/projects/article1.png"
import Image from 'next/image'

const FeaturedProject = ({type, title, summary, img, link = '', github = ''}) => {
    return(
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 relative
        rounded-br-2xl dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl dark:text-light
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
                    <Link href={link} target="_blank" className='rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold
                    hover:bg-light hover:text-dark border-2 border-solid border-dark hover:dark:border-light hover:dark:text-light
                    hover:dark:bg-dark sm:px-4 sm:text-base'>Watch Full Article</Link>
                </div>
            </div>
        </article>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>Tiago Vilar | Articles Page</title>
            <meta name='description' content='About Page' />
        </Head>
        <TransitionEffect/>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text='Words Can Change the World' className='mb-16 text-center lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    <div className='w-full'>
                        <FeaturedProject
                        title="Nutritional Service System"
                        summary="This is my small Article about the Nutritional Service System developed by me in my Master Thesis."
                        link="https://drive.google.com/file/d/1Mo__XUk7SwtLU5yupuh072cyd-rBeiNr/view"
                        type="Master Thesis Small Article"
                        img={article1}
                        github="https://github.com/vilar07/Web_Portfolio"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default articles
