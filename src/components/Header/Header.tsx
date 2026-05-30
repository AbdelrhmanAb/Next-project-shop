import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import Navbar from "../Navbar/Navbar";
import Link from 'next/link';
import ProgressBar from './progressBar';

const Header = () => {




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
            <ProgressBar />
        </header>
    );
};

export default Header;