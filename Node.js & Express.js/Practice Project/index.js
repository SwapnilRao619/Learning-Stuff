const path=require("path")

const express=require("express")
const app=express()

const mongoose=require("mongoose")

const cookieParser=require("cookie-parser")

const userRoute=require("./routes/user")
const blogRoute=require("./routes/blog")
const {checkForAuthenticationCookie}=require("./middlewares/auth")

const PORT=3000

mongoose.connect("mongodb://127.0.0.1:27017/BA").then(()=>{console.log("MongoDB connected!")}).catch((err)=>{console.log(err)})

app.set("view engine",'ejs')
app.set('views',path.resolve("./views"))

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))

app.use('/user',userRoute)
app.use('/blog',blogRoute)

app.get("/",(req,res)=>{
    res.render("homepage",{
        user:req.user,
    })
})

app.listen(PORT,()=>{console.log(`Server listening at http://localhost:${PORT}.`)})