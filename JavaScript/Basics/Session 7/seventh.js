/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
    <link rel="stylesheet" href="seventh.css">
</head>
<body>
    <div id="box" name="JSdiv">This is a div.
        <ul>
            <li>Mango</li>
            <li>Apple</li>
            <li>Banana</li>
        </ul>
    </div>
    <p class="para">This is a sample line.</p>
    <script src="seventh.js"></script>
</body>
</html>
*/
// let div=document.querySelector("div")
// let clas=document.querySelector("p")
// console.log(div.getAttribute("id"))
// console.log(div.getAttribute("name"))
// console.log(clas.getAttribute("class"))
// clas.setAttribute("class","newpara") //Replace the class from para to newpara.
// let newdiv=document.querySelector("div")
// newdiv.style.backgroundColor="red"
// newdiv.style.fontSize="50px"
// newdiv.style.visibility="hidden"
// let btn1=document.createElement("button") //First, create an element.
// btn1.innerText="Click Me!"
// let div1=document.querySelector("div")
// div1.append(btn1) //Second, you just append it somewhere. This does so at the end.
// div1.prepend(btn1) //Does so at the top, but within the same div.
// div1.before(btn1) //Completely upper outside of the div.
// div1.after(btn1) //Completely lower outside of the div.
// let newhead=document.createElement("h1")
// newhead.innerText="Hello Folks!"
// let bd=document.querySelector("body")
// bd.prepend(newhead)
// newhead.remove() //Deletes the element
// let prac1=document.querySelector("body")
// let prac2=document.createElement("h2")
// prac2.innerText="Just for practice."
// prac1.appendChild(prac2) //Always appends at the end, so it will become the last child of the parent.
// prac1.removeChild(prac2)

/*
!....
*/
// let button=document.createElement("button")
// button.innerText="Click Me!"
// button.style.backgroundColor="red"
// button.style.color="white"
// let body=document.querySelector("body")
// body.prepend(button)

// let paragraph=document.querySelector(".content")
// paragraph.setAttribute("class","newClass") //But this overwrites the entire class, which would not solve the "append" part of the question.
// paragraph.classList.add("newClass") //class="content newClass"