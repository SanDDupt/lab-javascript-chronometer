var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

//var  winTimerId

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (this.className == "btn start") {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "STOP";
    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
// if (-1 != winTimerId) {
//    window.clearInterval(winTimerId);
//    winTimerId = -1;
// }

}
  } 
  else {
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";
    btnRight.className = "btn reset";
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
//  
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {




});


/* update the 4 digits (10-minute, minute, 10-second and 1-second) of the Chronometer watchface
function updateClockDisplay() {

    var minD = chronometer.minutes.substr(0,1);

    var minU = chronometer.minutes.substr(1,1);

    var secD = chronometer.seconds.substr(0,1);

    var secU = chronometer.seconds.substr(1,1);

    minDec.innerHTML = minD;

    minUni.innerHTML = minU;

    secDec.innerHTML = secD;

    secUni.innerHTML = secU;

}
*/