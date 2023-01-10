var side=document.getElementById("nav");
var sideSw=document.getElementById("nav-sw");

const frame=document.getElementById("frame");

const HomePage=document.getElementById("HomePage");
const userPanel=document.getElementById("userPanel");
const PlayLists=document.getElementById("PlayLists");
const groupType=document.getElementById("groupType");
const newSongs=document.getElementById("newSongs");
const mostVisit=document.getElementById("mostVisit");
const stranger=document.getElementById("stranger");
const remix=document.getElementById("remix");
const padcast=document.getElementById("padcast");
const singers=document.getElementById("singers");
const adminfavorite=document.getElementById("adminfavorite");

frame.setAttribute("src","/pages/PLayLists.html");


side.addEventListener("click",(event)=>{
    // console.log(event.target.tagName);
    // console.log(event.view.innerWidth);

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
    // console.log(event.target.innerWidth);
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

HomePage.addEventListener("click",()=>{
    frame.setAttribute("src","/pages/Main.html");
});

PlayLists.addEventListener("click",()=>{
    frame.setAttribute("src","/pages/PlayLists.html");
});

let progressCon=document.getElementById("progress-container");
let progress=document.getElementById("progress");

progressCon.addEventListener("click",(e)=>{
    console.log(e);
    console.log(progressCon.style);
    let width=(100*e.offsetX)/350;
    progress.setAttribute("style",`width:${width}%`);
});
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = Music.duration;
  
    Music.currentTime = (clickX / width) * duration;
  }

