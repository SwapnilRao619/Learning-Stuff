const express=require("express")
const router=express.Router()
const multer=require('multer')
const path=require("path")

const storage=multer.diskStorage({
    destination: function (req,file,cb){
    cb(null,path.resolve(`./public/uploads/${req.user._id}`))    
    },
    filename:function(req,file,cb){
        const fileName=`${Date.now()}-${file.originalname}`
        cb(null,fileName)
    }
})

router.get('/add-new',(req,res)=>{
    return res.render('addBlog',{
        user:req.user
    })
})

router.post("/",(req,res)=>{

})

module.exports=router