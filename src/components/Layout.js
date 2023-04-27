import { checkIsManualRevalidate } from 'next/dist/server/api-utils'
import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div>
      <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default Layout

