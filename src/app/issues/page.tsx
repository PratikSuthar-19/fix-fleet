'use client'
import Issue from "@/components/Issue"
import { VscTriangleUp } from "react-icons/vsc";
import React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
export default function Issues(){
    const[open , setOpen] = useState(false)
    const [filterValue , setFilterValue] = useState('All')

    const onClickHandle = ()=>{
        setOpen(!open)
    }

    const filtervalueHandler = (value :any)=>{
        setFilterValue(value);
    }
    return(
    
       <div>
         <Navbar/>
       <div className=" flex flex-col justify-center m-10 align-center gap-5 relative">
         
        <button className="w-max  p-2 pl-4 pr-4 rounded-lg text-[18px] flex flex-row gap-1 border-2 border-black " onClick={onClickHandle}>
            <p>{filterValue}</p>
            <VscTriangleUp className="text-center mt-1" />
        </button>

        {open && <div className=" w-[10rem] bg-white  p-1 text-left border-2 border-black rounded-lg shadow-md shadow-gray-400 absolute  " > 
            <ul>
                <li className=" p-2 pl-5 pr-5 hover:bg-black  hover:text-white rounded-lg mb-1 " 
                    onClick={()=>filtervalueHandler('All')}>All</li>
                <li className=" p-2 pl-5 pr-5  hover:bg-black hover:text-white rounded-lg mb-1"
                    onClick={()=>filtervalueHandler('Open')}>Open</li>
                <li className=" p-2 pl-5 pr-5  hover:bg-black hover:text-white rounded-lg mb-1"
                    onClick={()=>filtervalueHandler('In-progress')}>In-progress</li>
                <li className=" p-2 pl-5 pr-5  hover:bg-black hover:text-white rounded-lg mb-1"
                    onClick={()=>filtervalueHandler('closed')}>Closed</li>
            </ul>
        </div>}

        <div>
        <div className="grid grid-cols-4 text-[18px] font-bold border-black border-2 rounded-t-lg bg-gray-100 ">
          <div className="col-span-2 p-5 text-left "> issue</div>
          <div className="p-5 text-left ">status</div>
          <div className="p-5 text-left"> created</div>
        </div>
        <Issue/>
        <Issue/>
        <Issue/>
        <Issue/>
        </div>

        
       </div>

      
       </div>
    )
}