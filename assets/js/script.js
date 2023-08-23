const hoursHand = document.getElementsByClassName("hours")[0];
const minutesHand = document.getElementsByClassName("minutes")[0];
const secondsHand = document.getElementsByClassName("seconds")[0];
function analogClock()
{
    const date = new Date();
    const seconds = date.getSeconds() ;
    const minutes = date.getMinutes() ;
    const hours  = date.getHours() ;
    console.log("Seconds: "+date.getSeconds());
    console.log("Minutes: "+date.getMinutes());
    console.log("Hours: "+date.getHours());
    handsRotate(seconds,secondsHand);
    handsRotate(minutes,minutesHand);
    handsRotate(hours,hoursHand);
}
function handsRotate(degre,element)
{
    if(element == secondsHand)
    {
        degre*=6;
        element.style.rotate = degre+"deg";
    }
    else if(element == minutesHand)
    {
        degre*=6;
        element.style.rotate = degre+"deg";
    }
    else{
        degre%=12;
        degre*=30;
        element.style.rotate = degre+"deg";
    }
}

analogClock();
setInterval(analogClock,1000);