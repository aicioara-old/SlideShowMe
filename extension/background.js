registredPages = {}

var socket = io('http://10.0.0.36:3000');
socket.on('yournumber', function(s) {
	console.log(s);
	for (var i in registredPages) {
		if (registredPages[i] === "guest") {
			console.log(i);
			// chrome.tabs.update(465, {url:"http://www.google.com"})
			chrome.tabs.update(parseInt(i), {url: s});
			console.log('andrei')
		}
	}

})


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo && changeInfo.status == "complete") {

    	// console.log('caught');
    	// console.log("TabID " + tabId);
    	// console.log("Registred pages of TabID " +  registredPages[tabId])

    	if (registredPages[tabId] === "host") {

    		socket.emit('mynumber', tab.url);

    		// console.log("Andrei" + tab.url);

    		// console.log("host");

			chrome.browserAction.setIcon({
				path: "icons/icon_green.png",
				tabId: tabId
			}, function() {
			});

    	} else if (registredPages[tabId] === "guest") {
    		// console.log("guest");

			chrome.browserAction.setIcon({
				path: "icons/icon_blue.png",
				tabId: tabId
			}, function() {

			});

    	}
    }
});
