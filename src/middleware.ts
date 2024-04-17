import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import { getDataFromToken }from '@/helpers/getDataFromToken'
import { url } from 'inspector';
import next from 'next';

export  async function middleware(request : NextRequest){

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
        const decoded = getDataFromToken(token);
        console.log("valid token", decoded);
        // If token is valid, continue to the next middleware
        return NextResponse.json({ message: 'valid user' }, { status: 201 });
      } catch (error) {
        console.log("catch")
        console.error("Invalid token:", error);
        // If token is invalid, return forbidden response
        return NextResponse.json({ message: 'Forbidden: Invalid token' }, { status: 403 });
      }

  // return NextResponse.redirect(new URL( '/api/users/authorize' , request.url ))
}
 
export const config = {
  matcher: '/api/users/login',
}