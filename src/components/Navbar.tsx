'use client'
import React from 'react'
import Link from 'next/link';
import { IoBugSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
const Navbar = () => {
    const pathName = usePathname();
    console.log(pathName)
    const links1 = [
        {href : '/' ,  place : 'Dashboard'},
        {href : '/issues' , place : "Issue"}
    ]
    const links2 = [
      {href : '/signin' ,  place : 'Signin'},
      {href : '/login' , place : "Login"}
  ]
  return (
   <nav className='flex gap-10 border-b-[1px] shadow-md shadow-gray border-solid border-black leading-8 p-5 items-center'>
    <div className=''>
      <Link href='/'>
      <IoBugSharp />
      </Link>
    </div>

<div className='flex flex-row justify-between   w-full'>
<ul  className='flex gap-10 '>
        {links1.map((link , index)=>(<Link  key={index} className={
                                     classNames({
                                        'text-black' : link.href===pathName,
                                        'text-[#828282]':link.href!==pathName,
                                        'font-semibold hover:text-black transition-colors text-[1.12rem]' : true
                                                })} href={link.href}> {link.place}</Link>))}
    </ul>

    <ul  className='flex gap-10 '>
        {links2.map((link , index)=>(<Link  key={index} className={
                                     classNames({
                                        'text-black' : link.href===pathName,
                                        'text-[#828282]':link.href!==pathName,
                                        'font-semibold hover:text-black transition-colors text-[1.12rem]' : true
                                                })} href={link.href}> {link.place}</Link>))}
    </ul>
    </div>
    

   </nav>
  )
}

export default Navbar