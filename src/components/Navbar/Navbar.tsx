'use client'
import {  useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import Link from 'next/link';

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false)

    const handleOpenBar = () => {
        setIsOpen(prev => !prev)
    }
  return (
    <>
      <button className='lg:hidden' onClick={handleOpenBar}>
        <GiHamburgerMenu />
      </button>


      {isOpen &&
        <nav onClick={handleOpenBar} className=' absolute top-0  w-full h-screen right-0 bg-slate-600/70  '>
          <div onClick={(e) => e.stopPropagation()} className='flex absolute  top-0  py-15 w-2/3 h-full right-0 bg-black   flex-col gap-5  text-2xl'>
            <button onClick={handleOpenBar} className='absolute z-10 top-5 right-5 '>
              <IoClose />
            </button>

            <Link onClick={handleOpenBar} href={'/about'} className='hover:bg-blue-500 p-4 capitalize '>about</Link>
            <Link onClick={handleOpenBar} href={'/contact'} className='hover:bg-blue-500 p-4 capitalize '>contact</Link>
            <Link onClick={handleOpenBar} href={'/posts'} className='hover:bg-blue-500 p-4 capitalize '>posts</Link>
            <Link onClick={handleOpenBar} href={'/login'} className='hover:bg-blue-500 p-4 capitalize '>login</Link>
            <Link onClick={handleOpenBar} href={'/signup'} className='hover:bg-blue-500 p-4 capitalize '>sign up</Link>

          </div>
        </nav>}

      <nav className="hidden lg:flex gap-5 text-primary">
        <Link
          href="/posts"
          className="text-2xl  transition duration-300"
        >
          Posts
        </Link>

        <Link
          href="/contact"
          className="text-2xl   transition duration-300"
        >
          Contact
        </Link>

        <Link
          href="/about"
          className="text-2xl  transition duration-300"
        >
          About
        </Link>

        <Link
          href="/admin"
          className="text-2xl  transition duration-300"
        >
          Dashboard
        </Link>
      </nav>
    </>
  )
}

export default Navbar