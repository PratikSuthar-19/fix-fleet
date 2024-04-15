import { connect } from "@/dbConfing/dbConfig"
import User from '@/models/userModel'
import bcryptjs from 'bcryptjs'
import { NextRequest , NextResponse } from "next/server";
import jwt from "jsonwebtoken";


connect();
export  async function POST(request: NextRequest){
    
     try{  
          const reqBody =  await request.json();
          const {email  , password } = reqBody;
          console.log(email , password);

          //check if user exist

          const user = await User.findOne({email})

          if(!user) {
               return NextResponse.json({error : "user does not exist"} , {status : 400})
          }

          //check if password is correct

          const validPassword = await bcryptjs.compare( password , user.password)
          if (!validPassword) {
               return NextResponse.json({error : "Invalid Password !"} , {status : 400})
          }
          //create a token data

          const tokenData = {
               id : user._id,
               userName : user.userName,
               email : user.email
          }

          const token = await jwt.sign(tokenData , process.env.TOKEN_SECRET! , {expiresIn : "1h"})

          const responce = NextResponse.json({
               message : "Login Successfully !",
               success : true
          })

          responce.cookies.set("token" , token , {httpOnly : true})

          return responce

     }catch(err : any){
          return NextResponse.json({error : err.message}
               ,{status : 500}
          )
     }

}

