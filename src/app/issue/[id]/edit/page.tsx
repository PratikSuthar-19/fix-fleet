'use client'
import React, { ChangeEvent } from "react"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useState , useCallback } from "react";
import axios from "axios";
import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function IssueForm( ){

    const router = useRouter();
    // const {msg} = router.query;
    // console.log(msg)

    const serchParams = useSearchParams();
    const res:any = serchParams.get('data');
    const data = JSON.parse(res);
    console.log(data)

    const pathname = usePathname()
    console.log(pathname)
    const url = pathname;
    const urlArray = url.split('/');
    const id = urlArray[urlArray.length-2]
    console.log(id);

    const[title , setTitle] = React.useState(data.title)
    const[titleLable , setTitleLable] = React.useState(false)
    const[desc , setDesc ] = React.useState(data.description)
    const[descLable , setDescLable ] = React.useState(false)


    const onChangeTitle = ( e:React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setTitle(e.target.value);
       
    }
    const onChangeDesc = useCallback((value: string) => {
        setDesc(value);
      }, []);


    const createHandle = async() =>{

        if(title === ''){
            // console.log("true")
        setTitleLable(true)
       } else if(desc === ''){
        setDescLable(true)
       }
       else
       {
        const res = await axios.post(`/api/issue/update/${id}` , {
          "title" : title,
         "description" : desc,
         "updatedAt" : new Date(),
        });
        // console.log(res)
        setTitle('')
        setDesc('')
        setTitleLable(false)
        setDescLable(false)
        router.push('/issues')
       }
       
    }
 
    return(
        <>
       <section className="flex flex-col p-5 mt-5 gap-5 max-sm:grid col-span-1">

        <div className="flex flex-col gap-2" >
        <input type="text" 
               id="title" 
               name="title" 
               placeholder="Title" 
               value={title} 
               className= " w-[50%] p-3 rounded-lg border-2 border-black max-sm:w-[100%]"  
               onChange={onChangeTitle} />

        { titleLable && <label htmlFor="text" className="text-red-600 ml-2">Title is required.</label>}
        </div>
       
       <div className="flex flex-col gap-2">
        <SimpleMDE className=" w-[50%] border-2 border-black rounded-lg max-sm:w-[100%]" 
                   placeholder="Description" 
                   value={desc} 
                   name="description"  
                   onChange={onChangeDesc} />

        { descLable && <label htmlFor="text" className="text-red-600 ml-2">Description is required.</label>}
        </div>

       </section>

       <button className=" ml-5 w-30 bg-black text-white pl-10 pr-10 pt-2 pb-2 rounded-md ml-2 mt-5 transition ease-in-out delay-150      hover:-translate-y-1 hover:scale-110 hover: duration-300 "
               onClick={createHandle} >
               Submit
        </button>

               
       </>
    )
}