registredPages = {};

function registerPageAsHost(tabId) {
	registredPages[tabId] = "host"
}

function registerPageAsGuest(tabId) {
	registredPages[tabId] = "guest"
}

var socket = io('http://10.0.0.36:3000');

socket.on('linkBroadcast', function(link) {
	for (var tabId in registredPages) {
		if (registredPages[tabId] === "guest") {
			chrome.tabs.update(parseInt(tabId), {url: link});
		}
	}
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo && changeInfo.status == "complete") {

    	if (registredPages[tabId] === "host") {
    		socket.emit('hostRequest', tab.url);

			chrome.browserAction.setIcon({
				path: "icons/icon_green.png",
				tabId: tabId
			}, function() {});

    	} else if (registredPages[tabId] === "guest") {
			chrome.browserAction.setIcon({
				path: "icons/icon_blue.png",
				tabId: tabId
			}, function() {});
    	}
    }
});
