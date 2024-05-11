
// setInterval(myFun,1000);
// function myFun(){
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     let times= document.getElementById('time').innerHTML = time;
// }

setInterval (()=>{
    let time = document.getElementById("time");
let date = new Date();
let hours = date . getHours();
let minutes = date. getMinutes();
let seconds = date.getSeconds();
let Day_Night = "AM";

if (hours > 12){
    Day_Night = "PM"
    hours = hours - 12;
}
if (hours < 10){
    hours = "0" + hours;
}
if (minutes < 10){
    minutes = "0" + minutes;
}
if (seconds < 10){
    seconds = "0" + seconds;
}

time.textContent = hours + ':' + minutes + ':' + seconds + ' ' +Day_Night;
})