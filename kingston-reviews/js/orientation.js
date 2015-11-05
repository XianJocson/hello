function readDeviceOrientation() {
	
	if (Math.abs(window.orientation) === 90) {
		document.getElementById("flagScreenSize").style.height = "45%";
		document.getElementById("flagHeader").innerHTML = "Ireland";
		
		document.getElementById("topLeftFlag").style.backgroundColor = "green";
		document.getElementById("topMidFlag").style.backgroundColor = "white";
		document.getElementById("topRightFlag").style.backgroundColor = "orange";
		
		document.getElementById("midLeftFlag").style.backgroundColor = "green";
		document.getElementById("midMidFlag").style.backgroundColor = "white";
		document.getElementById("midRightFlag").style.backgroundColor = "orange";
		
		document.getElementById("lowLeftFlag").style.backgroundColor = "green";
		document.getElementById("lowMidFlag").style.backgroundColor = "white";
		document.getElementById("lowRightFlag").style.backgroundColor = "orange";
		
	} else {
		
		document.getElementById("flagScreenSize").style.height = "65%";
		document.getElementById("flagHeader").innerHTML = "Netherlands";
		
		document.getElementById("topLeftFlag").style.backgroundColor = "red";
		document.getElementById("topMidFlag").style.backgroundColor = "red";
		document.getElementById("topRightFlag").style.backgroundColor = "red";
		
		document.getElementById("midLeftFlag").style.backgroundColor = "white";
		document.getElementById("midMidFlag").style.backgroundColor = "white";
		document.getElementById("midRightFlag").style.backgroundColor = "white";
		
		document.getElementById("lowLeftFlag").style.backgroundColor = "blue";
		document.getElementById("lowMidFlag").style.backgroundColor = "blue";
		document.getElementById("lowRightFlag").style.backgroundColor = "blue";
	}
}

window.onorientationchange = readDeviceOrientation ;
window.onload = readDeviceOrientation ;