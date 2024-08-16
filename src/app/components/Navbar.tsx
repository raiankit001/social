'use client'
import { Sling as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { useState } from "react"
import { GoHome } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoIosImages } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <div className="h-[8vh] flex text-blue justify-between items-center">
                <div className='font-extrabold md:hidden lg:block'>LA'MESOCIAL</div>
                <div className="hidden md:flex font-bold gap-4 lg:mr-[14rem] ">
                    <Link href='' className='flex justify-center items-center gap-2'>
                        <GoHome/>
                        HomePage
                    </Link>
                    <Link href='' className='flex justify-center items-center gap-2'>
                        <HiOutlineUsers />
                        Friends
                    </Link>
                    <Link href='' className='flex justify-center items-center gap-2'>
                        <IoIosImages />
                        Stories
                    </Link>
                </div>
                <div className="overflow-hidden md:hidden border">
                    <Hamburger rounded direction='right' easing="ease-in" toggled={isOpen} toggle={setOpen} />
                </div>
                <div className="hidden md:flex justify-center items-center gap-2 ">
                    <FaRegUserCircle />
                    Login/Register

                </div>
            </div>
            {isOpen && <div className='h-[92vh] flex flex-col justify-center items-center gap-10'>
                    <Link href=''>Home</Link>    
                    <Link href=''>Friends</Link>    
                    <Link href=''>Groups</Link>    
                    <Link href=''>Stories</Link>    
                    <Link href=''>Profile</Link>    
                </div>}
        </div>
    )
}

export default Navbar