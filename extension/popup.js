chrome.tabs.executeScript(null, {
	file: 'injection.js'
});

var hostId = $("#host-id");
hostId.val("12345245235475");
hostId.click(function() {
	this.select();
});


var guestId = $('#guest-id');
var guestButton = $('#guest-button');

guestButton.click(function() {
	window.close();
});