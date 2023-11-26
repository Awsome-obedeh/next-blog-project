import Post from "@/models/post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

 export const GET= async (request,{params})=>{
    try{

        await connect()
        const id=params.id
      const posts =await Post.find()
        return new NextResponse(JSON.stringify(posts),{status:200})
     }
     catch(err){
        console.log(err);
        return new NextResponse('server Error ' +  err, {status:500})
     }
    }