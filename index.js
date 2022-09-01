const container=document.querySelector(".container")
const btn=document.querySelector("button")

let flag=true 

btn.addEventListener("click",()=>{
    if(flag==true){
        btn.textContent="Dark🌙"
        btn.style.backgroundColor="#00D7FF"
        btn.style.border="2px solid black"
        container.style.backgroundColor="#002B5B"
        container.style.transform="1s"
    }else if(flag==false){
        btn.textContent="Light🔆"
        btn.style.backgroundColor="rgb(255, 236, 202)"
        btn.style.border="2px solid red"
        container.style.backgroundColor="white"
        container.style.transform="1s"
    }
    flag=!flag
})