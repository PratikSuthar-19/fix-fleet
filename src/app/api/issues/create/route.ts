import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {Issue } from '@/models/isuueModel'
import {connect} from '@/dbConfing/dbConfig'
import { authorize } from "../../../../../middleware/authorize";

connect();

export async function POST(request : NextRequest){

    const res:any = await authorize(request);
    const data:any = await res.json();
    
    console.log(data)
    console.log(res.status)

    if(res.status === 201){

    try{
    const reqBody = await request.json();
    console.log(reqBody)
    const{title , description } =  reqBody;

    const newIssue = await new Issue({
        title : title,
        description : description,
        author : data.id
    })

    await newIssue.save();
    console.log(newIssue)

    return NextResponse.json({message : "issue created succesfully"}, {status : 201})
}catch(err : any){
    return NextResponse.json({error : err.message}, {status : 401})
}
    }else{
        return NextResponse.json({message : "unauthorized user"}, {status : 401})
    }

} 