const mongoose=require('mongoose')
const userS = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
},{timestamps:true}); //Created and updated at.
const user = mongoose.model("user",userS)
module.exports = user;