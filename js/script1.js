var side=document.getElementById("nav");
var sideSw=document.getElementById("nav-sw");
side.addEventListener("click",()=>{
    if(side.classList.contains("close")){
        side.classList.remove("close");
        side.classList.add("open");
    }else{
        side.classList.add("close");
        side.classList.remove("open");
    }
});