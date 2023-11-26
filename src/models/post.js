import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    desc:{
        type:String,
        required:true
    },

    img:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },

},
{timestamps:true})

// Add a static method 'find' to the schema
// postSchema.statics.findPosts = async function () {
//     return this.find(); // Using 'this' to refer to the model
//   }

export default mongoose.models.Post|| mongoose.model("Post", postSchema)


