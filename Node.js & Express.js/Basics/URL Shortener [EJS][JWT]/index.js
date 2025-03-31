const express=require("express")
const path=require("path")
const {restrictToLoginUserOnly,checkAuth}=require("./middleware/auth")
const cookieParser=require('cookie-parser')
const urlRoute=require("./routes/url")
const userRoute=require("./routes/user")
const staticRoute=require("./routes/staticRouter")
const {connectToMongoDB}=require("./connect")
const { handleRetrieveOriginalURL,handleAnalyticsForShortId } = require("./controllers/url");
const app=express()
const PORT=3000
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
connectToMongoDB('mongodb://127.0.0.1:27017/US').then(()=>{console.log("MongoDB connected!")}).catch((err)=>{console.log(err)})
app.set('view engine','ejs') //SSR
app.set('views',path.resolve("./views"))
// const URL=require('./models/url')
// app.get('/url/test',async (req,res)=>{
//     const allurls=await URL.find({})
//     return res.render("home",{
//         urls:allurls //Send something to home.ejs for work to be done. 
//     })
// }) <% urls.forEach(url => { %>
    // <li><%= url.shortId %></li>
    // <% }) %>
app.use("/url",restrictToLoginUserOnly,urlRoute)
app.use("/",checkAuth,staticRoute) //If '/' then staticRoute.
app.use("/user",userRoute)
app.get('/:shortId',handleRetrieveOriginalURL);
app.get("/analytics/:shortId",handleAnalyticsForShortId)
app.listen(PORT,()=>{console.log(`Server listening at http://localhost:${PORT}.`)})