var display = document.getElementById("display-area");
var timer;
var started = false;
var startTime = 0;

document.getElementById("toggle-button").addEventListener("click", toggle);

document.getElementById("reset-button").addEventListener("click", function() {
	
	if (started == true) {
		startTime = new Date().getTime();
	} else {
		display.innerHTML = "00:00:00:000";
		startTime = 0;
	}
})


function toggle() {
	if (started == false) {
		started = true;
		if (startTime == 0) {
			startTime = new Date().getTime();
		} else {
			startTime = new Date().getTime() - startTime;
		}
		timer = window.setInterval(updateTime, 1);
	} else {
		started = false;
		startTime = new Date().getTime() - startTime;
		window.clearInterval(timer)
	}
}


function updateTime() {
	var time = new Date().getTime() - startTime;
	var hours = Math.floor(time/3600000);
	time = time%3600000;
	var minutes = Math.floor(time/60000);
	time = time%60000;
	var seconds = Math.floor(time/1000)
	var ms = time%1000;
	display.innerHTML = pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + ":" + pad(ms, 3);
}


function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
