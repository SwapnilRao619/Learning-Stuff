// const fs=require('fs')
// const express=require('express')
// const app = express()

// const users=require("./data")
// const PORT=3000

// app.use(express.urlencoded({extended: false})) //Middleware plugin

// app.get('/users',(req,res)=>{
//     const html=`<ul>${users.map((user)=>`<li>${user.first_name}</li>`).join("")}</ul>`
//     return res.send(html)
// })
// app.get('/api/users',(req,res)=>{
//     return res.json(users)
// })

// // app.get('/api/users/:id',(req,res)=>{
// //     const id=parseInt(req.params.id)
// //     const user=users.find((user)=>user.id===id)
// //     return res.json(user)
// // })
// // app.patch('/api/users/:id',(req,res)=>{
// //     //Update the user with ID id.
// //     return res.json({status:"pending"})
// // })
// // app.delete('/api/users/:id',(req,res)=>{
// //     //Delete the user with ID id.
// //     return res.json({status:"pending"})
// // })

// //All of the above have the same route. So, we can do the following as below, helping incase the route is changed in the future.
// app.route('/api/users/:id').get((req,res)=>{
//     const id=parseInt(req.params.id)
//     const user=users.find((user)=>user.id===id)
//     return res.json(user)
// }).patch((req,res)=>{
//     //Update the user with ID id.
//     return res.json({status:"pending"})
// }).delete((req,res)=>{
//     //Delete the user with ID id.
//     return res.json({status:"pending"})
// })

// app.post('/api/users',(req,res)=>{
//     const body=req.body //Postman app
//     // console.log(body) Will show undefined without middleware as express does not know how to handle this kind of data.
//     users.push({...body,id:users.length+1})
//     fs.writeFile('./data.json',JSON.stringify(users),(err,data)=>{
//         return res.json({status:"pending"})
//     })
// })

// app.listen(PORT,()=>{console.log(`Server listening at http://localhost:${PORT}`)})