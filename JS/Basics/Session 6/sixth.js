/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
    <!-- <script src="sixth.js"></script> --> <!--Writing this here is not conventional as it's before HTML5 code.-->
    <link rel="stylesheet" href="sixth.css">
</head>
<body>
    <h1 id="heading">DOM Demo by Swapnil Rao</h1> <!--IDs are used for unique elements. But, class are more general.-->
    <h2>Topic1: Starter Code</h2>
    <p class="paras">Let's learn about DOM concepts in detail.</p>
    <button>Click me!</button>

    <script src="sixth.js"></script> <!--Thus, written here, just before ending the body tag.-->
</body>
</html>
*/
// alert("Hello World!") //Temporarily, the execution of HTML5 and CSS elements stop.
// console.log(window) //Window object.
// window.console.log("Hello World.")
// window.alert("Hello!")
// POINT: When a web page is loaded, the browser creates a document object model (DOM) of the page. So, when the tab is created, theres a window object which has a document object inside which there are all the HTML5 elements like body etc. tree-like structure.
// console.log(window.document)
// console.dir(window.document)
// console.dir(document.body)
// console.dir(document.div)
// document.body.style.background="green" //DOM manipulation, dynamic changes.
// console.dir(document.getElementById("heading"))
// console.log(document.getElementsByClassName("paras")) //HTML collection, somewhat like an array.
// console.log(document.getElementsByTagName("p"))
// let firstTg=document.querySelector("p") //First instance with that tag.
// let allTg=document.querySelectorAll("p") //All instances with that tag.
// console.log(firstTg);console.log(allTg) //Node list (tree).
// console.log(document.querySelectorAll(".paras"))
// console.log(document.querySelector(".paras").tagName) //Attributes of query selector. BODY-> parent, div-> child, p/body/img-> sibling & DOM tree: text nodes, comment, elements.
// console.log(document.querySelector(".paras").firstChild)
// console.log(document.querySelector(".paras").children)
// console.log(document.querySelector(".paras").lastChild)
// console.log(document.querySelector(".paras").nextSibling) //Check more attributes below.

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
    <link rel="stylesheet" href="sixth.css">
</head>
<body>
    <div>
        <!-- <h3 style="visibility: hidden;">Fruits</h3> -->
        <h3>Fruits</h3>
        <ul>
            <li>Mango</li>
            <li>Orange</li>
            <li>Litchi</li>
        </ul>
    </div>
    <script src="sixth.js"></script>
</body>
</html>
*/
// let div=document.querySelector("div")
// console.log(div.innerText)
// console.log(div.tagName)
// console.log(div.innerHTML)
// // div.innerText="abcd"
// // div.innerHTML="<div>What's up?</div>"
// console.log(div.textContent) //Shows hidden content too.

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
</head>
<body>
    <h2>Hello Javascript.</h2>
    <script src="sixth.js"></script>
</body>
</html>
*/
// let h2=document.querySelector("h2")
// h2.innerText=h2.innerText+"from MSRIT students"

// let div=document.querySelectorAll(".box")
// div[0].innerText="DIV1"
// div[1].innerText="DIV2"
// div[2].innerText="DIV3"
// for(d of div){
//     console.log(d.innerText)
// }