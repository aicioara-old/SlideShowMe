console.log('guest');

var socket = io('http://127.0.0.1:3000');

socket.on('yournumber', function(s) {
	console.log(s);
})