let boxbutt=document.querySelectorAll(".box")
let resbutt=document.querySelector("#reset")
let drawturn=true
let winpatt=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let win=document.querySelector(".win")
const disable=()=>{
    boxbutt.forEach((box)=>{
    box.disabled=true;
    })
}

boxbutt.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(drawturn===true){
            box.innerText="X"
            drawturn=false
        }
        else{
            box.innerText="O"
            drawturn=true
        }
        box.disabled=true;
        checkwin();
    })
})

const checkwin=()=>{
    for(let patt of winpatt){
        let v1=boxbutt[patt[0]].innerText
        let v2=boxbutt[patt[1]].innerText
        let v3=boxbutt[patt[2]].innerText
        if(v1!="" && v2!="" && v3!=""){
            if(v1===v2 && v2===v3){
                win.innerText=`PLAYER '${v1}' WON!`
                win.classList.remove("hide")
                disable()
            }
        }
    }
}

resbutt.addEventListener("click",()=>{
    boxbutt.forEach((box)=>{
        box.innerText=''
        box.disabled=false;
        win.classList.add("hide")
    })
})