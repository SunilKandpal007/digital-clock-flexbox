const Week = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

function digiClock(){
    let myTime = new Date();
    let myHours = myTime.getHours();
    let myMinutes = myTime.getMinutes();
    let mySeconds = myTime.getSeconds();
    let clockAmPm = "AM";
    let myWeek = myTime.getMonth();

    if(myHours == 0){
        myHours = 12;
    }
    if(myHours > 12){
        myHours = myHours - 12;
        clockAmPm = "PM";
    }

    myHours = (myHours < 10) ? "0" + myHours : myHours;
    myMinutes = (myMinutes < 10) ? "0" + myMinutes : myMinutes;
    mySeconds = (mySeconds < 10) ? "0" + mySeconds : mySeconds;

    let clockTime = myHours + ":" + myMinutes + ":" + mySeconds + " " + clockAmPm;

    document.getElementById("hours").innerHTML = myHours;
    document.getElementById("minutes").innerHTML = myMinutes;
    document.getElementById("seconds").innerHTML = mySeconds;
    document.getElementById("myampm").innerHTML = clockAmPm;

    document.getElementById("myDays").innerHTML = Week[myTime.getDay()];

    document.getElementById("top-h1").style.color = "#fff";

let t = setTimeout(function(){
    digiClock()
}, 1000);
}
digiClock();