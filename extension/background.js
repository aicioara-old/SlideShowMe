registredPages = {}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo && changeInfo.status == "complete") {

    	if (registredPages[tabId] === "host") {
    		console.log("host");

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
    		console.log("guest");

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
