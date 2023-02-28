let aside=document.getElementById("aside");
let aside_toggle=document.getElementById("aside-toggle");

function Open_Aside(event){
    console.log(event.target);
}
function Close_Aside(event){
    console.log(event.target);
}
aside_toggle.addEventListener("click",()=>{
    console.log(aside.classList.contains("open-aside"));
    console.log(aside.classList.contains("close-aside"));
    if (aside.classList.contains("open-aside")){
        aside.classList.remove("open-aside")
        aside.classList.add("close-aside")
    }else{
        aside.classList.add("open-aside")
        aside.classList.remove("close-aside")
    }
});