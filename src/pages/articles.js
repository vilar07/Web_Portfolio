import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

const articles = () => {
  return (
    <>
        <Head>
            <title>Tiago Vilar | Articles Page</title>
            <meta name='description' content='About Page' />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text='Words Can Change the World' className='mb-16 text-center' />
                <div className='flex w-full items-center justify-center underline text-3xl  bg-slate-300 border border-cyan-900 rounded-full '>
                    <h1 className='my-2'>No Articles Yet</h1>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default articles
