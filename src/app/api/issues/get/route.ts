import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {Issue } from '@/models/isuueModel'
import {connect} from '@/dbConfing/dbConfig'

connect();

export async function GET(request : NextRequest){
  
        try{
           const data = await Issue.find({});
           console.log(data)
           return NextResponse.json(data , {status : 201})
        }
        catch(err:any){
            return NextResponse.json({error: err.message} , {status: 401})
        }


}