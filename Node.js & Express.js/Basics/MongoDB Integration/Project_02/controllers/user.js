const user=require("../models/user")
const User=require("../models/user")
async function handleGetAllUsers(req,res){
    const allusers= await user.find({})
    res.json(allusers)
}
async function handleGetUserById(req,res){
    // async (req,res)=>{ //Use 66e26a3b275b32a009dde4ac etc. as id in the url.
        const thatuser= await user.findById(req.params.id)
        if(!thatuser) {return res.status(404).json({error:"User not found."})}
        return res.json(thatuser)
    //}
}
async function handleUpdateUserById(req,res){
    // async (req,res)=>{
        const thatuser=await user.findByIdAndUpdate(req.params.id,{lastName:"Changed"})
        return res.json({msg:"Success"})
}
async function handleDeleteUserById(req,res){
    // async (req,res)=>{
        await user.findByIdAndDelete(req.params.id)
        return res.json({msg:"Success"})
}
async function handleCreateNewUser(req,res){
    // async (req,res)=>{
        const body= req.body 
        // if(!body||!body.firstName||!body.lastName||body.email||body.jobTitle||!body.gender){return res.status(400).json({msg:"All fields required."})}
        await user.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            gender: body.gender,
            jobTitle: body.jobTitle,
        })
        return res.status(201).json({msg:"success",id: result._id})
    // }
}
module.exports={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}