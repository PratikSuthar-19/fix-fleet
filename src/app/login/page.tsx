'use client'

import { useState } from "react"

interface userFormInfo{
    userEmail : String,
    userPassword : String
}

export default function Login(){
    const[userInfo , setUserInfo] = useState<userFormInfo>({
                                        userEmail : '',
                                        userPassword : ''
                                        })

    console.log(userInfo)

const hadleInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const {name  , value } = e.target
     setUserInfo({...userInfo , [name] : value})
}

const handleSubmit = () =>{
    setUserInfo({
        userEmail : '',
        userPassword : ''
    })
}
      
   return(
   <div className="grid place-items-center min-h-screen">
      
     <div>
        <h1 className="text-[2rem]  p-3">Login</h1>

     <div className=" flex flex-col p-2">
         <label htmlFor="userEmail"> UserEmail </label>
         <input  id="userEmail" name="userEmail" type="email" placeholder="enter your Email"  className="p-2  w-[30rem] border-2 border-black rounded-md max-sm:w-[15rem]" onChange={hadleInput} required/>
     </div>

     <div className=" flex flex-col p-2">
         <label htmlFor="userPassword"> UserPassword </label>
         <input  id="userPassword" name="userPassword" type="password" placeholder="enter your password"   className="p-2  w-[30rem] border-2 border-black rounded-md max-sm:w-[15rem]" onChange={hadleInput} required/>
     </div>

     <div>
        <button className="w-30 bg-black text-white pl-10 pr-10 pt-2 pb-2 rounded-md ml-2 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 " onClick={handleSubmit}>
            Login
        </button>

     </div>
     </div>
      

   </div>
   )
}
