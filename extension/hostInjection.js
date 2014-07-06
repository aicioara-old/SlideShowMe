socket = io('http://10.0.0.36:3000');

socket.on('yournumber', function(s) {
	console.log(s);
})


window.onpopstate = function() {
	broadcastLink(window.location.href);
}


function broadcastLink(url) {
	socket.emit('mynumber', url)
}