console.log('host');

var number = 0;

var socket = io('http://127.0.0.1:3000');

var handler = setInterval(function() {
	socket.emit('mynumber', "Hello World " + number);
	number++;
}, 1000)

socket.on('yournumber', function(s) {
	console.log(s);
})
