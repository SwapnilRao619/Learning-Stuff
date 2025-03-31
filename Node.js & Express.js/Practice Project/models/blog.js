const mongoose = require("mongoose")

const blogSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    coverImageURL:{
        type:String,
        required:false
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user" //Points towards 'user'.
    }
})

const Blog=mongoose.model("blog",blogSchema)

module.exports=Blog