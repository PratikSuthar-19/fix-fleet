import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import {Issue } from '@/models/isuueModel'
import {connect} from '@/dbConfing/dbConfig'
import { authorize } from "../../../../../../middleware/authorize";

// connect();

export async function GET(request : NextRequest){
    await connect();
    console.log(request.url)
    const url =  await request.url as string;
    const parts = url.split('/');
    const id = parts[parts.length - 1];
    console.log(id);

    const res:any = await authorize(request);
    const data:any = await res.json();
    
    console.log(data)
    console.log(res.status)

   
    
    if (!id) {
        return NextResponse.json({ error: 'ID parameter is missing' }, { status: 400 }); // Bad Request if ID is missing
    }
    if(res.status === 201){

    try{
  
    const result = await Issue.findByIdAndDelete({_id: id})

    console.log(result)
    return NextResponse.json({message : "issue deleted succesfully"}, {status : 201})
    }catch(err : any){
        return NextResponse.json({error : err.message}, {status : 401})
    }

    }else{
        return NextResponse.json({message : "unauthorized user"}, {status : 401})
    }

    


}