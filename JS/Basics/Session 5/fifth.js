// function printer(msg){
//     console.log(msg)
// }
// printer("Printed.")
// function sumer(a,b){
//     console.log(a+b)
// }
// sumer(3,5)
// function muller(x,y){ //x and y are like local variables of function -> block.
//     return x*y
// }
// let res=muller(5,5)
// console.log(res)
// const arrdiver = (u,v) => { //Arrow function.
//     console.log(u+v);
// }
// arrdiver(4,5)
// let power=(m,n)=>{
//     console.log(m**n)
// }
// power(2,3)
// const printerz=()=>{
//     console.log("Hello World.")
// }
// printerz()
// var count=0
// var vow=["a","e","i","o","u"]
// function checkv(string){
//     for(let i of string){
//         if(vow.includes(i)){ //In operator won't work here, use arr.includes(item) instead.
//             count++
//         }
//     }
//     console.log(count)
// }
// checkv("aeiou")
// const vowc = (str)=>{
//     for(let i of str){
//         if(vow.includes(i)){ //In operator won't work here, use arr.includes(item) instead.
//             count++
//         }
//     }
//     console.log(count)
// }
// vowc("aeiou")
// let sub=["maths","science","socials","language"]
// function subp1(sub){
//     console.log(sub)
// };subp1(sub)
// const subp2 = (sub)=>{
//     console.log(sub)
// };subp2(sub) 
// let arr=[1,2,3,5,6]
// arr.forEach(function myval(val){ //Callback function is the function that is passed as an argument to another function. //Methods are functions that are bound to only a specific datatype.
//     console.log(val);
// })
// let narr=[7,8,9,10,11]
// narr.forEach((val,idx,arr)=>{ //For each method basically a higher order method takes the callback function and perfoms that on every element of the array. It also stores sends the index and array values.
//     console.log(val,idx,arr);
// })
// sqarr=[1,2,3,4,5,6,7,8,9,10]
// sqarr.forEach((num)=>{
//     console.log(num*num)
// })
// sqarr.forEach(function sq(num,idx,arr){
//     console.log(num*num,idx,arr)
// })
// let marr=sqarr.map((val)=>{ //Same as .forEach but this returns a new array, so let= needed.
//     return val*val
// })
// console.log(marr)
// let earr=sqarr.filter((val)=>{ //Same as .map but condition is used here.
//     return val%2==0; //return val>3, return val%2!=0
// })
// console.log(earr)
// const op=sqarr.reduce((res,curr)=>{ //Same as .filter except here the final result is not an array, but a single output.
//     return res+curr
// })
// console.log(op)
// const output=sqarr.reduce((prev,curr)=>{
//     return prev>curr? prev:curr;
// })
// console.log(output)
// sm=[97,64,32,49,99,96,86]
// let res=sm.filter((val)=>{
//     return val>90
// })
// console.log(res)
// const input=prompt("Enter a number: ")
// var array=[]
// for(let i=0;i<input;i++){
//     array[i]=i+1
// }
// const output1=array.reduce((res,curr)=>{
//     return res+curr
// })
// console.log(output1)
// const output2=array.reduce((res,curr)=>{
//     return curr*res
// })
// console.log(output2)