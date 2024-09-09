// console.log("one") //Asynchronous programming.
// console.log("two")
// console.log("three")
// setTimeout(()=>{
//     console.log("Hello.")
// },3000) //Incase theres some sort of an API call which consumes time, we can let the next few lines of code execute while this does its business.
// console.log("four")
// console.log("five")

// function sum(a,b){ //Callbacks.
//     console.log(a+b)
// }
// function calc(a,b,sumCallback){ //sum"Callback" or "sum" written here to indicate that a function is passed as an argument (Callback function).
//     sum(a,b)
// }
// calc(3,4,sum()) //Gives output as NaN as () means execute immediately.
// calc(3,4,sum) //Output as 7 as it is the right way to call the callback function.
// setTimeout(()=>{
//     console.log("Hello.")
// },2000) //Similarly, setTimeout() is also actually using the concept of callbacks, as its a function which is taking another function as a parameter.
// function getData(dataID){ //Callback hell OR pyramid of doom.
//     setTimeout(()=>{
//         console.log("data.",dataID)
//     },2000)
// }
// getData(123) //As usual, getting data after 2 seconds. But, what if we need to call for 123,456,789 in such a way that it comes after 2 seconds each. Then, we do the following as below, which causes pyramid of doom.
// function getData(dataID,getNextData){
//     setTimeout(()=>{
//         console.log("Data.",dataID)
//         if(getNextData){
//             getNextData()
//         }
//     },2000)
// }
// getData(123,()=>{
//     getData(345,()=>{
//         getData(678)
//     })
// })

// let p=new Promise((resolve,reject)=>{ //Promises.
//     console.log("I am a promise.")  
//     // resolve(123) //Three states under a promise. It is fullfilled, pending, rejected. Here, resolve basically makes the state as fullfilled and 123 is the result.
//     // reject("Error.") //Similarly, state is rejected and result is "Error."
// })
// function getData(dataID,getNextData){ //Solving callback hell issue.
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data.",dataID)
//             resolve("Success.")
//             if(getNextData){
//                 getNextData()
//             }
//         },3000)
//     })
// }
// let res=getData(123,()=>{
//     getData(456)
// }) // -------------------------------------------------------------> 1
// const getp=()=>{ //Showcasing the .then(res) usecase
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise!")
//         resolve("Success.")
//     })
// }
// let p=getp()
// p.then((res)=>{
//     console.log("Promise fullfilled/resolved.",res)
// })
// const getp=()=>{ //Showcasing the .catch(err) usecase
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise!")
//         reject("Failure.")
//     })
// }
// let p=getp()
// p.catch((err)=>{
//     console.log("Promise rejected.",err)
// })
// function cip1(){ //Same as the callback for fetching data with a specific time gap but done via promises.
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data 1.")
//             resolve("Success.")
//         },2000)
//     })
// }
// function cip2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data 2.")
//             resolve("Success.")
//         },2000)
//     })
// }
// console.log("Fetching Data 1.")
// cip1().then(()=>{
//     console.log("Fetching Data 2.") //Chaining.
//     cip2().then(()=>{})
// })  
// Performing 1 with chaining of promises:
// function getData(dataID){ //Solving callback hell issue.
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data.",dataID)
//             resolve("Success.")
//         },3000)
//     })
// }
// console.log("Fetching Data 1.")
// getData(123).then(()=>{
//     console.log("Fetching Data 2.")
//     getData(456).then(()=>{})
// })

// async function hello(){ //Async-await.
//     console.log("Hello.")
// }
// hello()
// function getData(dataID){ //Replicating 1 but with async-await.
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data.",dataID)
//             resolve("Success.")
//         },3000)
//     })
// }
// async function allData(){
//     console.log("Fetching Data 1.")
//     await getData(123)
//     console.log("Fetching Data 2.")
//     await getData(456)
//     console.log("Fetching Data 3.")
//     await getData(789)
// }
// allData()
// (async function allData(){
//     console.log("Fetching Data 1.")
//     await getData(123)
//     console.log("Fetching Data 2.")
//     await getData(456)
//     console.log("Fetching Data 3.")
//     await getData(789)
// })(); //To avoid allData(), called as IIFE, "Immediately Invoked Function Expression" where the syntax is (function)();
//To conclude, taking 1 code as reference, A-A>P>C in terms of readability and simplicity.