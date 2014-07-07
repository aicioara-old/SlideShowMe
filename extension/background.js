registredPages = {}

var socket = io('http://10.0.0.36:3000');

socket.on('yournumber', function(s) {
	for (var i in registredPages) {
		if (registredPages[i] === "guest") {
			chrome.tabs.update(parseInt(i), {url: s});
		}
	}
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo && changeInfo.status == "complete") {

    	if (registredPages[tabId] === "host") {
    		socket.emit('mynumber', tab.url);

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
