import mongoose from 'mongoose'

const  connect=async ()=>{
    try{
        const connect =await mongoose.connect(process.env.MONGO_DB_URI)
        connect ? console.log('connected to the datbase') : " ";

    }catch(error){
        console.log(error);
        throw new Error("could not connect ", error)
    }
}

export default connect