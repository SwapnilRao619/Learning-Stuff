// //No-SQL which means document based DB and not based on relations, tables like SQL.
// //Aggregation pipes are strongly supported.
// //BSON format, BinaryEncodedJava Script Object Notation.
// //Best for node applications.
// //"Collections" and not "Tables". Inside "Collections" there are documents.
// //show dbs; use DBNAME; show collections; db.COLLNAME.find({}) -> output is a document; db.users.insert({}).

// const express=require("express")
// const app=express()
// const PORT=3000
// const mongoose=require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/YA1").then(()=>{console.log("Success!")}).catch((err)=>{console.log("Failed! ", err)})
// app.use(express.urlencoded({extended:false}))
// app.get("/users", async (req,res)=>{
//     const allusers=await user.find({})
//     const html=`<ul>${allusers.map((user)=>`<li>${user.firstName} - ${user.email}</li>`).join("")}</ul>`
//     res.send(html)
// })
// app.get("/api/users",async (req,res)=>{
//     const allusers= await user.find({})
//     res.json(allusers)
// })
// app.route("/api/users/:id").get(async (req,res)=>{ //Use 66e26a3b275b32a009dde4ac etc. as id in the url.
//     const thatuser= await user.findById(req.params.id)
//     if(!thatuser) {return res.status(404).json({error:"User not found."})}
//     return res.json(thatuser)
// }).patch(async (req,res)=>{
//     const thatuser=await user.findByIdAndUpdate(req.params.id,{lastName:"Changed"})
//     return res.json({msg:"Success"})
// }).delete(async (req,res)=>{
//     await user.findByIdAndDelete(req.params.id)
//     return res.json({msg:"Success"})
// })
// app.post("/api/users", async (req,res)=>{
//     const body= req.body 
//     // if(!body||!body.firstName||!body.lastName||body.email||body.jobTitle||!body.gender){return res.status(400).json({msg:"All fields required."})}
//     await user.create({
//         firstName: body.firstName,
//         lastName: body.lastName,
//         email: body.email,
//         gender: body.gender,
//         jobTitle: body.jobTitle,
//     })
//     return res.status(201).json({msg:"success"})
// })
// app.listen(PORT,()=>{console.log(`Listening at http://localhost:${PORT}.`)})

//Model View Controller: A way to structure the code. Create folders first. Check Project_02.