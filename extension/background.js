registredPages = {}

var socket = io('http://10.0.0.36:3000');
socket.on('yournumber', function(s) {
	console.log(s);
	for (var i in registredPages) {
		if (registredPages[i] === "guest") {
			console.log(i);
			chrome.tabs.update(1, {url: "http://www.google.com"});
		}
	}

})


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo && changeInfo.status == "complete") {

    	// console.log('caught');
    	// console.log("TabID " + tabId);
    	// console.log("Registred pages of TabID " +  registredPages[tabId])

    	if (registredPages[tabId] === "host") {
    		// console.log("host");

			chrome.browserAction.setIcon({
				path: "icons/icon_green.png",
				tabId: tabId
			}, function() {
				chrome.tabs.executeScript(null, {
					file: 'vendor/socket.io-1.0.6.js'
				});
				chrome.tabs.executeScript(null, {
					file: 'hostInjection.js'
				});
			});

    	} else if (registredPages[tabId] === "guest") {
    		// console.log("guest");

			chrome.browserAction.setIcon({
				path: "icons/icon_blue.png",
				tabId: tabId
			}, function() {
				chrome.tabs.executeScript(null, {
					file: 'vendor/socket.io-1.0.6.js'
				});
				chrome.tabs.executeScript(null, {
					file: 'guestInjection.js'
				});

			});

    	}
    }
});
