import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

  export const getDataFromToken = ( token : String) => {
    try {
       
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
        console.log("function call" , decodedToken)
        return decodedToken;
    } catch (error: any) {
        throw new Error(error.message);
    }

}