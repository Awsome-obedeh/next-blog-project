import User from "@/models/user";
import connect from "@/utils/db"
import bcrypt, { genSalt } from 'bcryptjs'
import { NextResponse } from "next/server";


export const POST= async(request)=>{
    // take incoming values
    const {name,email,password}=await request.json()
    try{
        // hash password
        const salt=bcrypt.genSaltSync(10)
    
        const hashPassword=bcrypt.hashSync(password,salt)
    
        await connect();
        const user= new User({name,email,password:hashPassword})
        await user.save()

        return new NextResponse("User created Successfully", {status:201})


    }
    catch(err){
        console.log(err);
        return new NextResponse(err.message, {status:500})
    }



}