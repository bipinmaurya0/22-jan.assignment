const startingMinutes=5;

let time=startingMinutes * 60;

const countdownEl=document.getElementById('countdown');

setInterval(updateCountdown, 1000)
 function updateCountdown(){
      
    const mintues=Math.floor(time /60);

    let seconds =time % 60;

    seconds=seconds < 5 ? '0' + seconds :seconds;

    countdownEl.innerHTML=`${mintues}: ${seconds}`;
    time--;
 }