function renderTime() {
    var currentDate = new Date();
    var diem = "AM";
    //console.log("date", currentDate);
    //get hours,minutes and seconds
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();

    //console.log(hour, minute, second);

    if (hour == 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
        diem = "PM";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }

    document.getElementById("hr").innerHTML = hour;
    document.getElementById("min").innerHTML = minute;
    document.getElementById("sec").innerHTML = second;
    document.getElementById("diem").innerHTML = diem;
}
setInterval(renderTime, 1);