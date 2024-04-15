import {connect} from "@/dbConfing/dbConfig";
import User from "@/models/userModel";
import { NextRequest , NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();
   console.log("connected")

export async function POST(request : NextRequest) {

        
    try{
    //  console.log(req);

   

      const reqBody = await request.json();
      console.log(reqBody)
      const {userName , email , password} = await reqBody;
    //   console.log(userName , userEmail , userPassword)

     
          //checkk if user is alread exist?
      const user = await User.findOne({email});
      if(user){
       return NextResponse.json(
        {error : "user alread exists"},
        {status : 400}
       )}

    //   hash password
      
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(password , salt);
      console.log(hashPassword)

    //  create a new User

    const newUser = new User({
        userName : userName,
        email : email,
        password : hashPassword
     })
    
    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({
        message : "user created successfully",
        success : true ,
        user : savedUser
    },
    {status : 201})

    }catch(err:any){
       return   NextResponse.json(
            {error : err.message},
            {status : 500}
        )
    }
}


