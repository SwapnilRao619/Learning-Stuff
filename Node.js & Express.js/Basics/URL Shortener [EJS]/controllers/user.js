const {v4: uuidv4} = require("uuid")
const User=require("../models/user")
const {setUser}=require("../service/auth")
async function handleUserSignUp(req,res){
    const {name,email,password} = req.body
    await User.create({
        name,
        email,
        password,
    })
    return res.render("home")
}
async function handleUserLogIn(req,res){
    const {email,password}=req.body
    const check=await User.findOne({email,password})
    if(!check) 
        return res.render('login',{
            error: "Invalid Username/Password",
        });
    const sessionId=uuidv4();
    setUser(sessionId,check)
    res.cookie("uid",sessionId)
    return res.redirect('/')
}
module.exports={
    handleUserSignUp,
    handleUserLogIn
}