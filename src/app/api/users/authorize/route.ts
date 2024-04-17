import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import {getDataFromToken } from "@/helpers/getDataFromToken"
import jwt from "jsonwebtoken";

export  async function GET(request: NextRequest){

    const token = await request.cookies.get("token")?.value
    console.log(token)
    try {
        console.log("try")
        // Verify the token
        const decoded = jwt.verify( token , process.env.TOKEN_SECRET!);
        console.log("valid token", decoded);
        // If token is valid, continue to the next middleware
        return NextResponse.json({ message: 'valid user' }, { status: 201 });
      } catch (error) {
        console.log("catch")
        console.error("Invalid token:", error);
        // If token is invalid, return forbidden response
        return NextResponse.json({ message: 'Forbidden: Invalid token' }, { status: 403 });
      }
    
}
    
   

   
