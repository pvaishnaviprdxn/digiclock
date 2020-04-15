function presentTime(){
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    hours = updateT(hours);
    mins = updateT(mins);
    secs = updateT(secs);
    document.getElementById("digiclock").innerHTML= hours+" : "+mins+" : "+secs;
    var time = setTimeout(function(){presentTime()}, 1000);
}
//function to display single digit as 2 digits eg: 02;
function updateT(j) {
    if (j < 10) {
        return "0" + j;
    }
    else {
        return j;
    }
}
presentTime();