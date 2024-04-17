import React, { ChangeEvent } from "react"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useState , useCallback } from "react";
import axios from "axios";

export default function IssueForm(){

    const[title , setTitle] = React.useState('')
    const[titleLable , setTitleLable] = React.useState(false)
    const[desc , setDesc ] = React.useState('')
    const[descLable , setDescLable ] = React.useState(false)

    console.log(title)
    console.log(desc)

    const onChangeTitle = ( e:React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setTitle(e.target.value);
       
    }
    const onChangeDesc = useCallback((value: string) => {
        setDesc(value);
      }, []);


    const createHandle = async() =>{

        if(title === ''){
            console.log("true")
        setTitleLable(true)
       } else if(desc === ''){
        setDescLable(true)
       }
       else
       {
        const res = await axios.post('/api/issues/create' , {
          "title" : title,
         "description" : desc
        });
        console.log(res)
        setTitle('')
        setDesc('')
        setTitleLable(false)
        setDescLable(false)
       }
       
    }
 
    return(
        <>
       <section className="flex flex-col p-5 mt-5 gap-5">

        <div className="flex flex-col gap-2">
        <input type="text" 
               id="title" 
               name="title" 
               placeholder="Title" 
               value={title} 
               className= " w-[50%] p-3 rounded-lg border-2 border-black"  
               onChange={onChangeTitle} />

        { titleLable && <label htmlFor="text" className="text-red-600 ml-2">Title is required.</label>}
        </div>
       
       <div className="flex flex-col gap-2">
        <SimpleMDE className=" w-[50%] border-2 border-black rounded-lg" 
                   placeholder="Description" 
                   value={desc} 
                   name="description"  
                   onChange={onChangeDesc} />

        { descLable && <label htmlFor="text" className="text-red-600 ml-2">Description is required.</label>}
        </div>

       </section>

       <button className=" ml-5 w-30 bg-black text-white pl-10 pr-10 pt-2 pb-2 rounded-md ml-2 mt-5 transition ease-in-out delay-150      hover:-translate-y-1 hover:scale-110 hover: duration-300 "
               onClick={createHandle} >
               Create
        </button>

               
       </>
    )
}