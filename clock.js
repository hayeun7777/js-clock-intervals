document.addEventListener("DOMContentLoaded", function(){
});

setInterval(function(clockPlay){
   // console.log("TICK!");
var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

var hrMove = hr / 12 * 360  + ((min / 60 * 360 ) / 12);
var minMove = (min / 60 * 360 ) + (sec / 60 * 360 ) / 60; 
var secMove = sec / 60 * 360 ;

var hourHand = document.querySelector("#hour"); 
hourHand.style.transform = "rotate(" + hrMove + "deg)";
var minuteHand = document.querySelector("#minute");
minuteHand.style.transform = "rotate(" + minMove + "deg)";
var secondHand = document.querySelector("#second");
secondHand.style.transform = "rotate(" + secMove + "deg)";
}, 1000);
