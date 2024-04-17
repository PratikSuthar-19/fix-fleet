import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { decode } from "punycode";

export  async function authorize(request : NextRequest) {
    console.log("middle ware called")
    const token = await request.cookies.get("token")?.value
  
  
    if (!token) {
    console.log("no token")
    return NextResponse.json({message: 'Unauthorized: No token provided'},{status: 401})
    }
  
  
      console.log(token)
      try {
          console.log("try")
          // Verify the token
          const decoded : any = await jwt.verify(token, process.env.TOKEN_SECRET!);;
          console.log("valid token", decoded);
          // If token is valid, continue to the next middleware
        //   (request as any).data = decode
          return NextResponse.json( decoded , { status: 201 });
        } catch (error) {
          console.log("catch")
          console.error("Invalid token:", error);
          // If token is invalid, return forbidden response
          return NextResponse.json({message: "unauthorizrd user"}, { status: 403 });
        }
  
}