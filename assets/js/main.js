let aside=document.getElementById("aside");

function Open_Aside(event){
    console.log(event.target);
}
function Close_Aside(event){
    console.log(event.target);
}
aside.addEventListener("click",(event)=>{
    console.log(event.target.classList.contains("open-aside"));
    console.log(event.target.classList.contains("close-aside"));
    if (event.target.classList.contains("open-aside")){
        event.target.classList.remove("open-aside")
        event.target.classList.add("close-aside")
    }else{
        event.target.classList.add("open-aside")
        event.target.classList.remove("close-aside")
    }
});