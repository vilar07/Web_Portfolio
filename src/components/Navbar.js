import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <header className='w-full px-32 py-8 font-medium flex items-center justify-between '>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/articles'>Articles</Link>
        </nav>
        <h2>Logo</h2>
        <nav>
            <Link href='/' target={"_blank"}>T</Link>
            <Link href='/' target={"_blank"}>T</Link>
            <Link href='/' target={"_blank"}>T</Link>
            <Link href='/' target={"_blank"}>T</Link>
            <Link href='/' target={"_blank"}>T</Link>
            <Link href='/' target={"_blank"}>T</Link>
        </nav>
      </header>
    </div>

  )
}

export default Navbar
