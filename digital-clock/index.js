const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const ampm = document.querySelector(".ampm") 


let count=0
function digitalClock() {

    let clock = new Date();
    let h = clock.getHours();
    let m = clock.getMinutes();
    let s = clock.getSeconds();
    let pm = "AM"

    if (h >= 12){
        pm = "PM"
    }

    if (s >= 10){
        seconds.innerHTML = s;
    }else {
        seconds.innerHTML =`0${s}`;
    };


    if (m >= 10){
        minutes.innerHTML = m;
    }else {
        minutes.innerHTML =`0${m}`;
    };

    if(h >= 12){
        h = h-12;
        h = `0${h}`
    }
    
    if (h <= 10){
        hours.innerHTML = h;
    }else {
        hours.innerHTML =`0${h}`;
    };





    
    console.log("Hello There " + count++ , h, m , s);


    hours.innerHTML = h;
    ampm.innerHTML = pm;

};

setInterval(()=>{
    digitalClock();
},1000)