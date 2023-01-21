var side=document.getElementById("nav");

side.addEventListener("click",(event)=>{
    if(event.target.tagName === "UL" || event.target.tagName==="DIV"){
        if(side.classList.contains("close")){
            side.classList.remove("close");
            side.classList.add("open");
        }else{
            side.classList.add("close");
            side.classList.remove("open");
        }
    }
});
