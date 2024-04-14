const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");
const timer=document.getElementById("timer");

let interval;
let timeleft=3600;

function update(){
    let minutes =Math.floor(timeleft/60);
    let seconds =timeleft%60;
    let formattedTime=minutes+":"+seconds;

    timer.innerHTML=formattedTime;
}

function starttimer(){

   interval=setInterval(()=>{
   timeleft--;
    update();
    if(timeleft===0){
        var s=new Audio("alarmsound.wav");
        s.play();
        clearInterval(interval);
        timeleft=3600;
        update();
        stoptimer();
    }
},1000)
}

function stoptimer(){
    clearInterval(interval);
}

function resettimer(){
    clearInterval(interval);
    timeleft=10;
    update();
    stoptimer();
}

start.addEventListener("click",function(event){
starttimer();
start.removeEventListener("click",arguments.callee);           //removes event listener after the click


setTimeout(function() {
    start.addEventListener("click", starttimer);
}, 10000);
}
);

stop.addEventListener("click",stoptimer);
reset.addEventListener("click",resettimer);



