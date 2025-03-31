const path=require("path")
const multer=require("multer")
const express=require("express")
const app=express()
const storage=multer.diskStorage({
    destination: function(req,file,cb){ //'cb' is callback
        return cb(null,'./uploads') //Basically, we check if there are any errors in the callback and if null, we use '/uploads'.
    }, 
    filename:function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})
// const upload=multer({dest:"uploads/"}) //The problem is, the stored image is a format that can't be read.
const upload=multer({storage})
const PORT=3000
app.set('view engine','ejs')
app.set('views',path.resolve("./views"))
app.use(express.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    return res.render("homepage")
})
app.post("/upload",upload.fields([{name:'profileImage'},{name:'bannerImage'}]),(req,res)=>{
    // console.log(req.body) //For upload.single('filename')
    // console.log(req.file)
    return res.redirect("/")
})
app.listen(PORT,()=>{console.log(`Listening at http://localhost:${PORT}.`)})