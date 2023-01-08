var side=document.getElementById("nav");
var sideSw=document.getElementById("nav-sw");

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