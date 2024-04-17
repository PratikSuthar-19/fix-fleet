import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authorize } from "../../../../../middleware/authorize";

export  async function GET(request : NextRequest){

        const res = await authorize(request);
        console.log(res)
        console.log(res.status)

       if(res.status === 201){

     

    
        try{

             const responce =  await NextResponse.json({message : "Logout Successfully"} , {status : 200}) 
             const token = await  request.cookies.get("token");
             console.log(token?.value)
             await responce.cookies.set("token" ,"" , {httpOnly : true})
            return responce;
        }
        catch(err:any){
           return NextResponse.json({error : err.message} , { status : 400})
        }

     } 
    
  
}