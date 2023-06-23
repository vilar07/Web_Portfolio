import { checkIsManualRevalidate } from 'next/dist/server/api-utils'
import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div>
      <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:-p12 sm:p-8 ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default Layout

