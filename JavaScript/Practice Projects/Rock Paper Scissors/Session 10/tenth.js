let us=0
let cs=0
let chbutt=document.querySelectorAll(".choices")
let verd=document.querySelector("#play")
let usb=document.querySelector("#user")
let csb=document.querySelector("#comp")

const pg=(ch)=>{
    let compch=["rock","paper","scissors"]
    let randno=Math.floor(Math.random()*3)
    let cch=compch[randno]
    console.log(cch)
    if(ch==="rock" && cch==="rock" || ch==="paper" && cch==="paper" || ch==="scissors" && cch==="scissors"){
        verd.innerText="DRAW! Retry.";
        verd.style.backgroundColor="grey"
    }
    else{
        if(ch==="rock" && cch==="paper"){cs+=1;verd.innerText="YOU LOST! Paper beats Rock.";csb.innerText=cs;verd.style.backgroundColor="red"}
        if(ch==="rock" && cch==="scissors"){us+=1;verd.innerText="YOU WON! Rock beats Scissors.";usb.innerText=us;verd.style.backgroundColor="lightgreen"}
        if(ch==="paper" && cch==="rock"){us+=1;verd.innerText="YOU WON! Rock beats Paper.";usb.innerText=cs;verd.style.backgroundColor="lightgreen"}
        if(ch==="paper" && cch==="scissors"){cs+=1;verd.innerText="YOU LOST! Scissors beats Paper.";csb.innerText=cs;verd.style.backgroundColor="red"}
        if(ch==="scissors" && cch==="paper"){us+=1;verd.innerText="YOU WON! Scissors beats Paper.";usb.innerText=cs;verd.style.backgroundColor="lightgreen"}
        if(ch==="scissors" && cch==="rock"){cs+=1;verd.innerText="YOU LOST! Rock beats Scissors.";csb.innerText=cs;verd.style.backgroundColor="red"}
    }
}

chbutt.forEach((butt)=>{
    butt.addEventListener("click",()=>{
        let ch=butt.id
        pg(ch)
    })
})