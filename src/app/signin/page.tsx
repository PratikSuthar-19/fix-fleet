'use client'

import { useState } from "react"
import axios from "axios";

interface userFormInfo{
    userName : String ,
    userEmail : String,
    userPassword : String
}
type type = String;

export default function Signin(){

    const[userInfo , setUserInfo] = useState({
                                        userName : '',
                                        userEmail : '',
                                        userPassword : ''
                                        })

    console.log(userInfo)

    const createUser = async() =>{
        try{
         await axios.post('/api/users/signin' , {
            userName : userInfo.userName,
            email : userInfo.userEmail,
            password : userInfo.userPassword
         }
         
        )
        }catch(err:any){
         console.log(err.mesaage)
        }

}

    const [passwordType , setPasswordType ] = useState("password")
    const [ show , setShow] = useState(true)

    const onClickPassword =()=>{
        if ( passwordType === "password"){
            setPasswordType("text")
        }else{
            setPasswordType("password")
        }

        setShow(!show)
    }


const hadleInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    const {name  , value } = e.target
    console.log(value)
     setUserInfo({...userInfo , [name] : value})
}



const handleSubmit =  async() =>{
    await createUser()
 setUserInfo({
        userName : '',
        userEmail : '',
        userPassword : ''
    })
}
interface value{
    value : String
}


      
   return(
    // className="grid place-items-center min-h-screen  "
   
   <div className="flex justify-center mt-20">
      
     <div>
        <h1 className="text-[2rem]  p-3">SignIn</h1>
     <div className=" flex flex-col p-2 " >
         <label htmlFor="userName"> UserName </label>
         <input  id="userName" name="userName" type="text"  placeholder="enter your Name" value={userInfo.userName} className="p-2 w-[30rem] border-2 border-black rounded-md max-sm:w-[15rem]" onChange={hadleInput}  required/>
     </div>

     <div className=" flex flex-col p-2">
         <label htmlFor="userEmail"> UserEmail </label>
         <input  id="userEmail" name="userEmail" type="email" placeholder="enter your Email" value={userInfo.userEmail} className="p-2  w-[30rem] border-2 border-black rounded-md  max-sm:w-[15rem]" onChange={hadleInput} required/>
     </div>

     <div className=" flex flex-row relative">
        <div className=" flex flex-col p-2">
         <label htmlFor="userPassword"> UserPassword </label>
         <input  id="userPassword" name="userPassword" type={passwordType} value={userInfo.userPassword} placeholder="enter your password"   className="p-2  w-[30rem] border-2 border-black rounded-md  max-sm:w-[15rem]" onChange={hadleInput} required  />
         </div>
        
         { userInfo.userPassword !== '' &&  <h3 className="absolute right-5 top-10 " onClick={onClickPassword}> { show===true ? "show" : "Hide"}</h3> }
     </div>

     <div>
        <button className="w-30 bg-black text-white pl-10 pr-10 pt-2 pb-2 rounded-md ml-2 mt-5 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 " disabled = {!userInfo  } onClick={handleSubmit}>
            Sign in
        </button>

     </div>
     </div>
      

   </div>
   
   )
}

