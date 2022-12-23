var side=document.getElementById("nav");
var sideSw=document.getElementById("nav-sw");
side.addEventListener("click",(event)=>{
    // console.log(event.target.tagName);
    console.log(event.view.innerWidth);

    if(event.view.innerWidth>991){
        if(event.target.tagName === "UL" || event.target.tagName==="DIV"){
            if(side.classList.contains("close")){
                side.classList.remove("close");
                side.classList.add("open");
            }else{
                side.classList.add("close");
                side.classList.remove("open");
            }
        }
    }else{
        if(event.target.tagName === "UL" || event.target.tagName==="DIV"){
            side.classList.remove("open");
            side.classList.remove("close");
            if(side.classList.contains("closeTop")){
                side.classList.remove("closeTop");
                side.classList.add("openTop");
            }else{
                side.classList.add("closeTop");
                side.classList.remove("openTop");
            }
        }
    }
});
window.addEventListener("resize",(event)=>{
    console.log(event.target.innerWidth);
    if(event.target.innerWidth>991){
        side.classList.add("close");
        side.classList.remove("openTop");
        side.classList.remove("closeTop");
    }else{
        side.classList.add("closeTop");
        side.classList.remove("open");
        side.classList.remove("close");
    }
});

