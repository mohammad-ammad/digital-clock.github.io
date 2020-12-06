console.log('wall clock ');

function updateClock(){
    let currentTime = new Date();
    // console.log(currentTime);
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    let timeOfDay = (currentHour < 12) ? "AM" : "PM";
    
    //converting 
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;
    currentHour = (currentHour < 10 ? "0": "") + currentHour;
    currentMinute = (currentMinute < 10 ? "0": "") + currentMinute;
    currentSecond = (currentSecond < 10 ? "0": "") + currentSecond;
    let currentTimeStr = currentHour + ":" + currentMinute + ":" +currentSecond + " " + timeOfDay ;
    document.getElementById('clock').innerHTML = currentTimeStr;
}