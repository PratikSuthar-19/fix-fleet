'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { useEffect } from 'react';
import { IoBugSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Query } from 'react-query';


const Navbar = () => {

 
  
  const router = useRouter();
    const pathName = usePathname();
    console.log(pathName)
    const links1 = [
        {href : '/' ,  place : 'Dashboard'},
        {href : '/issues' , place : "Issue"}
    ]
    const links2 = [
      {href : '/signin' ,  place : 'Signin'},
      // {href : '/login' , place : "Login"},
  ]


  const submitHandle = async() =>{
    
    const res = await axios.get('/api/users/logout');
    await localStorage.clear();
    router.push('/')
   
    console.log(res);

}



let token : any =  localStorage.getItem("token");

console.log(token)

   
  return (
   <nav className='flex gap-10 border-b-[1px] shadow-md shadow-gray border-solid border-black leading-8 p-5 items-center max-sm:text-[12px]'>
    <div className=''>
      <Link href='/'>
      <IoBugSharp />
      </Link>
    </div>

<div className='flex flex-row justify-between   w-full'>
<ul  className='flex gap-10 max-sm:gap-3  max-sm:mt-3 '>
        {links1.map((link , index)=>(<Link  key={index} className={
                                     classNames({
                                        'text-black' : link.href===pathName,
                                        'text-[#828282]':link.href!==pathName,
                                        'font-semibold hover:text-black transition-colors text-[1.12rem]' : true
                                                })} href={link.href}> {link.place}</Link>))}
    </ul>

    <ul  className='flex gap-10 max-sm:flex-col max-sm:gap-2'>
      {  !token ?  <> {links2.map((link , index)=>(<Link  key={index} className={
                                     classNames({
                                        'text-black' : link.href===pathName,
                                        'text-[#828282]':link.href!==pathName,
                                        'font-semibold hover:text-black transition-colors text-[1.12rem]' : true
                                                })} href={link.href}> {link.place}</Link>))}

                    <Link   className={
                                     classNames({
                                        'text-black' : '/login'===pathName,
                                        'text-[#828282]': '/login' !==pathName,
                                        'font-semibold hover:text-black transition-colors text-[1.12rem]' : true
                                                })} href={'/login'}>Login</Link>  </>    :                           
            

             <li onClick={submitHandle} className=' text-[#828282] font-semibold hover:text-black transition-colors text-[1.12rem]'>Logout</li>}
    </ul>
    </div>
    

   </nav>
  )
}

export default Navbar