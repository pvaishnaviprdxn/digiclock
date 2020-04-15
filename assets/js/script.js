function presentTime(){
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    hours = updateT(hours);
    mins = updateM(mins);
    secs = updateS(secs);
    document.getElementById("digiclock").innerHTML= hours+" : "+mins+" : "+secs;
}