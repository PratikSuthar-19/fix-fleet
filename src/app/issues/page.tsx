'use client'
import Issue from "@/components/Issue"
import { VscTriangleUp } from "react-icons/vsc";
import React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
export default function Issues(){

    const data = [
        {title : "1" , status : "open"},
        {title : "2" , status : "open"},
        {title : "3", status : "open"},
        {title : "4" , status : "closed"},
        {title : "5" , status : "closed"},
        {title : "6", status : "in-progress"},
        {title : "7", status : "closed"},
        {title : "8" , status : "closed"},
        {title : "9", status : "closed"},
        {title : "10", status : "closed"},
    ];
    const[open , setOpen] = useState(false)
    const [filterValue , setFilterValue] = useState('All')
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7); // Number of items per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const onClickHandle = ()=>{
        setOpen(!open)
    }

    const filtervalueHandler = (value :any)=>{
        setFilterValue(value);
        setOpen(!open)
    }

    const paginate = (pageNumber :any) => setCurrentPage(pageNumber);
    return(
    
       <div>
         <Navbar/>
       <div className=" flex flex-col justify-center m-10 align-center gap-5 ">
         
         <div className="flex ">
        <button className="w-max  p-2 pl-4 pr-4 rounded-lg text-[18px] flex flex-row gap-1 border-2 border-black bg-black text-white  " onClick={onClickHandle}>
            <p>{filterValue}</p>
            <VscTriangleUp className="text-center mt-1 text-while"   />
        </button>

        {open && <div className=" w-[10rem] bg-white  p-1 text-left border-[1px] border-gray rounded-lg shadow-md shadow-gray-400 absolute " > 
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
        </div>

        <div>
        <div className="grid grid-cols-4 text-[18px] font-bold border-gray border-[1px] rounded-t-lg bg-gray-100 max-sm:grid-cols-2  ">
          <div className="col-span-2 p-5 text-left "> issue </div>
           <div className="p-5 text-left max-sm:hidden">status</div>
          <div className="p-5 text-left max-sm:hidden "> created</div> 
        </div>
        
        {currentItems.map((item, index) => (
          <Issue key={index} title={item.title} status={item.status}/>
        ))}
      
        
        </div>

        <div className="flex justify-start gap-5">
        <button
          className="bg-black text-white w-[6rem] p-3 rounded-lg "
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-black text-white w-[6rem] p-3 rounded-lg "
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= data.length}
        >
          Next
        </button>
      </div>

        
       </div>


       {/* <div>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= data.length}
        >
          Next
        </button>
      </div> */}
      
       </div>
    )
}