bind();

function bind() {
	var hostId = $("#host-id");
	var hostButton = $("#host-button");
	hostId.val("12345245235475");
	hostId.click(function() {
		this.select();
	});

	hostId.keydown(function(e) {
		if (e.keyCode == 67 && e.ctrlKey) {
			onHostSelected();
		}
	});
	hostButton.click(function() {
		onHostSelected();
	});

	var guestId = $('#guest-id');
	var guestButton = $('#guest-button');

	guestButton.click(function() {
		onGuestSelected();
	});
}


onGuestSelected = function() {

	getCurrentTab(function(tabId) {
		chrome.browserAction.setIcon({
			path: "icons/icon_blue.png",
			tabId: tabId
		}, function() {

			var bg = chrome.extension.getBackgroundPage();
			bg.registerPageAsGuest(tabId);

			window.close();
		});
	});
}

onHostSelected = function() {

	getCurrentTab(function(tabId) {
		chrome.browserAction.setIcon({
			path: "icons/icon_green.png",
			tabId: tabId
		}, function() {

			var bg = chrome.extension.getBackgroundPage();
			bg.registerPageAsHost(tabId);

			window.close();
		});
	});
}

function getCurrentTab(callback) {
	chrome.tabs.getSelected(null, function(tab) {
		callback(tab.id);
	});
}
