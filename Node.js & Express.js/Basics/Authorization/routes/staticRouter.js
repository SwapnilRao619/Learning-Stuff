const express=require("express")
const router=express.Router()
const {restrictTo}=require("../middleware/auth")
const URL=require("../models/url")
router.get("/admin/urls",restrictTo(['ADMIN']),async (req,res)=>{
    if(!req.user) return res.redirect("/login")
        const allurls= await URL.find({}) //To show only the links requested by that user.
        return res.render("home",{
            urls:allurls
        })
})
router.get("/",restrictTo(['NORMAL','ADMIN']),async (req,res)=>{ //Inline middleware to ensure authorization.
    if(!req.user) return res.redirect("/login")
    const allurls= await URL.find({createdBy: req.user._id}) //To show only the links requested by that user.
    return res.render("home",{
        urls:allurls
    })
})
router.get('/signup',async (req,res)=>{
    return res.render('signup')
})
router.get('/login',async (req,res)=>{
    return res.render('login')
})
module.exports=router