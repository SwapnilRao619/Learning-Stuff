//Need for Express.js: As seen in the index.js file of Server folder, we have a very confusing and cluttered function for createServer. Hence, this is like a minimalist framework for Node.js handling all those flaws.
// const express=require("express")
// const app=express() //Instead of (req,res)=>{....}
// app.get("/",(req,res)=>{
//     res.end("Home Page.") //Or return res.send("Home Page.")
// })
// app.get("/about",(req,res)=>{
//     if(req.query.age){res.end(`Hey ${req.query.myname}! You are ${req.query.age} years old.`)}
//     else {res.end(`Hey ${req.query.myname}!`)}
// })
// app.listen(3000,()=>{console.log("Server listening at http://localhost:3000.")})

//Versioning: In the package.json, something like "express":"^4.18.2" will be there. Here, 2->3rd part->minor fixes->optional update; 18->2nd part->recommended bug fixes/security fixes; 4->1st part->major fixes/major/breaking update. Ex: change of space in console.log; addition of new app.get; change of get to GET.
//^4.18.2 would mean that >4.18.2 and <5.00.0 is acceptable so its fixed with 4. To install some version, use npm i express@z.xx.yy [SECURITY FIXES].
//~4.18.1 would mean that only >4.18.2 and <4.18.9 [MINOR FIXES].
//z.xx.yy - z.aa.bb would mean anything b/w the range [could be MAJOR/BREAKING FIXES].
//"express":"latest" would mean anything thats latest. 

//RESTfull API: Rules/standards that are supposed to be followed when server and client communicates. 
//Works on Server & Client architecture => both of them should be indep. on e/o, meaning, if lets say client (mob/pc) sends a req to server and server fetches required info from db and returns it to the mob as a HTML then the mob has to use SSR which is server side rendering (v/s CSR or client side rendering) but that creates depend. so thus we can return a JSON for the client itself to render freeing it off of depend.
//Always respect HTTP methods => the arch. should respect GET,POST,PATCH,PUT,DELETE for the routes "/..." by using it for what it is supposed to do.

//Middlewares ares functions that have access to req obj and res obj. C ---> M ---> S. Used.
// /*Example 1*/ const express=require('express')
// const app=express()
// const PORT=3000
// const temp=require("./temp")
// app.use(express.urlencoded({extended:false}))
// // app.use((req,res,next)=>{
// //     console.log("Middleware 2.")
// //     return res.json({next:"pending"})
// // }) //This middleware has stopped res and req obj to be access by M3 below. C ---> M1 ---> M2 --X-> M3 ---> S.
// app.use((req,res,next)=>{
//     console.log("Middleware 2.")
//     next();
// }) //Using this M2 instead of the above one is better as next() function allows req and res obj to be access by M3.
// app.get("/users",(req,res)=>{
//     res.json(temp)
// })
// app.listen(PORT,()=>{console.log(`Server listening at http://localhost:${PORT}.`)})
// /*Example 2*/ const express=require('express')
// const app=express()
// const fs=require('fs')
// const PORT=3000
// app.use(express.urlencoded({extended:false}))
// app.use((req,res,next)=>{
//     console.log("Middleware 2.")
//     fs.appendFile('log.txt',`1: ${Date.now()}: ${req.method} & ${req.path}\n`,(err,data)=>{})
//     // return res.json(temp)
//     next();
// })
// app.get('/users',(req,res)=>{
//     fs.appendFile('log.txt',`2: ${Date.now()}: ${req.method} & ${req.path}\n`,(err,data)=>{})
//     res.json(temp)
// })
// app.listen(PORT,()=>{console.log(`Server listening at http://localhost:${PORT}.`)})

//HTTP headers in API are an important part of API req and res as they represent the metadata associated with them.
//[{"key":"X-Powered-By","value":"Express","description":"Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application.","enabled":true,"disableEdit":true,"info":"Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application."},{"key":"Content-Type","value":"text/html; charset=utf-8","description":"Indicates the resource's media type.","enabled":true,"disableEdit":true,"info":"Indicates the resource's media type."},{"key":"Content-Length","value":"14966","description":"An entity header indicating the size of the entity-body, in bytes.","enabled":true,"disableEdit":true,"info":"An entity header indicating the size of the entity-body, in bytes."},{"key":"ETag","value":"W/\"3a76-eHbIwcwrS1Qf6/dcqY+jdD+vAOs\"","description":"Identifies a specific resource version.","enabled":true,"disableEdit":true,"info":"Identifies a specific resource version."},{"key":"Date","value":"Mon, 09 Sep 2024 05:56:53 GMT","description":"A general header containing the date and time the message was sent.","enabled":true,"disableEdit":true,"info":"A general header containing the date and time the message was sent."},{"key":"Connection","value":"keep-alive","description":"A general header specifying whether the current network connection will stay open once the current transaction finishes.","enabled":true,"disableEdit":true,"info":"A general header specifying whether the current network connection will stay open once the current transaction finishes."}]
// const fs=require('fs')
// const express=require('express')
// const app=express()
// const users=require("./data.json")
// const PORT=3000
// app.use(express.urlencoded({extended:false})) //In this case, the middleware checks the header and incase content type is urlencoded then it performs the parse function and then uses next() otherwise just uses next().
// app.get("/users",(req,res)=>{
//     const html=`<ul>${users.map((user)=>`<li>${user.first_name}</li>`).join("")}</ul>`
//     console.log(req.headers)
//     return res.send(html)
// })
// app.route("/api/users/:id").get((req,res)=>{
//     const id=parseInt(req.params.id)
//     const user=users.find((user)=>user.id===id)
//     res.setHeader("X-MyName","SwapnilRao") //X is for custom headers. Check built-in headers in their website for more info.
//     return res.json(user)
// })
// app.post('/api/users',(req,res)=>{
//     const body=req.body
//     users.push({...body,id:users.length+1})
//     fs.writeFile("./data.json",JSON.stringify(users),(err,data)=>{
//         return res.json({status:"pending"})
//     })
// })
// app.listen(PORT,()=>{console.log(`Server listening at http://localhost:${PORT}.`)})

//HTTP Status codes indicate whether HTTP request has been successfully completed or not.
//If 100-199 -> info resp
//If 200-299 -> succ resp; 201 for creating something / POST resp. However, code below shows 200 on postman. To avoid this, use res.status(CODE).json/res.status(CODE).send().
//If 300-399 -> redirectional messages
//If 400-499 -> client error resp
//If 500-599 -> server error resp
// const fs=require('fs')
// const express=require('express')
// const app=express()
// const users=require("./data.json")
// const PORT=3000
// app.use(express.urlencoded({extended:false})) //In this case, the middleware checks the header and incase content type is urlencoded then it performs the parse function and then uses next() otherwise just uses next().
// app.get("/users",(req,res)=>{
//     const html=`<ul>${users.map((user)=>`<li>${user.first_name}</li>`).join("")}</ul>`
//     console.log(req.headers)
//     return res.status(200).send(html)
// })
// app.route("/api/users/:id").get((req,res)=>{
//     const id=parseInt(req.params.id)
//     const user=users.find((user)=>user.id===id)
//     res.setHeader("X-MyName","SwapnilRao") //X is for custom headers. Check built-in headers in their website for more info.
//     return res.status(200).json(user)
// })
// app.post('/api/users',(req,res)=>{
//     const body=req.body
//     users.push({...body,id:users.length+1})
//     fs.writeFile("./data.json",JSON.stringify(users),(err,data)=>{
//         return res.status(201).json({status:"pending"}) 
//         //201 is for created. 202 for accepted. 204 for no content. 
//         //400 is a bad request which means that the request is missing out some content. if(!body.id || !body || !body.first_name...). 401 is unauthorized. 402 is payment required. 403 is forbidden. 404 is not found.
//         //If we request for http://localhost:3000/api/users/20000 it will show 200. To avoid this, just add an if(!user) {return res.status(404).json("User not found.")}.
//         //500 is internal server error, refers to issue in the code used in the server. 501 is not implemented. 502 is bad gateway. 503 is  unavailable service.
//         //Redirectional messages (300) is during link shortner type projects.
//     })
// })
// app.listen(PORT,()=>{console.log(`Server listening at http://localhost:${PORT}.`)})