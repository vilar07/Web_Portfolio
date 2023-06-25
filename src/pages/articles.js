import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'

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
                <div className='flex w-full items-center justify-center underline text-3xl  bg-slate-300 border border-cyan-900 rounded-full '>
                    <h1 className='my-2 lg:text-lg md:text-base sm:text-sm xs:text-xs'>No Articles Yet</h1>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default articles
