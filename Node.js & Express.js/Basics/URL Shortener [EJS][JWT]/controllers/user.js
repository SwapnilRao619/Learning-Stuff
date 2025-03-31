// const {v4: uuidv4} = require("uuid")
// const User=require("../models/user")
// const {setUser}=require("../service/auth")
// async function handleUserSignUp(req,res){
//     const {name,email,password} = req.body
//     await User.create({
//         name,
//         email,
//         password,
//     })
//     return res.render("home")
// }
// async function handleUserLogIn(req,res){
//     const {email,password}=req.body
//     const check=await User.findOne({email,password})
//     if(!check) 
//         return res.render('login',{
//             error: "Invalid Username/Password",
//         });
//     const token=setUser(check)
//     res.cookie("uid",token,{
//         // domain:"www.google.com" //Will only work for google.com after this. If we use something like '.swapnilrao.dev' then all the subdomains of the main website can be accessed too.
//         // expires:""
//         //Similarly, other fields can be set.
//     })
//     return res.redirect('/')
// }
// module.exports={
//     handleUserSignUp,
//     handleUserLogIn
// }

//Cookies and responses are 2 ways. Above one is cookies. Below is responses.
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
    const token=setUser(check)
    // res.cookie("uid",token,{
    //     // domain:"www.google.com" //Will only work for google.com after this. If we use something like '.swapnilrao.dev' then all the subdomains of the main website can be accessed too.
    //     // expires:""
    //     //Similarly, other fields can be set.
    // })
    return res.json({token})
}
module.exports={
    handleUserSignUp,
    handleUserLogIn
}