/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
    <link rel="stylesheet" href="eight.css">
</head>
<body>
    <button onclick="console.log('Hello')">Click Me!</button> <!--On click is event handling.-->
    <button ondblclick="console.log('Hello')">Click Me Two Times!</button>
    <div id="divbtn" onmouseover="console.log('You are inside the div')"> <!--Inline event handling-->
        This is a box.
    </div>
    <script src="eight.js"></script>   
</body>
</html>
*/
// let btn1=document.querySelector("#divbtn")
// btn1.onclick=()=>{
//     console.log("You clicked on the div.")
// } //Better practice than inline event handling. Priority: JS EH > I EH.
// btn1.onclick=(e)=>{
//     console.log(e) //Event object which contains information about the event.
//     console.log(e.target)
//     console.log(e.type)
//     console.log(e.clientX, e.clientY)
// }
// btn1.addEventListener("click",(e)=>{ console.log("Clicked through EL."); console.log(e.type); console.log(e.target);}) //Priority: EL EH > JS EH > I EH.
// btn1.addEventListener("click",()=>{ console.log("Clicked through EL but second function.") }) //Adv is that we can have multiple functions for the same element through EL.
// btn1.removeEventListener("click",()=>{ console.log("Clicked through EL but second function.") }) //Won't remove the above EL EH as different memory taken by the functions in the second parameter. To avoid this, define the function to a variable and pass that variable.
// let myev=()=>{
//     console.log("Hovered through EL.");
// }
// btn1.addEventListener("mouseover",myev)
// btn1.removeEventListener("mouseover",myev)

// let ldmode=document.querySelector("#ldmode")
// let heading1=document.querySelector("#heading1")
// let body=document.querySelector("body")
// var count=0
// let ldmfn=()=>{
//     if(count%2==0){
//         body.style.backgroundColor="black";
//         heading1.style.color="white";
//     }
//     else{
//         body.style.backgroundColor="white";
//         heading1.style.color="black";
//     }
//     count++;
// }
// ldmode.addEventListener("click",ldmfn)