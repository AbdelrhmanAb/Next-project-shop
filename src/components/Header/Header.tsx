'use client'
import { useEffect, useState } from 'react'
import Image from "next/image";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import Navbar from "../Navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';

const Header = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const calculateProgress = () => {
            const scrollTop = window.scrollY;

            const height = document.documentElement.scrollHeight - window.innerHeight

            const progress = (scrollTop / height) * 100

            setProgress(progress)
        };
        window.addEventListener('scroll', calculateProgress)

        return () => {
            return window.removeEventListener(
                'scroll',
                calculateProgress
            )
        }
    }, [])


    const [isOpen, setIsOpen] = useState(false)

    const handleOpenBar = () => {
        setIsOpen(prev => !prev)
    }
    return (
        <header className="flex fixed z-50  flex-col bg-primary-content text-primary w-full  ">
            <div className="flex   items-center justify-between px-5 lg:px-10 py-5 lg:py-10 bg-primary-content text-primary w-full h-15
       ">
                <Link
                    href={'/'}
                    className="flex items-center gap-2 ">
                    <div className="relative w-8 lg:w-14 h-8 lg:h-14 ">
                        <Image
                            src="/images/headerLogo.jpg"
                            alt="logo"
                            fill
                            className="rounded-full object-cover "
                        />

                    </div>
                    <h1 className="text-2xl lg:text-4xl font-bold text-primary">Alpha</h1>
                </Link>
                    <Link href={'/login'} className="lg:hidden text-lg py-1 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 transition duration-300 hover:scale-105">login</Link>

                <button className='lg:hidden' onClick={handleOpenBar}>
                    <GiHamburgerMenu />
                </button>


                {isOpen &&
                    <nav onClick={handleOpenBar} className=' absolute top-0  w-full h-screen right-0 bg-slate-600/70  '>
                        <div onClick={(e) => e.stopPropagation()} className='flex absolute  top-0  py-15 w-2/3 h-full right-0 bg-black   flex-col gap-5  text-2xl'>
                            <button onClick={handleOpenBar} className='absolute z-10 top-5 right-5 '>
                                <IoClose />
                            </button>

                            <Link  onClick={handleOpenBar}  href={'/about'} className='hover:bg-blue-500 p-4 capitalize '>about</Link>
                            <Link  onClick={handleOpenBar} href={'/contact'} className='hover:bg-blue-500 p-4 capitalize '>contact</Link>
                            <Link  onClick={handleOpenBar} href={'/posts'} className='hover:bg-blue-500 p-4 capitalize '>posts</Link>
                            <Link  onClick={handleOpenBar} href={'/login'} className='hover:bg-blue-500 p-4 capitalize '>login</Link>
                            <Link  onClick={handleOpenBar} href={'/signup'} className='hover:bg-blue-500 p-4 capitalize '>sign up</Link>

                        </div>
                    </nav>}


                <Navbar />

                <div className="lg:flex items-center gap-4   hidden">
                    <div className=" relative text-primary">
                        <input type="text" placeholder="Search" className="bg-secondary px-2 py-1 rounded-2xl text-lg border-none outline-none   " />
                        <span className=" absolute top-2 right-5 w-5 px-2 border-l bg-secondary">
                            <IoSearchSharp className="text-2xl" />

                        </span>
                    </div>
                    <Link href={'/login'} className="text-2xl py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 transition duration-300 hover:scale-105">login</Link>
                </div>

            </div>
            <div className="w-full h-1 bg-amber-50">
                <div
                    style={{ width: `${progress}%` }}
                    className={` h-full bg-amber-300`}></div></div>
        </header>
    );
};

export default Header;