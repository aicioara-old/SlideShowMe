chrome.tabs.executeScript(null, {
	file: 'injection.js'
});

var hostId = document.getElementById('host-id');
hostId.value = "12345245235475";
hostId.onclick = function() {
	this.select();
}


var guestId = document.getElementById('guest-id');
var guestButton = document.getElementById('guest-button');

guestButton.onclick = function() {
	window.close();
}