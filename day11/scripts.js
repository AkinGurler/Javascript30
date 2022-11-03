/* Get elements */
const player=document.querySelector(".player")
const video=player.querySelector(".viewer")
const progress=player.querySelector(".progress");
const progressBar=player.querySelector(".progress__filled")
const toggle=player.querySelector(".toggle")
const skipButtons=player.querySelectorAll("[data-skip]");
const ranges=player.querySelectorAll(".player__slider");
const fullScreen=player.querySelector(".fullscreen_button")

/* Build functions */
function togglePlay(){
    if(video.paused){
        video.play()
        video.classList.remove("video_paused")
    }else{
        video.pause();
        video.classList.add("video_paused")
    }
}
function updateButton(){
    const icon=this.paused ? "▶️" :"⏹️";
    toggle.textContent=icon;
}
function skip(){
    console.log(this.dataset.skip)
    video.currentTime+=parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
    /* this.name will turn volume or playBackrate  */
    video[this.name]=this.value  
}

function handleProgress(){
    /* we have to calculate the time as a percentage  */
    const percent=(video.currentTime/video.duration)*100
    progressBar.style.flexBasis=`${percent}%`  
}
function scrub(e){
    console.log(e)
    const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration
    video.currentTime=scrubTime;
}
function makeFullScreen(){
    
    video.requestFullscreen();
}

/* Hook up the event listeners */
video.addEventListener("click",togglePlay)
video.addEventListener("play",updateButton)
video.addEventListener("pause",updateButton)
/* it will work when the current time changing */
video.addEventListener("timeupdate",handleProgress)
toggle.addEventListener("click",togglePlay)
skipButtons.forEach(button=>button.addEventListener("click",skip))
ranges.forEach(range=>range.addEventListener("change",handleRangeUpdate))
progress.addEventListener("click",scrub)
console.log("fullscreen",fullScreen)
fullScreen.addEventListener("click",makeFullScreen)


/* We make the change without stopping to click*/
/* ranges.forEach(range=>range.addEventListener("mousemove",handleRangeUpdate)) */