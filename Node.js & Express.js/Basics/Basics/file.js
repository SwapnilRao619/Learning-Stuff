// const fs=require('fs')
// fs.writeFileSync('test.txt','Hello World!')
// fs.writeFileSync('test.txt','Hello!') //Overwrites.
// fs.writeFile('test.txt','HELLO WORLD!',err=>{}) //Blocking and non blocking pass related stuff.

// console.log(fs.readFileSync("test.txt","utf-8"))
// console.log(fs.readFile("test.txt","utf-8",(err,result)=>{
//     if(err) console.log("Error",err)
//     else console.log(result)
// }))

// fs.appendFileSync("test.txt",`\nHey There!\n`)
// fs.appendFileSync("test.txt",`${Date.now()} Hey there!\n`)

// fs.unlinkSync("test.txt")

// console.log(fs.statSync('test.txt'))

// fs.mkdirSync("TEST")
// fs.mkdirSync("TEST/F1/F2",{recursive:true})

//NodeJS architecture: Request sent by user to server. Put in an event queue and its FIFO based. Event loop manages how to handle these requests in the queue. The request could be either a blocking or a non blocking operation (B/NB). If NB then immediately executed and over. If B then it is sent to thread pool, depending on the architecture. Minimum 4 and max through an OS command below. Thread pool has a thread/worker to execute the request and return response.

//NBO
// console.log("1")
// fs.readFile("test.txt","utf-8",(err,result)=>{
//     if(err) console.log(err)
//     else console.log(result)
// })
// console.log("2")

//BO
// console.log("1")
// console.log(fs.readFileSync("test.txt","utf-8"))
// console.log("2")

// const os=require("os")
// console.log(os.cpus().length) //Max 8.