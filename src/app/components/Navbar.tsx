'use client'
import { Sling as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { useState } from "react"
import { GoHome } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoIosImages } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { MdOutlinePeopleOutline } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { BiNotification } from "react-icons/bi";
import { MdSearch } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <div className="h-[8vh] flex text-blue justify-between items-center">
                <div className='font-extrabold md:hidden lg:block text-2xl'>LA'MESOCIAL</div>

                    <div className='hidden lg:flex lg:flex-grow-[1]'></div>
                <div className="hidden md:flex font-bold gap-4  ">
                    <Link href='' className='flex justify-center items-center gap-2'>
                        <span className='text-[1.5rem]'><GoHome /></span>
                        HomePage
                    </Link>
                    <Link href='' className='flex justify-center items-center gap-2'>
                        <span className='text-[1.5rem]'><HiOutlineUsers /></span>
                        Friends
                    </Link>
                    <Link href='' className='flex justify-center items-center gap-2'>
                        <span className='text-[1.5rem]'><IoIosImages /></span>
                        Stories
                    </Link>
                </div>

                <div className="overflow-hidden md:hidden flex">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <Hamburger rounded direction='right' easing="ease-in" toggled={isOpen} toggle={setOpen} />
                </div>

                <div className='hidden lg:flex xl:flex-grow-[2]'></div>
                <div className='hidden xl:flex items-center bg-slate-100 rounded-lg px-4 py-2 mx-2'>
                    <input type='text' placeholder='Search...' className='bg-slate-100 outline-none w-[15rem]' />
                    <MdSearch />
                </div>
                <div className='hidden lg:flex lg:flex-grow-[4]'></div>
                <div className="hidden md:flex justify-center items-center gap-[1rem] text-[1.5rem]">

                    <SignedIn>
                        <MdOutlinePeopleOutline />
                        <LuMessagesSquare />
                        <BiNotification />
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <Link href='/sign-in' className='flex items-center gap-2'><FaRegUserCircle />
                            Login/Register</Link>
                    </SignedOut>
                    <ClerkLoading>
                        <div className="flex items-center justify-center">
                            <div
                                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                                role="status">
                                <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" >Loading...</span >
                            </div>
                        </div>
                    </ClerkLoading>
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