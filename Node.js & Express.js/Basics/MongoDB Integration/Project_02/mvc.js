const express=require("express")
const { connectMongoDB } = require("./connection.js")

const { logreqres } = require("./middlewares/index.js")

const urouter=require("./routes/user.js")

const app=express()
const PORT=3000

connectMongoDB("mongodb://127.0.0.1:27017/YA1").then(()=>{console.log("MongoDB connected!")})

app.use(express.urlencoded({extended:false}))
app.use(logreqres("log.txt"))

app.use("/api/user",urouter)

app.listen(PORT,()=>{console.log(`Listening at http://localhost:${PORT}.`)})