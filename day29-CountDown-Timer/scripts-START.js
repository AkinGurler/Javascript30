
let countDown;
const timeLeft=document.querySelector(".display__time-left")
const endTimeHTML=document.querySelector(".display__end-time")
const buttons=document.querySelectorAll("[data-time]")



function timer (seconds) {
    /* clear any existing timer */
    clearInterval(countDown)

    const now=Date.now() /* get time on miliseconds format */
    const then=now+(seconds * 1000); /* finish time on miliseconds format */
    displayTimeLeft(seconds) /* to see the start time*/
    countDown=setInterval(()=>{ 
       
      const secondsLeft=Math.round((then-Date.now())/1000)
      /* stop statement */
      if(secondsLeft < 0){
        clearInterval(countDown)
        return;
      }
      /* display it */
      displayTimeLeft(secondsLeft)
     
    },1000)
    displayEndTime(then)
}

function displayTimeLeft(seconds) {
    const minutes=Math.floor(seconds/60);
    const hours=Math.floor(minutes/60)
    const remainderSeconds=seconds % 60;
    timeLeft.innerHTML=`${hours}:${minutes}:${remainderSeconds<10 ? '0' : '' }${remainderSeconds}`
    console.log(minutes);
}

function displayEndTime(timeStamp) {
    /*  */
    const end=new Date(timeStamp) /* timeStamp is endTime which is miliseconds format */
    const hours=end.getHours()/* take hours and minutes */
    const minutes=end.getMinutes();
    const endTime=`Be Back at ${hours}:${minutes}`;
     endTimeHTML.innerHTML=endTime
}
function startTimer(){
const seconds =parseInt(this.dataset.time);/* get Data from html */
timer(seconds)
}

buttons.forEach(button=>button.addEventListener('click',startTimer));

/* if form elements has a name you can call with their name */
document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const mins=this.minutes.value;
    const seconds=mins*60;
    timer(seconds)
})