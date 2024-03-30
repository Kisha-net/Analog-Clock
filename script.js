let second = 0;
let minute = 0;
let hour = 0;
let date = new Date();

setInterval(function () {
  day = new Date();
  second = day.getSeconds() * 6;
  minute = day.getMinutes() * 6;
  hour = day.getHours() * 30 + Math.round(minute / 12);
  document.getElementById("second-hand").style.transform =
    "rotate(" + second + "deg)";
  document.getElementById("minute-hand").style.transform =
    "rotate(" + minute + "deg)";
  document.getElementById("hour-hand").style.transform =
    "rotate(" + hour + "deg)";
}, 1000);
