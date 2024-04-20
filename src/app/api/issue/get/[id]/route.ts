import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import {Issue } from '@/models/isuueModel'
import {connect} from '@/dbConfing/dbConfig'

// connect();

export async function GET(request : NextApiRequest,
    { params }: { params: { id: string } }
){
    await connect();
    console.log(params.id,"params")
    const url =  await request.url as string;
    const parts = url.split('/');
     const id = parts[parts.length - 1];
   console.log(id);
    // return NextResponse.json({status : 201})
    
    // const {id} = request.query; // Destructure id directly from request.query

    if (!id) {
        return NextResponse.json({ error: 'ID parameter is missing' }, { status: 400 }); // Bad Request if ID is missing
    }

        try{
           const data = await Issue.findOne({_id:id});
           console.log(data)
           return NextResponse.json(data , {status : 201})
        }
        catch(err:any){
            return NextResponse.json({error: err.message} , {status: 401})
        }


}