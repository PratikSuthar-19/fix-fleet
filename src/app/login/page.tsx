'use client'
import React from "react"
import { useState } from "react"
import axios from "axios"

interface userFormInfo{
    userEmail : String,
    userPassword : String
}

export default function Login(){
    const[userInfo , setUserInfo] = React.useState({
                                        userEmail : '',
                                        userPassword : ''
                                        })

    console.log(userInfo)

    const [passwordType , setPasswordType ] = React.useState("password")
    const [ show , setShow] = React.useState(true)

    const onClickPassword =()=>{
        if ( passwordType === "password"){
            setPasswordType("text")
        }else{
            setPasswordType("password")
        }

        setShow(!show)
    }

const hadleInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const {name  , value } = e.target
     setUserInfo({...userInfo , [name] : value})
}

const handleSubmit = async() =>{
    const res = await axios.post('/api/users/login' , { email : userInfo.userEmail , password : userInfo.userPassword});
    console.log(res)
    setUserInfo({
        userEmail : '',
        userPassword : ''
    })
}
      
   return(
    
   <div className="flex justify-center mt-20">
      
     <div>
        <h1 className="text-[2rem]  p-3">Login</h1>

     <div className=" flex flex-col p-2">
         <label htmlFor="userEmail"> UserEmail </label>
         <input  id="userEmail" name="userEmail" type="email" placeholder="enter your Email" value={userInfo.userEmail}  className="p-2  w-[30rem] border-2 border-black rounded-md max-sm:w-[15rem]" onChange={hadleInput} required/>
     </div>

     <div className=" flex flex-col p-2 relative">
         <label htmlFor="userPassword"> UserPassword </label>
         <input  id="userPassword" name="userPassword" type={passwordType} placeholder="enter your password" value={userInfo.userPassword}  className="p-2  w-[30rem] border-2 border-black rounded-md max-sm:w-[15rem]" onChange={hadleInput} required/>

        { userInfo.userPassword !== '' && <h3 className="absolute right-5 top-10 " onClick={onClickPassword}> { show===true  ? "show" : "Hide"}</h3>}
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
