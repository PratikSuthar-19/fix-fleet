'use client'
import React from 'react'
import Link from 'next/link';
import { IoBugSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
const Navbar = () => {
    const pathName = usePathname();
    console.log(pathName)
    const links = [
        {href : '/' ,  place : 'Dashboard'},
        {href : '/isuue' , place : "Issue"}
    ]
  return (
   <nav className='flex gap-10 border-b-2 shadow-md shadow-gray border-solid border-black leading-8 p-5 items-center'>
    <div className=''>
      <Link href='/'>
      <IoBugSharp />
      </Link>
    </div>

    {/* <ul  className='flex gap-10 '>
        {links.map((link)=>(<Link className={`${link.href===pathName ? 'text-black' : 'text-[#828282]'} font-semibold hover:text-black transition-colors text-[1.12rem]`} href={link.href}> {link.place}</Link>))}
    </ul> */}

<ul  className='flex gap-10 '>
        {links.map((link)=>(<Link className={
                                     classNames({
                                        'text-black' : link.href===pathName,
                                        'text-[#828282]':link.href!==pathName,
                                        'font-semibold hover:text-black transition-colors text-[1.12rem]' : true
                                                })} href={link.href}> {link.place}</Link>))}
    </ul>

   </nav>
  )
}

export default Navbar