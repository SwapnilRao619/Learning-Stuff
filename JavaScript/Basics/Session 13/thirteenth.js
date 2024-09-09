// const URL="https://meowfacts.herokuapp.com/";
// let fact=document.querySelector("#fact")
// let factbutt=document.querySelector("#factbutt")
// factbutt.addEventListener("click",()=>{getFacts()})
// const getFacts= async ()=>{
//     let response= await fetch(URL) //fetch() returns a promise, thus await is used. response and request are objects.
//     let data= await response.json() //AJAX is asynchronous JS and XML but its old. Now, its JSON which is JS object notation which is new and thus AJAJ which is asynchronous JS and JSON.
//     fact.innerText=data.data[0]
// }
// function getFacts(){ //Same as above but using promise chaining.
//     fetch(URL).then((res)=>{ //fetch basically sends a GET request by default. Others can be used too.
//         return res.json()
//     }).then((data)=>{
//         fact.innerText=data.data[0]
//     })
// }
//Status 200 means that its successfull. But if it is 400 then its an error.