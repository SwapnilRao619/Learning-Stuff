// const http=require("http")
// http.createServer((req,res)=>{
//     console.log(req.headers) //Extra info about the server.
//     console.log("Request sent.")
//     res.end("Server end message.")
// }).listen(3000,()=>{console.log("Server listening at http://localhost:3000.")})

// const fs=require("fs")
// http.createServer((req,res)=>{
//     const log=`${Date.now()}: New request received.\n`
//     fs.appendFile("log.txt",log,(err,data)=>{})
//     res.end("Hello from server.")
// }).listen(3000,()=>{console.log("Server listening at http://localhost:3000.")})

// http.createServer((req,res)=>{
//     console.log("Request sent.")
//     const log=(`${Date.now()}: ${req.url} New request recieved.\n`)
//     fs.appendFile("log.txt",log,(err,data)=>{
//         switch(req.url){
//             case '/': res.end("Home Page.")
//             break
//             case '/about': res.end("Swapnil Rao.")
//             break
//             default: res.end("Error 404.")
//         }
//     })
// }).listen(3000,()=>{console.log("localhost:3000")})

// https-> hypertext transfer protocol secure. URL / uniform resource locater has HTTPS followed by user friendly IP followed by / for path and ? onwards are query parameters.
// const url=require('url')
// http.createServer((req,res)=>{
//     console.log("Request sent.")
//     const log=`${Date.now()}: ${req.url} New request recieved.\n`
//     const myurl=url.parse(req.url,true) //Converting it to favorable format.
//     console.log(myurl)
//     fs.appendFile('log.txt',log,(err,data)=>{
//         switch(myurl.pathname){ //or switch(req.url)
//             case '/': res.end("Home Page."); break;
//             case '/about': const username=myurl.query.myname; res.end(`Hi, ${username}`); break;
//             case '/search': const search= myurl.query.search_query; res.end(`Here are your results for ${search}.`); break;
//             default: res.end("404 Page Not Found!")
//         }
//     })
//     console.log("Hello from server!")
// }).listen(3000,()=>{console.log("Server listening at http://localhost:3000.")})

//HTTP GET: When you want to get some data from the server. Ex: youtube search query
//HTTP POST: When you want to send and mutate some data from the server. Ex: submitting a form.
//HTTP PUT: Uploading files. Ex: images
//HTTP PATCH: Update some info.
//HTTP DELETE: Delete some info.
// http.createServer((req,res)=>{
//     console.log("Request sent.")
//     const log=`${Date.now()}: ${req.method} ${req.url} New request recieved.`
//     const myurl=url.parse(req.url,true)
//     console.log(myurl)
//     fs.appendFile('log.txt',log,(err,data)=>{
//         switch(myurl.pathname){
//             case '/': res.end("Home Page."); break;
//             case '/about': const username=myurl.query.myname; res.end(`Hello ${username}!`); break;
//             case '/signup': if(req.method=='GET') res.end("This is a signup form."); else if(req.method=="POST"){/*DB query here*/};
//             case '/search': const search=myurl.query.search_query; res.end(`Result for ${search}:`); break;
//             default: res.end("404 Page Not Found!");
//         }
//     })
//     console.log("Hello from server.")
// }).listen(3000,()=>{console.log("Server listening at http://localhost:3000.")})