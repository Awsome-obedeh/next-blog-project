import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Post from "@/models/post";


export const GET=async (request)=>{
    try{
        await connect();
        const posts=await Post.find();
        return new NextResponse(JSON.stringify(posts), {status:200})

    }
    catch(err){
        console.log(err);
      return new NextResponse(`server error ${err}`,{status:500})
    }

    
    // NextResponse cannot be invoked without new
    
}

